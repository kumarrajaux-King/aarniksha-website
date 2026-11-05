/* Simulated backend for the prototype. Everything persists in localStorage so the
   employee side and the admin panel see the same data. See HANDOFF.md for the real schema. */
(function () {
  const KEY = 'ak-portal-v2';
  const pad = (n) => String(n).padStart(2, '0');
  const iso = (d) => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  const parse = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
  const today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
  const todayIso = () => iso(today());
  const isWeekend = (d) => d.getDay() === 0 || d.getDay() === 6;
  const rnd = (s) => { const x = Math.sin(s * 12.9898) * 43758.5453; return x - Math.floor(x); };
  const nowHM = () => { const d = new Date(); return pad(d.getHours()) + ':' + pad(d.getMinutes()); };
  const uid = (p) => p + Date.now().toString(36).slice(-4) + Math.random().toString(36).slice(2, 6);
  const mins = (hm) => { const [h, m] = hm.split(':').map(Number); return h * 60 + m; };

  const ROLES = { employee: 'Employee', manager: 'Team manager', hr_admin: 'HR admin', super_admin: 'Super admin' };
  const LEAVE_TYPES = { CL: 'Casual leave', SL: 'Sick leave', EL: 'Earned leave' };
  const DEPTS = ['Leadership', 'Recruitment', 'HR & Operations', 'Payroll & Compliance', 'Business Development', 'IT Services'];
  const LATE_AFTER = '09:45';

  const HOLIDAYS_2026 = [
    ['2026-01-14', 'Bhogi', 'Festival'], ['2026-01-15', 'Sankranti / Pongal', 'Festival'], ['2026-01-26', 'Republic Day', 'National'],
    ['2026-02-15', 'Maha Shivaratri', 'Festival'], ['2026-03-03', 'Holi', 'Festival'], ['2026-03-19', 'Ugadi', 'Telangana'],
    ['2026-03-21', 'Eid-ul-Fitr (Ramzan)', 'Festival'], ['2026-03-22', 'Following day of Ramzan', 'Festival'], ['2026-03-27', 'Sri Rama Navami', 'Festival'],
    ['2026-04-03', 'Good Friday', 'Festival'], ['2026-04-05', 'Babu Jagjivan Ram Jayanti', 'Telangana'], ['2026-04-14', 'Dr. B.R. Ambedkar Jayanti', 'National'],
    ['2026-05-27', 'Eid-ul-Azha (Bakrid)', 'Festival'], ['2026-06-26', 'Muharram (10th Moharam)', 'Festival'], ['2026-08-10', 'Bonalu', 'Telangana'],
    ['2026-08-15', 'Independence Day', 'National'], ['2026-08-26', 'Eid Milad-un-Nabi', 'Festival'], ['2026-09-04', 'Sri Krishna Ashtami', 'Festival'],
    ['2026-09-14', 'Vinayaka Chavithi', 'Festival'], ['2026-10-02', 'Mahatma Gandhi Jayanti', 'National'], ['2026-10-18', 'Saddula Bathukamma', 'Telangana'],
    ['2026-10-20', 'Vijaya Dasami / Dussehra', 'Festival'], ['2026-10-21', 'Day after Vijaya Dasami', 'Festival'], ['2026-11-08', 'Deepavali', 'Festival'],
    ['2026-11-24', 'Kartika Purnima / Guru Nanak Jayanti', 'Festival'], ['2026-12-25', 'Christmas', 'Festival'], ['2026-12-26', 'Boxing Day', 'Festival'],
    ['2027-01-26', 'Republic Day', 'National'],
  ];
  const GREETINGS = {
    Deepavali: 'May the festival of lights bring warmth, health and prosperity to you and everyone at home.',
    'Vijaya Dasami / Dussehra': 'May this Dasara bring new beginnings and the strength to achieve everything you set out to do.',
    Christmas: 'Wishing you a peaceful Christmas and a bright new year with the people you love.',
    'Saddula Bathukamma': 'Celebrating Telangana\u2019s festival of flowers with you and your family.',
    Bonalu: 'Wishing you and your family a happy and blessed Bonalu.',
  };

  let S = null;
  const listeners = new Set();
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
  const emit = () => { save(); listeners.forEach((fn) => fn()); };

  const holidayOn = (st, date) => st.holidays.find((h) => h.date === date);
  const isWorking = (st, d) => !isWeekend(d) && !holidayOn(st, iso(d));
  const workingDays = (st, from, to) => { let n = 0; for (let d = parse(from); d <= parse(to); d = addDays(d, 1)) if (isWorking(st, d)) n++; return n; };
  const nextWorking = (st, date) => { let d = addDays(parse(date), 1); while (!isWorking(st, d)) d = addDays(d, 1); return iso(d); };
  const user = (id) => S.users.find((u) => u.id === id);
  const admins = () => S.users.filter((u) => u.status === 'active' && (u.role === 'hr_admin' || u.role === 'super_admin'));
  const fmtDate = (s, o) => parse(s).toLocaleDateString('en-IN', o || { day: 'numeric', month: 'short', year: 'numeric' });

  function notify(userId, title, body, link) {
    S.notifications.unshift({ id: uid('n'), userId, title, body, link, at: new Date().toISOString(), read: false });
  }
  function email(type, u, data, trigger) {
    if (!u) return;
    S.outbox.unshift({ id: uid('m'), type, to: u.email, toName: u.name, subject: AKEmail.subject(type, data), data, trigger, at: new Date().toISOString() });
  }
  function broadcast(type, data, trigger, recipients) {
    S.outbox.unshift({ id: uid('m'), type, to: 'all-staff@aarnikshasolutions.com', toName: 'All employees (' + recipients + ')', subject: AKEmail.subject(type, data), data, trigger, at: new Date().toISOString() });
  }

  function monthStats(st, userId, y, m) {
    const u = st.users.find((x) => x.id === userId);
    const rec = st.attendance[userId] || {};
    const t = today();
    const r = { present: 0, wfh: 0, leave: 0, absent: 0, late: 0, holidays: 0, workingDays: 0, hours: 0, hourDays: 0 };
    const last = new Date(y, m + 1, 0).getDate();
    for (let day = 1; day <= last; day++) {
      const d = new Date(y, m, day);
      const k = iso(d);
      if (isWeekend(d)) continue;
      if (holidayOn(st, k)) { r.holidays++; continue; }
      r.workingDays++;
      const a = rec[k];
      if (a && a.status === 'leave') { r.leave++; continue; }
      if (d > t) continue;
      if (a && a.in) {
        a.status === 'wfh' ? r.wfh++ : r.present++;
        if (mins(a.in) > mins(LATE_AFTER)) r.late++;
        if (a.out) { r.hours += (mins(a.out) - mins(a.in)) / 60; r.hourDays++; }
      } else if (d < t && (!u || !u.joined || k >= u.joined)) r.absent++;
    }
    r.avgHours = r.hourDays ? (r.hours / r.hourDays).toFixed(1) + 'h' : '—';
    return r;
  }

  function seed() {
    const t = today();
    const st = { version: 1, session: null, users: [], attendance: {}, leaves: [], corrections: [], tasks: [], goals: [], assessments: {}, holidays: [], notifications: [], outbox: [] };
    st.holidays = HOLIDAYS_2026.map(([date, name, type], i) => ({ id: 'h' + i, date, name, type, greetingSent: date < iso(t) && type !== 'National' }));
    const bal = (cl, sl, el) => ({ CL: { total: 12, used: cl }, SL: { total: 8, used: sl }, EL: { total: 15, used: el } });
    const U = (id, name, role, designation, dept, managerId, status, empId, phone, extra) => Object.assign({
      id, name, role, designation, dept, managerId, status, empId, phone,
      email: name.toLowerCase().split(' ')[0] + '.' + name.toLowerCase().split(' ').slice(-1)[0] + '@aarnikshasolutions.com',
      joined: '2025-04-01', location: 'Hi-Tech City, Hyderabad', leave: bal(3, 1, 2),
    }, extra || {});
    st.users = [
      U('u1', 'Arjun Laknepally', 'super_admin', 'Director', 'Leadership', null, 'active', 'AKS-001', '9848011001', { joined: '2024-06-01', leave: bal(2, 0, 1) }),
      U('u2', 'Sneha Rampalli', 'super_admin', 'Director', 'Leadership', null, 'active', 'AKS-002', '9848011002', { joined: '2024-06-01', leave: bal(1, 1, 3) }),
      U('u3', 'Kavya Reddy', 'hr_admin', 'HR Manager', 'HR & Operations', 'u2', 'active', 'AKS-004', '9848011004', { joined: '2024-09-02' }),
      U('u4', 'Rahul Varma', 'manager', 'Team Lead, IT Recruitment', 'Recruitment', 'u1', 'active', 'AKS-007', '9848011007', { joined: '2024-11-04', leave: bal(4, 2, 3) }),
      U('u5', 'Priya Sharma', 'employee', 'Senior Recruiter', 'Recruitment', 'u4', 'active', 'AKS-012', '9848011012', { leave: bal(4, 1, 2) }),
      U('u6', 'Mohammed Irfan', 'employee', 'Technical Recruiter', 'Recruitment', 'u4', 'active', 'AKS-015', '9848011015', { joined: '2025-07-14', leave: bal(2, 2, 0) }),
      U('u7', 'Ananya Rao', 'employee', 'Recruitment Associate', 'Recruitment', 'u4', 'active', 'AKS-018', '9848011018', { joined: iso(new Date(t.getFullYear(), t.getMonth() - 1, 3)), leave: bal(0, 0, 0) }),
      U('u8', 'Sai Kiran Goud', 'employee', 'Payroll Executive', 'Payroll & Compliance', 'u3', 'active', 'AKS-021', '9848011021', { leave: bal(5, 2, 4) }),
      U('u9', 'Divya Menon', 'employee', 'Business Development Executive', 'Business Development', 'u1', 'suspended', 'AKS-023', '9848011023', { suspendedReason: 'Pending document verification' }),
      U('u10', 'Vamshi Krishna', 'employee', 'Recruitment Associate', 'Recruitment', null, 'pending', null, '9848011030', { joined: null, requestedAt: iso(addDays(t, -1)) }),
      U('u11', 'Nikhita Jain', 'employee', 'HR Executive', 'HR & Operations', null, 'pending', null, '9848011031', { joined: null, requestedAt: iso(addDays(t, -3)) }),
      U('u12', 'Portal Admin', 'super_admin', 'Administrator', 'Leadership', null, 'active', 'AKS-030', '8688049002', { email: 'admin@aarnikshasolutions.com', joined: '2024-06-01', leave: bal(0, 0, 0) }),
    ];

    const prevStart = new Date(t.getFullYear(), t.getMonth() - 1, 1);
    st.users.filter((u) => u.status !== 'pending').forEach((u, ui) => {
      const rec = (st.attendance[u.id] = {});
      for (let d = new Date(prevStart); d < t; d = addDays(d, 1)) {
        const k = iso(d);
        if (!isWorking(st, d) || (u.joined && k < u.joined)) continue;
        if (u.status === 'suspended' && d > addDays(t, -12)) continue;
        const r = rnd((ui + 1) * 997 + d.getTime() / 864e5);
        if (r < 0.03) continue;
        const wfh = r > 0.88;
        const inM = 9 * 60 + 12 + Math.floor(rnd(r * 31 + ui) * 42);
        const outM = 18 * 60 + 18 + Math.floor(rnd(r * 17 + ui) * 50);
        rec[k] = { status: wfh ? 'wfh' : 'present', in: pad(Math.floor(inM / 60)) + ':' + pad(inM % 60), out: pad(Math.floor(outM / 60)) + ':' + pad(outM % 60) };
      }
    });
    const todayWorking = isWorking(st, t);
    if (todayWorking) {
      [['u1', '09:21', 'present'], ['u2', '09:40', 'present'], ['u3', '09:18', 'present'], ['u4', '09:26', 'present'], ['u6', '09:52', 'wfh'], ['u8', '09:34', 'present']]
        .forEach(([id, tin, s]) => { st.attendance[id][iso(t)] = { status: s, in: tin, out: null }; });
    }
    const weekdaysIn = (y, m) => { const out = []; for (let d = new Date(y, m, 1); d.getMonth() === m; d = addDays(d, 1)) if (isWorking(st, d)) out.push(iso(d)); return out; };
    const pw = weekdaysIn(prevStart.getFullYear(), prevStart.getMonth());
    const mkLeave = (o) => { const l = Object.assign({ id: uid('l'), appliedAt: o.from, note: '' }, o); l.days = workingDays(st, l.from, l.to); st.leaves.push(l); if (l.status === 'approved') for (let d = parse(l.from); d <= parse(l.to); d = addDays(d, 1)) if (isWorking(st, d)) st.attendance[l.userId][iso(d)] = { status: 'leave', type: l.type }; return l; };
    mkLeave({ userId: 'u5', type: 'CL', from: pw[8], to: pw[9], reason: 'Family function in Warangal', status: 'approved', approverId: 'u4', decidedAt: pw[6], note: 'Enjoy the function!' });
    let ad = t; while (!isWorking(st, ad)) ad = addDays(ad, 1);
    mkLeave({ userId: 'u7', type: 'SL', from: iso(ad), to: nextWorking(st, iso(ad)), reason: 'Fever — doctor advised rest', status: 'approved', approverId: 'u4', decidedAt: iso(ad) });
    let nw = addDays(t, 7); while (!isWorking(st, nw)) nw = addDays(nw, 1);
    let nw2 = nw; for (let i = 0; i < 2; i++) nw2 = parse(nextWorking(st, iso(nw2)));
    mkLeave({ userId: 'u6', type: 'EL', from: iso(nw), to: iso(nw2), reason: 'Travelling home to Kurnool for a family wedding', status: 'pending', approverId: 'u4', appliedAt: iso(addDays(t, -1)) });
    let sl = addDays(t, 12); while (!isWorking(st, sl)) sl = addDays(sl, 1);
    mkLeave({ userId: 'u8', type: 'CL', from: iso(sl), to: iso(sl), reason: 'Bank and passport appointment', status: 'pending', approverId: 'u3', appliedAt: todayIso() });

    let mp = addDays(t, -3); while (!isWorking(st, mp)) mp = addDays(mp, -1);
    st.attendance.u5[iso(mp)] = { status: 'present', in: '09:36', out: null };
    let mp2 = addDays(t, -2); while (!isWorking(st, mp2)) mp2 = addDays(mp2, -1);
    st.attendance.u6[iso(mp2)] = { status: 'present', in: '09:41', out: null };
    st.corrections.push({ id: uid('c'), userId: 'u6', date: iso(mp2), in: '09:41', out: '18:47', reason: 'Forgot to check out — was on a client call till 6:45 pm', status: 'pending', at: iso(addDays(t, -1)) });

    const due = (n) => iso(addDays(t, n));
    const task = (assigneeId, byId, title, desc, d, priority, status) => st.tasks.push({ id: uid('t'), assigneeId, byId, title, desc, due: due(d), priority, status, createdAt: due(-5) });
    task('u5', 'u4', 'Shortlist 5 Java developers for TechNova', 'Senior Java/Spring Boot, 6–9 yrs, Hyderabad hybrid. Share profiles in the tracker with notice periods.', 0, 'High', 'in_progress');
    task('u5', 'u4', 'Schedule client interviews — Fintrix Bank', 'Three candidates for the risk analyst role. Coordinate slots for Thursday or Friday.', 1, 'High', 'todo');
    task('u5', 'u4', 'Reference checks for two selected candidates', 'Use the standard reference form; two referees each.', 3, 'Medium', 'todo');
    task('u5', 'u4', 'Update candidate tracker for October', '', -2, 'Low', 'done');
    task('u5', 'u4', 'Prepare weekly hiring report', 'Pipeline by client, offers made, joins this week.', 2, 'Medium', 'todo');
    task('u6', 'u4', 'Source DevOps engineers (AWS, Terraform)', 'Target 15 profiles for Cloudline.', 2, 'High', 'in_progress');
    task('u6', 'u4', 'Technical screening — 4 React candidates', '', -1, 'Medium', 'todo');
    task('u7', 'u4', 'Complete onboarding documents', 'Upload PAN, Aadhaar and bank details on the HR drive.', 4, 'Low', 'todo');
    task('u8', 'u3', 'Process October payroll inputs', 'Attendance, leave and reimbursements cut-off.', 1, 'High', 'in_progress');

    const goal = (userId, title, progress, weight, dueIso) => st.goals.push({ id: uid('g'), userId, title, progress, weight, due: dueIso, updatedAt: due(-6) });
    goal('u5', 'Close 18 IT placements in H2', 61, 40, '2026-12-31');
    goal('u5', 'Bring time-to-shortlist down to 4 days', 70, 25, '2026-12-31');
    goal('u5', 'Build a talent pool of 300 cloud engineers', 82, 20, '2026-12-15');
    goal('u5', 'Complete the Advanced Sourcing certification', 40, 15, '2026-11-30');
    goal('u6', 'Close 12 technical placements in H2', 48, 50, '2026-12-31');
    goal('u6', 'Maintain 85% interview-to-offer quality score', 76, 50, '2026-12-31');
    goal('u4', 'Team target: 45 placements in H2', 58, 60, '2026-12-31');
    goal('u4', 'Hire and ramp up 2 recruiters', 50, 40, '2026-12-31');
    goal('u8', 'Zero-error payroll runs for H2', 83, 60, '2026-12-31');
    goal('u8', 'Automate PF and ESI challan reports', 35, 40, '2026-12-31');
    st.cycle = { id: 'H2-2026', name: 'H2 2026 review', due: '2026-11-30' };
    st.assessments.u6 = { rating: 4, achievements: 'Closed 7 technical roles including two niche DevOps positions.', challenges: 'Long notice periods slowed two closures.', next: 'Build a bench of pre-screened cloud profiles.', submittedAt: due(-2) };

    const N = (userId, title, body, link, ago, read) => st.notifications.push({ id: uid('n'), userId, title, body, link, at: addDays(new Date(), -ago).toISOString(), read: !!read });
    N('u5', 'New task from Rahul Varma', 'Schedule client interviews — Fintrix Bank', 'tasks', 0);
    N('u5', 'Self-assessment is open', 'H2 2026 self-assessment is due by 30 Nov.', 'performance', 1);
    N('u5', 'Deepavali — Sunday, 8 Nov', 'Wishing you a bright and joyful festival of lights.', 'holidays', 2, true);
    N('u4', 'Leave request from Mohammed Irfan', '3 days earned leave', 'team', 1);
    N('u4', 'Missed check-out correction', 'Mohammed Irfan requested a correction', 'team', 1);
    ['u1', 'u2', 'u3'].forEach((a) => { N(a, '2 new access requests', 'Vamshi Krishna and Nikhita Jain are waiting for approval.', 'admin-employees', 1); N(a, 'Attendance correction pending', 'Mohammed Irfan — missed check-out', 'admin-approvals', 1); });
    N('u3', 'Leave request from Sai Kiran Goud', '1 day casual leave', 'team', 0);

    S = st;
    const M = (type, uId, data, trigger, at) => { const u = st.users.find((x) => x.id === uId); st.outbox.push({ id: uid('m'), type, to: u ? u.email : 'all-staff@aarnikshasolutions.com', toName: u ? u.name : 'All employees (8)', subject: AKEmail.subject(type, data), data, trigger, at: at.toISOString() }); };
    const lm = new Date(t.getFullYear(), t.getMonth() - 1, 1);
    const lmName = lm.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
    M('monthly_summary', 'u5', Object.assign({ name: 'Priya Sharma', month: lmName }, monthStats(st, 'u5', lm.getFullYear(), lm.getMonth())), 'Scheduled · 1st of month, 9:00', new Date(t.getFullYear(), t.getMonth(), 1, 9));
    M('monthly_summary', 'u6', Object.assign({ name: 'Mohammed Irfan', month: lmName }, monthStats(st, 'u6', lm.getFullYear(), lm.getMonth())), 'Scheduled · 1st of month, 9:00', new Date(t.getFullYear(), t.getMonth(), 1, 9));
    M('holiday_greeting', null, { holiday: 'Vijaya Dasami / Dussehra', date: '2026-10-20', closed: true, nextWorking: '2026-10-22', message: GREETINGS['Vijaya Dasami / Dussehra'] }, 'Scheduled · day before, 10:00', new Date(2026, 9, 19, 10));
    M('account_approved', 'u7', { name: 'Ananya Rao', empId: 'AKS-018', designation: 'Recruitment Associate', role: 'Employee', manager: 'Rahul Varma', loginWith: 'Mobile ending 1018 or ananya.rao@aarnikshasolutions.com' }, 'Kavya Reddy approved the access request', parse(st.users[6].joined));
    M('leave_decision', 'u5', { name: 'Priya Sharma', approved: true, type: 'Casual leave', from: pw[8], to: pw[9], days: 2, approver: 'Rahul Varma', note: 'Enjoy the function!', balanceLeft: 8 }, 'Rahul Varma approved a leave request', parse(pw[6]));
    st.outbox.sort((a, b) => b.at.localeCompare(a.at));
    return st;
  }

  function load() {
    try { const raw = localStorage.getItem(KEY); if (raw) { S = JSON.parse(raw); return; } } catch (e) {}
    S = seed(); save();
  }

  const act = {
    findAccount(identifier) {
      const v = String(identifier || '').trim().toLowerCase();
      const digits = v.replace(/\D/g, '').slice(-10);
      return S.users.find((u) => (v.includes('@') ? u.email === v : digits.length === 10 && u.phone === digits)) || null;
    },
    signIn(userId) { S.session = { userId, at: new Date().toISOString() }; emit(); },
    signOut() { S.session = null; emit(); },
    register(d) {
      const u = { id: uid('u'), name: d.name.trim(), email: d.email.trim().toLowerCase(), phone: d.phone.replace(/\D/g, '').slice(-10), role: 'employee', designation: d.designation.trim(), dept: d.dept, managerId: null, status: 'pending', empId: null, joined: null, location: 'Hi-Tech City, Hyderabad', requestedAt: todayIso(), leave: { CL: { total: 12, used: 0 }, SL: { total: 8, used: 0 }, EL: { total: 15, used: 0 } } };
      S.users.push(u);
      admins().forEach((a) => notify(a.id, 'New access request', u.name + ' · ' + u.designation, 'admin-employees'));
      emit(); return u;
    },
    checkIn(userId, mode) { (S.attendance[userId] = S.attendance[userId] || {})[todayIso()] = { status: mode === 'wfh' ? 'wfh' : 'present', in: nowHM(), out: null }; emit(); },
    checkOut(userId) { const r = (S.attendance[userId] || {})[todayIso()]; if (r) r.out = nowHM(); emit(); },
    applyLeave(userId, d) {
      const u = user(userId);
      const l = { id: uid('l'), userId, type: d.type, from: d.from, to: d.to, reason: d.reason, status: 'pending', approverId: u.managerId || (admins()[0] || {}).id, appliedAt: todayIso(), days: workingDays(S, d.from, d.to), note: '' };
      S.leaves.unshift(l);
      if (l.approverId) notify(l.approverId, 'Leave request from ' + u.name, l.days + ' day' + (l.days > 1 ? 's' : '') + ' ' + LEAVE_TYPES[l.type].toLowerCase(), 'team');
      emit(); return l;
    },
    cancelLeave(id) { const l = S.leaves.find((x) => x.id === id); if (l && l.status === 'pending') l.status = 'cancelled'; emit(); },
    decideLeave(id, approve, byId, note) {
      const l = S.leaves.find((x) => x.id === id); const u = user(l.userId); const by = user(byId);
      l.status = approve ? 'approved' : 'rejected'; l.note = note || ''; l.decidedAt = todayIso(); l.decidedBy = byId;
      if (approve) {
        u.leave[l.type].used += l.days;
        S.attendance[u.id] = S.attendance[u.id] || {};
        for (let d = parse(l.from); d <= parse(l.to); d = addDays(d, 1)) if (isWorking(S, d)) S.attendance[u.id][iso(d)] = { status: 'leave', type: l.type };
      }
      notify(u.id, 'Leave ' + (approve ? 'approved' : 'declined'), LEAVE_TYPES[l.type] + ', ' + fmtDate(l.from), 'leave');
      email('leave_decision', u, { name: u.name, approved: approve, type: LEAVE_TYPES[l.type], from: l.from, to: l.to, days: l.days, approver: by.name, note: l.note, balanceLeft: u.leave[l.type].total - u.leave[l.type].used }, by.name + (approve ? ' approved' : ' declined') + ' a leave request');
      emit();
    },
    requestCorrection(userId, d) {
      const u = user(userId);
      S.corrections.unshift({ id: uid('c'), userId, date: d.date, in: d.in, out: d.out, reason: d.reason, status: 'pending', at: todayIso() });
      const to = new Set([u.managerId, ...admins().map((a) => a.id)].filter(Boolean));
      to.forEach((id) => notify(id, 'Attendance correction from ' + u.name, fmtDate(d.date) + ' · ' + d.in + '–' + d.out, 'admin-approvals'));
      emit();
    },
    decideCorrection(id, approve, byId) {
      const c = S.corrections.find((x) => x.id === id);
      c.status = approve ? 'approved' : 'rejected'; c.decidedBy = byId; c.decidedAt = todayIso();
      if (approve) { const prev = (S.attendance[c.userId] || {})[c.date]; (S.attendance[c.userId] = S.attendance[c.userId] || {})[c.date] = { status: prev && prev.status === 'wfh' ? 'wfh' : 'present', in: c.in, out: c.out, corrected: true }; }
      notify(c.userId, 'Correction ' + (approve ? 'approved' : 'declined'), fmtDate(c.date) + ' · ' + c.in + '–' + c.out, 'attendance');
      emit();
    },
    addTask(byId, d) {
      const t = { id: uid('t'), assigneeId: d.assigneeId, byId, title: d.title.trim(), desc: (d.desc || '').trim(), due: d.due, priority: d.priority, status: 'todo', createdAt: todayIso() };
      S.tasks.unshift(t); const u = user(d.assigneeId); const by = user(byId);
      notify(u.id, 'New task from ' + by.name, t.title, 'tasks');
      email('task_assigned', u, { name: u.name, title: t.title, desc: t.desc, due: t.due, priority: t.priority, by: by.name }, by.name + ' assigned a task');
      emit();
    },
    setTaskStatus(id, status) { const t = S.tasks.find((x) => x.id === id); t.status = status; if (status === 'done') { t.doneAt = todayIso(); if (t.byId !== t.assigneeId) notify(t.byId, 'Task completed', user(t.assigneeId).name + ' · ' + t.title, 'team'); } emit(); },
    updateGoal(id, progress, note) { const g = S.goals.find((x) => x.id === id); g.progress = progress; g.lastNote = note; g.updatedAt = todayIso(); emit(); },
    submitAssessment(userId, d) { S.assessments[userId] = Object.assign({}, d, { submittedAt: todayIso() }); const u = user(userId); if (u.managerId) notify(u.managerId, 'Self-assessment submitted', u.name + ' · ' + S.cycle.name, 'team'); emit(); },
    approveUser(id, byId, d) {
      const u = user(id); const by = user(byId);
      Object.assign(u, { status: 'active', role: d.role, managerId: d.managerId || null, empId: d.empId, joined: todayIso(), approvedBy: byId });
      S.attendance[u.id] = S.attendance[u.id] || {};
      email('account_approved', u, { name: u.name, empId: u.empId, designation: u.designation, role: ROLES[u.role], manager: u.managerId ? user(u.managerId).name : null, loginWith: 'Mobile ending ' + u.phone.slice(-4) + ' or ' + u.email }, by.name + ' approved the access request');
      notify(u.id, 'Welcome to Aarniksha', 'Your account is active. Check in to start your day.', 'home');
      emit();
    },
    rejectUser(id) { user(id).status = 'rejected'; emit(); },
    suspendUser(id, byId, reason) {
      const u = user(id); const by = user(byId);
      u.status = 'suspended'; u.suspendedReason = reason;
      email('account_suspended', u, { name: u.name, reason, by: by.name, date: todayIso() }, by.name + ' suspended the account');
      emit();
    },
    reactivateUser(id) { const u = user(id); u.status = 'active'; u.suspendedReason = null; notify(u.id, 'Access restored', 'Your portal access has been reactivated.', 'home'); emit(); },
    setRole(id, role) { user(id).role = role; emit(); },
    addHoliday(d, byId) {
      const h = { id: uid('h'), date: d.date, name: d.name.trim(), type: d.type, greetingSent: false };
      S.holidays.push(h); S.holidays.sort((a, b) => a.date.localeCompare(b.date));
      S.users.filter((u) => u.status === 'active').forEach((u) => notify(u.id, 'Holiday added: ' + h.name, fmtDate(h.date, { weekday: 'long', day: 'numeric', month: 'long' }), 'holidays'));
      if (d.greeting) act.sendGreeting(h.id, byId, true);
      emit(); return h;
    },
    removeHoliday(id) { S.holidays = S.holidays.filter((h) => h.id !== id); emit(); },
    sendGreeting(id, byId, silent) {
      const h = S.holidays.find((x) => x.id === id); const by = user(byId);
      const n = S.users.filter((u) => u.status === 'active').length;
      broadcast('holiday_greeting', { holiday: h.name, date: h.date, closed: isWeekend(parse(h.date)) ? false : true, nextWorking: nextWorking(S, h.date), message: GREETINGS[h.name] || 'From all of us at Aarniksha Solutions, wishing you a happy and safe celebration with your loved ones.' }, by.name + ' sent a festival greeting', n);
      h.greetingSent = true;
      if (!silent) emit();
    },
    runMonthlySummary(byId) {
      const t = today(); const lm = new Date(t.getFullYear(), t.getMonth() - 1, 1);
      const month = lm.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
      const list = S.users.filter((u) => u.status === 'active');
      list.forEach((u) => email('monthly_summary', u, Object.assign({ name: u.name, month }, monthStats(S, u.id, lm.getFullYear(), lm.getMonth())), user(byId).name + ' ran the monthly summary'));
      emit(); return list.length;
    },
    markRead(userId) { S.notifications.forEach((n) => { if (n.userId === userId) n.read = true; }); emit(); },
    reset() { S = seed(); emit(); },
  };

  load();
  window.AKStore = {
    get: () => S,
    subscribe: (fn) => { listeners.add(fn); return () => listeners.delete(fn); },
    act, ROLES, LEAVE_TYPES, DEPTS, LATE_AFTER,
    h: { iso, parse, addDays, today, todayIso, isWeekend, isWorking: (d) => isWorking(S, d), holidayOn: (k) => holidayOn(S, k), workingDays: (a, b) => workingDays(S, a, b), monthStats: (id, y, m) => monthStats(S, id, y, m), user: (id) => user(id), fmtDate, mins, pad },
  };
})();
