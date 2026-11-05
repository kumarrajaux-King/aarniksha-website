function useNow(ms = 1000) {
  const [n, setN] = React.useState(new Date());
  React.useEffect(() => { const t = setInterval(() => setN(new Date()), ms); return () => clearInterval(t); }, [ms]);
  return n;
}

function ClockCard() {
  const S = useStore(); const { me, m, toast } = useApp(); const now = useNow();
  const [mode, setMode] = React.useState('office');
  const k = AKH.todayIso(); const rec = (S.attendance[me.id] || {})[k];
  const hol = AKH.holidayOn(k); const weekend = AKH.isWeekend(AKH.today());
  const onLeave = rec && rec.status === 'leave';
  const nowHM = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
  const worked = rec && rec.in ? Math.max(0, AKH.mins(rec.out || nowHM) - AKH.mins(rec.in)) : 0;
  let status = 'You haven\u2019t checked in yet';
  if (hol) status = 'Holiday · ' + hol.name; else if (weekend) status = 'It\u2019s the weekend'; else if (onLeave) status = 'You\u2019re on ' + AKStore.LEAVE_TYPES[rec.type].toLowerCase() + ' today';
  else if (rec && rec.out) status = 'Checked out at ' + fmt.t(rec.out); else if (rec && rec.in) status = 'Checked in at ' + fmt.t(rec.in) + ' · ' + (rec.status === 'wfh' ? 'Working from home' : 'Office');
  const canIn = !hol && !weekend && !onLeave && !(rec && rec.in);
  const canOut = rec && rec.in && !rec.out;
  return (
    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '22px', background: 'linear-gradient(140deg,#04255A 0%,#06367E 52%,#0A4497 100%)', padding: m ? '22px' : '30px 32px', color: '#fff' }}>
      <div aria-hidden="true" style={{ position: 'absolute', top: '-60%', right: '-20%', width: '70%', aspectRatio: '1', borderRadius: '50%', border: '1px solid rgba(255,255,255,.1)' }}></div>
      <div aria-hidden="true" style={{ position: 'absolute', top: '-30%', right: '2%', width: '42%', aspectRatio: '1', borderRadius: '50%', border: '1px dashed rgba(255,255,255,.08)' }}></div>
      <div style={{ position: 'relative' }}>
        <p style={{ margin: 0, fontSize: '11.5px', fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: '#9CC6FA' }}>Today · {now.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'short' })}</p>
        <p style={{ margin: '12px 0 0', fontSize: m ? '44px' : '58px', lineHeight: 1, letterSpacing: '-.04em', fontWeight: 800, fontVariantNumeric: 'tabular-nums' }}>
          {now.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true }).replace(/\s?(am|pm)/i, '')}
          <span style={{ fontSize: '0.42em', marginLeft: '8px', letterSpacing: 0, color: 'rgba(255,255,255,.7)' }}>{String(now.getSeconds()).padStart(2, '0')} · {now.getHours() < 12 ? 'am' : 'pm'}</span>
        </p>
        <p style={{ margin: '12px 0 0', fontSize: '15px', color: 'rgba(255,255,255,.86)' }}>{status}</p>
        {rec && rec.in ? (
          <div style={{ marginTop: '18px', maxWidth: '420px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,.78)', marginBottom: '8px' }}><span>{Math.floor(worked / 60)}h {String(worked % 60).padStart(2, '0')}m worked</span><span>Target 9h</span></div>
            <div style={{ height: '6px', borderRadius: '999px', background: 'rgba(255,255,255,.16)', overflow: 'hidden' }}><div style={{ width: Math.min(100, (worked / 540) * 100) + '%', height: '100%', background: 'linear-gradient(90deg,#6FA8F5,#FFFFFF)', borderRadius: '999px' }}></div></div>
          </div>
        ) : null}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', marginTop: '22px' }}>
          {canIn ? <Segmented dark options={[['office', 'Office'], ['wfh', 'Work from home']]} value={mode} onChange={setMode} /> : null}
          {canIn ? <Btn variant="white" size="lg" icon="LogIn" onClick={() => { AKStore.act.checkIn(me.id, mode); toast('Checked in · ' + (mode === 'wfh' ? 'working from home' : 'office')); }}>Check in</Btn> : null}
          {canOut ? <Btn variant="white" size="lg" icon="LogOut" onClick={() => { AKStore.act.checkOut(me.id); toast('Checked out. See you tomorrow!'); }}>Check out</Btn> : null}
        </div>
      </div>
    </div>
  );
}

function LeaveBalances({ me, compact }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: compact ? '14px' : '16px' }}>
      {Object.entries(AKStore.LEAVE_TYPES).map(([k, label]) => {
        const b = me.leave[k]; const left = b.total - b.used;
        return (
          <div key={k} style={{ minWidth: 0 }}>
            <p style={{ margin: 0, fontSize: '11.5px', fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: '#8A94A6', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{compact ? k : label}</p>
            <p style={{ margin: '8px 0 10px', whiteSpace: 'nowrap', fontSize: compact ? '26px' : '32px', lineHeight: 1, letterSpacing: '-.035em', fontWeight: 800, color: '#06367E' }}>{left}<span style={{ fontSize: '14px', fontWeight: 700, color: '#8A94A6', letterSpacing: 0 }}> / {b.total}</span></p>
            <Progress value={(left / b.total) * 100} h={6} />
          </div>
        );
      })}
    </div>
  );
}

function HomePage({ go }) {
  const S = useStore(); const { me, m } = useApp();
  const t = AKH.todayIso(); const now = AKH.today();
  const tasks = S.tasks.filter((x) => x.assigneeId === me.id && x.status !== 'done').sort((a, b) => a.due.localeCompare(b.due)).slice(0, 4);
  const hols = S.holidays.filter((h) => h.date >= t).slice(0, 3);
  const st = AKH.monthStats(me.id, now.getFullYear(), now.getMonth());
  const notes = S.notifications.filter((n) => n.userId === me.id).sort((a, b) => b.at.localeCompare(a.at)).slice(0, 4);
  const c = navCounts(S, me);
  const waiting = (c.team || 0) + (['hr_admin', 'super_admin'].includes(me.role) ? (c['admin-employees'] || 0) + (c['admin-approvals'] || 0) : 0);
  const link = (label, r) => <button type="button" onClick={() => go(r)} style={{ border: 'none', background: 'none', padding: 0, color: '#2F80EC', fontSize: '13.5px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}>{label} &#8594;</button>;
  return (
    <>
      <div style={{ marginBottom: m ? '18px' : '26px' }}>
        <h1 style={{ margin: 0, fontSize: m ? '26px' : '34px', lineHeight: 1.08, letterSpacing: '-.03em', fontWeight: 800, color: '#101B33' }}>{greet()}, {firstName(me)}.</h1>
        <p style={{ margin: '8px 0 0', fontSize: '15px', color: '#5B6577' }}>{me.designation} · {me.dept} · {me.empId}</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(auto-fit, minmax(380px, 1fr))', gap: m ? '16px' : '22px', alignItems: 'start' }}>
        <div style={{ display: 'grid', gap: m ? '16px' : '22px', minWidth: 0 }}>
          <ClockCard />
          <Card>
            <CardHead title="Due soon" sub={tasks.length ? tasks.length + ' open tasks' : null} action={link('All tasks', 'tasks')} />
            {tasks.length === 0 ? <Empty icon="ListChecks" title="Nothing due" body="New tasks from your manager will show up here." /> : tasks.map((x, i) => {
              const over = x.due < t;
              return (
                <div key={x.id} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '13px 0', borderTop: i ? '1px solid #EDF1F8' : 'none' }}>
                  <button type="button" aria-label="Mark done" onClick={() => AKStore.act.setTaskStatus(x.id, 'done')} style={{ width: '22px', height: '22px', borderRadius: '50%', border: '1.5px solid #C9D8F2', background: '#fff', cursor: 'pointer', flex: '0 0 auto' }}></button>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ margin: 0, fontSize: '14.5px', fontWeight: 700, color: '#101B33', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{x.title}</p>
                    <p style={{ margin: '2px 0 0', fontSize: '12.5px', color: over ? '#B9382F' : '#7A859A', fontWeight: over ? 700 : 500 }}>{over ? 'Overdue · ' : x.due === t ? 'Due today · ' : 'Due ' + fmt.dw(x.due) + ' · '}{AKH.user(x.byId).name}</p>
                  </div>
                  {x.priority === 'High' ? <Badge tone="red">High</Badge> : null}
                </div>
              );
            })}
          </Card>
          <Card>
            <CardHead title={now.toLocaleDateString('en-IN', { month: 'long' }) + ' so far'} action={link('Attendance', 'attendance')} />
            <div style={{ display: 'grid', gridTemplateColumns: m ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: '18px' }}>
              <Stat label="Office" value={st.present} /><Stat label="WFH" value={st.wfh} /><Stat label="Leave" value={st.leave} /><Stat label="Avg hours" value={st.avgHours} />
            </div>
          </Card>
        </div>
        <div style={{ display: 'grid', gap: m ? '16px' : '22px', minWidth: 0 }}>
          {waiting ? (
            <Card tint style={{ borderColor: '#C9D8F2' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px' }}>
                <span style={{ width: '44px', height: '44px', flex: '0 0 auto', borderRadius: '50%', background: '#2F80EC', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px', fontWeight: 800 }}>{waiting}</span>
                <div style={{ flex: '1 1 140px', minWidth: 0 }}><p style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#101B33' }}>Waiting for you</p><p style={{ margin: '2px 0 0', fontSize: '13px', color: '#5B6577' }}>Approvals and access requests</p></div>
                <Btn size="sm" onClick={() => go(c.team ? 'team' : c['admin-employees'] ? 'admin-employees' : 'admin-approvals')}>Review</Btn>
              </div>
            </Card>
          ) : null}
          <Card>
            <CardHead title="Leave balance" sub={'Year ' + now.getFullYear()} action={link('Apply', 'leave')} />
            <LeaveBalances me={me} compact />
          </Card>
          <Card>
            <CardHead title="Upcoming holidays" action={link('Calendar', 'holidays')} />
            {hols.map((h, i) => {
              const d = AKH.parse(h.date); const days = Math.round((d - now) / 864e5);
              return (
                <div key={h.id} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 0', borderTop: i ? '1px solid #EDF1F8' : 'none' }}>
                  <div style={{ width: '48px', textAlign: 'center', flex: '0 0 auto', borderRadius: '12px', background: '#E9EFFB', padding: '6px 0' }}>
                    <p style={{ margin: 0, fontSize: '10.5px', fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: '#2F80EC' }}>{d.toLocaleDateString('en-IN', { month: 'short' })}</p>
                    <p style={{ margin: '1px 0 0', fontSize: '19px', fontWeight: 800, color: '#06367E', lineHeight: 1.1 }}>{d.getDate()}</p>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}><p style={{ margin: 0, fontSize: '14.5px', fontWeight: 700, color: '#101B33' }}>{h.name}</p><p style={{ margin: '2px 0 0', fontSize: '12.5px', color: '#7A859A' }}>{d.toLocaleDateString('en-IN', { weekday: 'long' })}{AKH.isWeekend(d) ? ' · falls on a weekend' : ''}</p></div>
                  <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#43506A', whiteSpace: 'nowrap' }}>{days === 0 ? 'Today' : days === 1 ? 'Tomorrow' : 'in ' + days + 'd'}</span>
                </div>
              );
            })}
          </Card>
          <Card>
            <CardHead title="Updates" />
            {notes.length === 0 ? <Empty icon="Bell" title="No updates yet" /> : notes.map((n, i) => (
              <div key={n.id} style={{ display: 'flex', gap: '12px', padding: '12px 0', borderTop: i ? '1px solid #EDF1F8' : 'none' }}>
                <span style={{ width: '8px', height: '8px', marginTop: '6px', borderRadius: '50%', background: n.read ? '#DCE5F5' : '#2F80EC', flex: '0 0 auto' }}></span>
                <div style={{ flex: 1, minWidth: 0 }}><p style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: '#101B33' }}>{n.title}</p><p style={{ margin: '2px 0 0', fontSize: '13px', color: '#5B6577' }}>{n.body}</p></div>
                <span style={{ fontSize: '12px', color: '#8A94A6', whiteSpace: 'nowrap' }}>{fmt.ago(n.at)}</span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </>
  );
}

const CELL = { blue: ['#E7F1FD', '#1D6AE3'], grey: ['#EDF1F8', '#4A5670'], amber: ['#FDF1DC', '#8A5A00'], red: ['#FCEAE8', '#B9382F'], navy: ['#06367E', '#FFFFFF'] };

function CorrectionModal({ open, onClose, date }) {
  const { me, toast } = useApp(); const S = useStore();
  const rec = (S.attendance[me.id] || {})[date] || {};
  const [f, setF] = React.useState({ date: date || AKH.todayIso(), in: rec.in || '09:30', out: rec.out || '18:30', reason: '' });
  const [err, setErr] = React.useState('');
  React.useEffect(() => { const r = (S.attendance[me.id] || {})[date] || {}; setF({ date: date || AKH.iso(AKH.addDays(AKH.today(), -1)), in: r.in || '09:30', out: r.out || '18:30', reason: '' }); setErr(''); }, [open, date]);
  const submit = () => {
    if (f.date > AKH.todayIso()) return setErr('You can only correct today or earlier.');
    if (AKH.mins(f.out) <= AKH.mins(f.in)) return setErr('Check-out must be after check-in.');
    if (!f.reason.trim()) return setErr('Add a short reason for your manager.');
    AKStore.act.requestCorrection(me.id, f); onClose(); toast('Correction sent to your manager and HR');
  };
  return (
    <Modal open={open} onClose={onClose} eyebrow="Attendance" title="Request a correction">
      <div style={{ display: 'grid', gap: '14px' }}>
        <Input label="Date" type="date" value={f.date} max={AKH.todayIso()} onChange={(e) => setF({ ...f, date: e.target.value })} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
          <Input label="Check-in" type="time" value={f.in} onChange={(e) => setF({ ...f, in: e.target.value })} />
          <Input label="Check-out" type="time" value={f.out} onChange={(e) => setF({ ...f, out: e.target.value })} />
        </div>
        <TextArea label="Reason" rows={3} value={f.reason} onChange={(e) => setF({ ...f, reason: e.target.value })} placeholder="e.g. Forgot to check out after a client call" />
        <ErrorLine>{err}</ErrorLine>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}><Btn variant="ghost" onClick={onClose}>Cancel</Btn><Btn onClick={submit} icon="Send">Send request</Btn></div>
      </div>
    </Modal>
  );
}

function AttendancePage() {
  const S = useStore(); const { me, m } = useApp();
  const t = AKH.today();
  const [ym, setYm] = React.useState([t.getFullYear(), t.getMonth()]);
  const [sel, setSel] = React.useState(null);
  const [corr, setCorr] = React.useState(null);
  const [y, mo] = ym; const first = new Date(y, mo, 1); const lead = (first.getDay() + 6) % 7; const last = new Date(y, mo + 1, 0).getDate();
  const cells = [...Array(lead).fill(null), ...Array.from({ length: last }, (_, i) => AKH.iso(new Date(y, mo, i + 1)))];
  while (cells.length % 7) cells.push(null);
  const st = AKH.monthStats(me.id, y, mo);
  const mine = S.corrections.filter((c) => c.userId === me.id);
  const isCurrent = y === t.getFullYear() && mo === t.getMonth();
  const shift = (n) => { const d = new Date(y, mo + n, 1); setYm([d.getFullYear(), d.getMonth()]); };
  const info = sel ? dayInfo(S, me.id, sel) : null;
  return (
    <>
      <PageHeader eyebrow="Attendance" title="My attendance" sub={'Shift 9:30 am – 6:30 pm · check-ins after ' + fmt.t(AKStore.LATE_AFTER) + ' count as late.'} actions={<Btn variant="outline" icon="ClockAlert" onClick={() => setCorr(AKH.iso(AKH.addDays(t, -1)))}>Request correction</Btn>} />
      <Card style={{ marginBottom: m ? '16px' : '22px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: m ? 'repeat(3,1fr)' : 'repeat(6,1fr)', gap: '18px' }}>
          <Stat label="Office" value={st.present} /><Stat label="WFH" value={st.wfh} /><Stat label="Leave" value={st.leave} />
          <Stat label="Absent" value={st.absent} tone={st.absent ? '#B9382F' : undefined} /><Stat label="Late" value={st.late} /><Stat label="Avg hours" value={st.avgHours} />
        </div>
      </Card>
      <Card pad={m ? '16px' : '24px'}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '18px' }}>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 800, letterSpacing: '-.015em', color: '#101B33' }}>{first.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</h3>
          <div style={{ display: 'flex', gap: '8px' }}>
            <DS.IconButton variant="outline" label="Previous month" onClick={() => shift(-1)}>&#8592;</DS.IconButton>
            <DS.IconButton variant="outline" label="Next month" onClick={() => shift(1)} disabled={isCurrent} style={{ opacity: isCurrent ? 0.4 : 1 }}>&#8594;</DS.IconButton>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(0,1fr))', gap: m ? '4px' : '8px' }}>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => <p key={d} style={{ margin: '0 0 4px', fontSize: '11px', fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: '#8A94A6', textAlign: m ? 'center' : 'left', paddingLeft: m ? 0 : '4px' }}>{m ? d[0] : d}</p>)}
          {cells.map((k, i) => {
            if (!k) return <div key={i}></div>;
            const di = dayInfo(S, me.id, k); const isT = k === AKH.todayIso(); const c = di.tone ? CELL[di.tone] : null;
            const weekend = di.kind === 'weekend';
            return (
              <button key={k} type="button" onClick={() => setSel(k)}
                style={{ position: 'relative', minHeight: m ? '48px' : '92px', padding: m ? '6px 0' : '10px', borderRadius: m ? '10px' : '12px', border: '1px solid ' + (isT ? '#2F80EC' : '#EDF1F8'), boxShadow: isT ? '0 0 0 2px rgba(47,128,236,.15)' : 'none', background: weekend ? '#F8FAFE' : '#fff', cursor: 'pointer', textAlign: m ? 'center' : 'left', display: 'flex', flexDirection: 'column', alignItems: m ? 'center' : 'stretch', gap: '6px', fontFamily: 'inherit', minWidth: 0 }}>
                <span style={{ fontSize: '14px', fontWeight: 800, color: weekend ? '#8A94A6' : '#101B33' }}>{AKH.parse(k).getDate()}</span>
                {c ? (m
                  ? <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: c[1] === '#FFFFFF' ? '#06367E' : c[1] }}></span>
                  : <span style={{ display: 'block', padding: '3px 8px', borderRadius: '8px', background: c[0], color: c[1], fontSize: '11.5px', fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{di.label}</span>) : null}
                {!m && di.rec && di.rec.in ? <span style={{ fontSize: '11.5px', color: di.late ? '#B9382F' : '#7A859A', fontVariantNumeric: 'tabular-nums' }}>{fmt.t(di.rec.in)}{di.rec.out ? ' – ' + fmt.t(di.rec.out) : ''}</span> : null}
              </button>
            );
          })}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '18px', paddingTop: '16px', borderTop: '1px solid #EDF1F8' }}>
          {[['Office', 'blue'], ['WFH', 'grey'], ['Leave', 'amber'], ['Holiday', 'navy'], ['Absent / missed punch', 'red']].map(([l, tn]) => (
            <span key={l} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '12.5px', fontWeight: 600, color: '#5B6577' }}><span style={{ width: '10px', height: '10px', borderRadius: '3px', background: tn === 'navy' ? '#06367E' : CELL[tn][1] }}></span>{l}</span>
          ))}
        </div>
      </Card>
      <Card style={{ marginTop: m ? '16px' : '22px' }}>
        <CardHead title="My correction requests" sub="Missed check-ins or check-outs you've asked to fix" />
        {mine.length === 0 ? <Empty icon="ClockAlert" title="No corrections requested" /> : mine.map((c, i) => (
          <div key={c.id} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', padding: '13px 0', borderTop: i ? '1px solid #EDF1F8' : 'none' }}>
            <div style={{ flex: '1 1 220px', minWidth: 0 }}><p style={{ margin: 0, fontSize: '14.5px', fontWeight: 700, color: '#101B33' }}>{fmt.dw(c.date)} · {fmt.t(c.in)} – {fmt.t(c.out)}</p><p style={{ margin: '2px 0 0', fontSize: '13px', color: '#7A859A' }}>{c.reason}</p></div>
            <StatusBadge status={c.status} />
          </div>
        ))}
      </Card>
      <Modal open={!!sel} onClose={() => setSel(null)} eyebrow={info ? info.label || 'Day' : ''} title={sel ? fmt.long(sel) : ''}>
        {info ? (
          <div style={{ display: 'grid', gap: '16px' }}>
            {info.rec && info.rec.in ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px', background: '#F8FAFE', border: '1px solid #E3EAF6', borderRadius: '16px', padding: '18px' }}>
                <Stat label="Check-in" value={fmt.t(info.rec.in)} tone={info.late ? '#B9382F' : undefined} />
                <Stat label="Check-out" value={info.rec.out ? fmt.t(info.rec.out) : '—'} />
                <Stat label="Worked" value={info.rec.out ? fmt.dur(info.rec.in, info.rec.out) : '—'} />
              </div>
            ) : <p style={{ margin: 0, fontSize: '15px', color: '#5B6577' }}>{info.kind === 'holiday' ? 'Office closed for ' + info.hol.name + '.' : info.kind === 'leave' ? AKStore.LEAVE_TYPES[info.rec.type] + ' (approved).' : info.kind === 'absent' ? 'No check-in recorded for this day.' : info.kind === 'weekend' ? 'Weekend.' : 'Nothing recorded yet.'}</p>}
            {info.rec && info.rec.corrected ? <Badge tone="green">Corrected by approval</Badge> : null}
            {(info.kind === 'missed' || info.kind === 'absent') ? <div style={{ display: 'flex', justifyContent: 'flex-end' }}><Btn icon="ClockAlert" onClick={() => { const d = sel; setSel(null); setCorr(d); }}>Request correction</Btn></div> : null}
          </div>
        ) : null}
      </Modal>
      <CorrectionModal open={!!corr} date={corr} onClose={() => setCorr(null)} />
    </>
  );
}

function ApplyLeaveModal({ open, onClose }) {
  const { me, toast } = useApp();
  const t = AKH.todayIso();
  const [f, setF] = React.useState({ type: 'CL', from: t, to: t, reason: '' });
  const [err, setErr] = React.useState('');
  React.useEffect(() => { setF({ type: 'CL', from: t, to: t, reason: '' }); setErr(''); }, [open]);
  const days = f.from && f.to && f.to >= f.from ? AKH.workingDays(f.from, f.to) : 0;
  const left = me.leave[f.type].total - me.leave[f.type].used;
  const submit = () => {
    if (f.to < f.from) return setErr('The end date must be on or after the start date.');
    if (!days) return setErr('Those dates are all weekends or holidays.');
    if (days > left) return setErr('You only have ' + left + ' ' + AKStore.LEAVE_TYPES[f.type].toLowerCase() + ' days left.');
    if (!f.reason.trim()) return setErr('Add a short reason.');
    AKStore.act.applyLeave(me.id, f); onClose(); toast('Leave request sent to ' + (me.managerId ? AKH.user(me.managerId).name : 'HR'));
  };
  return (
    <Modal open={open} onClose={onClose} eyebrow="Leave" title="Apply for leave">
      <div style={{ display: 'grid', gap: '14px' }}>
        <Select label="Leave type" value={f.type} onChange={(e) => setF({ ...f, type: e.target.value })} options={Object.entries(AKStore.LEAVE_TYPES).map(([k, l]) => [k, l + ' · ' + (me.leave[k].total - me.leave[k].used) + ' left'])} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
          <Input label="From" type="date" value={f.from} min={t} onChange={(e) => setF({ ...f, from: e.target.value, to: e.target.value > f.to ? e.target.value : f.to })} />
          <Input label="To" type="date" value={f.to} min={f.from} onChange={(e) => setF({ ...f, to: e.target.value })} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#F4FAFF', border: '1px solid #DCE5F5', borderRadius: '12px', padding: '12px 14px', fontSize: '14px', color: '#43506A' }}>
          <span>Working days (excludes weekends &amp; holidays)</span><strong style={{ fontSize: '18px', color: '#06367E' }}>{days}</strong>
        </div>
        <TextArea label="Reason" rows={3} value={f.reason} onChange={(e) => setF({ ...f, reason: e.target.value })} placeholder="Visible to your manager and HR" />
        <ErrorLine>{err}</ErrorLine>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}><Btn variant="ghost" onClick={onClose}>Cancel</Btn><Btn icon="Send" onClick={submit}>Send request</Btn></div>
      </div>
    </Modal>
  );
}

function LeavePage() {
  const S = useStore(); const { me, m, toast } = useApp(); const [open, setOpen] = React.useState(false);
  const mine = S.leaves.filter((l) => l.userId === me.id).sort((a, b) => b.from.localeCompare(a.from));
  return (
    <>
      <PageHeader eyebrow="Leave" title="Leave" sub={'Approved by ' + (me.managerId ? AKH.user(me.managerId).name : 'HR') + '. You get an email as soon as a request is decided.'} actions={<Btn icon="Plus" onClick={() => setOpen(true)}>Apply for leave</Btn>} />
      <Card style={{ marginBottom: m ? '16px' : '22px' }}><LeaveBalances me={me} compact={m} /></Card>
      <h3 style={{ margin: '0 0 14px', fontSize: '17px', fontWeight: 800, color: '#101B33' }}>My requests</h3>
      {mine.length === 0 ? <Card><Empty icon="CalendarDays" title="No leave requests yet" /></Card> : m ? (
        <div style={{ display: 'grid', gap: '12px' }}>
          {mine.map((l) => (
            <Card key={l.id} pad="18px">
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', alignItems: 'flex-start' }}>
                <div><p style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#101B33' }}>{AKStore.LEAVE_TYPES[l.type]}</p><p style={{ margin: '3px 0 0', fontSize: '13.5px', color: '#5B6577' }}>{fmt.range(l.from, l.to)} · {l.days} day{l.days > 1 ? 's' : ''}</p></div>
                <StatusBadge status={l.status} />
              </div>
              <p style={{ margin: '10px 0 0', fontSize: '13.5px', color: '#7A859A' }}>{l.reason}</p>
              {l.note ? <p style={{ margin: '8px 0 0', fontSize: '13.5px', color: '#43506A' }}>&#8220;{l.note}&#8221;</p> : null}
              {l.status === 'pending' ? <div style={{ marginTop: '12px' }}><Btn size="sm" variant="danger" onClick={() => { AKStore.act.cancelLeave(l.id); toast('Request cancelled'); }}>Cancel request</Btn></div> : null}
            </Card>
          ))}
        </div>
      ) : (
        <Table head={['Type', 'Dates', 'Days', 'Reason', 'Approver', 'Status', '']}>
          {mine.map((l) => (
            <tr key={l.id}>
              <td style={{ ...TD, fontWeight: 700, color: '#101B33' }}>{AKStore.LEAVE_TYPES[l.type]}</td>
              <td style={TD}>{fmt.range(l.from, l.to)}</td>
              <td style={TD}>{l.days}</td>
              <td style={{ ...TD, maxWidth: '260px' }}>{l.reason}{l.note ? <span style={{ display: 'block', marginTop: '4px', color: '#06367E' }}>&#8220;{l.note}&#8221;</span> : null}</td>
              <td style={TD}>{l.approverId ? AKH.user(l.approverId).name : '—'}</td>
              <td style={TD}><StatusBadge status={l.status} /></td>
              <td style={{ ...TD, textAlign: 'right' }}>{l.status === 'pending' ? <Btn size="sm" variant="danger" onClick={() => { AKStore.act.cancelLeave(l.id); toast('Request cancelled'); }}>Cancel</Btn> : null}</td>
            </tr>
          ))}
        </Table>
      )}
      <ApplyLeaveModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

Object.assign(window, { HomePage, AttendancePage, LeavePage, LeaveBalances, useNow });
