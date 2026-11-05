const isAdmin = (u) => ['hr_admin', 'super_admin'].includes(u.role);

function todayRow(S, u) {
  const di = dayInfo(S, u.id, AKH.todayIso());
  const map = { present: ['blue', 'Office'], wfh: ['grey', 'WFH'], leave: ['amber', 'On leave'], holiday: ['navy', 'Holiday'], weekend: ['grey', 'Weekend'], today: ['red', 'Not checked in'] };
  return { di, badge: map[di.kind] || ['grey', di.label || '—'] };
}

function ApproveModal({ u, onClose }) {
  const S = useStore(); const { me, toast } = useApp();
  const nextId = () => 'AKS-' + String(Math.max(...S.users.filter((x) => x.empId).map((x) => Number(x.empId.slice(4)))) + 1).padStart(3, '0');
  const managers = S.users.filter((x) => x.status === 'active' && x.role !== 'employee');
  const [f, setF] = React.useState({ role: 'employee', managerId: '', empId: '' });
  React.useEffect(() => { if (u) setF({ role: 'employee', managerId: (managers.find((x) => x.dept === u.dept) || managers[0] || {}).id || '', empId: nextId() }); }, [u]);
  if (!u) return null;
  return (
    <Modal open onClose={onClose} eyebrow="Approve access" title={u.name}>
      <div style={{ display: 'grid', gap: '14px' }}>
        <div style={{ background: '#F8FAFE', border: '1px solid #E3EAF6', borderRadius: '14px', padding: '14px 16px', display: 'grid', gap: '4px', fontSize: '14px', color: '#43506A' }}>
          <span><strong style={{ color: '#101B33' }}>{u.designation}</strong> · {u.dept}</span><span>{u.email} · +91 {u.phone}</span><span style={{ color: '#8A94A6' }}>Requested {fmt.d(u.requestedAt)}</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
          <Input label="Employee ID" value={f.empId} onChange={(e) => setF({ ...f, empId: e.target.value })} />
          <Select label="Role" value={f.role} onChange={(e) => setF({ ...f, role: e.target.value })} options={Object.entries(AKStore.ROLES).filter(([k]) => me.role === 'super_admin' || k !== 'super_admin')} />
        </div>
        <Select label="Reporting manager" value={f.managerId} onChange={(e) => setF({ ...f, managerId: e.target.value })} options={managers.map((x) => [x.id, x.name + ' · ' + x.designation])} />
        <p style={{ margin: 0, fontSize: '13px', color: '#7A859A' }}>An "Account approved" email goes to {u.email} with sign-in instructions.</p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}><Btn variant="ghost" onClick={onClose}>Cancel</Btn><Btn icon="UserCheck" onClick={() => { AKStore.act.approveUser(u.id, me.id, f); onClose(); toast(u.name + ' approved · welcome email sent'); }}>Approve &amp; email</Btn></div>
      </div>
    </Modal>
  );
}

function SuspendModal({ u, onClose }) {
  const { me, toast } = useApp(); const [reason, setReason] = React.useState(''); const [err, setErr] = React.useState('');
  React.useEffect(() => { setReason(''); setErr(''); }, [u]);
  if (!u) return null;
  return (
    <Modal open onClose={onClose} eyebrow="Suspend access" title={u.name}>
      <div style={{ display: 'grid', gap: '14px' }}>
        <p style={{ margin: 0, fontSize: '14.5px', lineHeight: 1.6, color: '#43506A' }}>{u.name.split(' ')[0]} will be signed out and won't be able to sign in until you reactivate the account. Their records are kept.</p>
        <TextArea label="Reason" rows={2} value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Shared with the employee in the email" />
        <ErrorLine>{err}</ErrorLine>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}><Btn variant="ghost" onClick={onClose}>Cancel</Btn><Btn variant="danger" icon="Ban" onClick={() => { if (!reason.trim()) return setErr('Add a reason.'); AKStore.act.suspendUser(u.id, me.id, reason.trim()); onClose(); toast(u.name + ' suspended · email sent'); }}>Suspend &amp; email</Btn></div>
      </div>
    </Modal>
  );
}

function EmployeeDetail({ u, onClose }) {
  const S = useStore();
  if (!u) return null;
  const t = AKH.today(); const st = AKH.monthStats(u.id, t.getFullYear(), t.getMonth());
  const open = S.tasks.filter((x) => x.assigneeId === u.id && x.status !== 'done').length;
  const mgr = u.managerId ? AKH.user(u.managerId) : null;
  return (
    <Modal open onClose={onClose} eyebrow={(u.empId || 'Pending') + ' · ' + AKStore.ROLES[u.role]} title={u.name} width={600}>
      <div style={{ display: 'grid', gap: '18px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 18px', fontSize: '14px', color: '#43506A' }}>
          {[['Designation', u.designation], ['Department', u.dept], ['Email', u.email], ['Mobile', '+91 ' + u.phone], ['Manager', mgr ? mgr.name : '—'], ['Joined', u.joined ? fmt.d(u.joined) : '—']].map(([k, v]) => (
            <div key={k} style={{ minWidth: 0 }}><Label>{k}</Label><p style={{ margin: '4px 0 0', overflow: 'hidden', textOverflow: 'ellipsis' }}>{v}</p></div>
          ))}
        </div>
        <div style={{ background: '#F8FAFE', border: '1px solid #E3EAF6', borderRadius: '16px', padding: '16px 18px' }}>
          <p style={{ margin: '0 0 14px', fontSize: '12px', fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: '#2F80EC' }}>{t.toLocaleDateString('en-IN', { month: 'long' })} attendance</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '14px' }}><Stat label="Office" value={st.present} /><Stat label="WFH" value={st.wfh} /><Stat label="Leave" value={st.leave} /><Stat label="Absent" value={st.absent} tone={st.absent ? '#B9382F' : undefined} /></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'start' }}>
          <div><Label>Leave balance</Label><div style={{ marginTop: '10px' }}><LeaveBalances me={u} compact /></div></div>
          <div><Label>Work</Label><p style={{ margin: '10px 0 0', fontSize: '14px', color: '#43506A' }}>{open} open task{open === 1 ? '' : 's'}<br />Self-assessment {S.assessments[u.id] ? 'submitted' : 'not submitted'}</p></div>
        </div>
        {u.status === 'suspended' ? <p style={{ margin: 0, fontSize: '13.5px', color: '#B9382F', fontWeight: 600 }}>Suspended: {u.suspendedReason}</p> : null}
      </div>
    </Modal>
  );
}

function AdminOverview({ go }) {
  const S = useStore(); const { m, toast, me } = useApp();
  const [approve, setApprove] = React.useState(null);
  const active = S.users.filter((u) => u.status === 'active');
  const rows = active.map((u) => ({ u, ...todayRow(S, u) }));
  const inNow = rows.filter((r) => r.di.kind === 'present' || r.di.kind === 'wfh').length;
  const onLeave = rows.filter((r) => r.di.kind === 'leave').length;
  const pendingUsers = S.users.filter((u) => u.status === 'pending');
  const pending = pendingUsers.length + S.corrections.filter((c) => c.status === 'pending').length + S.leaves.filter((l) => l.status === 'pending').length;
  const t = AKH.todayIso(); const upcoming = S.holidays.filter((h) => h.date >= t).slice(0, 4);
  return (
    <>
      <PageHeader eyebrow="Admin" title="Overview" sub={fmt.long(t)} actions={<Btn variant="outline" icon="Mail" onClick={() => go('admin-outbox')}>Email outbox</Btn>} />
      <div style={{ display: 'grid', gridTemplateColumns: m ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: m ? '12px' : '18px', marginBottom: m ? '16px' : '22px' }}>
        {[['Active employees', active.length, S.users.filter((u) => u.status === 'suspended').length + ' suspended'], ['Checked in', inNow, Math.round((inNow / Math.max(1, active.length - onLeave)) * 100) + '% of expected'], ['On leave today', onLeave, null], ['Pending approvals', pending, 'access, leave & corrections']].map(([l, v, s]) => (
          <Card key={l} pad="20px"><Stat label={l} value={v} sub={s} /></Card>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,1.6fr) minmax(0,1fr)', gap: m ? '16px' : '22px', alignItems: 'start' }}>
        <div style={{ minWidth: 0 }}>
          <h3 style={{ margin: '0 0 14px', fontSize: '17px', fontWeight: 800, color: '#101B33' }}>Today's attendance</h3>
          <Table head={['Employee', 'Department', 'Status', 'In', 'Out']} minWidth={560}>
            {rows.map(({ u, di, badge }) => (
              <tr key={u.id}>
                <td style={TD}><Person u={u} size={32} /></td>
                <td style={TD}>{u.dept}</td>
                <td style={TD}><Badge tone={badge[0]}>{badge[1]}</Badge>{di.late ? <Badge tone="red" style={{ marginLeft: '6px' }}>Late</Badge> : null}</td>
                <td style={{ ...TD, fontVariantNumeric: 'tabular-nums' }}>{di.rec && di.rec.in ? fmt.t(di.rec.in) : '—'}</td>
                <td style={{ ...TD, fontVariantNumeric: 'tabular-nums' }}>{di.rec && di.rec.out ? fmt.t(di.rec.out) : '—'}</td>
              </tr>
            ))}
          </Table>
        </div>
        <div style={{ display: 'grid', gap: m ? '16px' : '22px', minWidth: 0 }}>
          <Card>
            <CardHead title="Access requests" sub={pendingUsers.length ? pendingUsers.length + ' waiting' : 'None waiting'} action={<button type="button" onClick={() => go('admin-employees')} style={{ border: 'none', background: 'none', padding: 0, color: '#2F80EC', fontSize: '13.5px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>All &#8594;</button>} />
            {pendingUsers.length === 0 ? <Empty icon="UserCheck" title="No new requests" /> : pendingUsers.map((u, i) => (
              <div key={u.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0', borderTop: i ? '1px solid #EDF1F8' : 'none' }}>
                <div style={{ flex: 1, minWidth: 0 }}><Person u={u} sub={u.designation + ' · ' + fmt.d(u.requestedAt)} size={32} /></div>
                <Btn size="sm" onClick={() => setApprove(u)}>Review</Btn>
              </div>
            ))}
          </Card>
          <Card>
            <CardHead title="Coming up" sub="Festival greetings go to every active employee" />
            {upcoming.map((h, i) => (
              <div key={h.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0', borderTop: i ? '1px solid #EDF1F8' : 'none' }}>
                <div style={{ flex: 1, minWidth: 0 }}><p style={{ margin: 0, fontSize: '14.5px', fontWeight: 700, color: '#101B33' }}>{h.name}</p><p style={{ margin: '2px 0 0', fontSize: '12.5px', color: '#7A859A' }}>{fmt.dw(h.date)}</p></div>
                {h.greetingSent ? <Badge tone="green">Greeting sent</Badge> : <Btn size="sm" variant="outline" icon="Send" onClick={() => { AKStore.act.sendGreeting(h.id, me.id); toast(h.name + ' greeting emailed to all employees'); }}>Send</Btn>}
              </div>
            ))}
          </Card>
        </div>
      </div>
      <ApproveModal u={approve} onClose={() => setApprove(null)} />
    </>
  );
}

function EmployeesPage() {
  const S = useStore(); const { me, m, toast } = useApp();
  const [tab, setTab] = React.useState(S.users.some((u) => u.status === 'pending') ? 'pending' : 'active');
  const [q, setQ] = React.useState('');
  const [approve, setApprove] = React.useState(null); const [suspend, setSuspend] = React.useState(null); const [detail, setDetail] = React.useState(null);
  const by = (s) => S.users.filter((u) => (s === 'all' ? u.status !== 'rejected' : u.status === s));
  const list = by(tab).filter((u) => !q || (u.name + u.email + u.phone + (u.empId || '') + u.dept).toLowerCase().includes(q.toLowerCase()));
  const actions = (u) => {
    if (u.status === 'pending') return <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}><Btn size="sm" variant="danger" onClick={() => { AKStore.act.rejectUser(u.id); toast('Request rejected'); }}>Reject</Btn><Btn size="sm" onClick={() => setApprove(u)}>Approve</Btn></div>;
    if (u.id === me.id) return <span style={{ fontSize: '12.5px', color: '#8A94A6' }}>You</span>;
    if (u.role === 'super_admin' && me.role !== 'super_admin') return null;
    if (u.status === 'active') return <Btn size="sm" variant="danger" icon="Ban" onClick={() => setSuspend(u)}>Suspend</Btn>;
    if (u.status === 'suspended') return <Btn size="sm" variant="outline" icon="RotateCcw" onClick={() => { AKStore.act.reactivateUser(u.id); toast(u.name + ' reactivated'); }}>Reactivate</Btn>;
    return null;
  };
  return (
    <>
      <PageHeader eyebrow="Admin" title="Employees" sub="Approve new sign-ups, suspend or restore access. Every decision emails the employee." />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {[['pending', 'Pending'], ['active', 'Active'], ['suspended', 'Suspended'], ['all', 'All']].map(([k, l]) => <DS.FilterChip key={k} active={tab === k} count={by(k).length} onClick={() => setTab(k)}>{l}</DS.FilterChip>)}
        </div>
        <div style={{ width: m ? '100%' : '280px' }}><Input placeholder="Search name, email, ID…" value={q} onChange={(e) => setQ(e.target.value)} /></div>
      </div>
      {list.length === 0 ? <Card><Empty icon="Users" title="No one here" body={tab === 'pending' ? 'New access requests will appear here.' : null} /></Card> : m ? (
        <div style={{ display: 'grid', gap: '12px' }}>
          {list.map((u) => (
            <Card key={u.id} pad="16px">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button type="button" onClick={() => setDetail(u)} style={{ flex: 1, minWidth: 0, border: 'none', background: 'none', padding: 0, textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit' }}><Person u={u} sub={(u.empId || 'New') + ' · ' + u.designation} /></button>
                <StatusBadge status={u.status} />
              </div>
              <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'flex-end' }}>{actions(u)}</div>
            </Card>
          ))}
        </div>
      ) : (
        <Table head={['Employee', 'ID', 'Department', 'Role', 'Manager', 'Status', '>Actions']} minWidth={860}>
          {list.map((u) => (
            <tr key={u.id}>
              <td style={TD}><button type="button" onClick={() => setDetail(u)} style={{ border: 'none', background: 'none', padding: 0, textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit' }}><Person u={u} sub={u.email} size={34} /></button></td>
              <td style={{ ...TD, fontVariantNumeric: 'tabular-nums' }}>{u.empId || '—'}</td>
              <td style={TD}>{u.dept}<span style={{ display: 'block', fontSize: '12.5px', color: '#8A94A6' }}>{u.designation}</span></td>
              <td style={TD}>{AKStore.ROLES[u.role]}</td>
              <td style={TD}>{u.managerId ? AKH.user(u.managerId).name : '—'}</td>
              <td style={TD}><StatusBadge status={u.status} /></td>
              <td style={{ ...TD, textAlign: 'right' }}>{actions(u)}</td>
            </tr>
          ))}
        </Table>
      )}
      <ApproveModal u={approve} onClose={() => setApprove(null)} />
      <SuspendModal u={suspend} onClose={() => setSuspend(null)} />
      <EmployeeDetail u={detail} onClose={() => setDetail(null)} />
    </>
  );
}

function ApprovalsPage() {
  const S = useStore();
  const [tab, setTab] = React.useState('corrections');
  const [decide, setDecide] = React.useState(null);
  const cP = S.corrections.filter((c) => c.status === 'pending'); const cD = S.corrections.filter((c) => c.status !== 'pending');
  const lP = S.leaves.filter((l) => l.status === 'pending'); const lD = S.leaves.filter((l) => ['approved', 'rejected'].includes(l.status)).slice(0, 8);
  return (
    <>
      <PageHeader eyebrow="Admin" title="Approvals" sub="Everything waiting across the company. Managers see the same requests for their own team." />
      <div style={{ marginBottom: '16px' }}><Segmented options={[['corrections', 'Attendance corrections', cP.length], ['leave', 'Leave', lP.length]]} value={tab} onChange={setTab} /></div>
      {tab === 'corrections' ? (
        <>
          <Card style={{ marginBottom: '22px' }}><CardHead title="Waiting" style={{ marginBottom: cP.length ? '4px' : '18px' }} />{cP.length === 0 ? <Empty icon="ClockAlert" title="Nothing to review" /> : cP.map((c) => <CorrectionCard key={c.id} c={c} />)}</Card>
          <Card><CardHead title="Recently decided" style={{ marginBottom: cD.length ? '4px' : '18px' }} />{cD.length === 0 ? <Empty icon="History" title="No history yet" /> : cD.map((c) => <CorrectionCard key={c.id} c={c} />)}</Card>
        </>
      ) : (
        <>
          <Card style={{ marginBottom: '22px' }}><CardHead title="Waiting" style={{ marginBottom: lP.length ? '4px' : '18px' }} />{lP.length === 0 ? <Empty icon="CalendarDays" title="Nothing to review" /> : lP.map((l) => <div key={l.id}><LeaveRequestCard l={l} onDecide={setDecide} /><p style={{ margin: '-6px 0 10px', fontSize: '12px', color: '#8A94A6' }}>Approver: {l.approverId ? AKH.user(l.approverId).name : '—'}</p></div>)}</Card>
          <Card><CardHead title="Recently decided" style={{ marginBottom: '4px' }} />
            {lD.map((l) => (
              <div key={l.id} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', padding: '13px 0', borderTop: '1px solid #EDF1F8' }}>
                <div style={{ flex: '1 1 240px', minWidth: 0 }}><Person u={AKH.user(l.userId)} sub={AKStore.LEAVE_TYPES[l.type] + ' · ' + fmt.range(l.from, l.to)} size={32} /></div>
                <span style={{ fontSize: '13px', color: '#7A859A' }}>by {(l.decidedBy || l.approverId) ? AKH.user(l.decidedBy || l.approverId).name : '—'}</span>
                <StatusBadge status={l.status} />
              </div>
            ))}
          </Card>
        </>
      )}
      <DecideModal item={decide} onClose={() => setDecide(null)} />
    </>
  );
}

function AdminHolidays() {
  const S = useStore(); const { me, m, toast } = useApp();
  const [f, setF] = React.useState({ name: '', date: '', type: 'Festival', greeting: true });
  const [err, setErr] = React.useState('');
  const t = AKH.todayIso(); const [show, setShow] = React.useState('upcoming');
  const list = S.holidays.filter((h) => (show === 'upcoming' ? h.date >= t : true));
  const add = () => {
    if (!f.name.trim() || !f.date) return setErr('Add a name and a date.');
    if (S.holidays.some((h) => h.date === f.date)) return setErr('There is already a holiday on that date.');
    AKStore.act.addHoliday(f, me.id); setF({ name: '', date: '', type: 'Festival', greeting: true }); setErr('');
    toast('Holiday added' + (f.greeting ? ' · greeting emailed to all employees' : ''));
  };
  return (
    <>
      <PageHeader eyebrow="Admin" title="Holidays & festivals" sub="Pre-loaded with the Telangana 2026 general holidays. Add company holidays here; employees are notified straight away." />
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) minmax(0,1.7fr)', gap: m ? '16px' : '22px', alignItems: 'start' }}>
        <Card tint>
          <CardHead title="Add a holiday" />
          <div style={{ display: 'grid', gap: '14px' }}>
            <Input label="Name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} placeholder="e.g. Company foundation day" />
            <Input label="Date" type="date" value={f.date} onChange={(e) => setF({ ...f, date: e.target.value })} />
            <Select label="Type" value={f.type} onChange={(e) => setF({ ...f, type: e.target.value })} options={['Festival', 'National', 'Telangana']} />
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#43506A', cursor: 'pointer' }}>
              <input type="checkbox" checked={f.greeting} onChange={(e) => setF({ ...f, greeting: e.target.checked })} style={{ width: '18px', height: '18px', marginTop: '1px', accentColor: '#2F80EC' }} />
              <span>Email a festival greeting to all active employees now</span>
            </label>
            <ErrorLine>{err}</ErrorLine>
            <Btn icon="Plus" onClick={add}>Add holiday</Btn>
          </div>
        </Card>
        <div style={{ minWidth: 0 }}>
          <div style={{ marginBottom: '14px' }}><Segmented options={[['upcoming', 'Upcoming'], ['all', 'Whole year']]} value={show} onChange={setShow} /></div>
          <Table head={['Date', 'Holiday', 'Type', 'Greeting', '']} minWidth={560}>
            {list.map((h) => (
              <tr key={h.id} style={{ opacity: h.date < t ? 0.55 : 1 }}>
                <td style={{ ...TD, whiteSpace: 'nowrap', fontWeight: 700, color: '#101B33' }}>{fmt.dw(h.date)}</td>
                <td style={TD}>{h.name}</td>
                <td style={TD}><Badge tone={HOL_TONE[h.type] || 'grey'}>{h.type}</Badge></td>
                <td style={TD}>{h.greetingSent ? <Badge tone="green">Sent</Badge> : h.date >= t ? <Btn size="sm" variant="outline" icon="Send" onClick={() => { AKStore.act.sendGreeting(h.id, me.id); toast('Greeting emailed to all employees'); }}>Send</Btn> : <span style={{ color: '#8A94A6' }}>—</span>}</td>
                <td style={{ ...TD, textAlign: 'right' }}><button type="button" aria-label={'Remove ' + h.name} onClick={() => { AKStore.act.removeHoliday(h.id); toast('Holiday removed'); }} style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #E3EAF6', background: '#fff', color: '#7A859A', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><PIcon name="Trash2" size={15} /></button></td>
              </tr>
            ))}
          </Table>
          <p style={{ margin: '12px 0 0', fontSize: '13px', color: '#7A859A' }}>In production, greetings are scheduled automatically at 10:00 am the day before each holiday.</p>
        </div>
      </div>
    </>
  );
}

const EMAIL_TONE = { account_approved: 'green', account_suspended: 'red', leave_decision: 'amber', task_assigned: 'blue', holiday_greeting: 'navy', monthly_summary: 'grey' };

function OutboxPage() {
  const S = useStore(); const { me, m, toast } = useApp();
  const [type, setType] = React.useState('all');
  const list = S.outbox.filter((e) => type === 'all' || e.type === type);
  const [sel, setSel] = React.useState(null);
  const cur = list.find((e) => e.id === sel) || (!m ? list[0] : null);
  const preview = cur ? <iframe title={cur.subject} srcDoc={AKEmail.render(cur.type, cur.data)} style={{ width: '100%', height: m ? '60vh' : '760px', border: 'none', borderRadius: '14px', background: '#E9EFFB', display: 'block' }}></iframe> : null;
  return (
    <>
      <PageHeader eyebrow="Admin" title="Email outbox" sub="Every email the portal has sent. In the prototype nothing leaves the browser." actions={<Btn icon="Send" onClick={() => { const n = AKStore.act.runMonthlySummary(me.id); toast('Monthly summary sent to ' + n + ' employees'); }}>Run monthly summary</Btn>} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
        <DS.FilterChip active={type === 'all'} count={S.outbox.length} onClick={() => setType('all')}>All</DS.FilterChip>
        {Object.entries(AKEmail.TYPES).map(([k, l]) => <DS.FilterChip key={k} active={type === k} count={S.outbox.filter((e) => e.type === k).length} onClick={() => setType(k)}>{l}</DS.FilterChip>)}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(300px, 380px) minmax(0,1fr)', gap: '18px', alignItems: 'start' }}>
        <Card pad="6px" style={{ maxHeight: m ? 'none' : '800px', overflowY: 'auto' }}>
          {list.length === 0 ? <Empty icon="Mail" title="No emails of this type yet" /> : list.map((e) => {
            const on = cur && cur.id === e.id;
            return (
              <button key={e.id} type="button" onClick={() => setSel(e.id)} style={{ width: '100%', display: 'block', textAlign: 'left', padding: '14px 14px', border: 'none', borderRadius: '12px', background: on ? '#E9EFFB' : 'transparent', cursor: 'pointer', fontFamily: 'inherit', marginBottom: '2px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}><Badge tone={EMAIL_TONE[e.type]}>{AKEmail.TYPES[e.type]}</Badge><span style={{ fontSize: '12px', color: '#8A94A6' }}>{fmt.ago(e.at)}</span></span>
                <span style={{ display: 'block', marginTop: '8px', fontSize: '14px', fontWeight: 700, color: '#101B33', lineHeight: 1.35 }}>{e.subject}</span>
                <span style={{ display: 'block', marginTop: '3px', fontSize: '12.5px', color: '#5B6577' }}>To {e.toName} · {e.to}</span>
                {e.trigger ? <span style={{ display: 'block', marginTop: '3px', fontSize: '12px', color: '#8A94A6' }}>{e.trigger}</span> : null}
              </button>
            );
          })}
        </Card>
        {!m ? <div style={{ position: 'sticky', top: '96px' }}>{preview}</div> : null}
      </div>
      {m ? <Modal open={!!cur} onClose={() => setSel(null)} eyebrow={cur ? AKEmail.TYPES[cur.type] : ''} title={cur ? 'To ' + cur.toName : ''} width={640}>{preview}</Modal> : null}
    </>
  );
}

const PERMS = [
  ['Check in / out, leave, tasks, goals', [1, 1, 1, 1]],
  ['Approve team leave & corrections', [0, 1, 1, 1]],
  ['Assign tasks to direct reports', [0, 1, 1, 1]],
  ['Approve / reject new employees', [0, 0, 1, 1]],
  ['Suspend / reactivate accounts', [0, 0, 1, 1]],
  ['Manage holidays & send greetings', [0, 0, 1, 1]],
  ['View email outbox, run summaries', [0, 0, 1, 1]],
  ['Change roles, manage admins', [0, 0, 0, 1]],
];

function RolesPage() {
  const S = useStore(); const { me, m, toast } = useApp();
  const people = S.users.filter((u) => u.status === 'active');
  const roles = Object.keys(AKStore.ROLES);
  return (
    <>
      <PageHeader eyebrow="Super admin" title="Roles & access" sub="What each role can do, and who has it." />
      <Table head={['Permission', ...roles.map((r) => AKStore.ROLES[r])]} minWidth={640}>
        {PERMS.map(([p, v]) => (
          <tr key={p}><td style={{ ...TD, fontWeight: 600, color: '#101B33' }}>{p}</td>{v.map((on, i) => <td key={i} style={{ ...TD, color: on ? '#2F80EC' : '#C9D3E3' }}>{on ? <PIcon name="Check" size={18} stroke={2.2} /> : '—'}</td>)}</tr>
        ))}
      </Table>
      <h3 style={{ margin: '28px 0 14px', fontSize: '17px', fontWeight: 800, color: '#101B33' }}>People</h3>
      <Card pad={m ? '6px 14px' : '6px 20px'}>
        {people.map((u, i) => (
          <div key={u.id} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', padding: '12px 0', borderTop: i ? '1px solid #EDF1F8' : 'none' }}>
            <div style={{ flex: '1 1 220px', minWidth: 0 }}><Person u={u} sub={u.designation + ' · ' + u.dept} size={34} /></div>
            <div style={{ width: m ? '100%' : '220px' }}>
              <Select value={u.role} disabled={u.id === me.id} onChange={(e) => { AKStore.act.setRole(u.id, e.target.value); toast(u.name + ' is now ' + AKStore.ROLES[e.target.value]); }} options={roles.map((r) => [r, AKStore.ROLES[r]])} />
            </div>
          </div>
        ))}
      </Card>
    </>
  );
}

Object.assign(window, { AdminOverview, EmployeesPage, ApprovalsPage, AdminHolidays, OutboxPage, RolesPage });
