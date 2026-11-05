const PRIORITY_TONE = { High: 'red', Medium: 'amber', Low: 'grey' };
const NEXT_STATUS = { todo: 'in_progress', in_progress: 'done', done: 'todo' };

function assignableFor(S, me) {
  const admin = ['hr_admin', 'super_admin'].includes(me.role);
  return S.users.filter((u) => u.status === 'active' && u.id !== me.id && (admin || u.managerId === me.id));
}

function AssignTaskModal({ open, onClose, preset }) {
  const S = useStore(); const { me, toast } = useApp();
  const people = assignableFor(S, me);
  const blank = () => ({ assigneeId: preset || (people[0] || {}).id || '', title: '', desc: '', due: AKH.iso(AKH.addDays(AKH.today(), 2)), priority: 'Medium' });
  const [f, setF] = React.useState(blank);
  const [err, setErr] = React.useState('');
  React.useEffect(() => { setF(blank()); setErr(''); }, [open, preset]);
  const submit = () => {
    if (!f.assigneeId) return setErr('Choose who this is for.');
    if (!f.title.trim()) return setErr('Give the task a title.');
    AKStore.act.addTask(me.id, f); onClose(); toast('Task assigned · email sent to ' + AKH.user(f.assigneeId).name);
  };
  return (
    <Modal open={open} onClose={onClose} eyebrow="Tasks" title="Assign a task">
      <div style={{ display: 'grid', gap: '14px' }}>
        <Select label="Assign to" value={f.assigneeId} onChange={(e) => setF({ ...f, assigneeId: e.target.value })} options={people.map((u) => [u.id, u.name + ' · ' + u.designation])} />
        <Input label="Title" value={f.title} onChange={(e) => setF({ ...f, title: e.target.value })} placeholder="e.g. Shortlist 5 profiles for TechNova" />
        <TextArea label="Details" hint="Optional" rows={3} value={f.desc} onChange={(e) => setF({ ...f, desc: e.target.value })} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', alignItems: 'end' }}>
          <Input label="Due" type="date" min={AKH.todayIso()} value={f.due} onChange={(e) => setF({ ...f, due: e.target.value })} />
          <div style={{ display: 'grid', gap: '7px' }}><Label>Priority</Label><Segmented full options={[['Low', 'Low'], ['Medium', 'Med'], ['High', 'High']]} value={f.priority} onChange={(v) => setF({ ...f, priority: v })} /></div>
        </div>
        <ErrorLine>{err}</ErrorLine>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}><Btn variant="ghost" onClick={onClose}>Cancel</Btn><Btn icon="Send" onClick={submit}>Assign &amp; email</Btn></div>
      </div>
    </Modal>
  );
}

function TaskRow({ x, first, showAssignee, onOpen }) {
  const t = AKH.todayIso(); const over = x.status !== 'done' && x.due < t; const done = x.status === 'done';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 4px', borderTop: first ? 'none' : '1px solid #EDF1F8' }}>
      <button type="button" aria-label={done ? 'Mark as to do' : 'Mark as done'} onClick={() => AKStore.act.setTaskStatus(x.id, done ? 'todo' : 'done')}
        style={{ width: '24px', height: '24px', borderRadius: '50%', border: done ? 'none' : '1.5px solid #C9D8F2', background: done ? '#2F80EC' : '#fff', color: '#fff', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
        {done ? <PIcon name="Check" size={14} stroke={2.4} /> : null}
      </button>
      <button type="button" onClick={onOpen} style={{ flex: 1, minWidth: 0, border: 'none', background: 'none', padding: 0, textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit' }}>
        <span style={{ display: 'block', fontSize: '15px', fontWeight: 700, color: done ? '#8A94A6' : '#101B33', textDecoration: done ? 'line-through' : 'none', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{x.title}</span>
        <span style={{ display: 'block', marginTop: '3px', fontSize: '13px', color: over ? '#B9382F' : '#7A859A', fontWeight: over ? 700 : 500 }}>
          {done ? 'Completed' : over ? 'Overdue · was due ' + fmt.d(x.due) : x.due === t ? 'Due today' : 'Due ' + fmt.dw(x.due)} · {showAssignee ? 'for ' + AKH.user(x.assigneeId).name : 'from ' + AKH.user(x.byId).name}
        </span>
      </button>
      <Badge tone={PRIORITY_TONE[x.priority]}>{x.priority}</Badge>
      <StatusBadge status={x.status} />
    </div>
  );
}

function TasksPage() {
  const S = useStore(); const { me, m } = useApp();
  const canAssign = me.role !== 'employee';
  const [scope, setScope] = React.useState('mine');
  const [filter, setFilter] = React.useState('open');
  const [openId, setOpenId] = React.useState(null);
  const [assign, setAssign] = React.useState(false);
  const base = S.tasks.filter((x) => (scope === 'mine' ? x.assigneeId === me.id : x.byId === me.id && x.assigneeId !== me.id));
  const groups = { open: base.filter((x) => x.status !== 'done'), todo: base.filter((x) => x.status === 'todo'), in_progress: base.filter((x) => x.status === 'in_progress'), done: base.filter((x) => x.status === 'done') };
  const list = groups[filter].slice().sort((a, b) => a.due.localeCompare(b.due));
  const sel = S.tasks.find((x) => x.id === openId);
  return (
    <>
      <PageHeader eyebrow="Tasks" title={scope === 'mine' ? 'My tasks' : 'Tasks I assigned'} actions={canAssign ? <Btn icon="Plus" onClick={() => setAssign(true)}>Assign task</Btn> : null} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ overflowX: 'auto', maxWidth: '100%' }}><Segmented options={[['open', 'Open', groups.open.length], ['todo', 'To do', groups.todo.length], ['in_progress', 'In progress', groups.in_progress.length], ['done', 'Done', groups.done.length]]} value={filter} onChange={setFilter} /></div>
        {canAssign ? <Segmented options={[['mine', 'Mine'], ['assigned', 'Assigned by me']]} value={scope} onChange={setScope} /> : null}
      </div>
      <Card pad={m ? '6px 14px' : '8px 20px'}>
        {list.length === 0 ? <Empty icon="ListChecks" title={filter === 'done' ? 'Nothing completed yet' : 'All clear'} body={filter === 'done' ? null : 'No tasks in this view.'} /> : list.map((x, i) => <TaskRow key={x.id} x={x} first={i === 0} showAssignee={scope !== 'mine'} onOpen={() => setOpenId(x.id)} />)}
      </Card>
      <Modal open={!!sel} onClose={() => setOpenId(null)} eyebrow={sel ? sel.priority + ' priority' : ''} title={sel ? sel.title : ''}>
        {sel ? (
          <div style={{ display: 'grid', gap: '18px' }}>
            {sel.desc ? <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#43506A' }}>{sel.desc}</p> : null}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', background: '#F8FAFE', border: '1px solid #E3EAF6', borderRadius: '16px', padding: '16px' }}>
              <div><Label>Assigned by</Label><div style={{ marginTop: '8px' }}><Person u={AKH.user(sel.byId)} size={30} /></div></div>
              <div><Label>Due</Label><p style={{ margin: '10px 0 0', fontSize: '15px', fontWeight: 700, color: '#101B33' }}>{fmt.long(sel.due)}</p></div>
            </div>
            <div style={{ display: 'grid', gap: '8px' }}><Label>Status</Label><Segmented full options={[['todo', 'To do'], ['in_progress', 'In progress'], ['done', 'Done']]} value={sel.status} onChange={(v) => AKStore.act.setTaskStatus(sel.id, v)} /></div>
          </div>
        ) : null}
      </Modal>
      <AssignTaskModal open={assign} onClose={() => setAssign(false)} />
    </>
  );
}

const RATINGS = [[1, 'Needs improvement'], [2, 'Developing'], [3, 'Meets expectations'], [4, 'Exceeds expectations'], [5, 'Outstanding']];

function PerformancePage() {
  const S = useStore(); const { me, m, toast } = useApp();
  const goals = S.goals.filter((g) => g.userId === me.id);
  const overall = goals.length ? Math.round(goals.reduce((a, g) => a + g.progress * g.weight, 0) / goals.reduce((a, g) => a + g.weight, 0)) : 0;
  const sub = S.assessments[me.id];
  const [edit, setEdit] = React.useState(null);
  const [val, setVal] = React.useState({ progress: 0, note: '' });
  const [f, setF] = React.useState({ rating: 0, achievements: '', challenges: '', next: '' });
  const [err, setErr] = React.useState('');
  const g = goals.find((x) => x.id === edit);
  const daysLeft = Math.round((AKH.parse(S.cycle.due) - AKH.today()) / 864e5);
  const submit = () => {
    if (!f.rating) return setErr('Choose an overall rating.');
    if (!f.achievements.trim() || !f.next.trim()) return setErr('Fill in your achievements and your focus for next period.');
    AKStore.act.submitAssessment(me.id, f); toast('Self-assessment submitted to ' + (me.managerId ? AKH.user(me.managerId).name : 'HR'));
  };
  return (
    <>
      <PageHeader eyebrow="Performance" title={S.cycle.name} sub="Keep your goals up to date through the cycle and submit your self-assessment before the deadline." />
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,1.25fr) minmax(0,1fr)', gap: m ? '16px' : '22px', alignItems: 'start' }}>
        <Card>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px', paddingBottom: '18px', marginBottom: '6px', borderBottom: '1px solid #EDF1F8' }}>
            <div><h3 style={{ margin: 0, fontSize: '17px', fontWeight: 800, color: '#101B33' }}>My goals</h3><p style={{ margin: '4px 0 0', fontSize: '13.5px', color: '#7A859A' }}>Weighted progress across {goals.length} goals</p></div>
            <p style={{ margin: 0, fontSize: '44px', lineHeight: 0.9, letterSpacing: '-.045em', fontWeight: 800, color: '#2F80EC' }}>{overall}<span style={{ fontSize: '20px' }}>%</span></p>
          </div>
          {goals.length === 0 ? <Empty icon="Target" title="No goals set yet" body="Your manager will add goals for this cycle." /> : goals.map((x, i) => (
            <div key={x.id} style={{ padding: '16px 0', borderTop: i ? '1px solid #EDF1F8' : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                <div style={{ flex: 1, minWidth: 0 }}><p style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#101B33' }}>{x.title}</p><p style={{ margin: '3px 0 0', fontSize: '12.5px', color: '#7A859A' }}>Weight {x.weight}% · due {fmt.d(x.due)} · updated {fmt.d(x.updatedAt)}</p></div>
                <Btn size="sm" variant="outline" onClick={() => { setEdit(x.id); setVal({ progress: x.progress, note: '' }); }}>Update</Btn>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div style={{ flex: 1 }}><Progress value={x.progress} /></div><span style={{ width: '40px', textAlign: 'right', fontSize: '14px', fontWeight: 800, color: '#06367E' }}>{x.progress}%</span></div>
            </div>
          ))}
        </Card>
        <Card>
          <CardHead title="Self-assessment" sub={sub ? 'Submitted ' + fmt.d(sub.submittedAt) : 'Due ' + fmt.long(S.cycle.due) + (daysLeft >= 0 ? ' · ' + daysLeft + ' days left' : '')} action={sub ? <Badge tone="green">Submitted</Badge> : <Badge tone="amber">Open</Badge>} />
          {sub ? (
            <div style={{ display: 'grid', gap: '16px' }}>
              <div style={{ background: '#F8FAFE', border: '1px solid #E3EAF6', borderRadius: '14px', padding: '14px 16px' }}><Label>Overall rating</Label><p style={{ margin: '6px 0 0', fontSize: '17px', fontWeight: 800, color: '#06367E' }}>{sub.rating} · {RATINGS[sub.rating - 1][1]}</p></div>
              {[['Achievements', sub.achievements], ['Challenges', sub.challenges], ['Focus for next period', sub.next]].map(([l, v]) => v ? <div key={l}><Label>{l}</Label><p style={{ margin: '6px 0 0', fontSize: '14.5px', lineHeight: 1.6, color: '#43506A' }}>{v}</p></div> : null)}
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '16px' }}>
              <div style={{ display: 'grid', gap: '8px' }}>
                <Label hint={f.rating ? RATINGS[f.rating - 1][1] : null}>Overall rating</Label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '8px' }}>
                  {RATINGS.map(([n, l]) => (
                    <button key={n} type="button" title={l} onClick={() => { setF({ ...f, rating: n }); setErr(''); }}
                      style={{ height: '46px', borderRadius: '12px', border: '1px solid ' + (f.rating === n ? '#2F80EC' : '#E1E8F4'), background: f.rating === n ? '#2F80EC' : f.rating > n ? '#E7F1FD' : '#F8FAFE', color: f.rating === n ? '#fff' : '#06367E', fontSize: '17px', fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit' }}>{n}</button>
                  ))}
                </div>
              </div>
              <TextArea label="Key achievements" rows={3} value={f.achievements} onChange={(e) => setF({ ...f, achievements: e.target.value })} placeholder="What did you deliver this cycle?" />
              <TextArea label="Challenges" hint="Optional" rows={2} value={f.challenges} onChange={(e) => setF({ ...f, challenges: e.target.value })} />
              <TextArea label="Focus for next period" rows={2} value={f.next} onChange={(e) => setF({ ...f, next: e.target.value })} />
              <ErrorLine>{err}</ErrorLine>
              <Btn icon="Send" onClick={submit} full={m}>Submit to {me.managerId ? AKH.user(me.managerId).name.split(' ')[0] : 'HR'}</Btn>
            </div>
          )}
        </Card>
      </div>
      <Modal open={!!g} onClose={() => setEdit(null)} eyebrow="Update goal" title={g ? g.title : ''}>
        {g ? (
          <div style={{ display: 'grid', gap: '18px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px' }}><Label>Progress</Label><span style={{ fontSize: '30px', fontWeight: 800, letterSpacing: '-.03em', color: '#2F80EC' }}>{val.progress}%</span></div>
              <input type="range" min="0" max="100" step="5" value={val.progress} onChange={(e) => setVal({ ...val, progress: Number(e.target.value) })} style={{ width: '100%', accentColor: '#2F80EC' }} />
            </div>
            <TextArea label="What changed?" hint="Optional" rows={2} value={val.note} onChange={(e) => setVal({ ...val, note: e.target.value })} />
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}><Btn variant="ghost" onClick={() => setEdit(null)}>Cancel</Btn><Btn onClick={() => { AKStore.act.updateGoal(g.id, val.progress, val.note); setEdit(null); toast('Goal updated'); }}>Save</Btn></div>
          </div>
        ) : null}
      </Modal>
    </>
  );
}

const HOL_TONE = { National: 'blue', Festival: 'amber', Telangana: 'green' };

function HolidaysPage() {
  const S = useStore(); const { m } = useApp();
  const [type, setType] = React.useState('all');
  const t = AKH.todayIso(); const now = AKH.today();
  const year = now.getFullYear();
  const list = S.holidays.filter((h) => h.date.startsWith(String(year)) || (h.date > t && h.date.startsWith(String(year + 1))));
  const next = S.holidays.find((h) => h.date >= t && !AKH.isWeekend(AKH.parse(h.date))) || S.holidays.find((h) => h.date >= t);
  const shown = list.filter((h) => type === 'all' || h.type === type);
  const months = {};
  shown.forEach((h) => { const k = h.date.slice(0, 7); (months[k] = months[k] || []).push(h); });
  const off = list.filter((h) => !AKH.isWeekend(AKH.parse(h.date)) && h.date.startsWith(String(year))).length;
  return (
    <>
      <PageHeader eyebrow="Holidays" title={'Holiday calendar ' + year} sub={'Hyderabad office · Telangana general holidays plus national holidays. ' + off + ' fall on working days this year.'} />
      {next ? (() => {
        const d = AKH.parse(next.date); const days = Math.round((d - now) / 864e5);
        return (
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '22px', background: '#2F80EC', padding: m ? '22px' : '30px 34px', marginBottom: m ? '18px' : '24px', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '18px' }}>
            <div aria-hidden="true" style={{ position: 'absolute', bottom: '-80%', right: '-6%', width: '50%', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle at 40% 40%, rgba(255,255,255,.18), rgba(255,255,255,0) 70%)' }}></div>
            <div style={{ position: 'relative' }}>
              <p style={{ margin: '0 0 10px', fontSize: '11.5px', fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.82)' }}>Next holiday</p>
              <p style={{ margin: 0, fontSize: m ? '30px' : '44px', lineHeight: 1, letterSpacing: '-.035em', fontWeight: 800, color: '#fff' }}>{next.name}</p>
              <p style={{ margin: '12px 0 0', fontSize: '15px', fontWeight: 600, color: '#fff' }}>{fmt.long(next.date)}</p>
            </div>
            <div style={{ position: 'relative', textAlign: 'right' }}>
              <p style={{ margin: 0, fontSize: m ? '44px' : '64px', lineHeight: 0.9, letterSpacing: '-.045em', fontWeight: 800, color: '#fff' }}>{days}</p>
              <p style={{ margin: '6px 0 0', fontSize: '12px', fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.82)' }}>{days === 1 ? 'day to go' : 'days to go'}</p>
            </div>
          </div>
        );
      })() : null}
      <div style={{ marginBottom: '16px', overflowX: 'auto' }}><Segmented options={[['all', 'All', list.length], ['National', 'National'], ['Festival', 'Festival'], ['Telangana', 'Telangana']]} value={type} onChange={setType} /></div>
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(auto-fill, minmax(340px, 1fr))', gap: m ? '14px' : '18px', alignItems: 'start' }}>
        {Object.entries(months).map(([k, hs]) => (
          <Card key={k} pad="18px 20px">
            <p style={{ margin: '0 0 6px', fontSize: '12px', fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: '#2F80EC' }}>{AKH.parse(k + '-01').toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</p>
            {hs.map((h, i) => {
              const d = AKH.parse(h.date); const past = h.date < t; const we = AKH.isWeekend(d);
              return (
                <div key={h.id} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '11px 0', borderTop: i ? '1px solid #EDF1F8' : 'none', opacity: past ? 0.5 : 1 }}>
                  <div style={{ width: '42px', flex: '0 0 auto' }}><p style={{ margin: 0, fontSize: '22px', lineHeight: 1, fontWeight: 800, letterSpacing: '-.03em', color: '#06367E' }}>{d.getDate()}</p><p style={{ margin: '3px 0 0', fontSize: '11px', fontWeight: 700, color: '#8A94A6' }}>{d.toLocaleDateString('en-IN', { weekday: 'short' })}</p></div>
                  <div style={{ flex: 1, minWidth: 0 }}><p style={{ margin: 0, fontSize: '14.5px', fontWeight: 700, color: '#101B33' }}>{h.name}</p>{we ? <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#8A94A6' }}>Falls on a weekend</p> : null}</div>
                  <Badge tone={HOL_TONE[h.type] || 'grey'}>{h.type}</Badge>
                </div>
              );
            })}
          </Card>
        ))}
      </div>
      <p style={{ margin: '18px 0 0', fontSize: '13px', color: '#7A859A' }}>Dates for Eid, Bakrid, Muharram and Milad-un-Nabi depend on the moon sighting and may move by a day. HR will confirm.</p>
    </>
  );
}

function DecideModal({ item, onClose }) {
  const { me, toast } = useApp(); const [note, setNote] = React.useState('');
  React.useEffect(() => setNote(''), [item]);
  if (!item) return null;
  const { leave, approve } = item; const u = AKH.user(leave.userId);
  return (
    <Modal open onClose={onClose} eyebrow={approve ? 'Approve leave' : 'Decline leave'} title={u.name + ' · ' + leave.days + ' day' + (leave.days > 1 ? 's' : '')}>
      <div style={{ display: 'grid', gap: '14px' }}>
        <p style={{ margin: 0, fontSize: '14.5px', color: '#43506A' }}>{AKStore.LEAVE_TYPES[leave.type]} · {fmt.range(leave.from, leave.to)}<br /><span style={{ color: '#7A859A' }}>&#8220;{leave.reason}&#8221;</span></p>
        <TextArea label={approve ? 'Note to ' + u.name.split(' ')[0] : 'Reason for declining'} hint={approve ? 'Optional' : null} rows={2} value={note} onChange={(e) => setNote(e.target.value)} />
        <p style={{ margin: 0, fontSize: '13px', color: '#7A859A' }}>{u.name.split(' ')[0]} will get an email at {u.email}.</p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
          <Btn variant="ghost" onClick={onClose}>Cancel</Btn>
          <Btn variant={approve ? 'primary' : 'danger'} onClick={() => { AKStore.act.decideLeave(leave.id, approve, me.id, note); onClose(); toast('Leave ' + (approve ? 'approved' : 'declined') + ' · email sent'); }}>{approve ? 'Approve' : 'Decline'}</Btn>
        </div>
      </div>
    </Modal>
  );
}

function LeaveRequestCard({ l, onDecide }) {
  const u = AKH.user(l.userId); const bal = u.leave[l.type];
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px', padding: '14px 0', borderTop: '1px solid #EDF1F8' }}>
      <div style={{ flex: '1 1 220px', minWidth: 0 }}><Person u={u} sub={AKStore.LEAVE_TYPES[l.type] + ' · ' + fmt.range(l.from, l.to) + ' · ' + l.days + 'd'} /></div>
      <p style={{ flex: '2 1 200px', margin: 0, fontSize: '13.5px', color: '#5B6577' }}>{l.reason}<span style={{ display: 'block', marginTop: '2px', fontSize: '12px', color: '#8A94A6' }}>{bal.total - bal.used} of {bal.total} days left</span></p>
      <div style={{ display: 'flex', gap: '8px' }}><Btn size="sm" variant="danger" onClick={() => onDecide({ leave: l, approve: false })}>Decline</Btn><Btn size="sm" onClick={() => onDecide({ leave: l, approve: true })}>Approve</Btn></div>
    </div>
  );
}

function CorrectionCard({ c }) {
  const { me, toast } = useApp(); const S = useStore(); const u = AKH.user(c.userId);
  const orig = (S.attendance[c.userId] || {})[c.date];
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px', padding: '14px 0', borderTop: '1px solid #EDF1F8' }}>
      <div style={{ flex: '1 1 220px', minWidth: 0 }}><Person u={u} sub={fmt.dw(c.date) + ' · requested ' + fmt.t(c.in) + ' – ' + fmt.t(c.out)} /></div>
      <p style={{ flex: '2 1 200px', margin: 0, fontSize: '13.5px', color: '#5B6577' }}>{c.reason}<span style={{ display: 'block', marginTop: '2px', fontSize: '12px', color: '#8A94A6' }}>Recorded: {orig && orig.in ? fmt.t(orig.in) + ' – ' + (orig.out ? fmt.t(orig.out) : 'no check-out') : 'no check-in'}</span></p>
      {c.status === 'pending'
        ? <div style={{ display: 'flex', gap: '8px' }}><Btn size="sm" variant="danger" onClick={() => { AKStore.act.decideCorrection(c.id, false, me.id); toast('Correction declined'); }}>Decline</Btn><Btn size="sm" onClick={() => { AKStore.act.decideCorrection(c.id, true, me.id); toast('Correction approved · attendance updated'); }}>Approve</Btn></div>
        : <StatusBadge status={c.status} />}
    </div>
  );
}

function TeamPage() {
  const S = useStore(); const { me, m } = useApp();
  const [decide, setDecide] = React.useState(null);
  const [assign, setAssign] = React.useState(null);
  const team = S.users.filter((u) => u.managerId === me.id && u.status === 'active');
  const ids = team.map((u) => u.id); const t = AKH.todayIso();
  const leaves = S.leaves.filter((l) => l.status === 'pending' && l.approverId === me.id);
  const corrections = S.corrections.filter((c) => c.status === 'pending' && ids.includes(c.userId));
  const status = (u) => { const di = dayInfo(S, u.id, t); if (di.kind === 'office' || di.kind === 'present') return ['blue', 'Office · ' + fmt.t(di.rec.in)]; if (di.kind === 'wfh') return ['grey', 'WFH · ' + fmt.t(di.rec.in)]; if (di.kind === 'leave') return ['amber', 'On leave']; if (di.kind === 'holiday') return ['navy', 'Holiday']; if (di.kind === 'weekend') return ['grey', 'Weekend']; return ['red', 'Not checked in']; };
  return (
    <>
      <PageHeader eyebrow="My team" title={team.length + ' direct report' + (team.length === 1 ? '' : 's')} actions={team.length ? <Btn icon="Plus" onClick={() => setAssign(team[0].id)}>Assign task</Btn> : null} />
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) minmax(0,1.3fr)', gap: m ? '16px' : '22px', alignItems: 'start' }}>
        <Card>
          <CardHead title="Today" sub={fmt.long(t)} />
          {team.length === 0 ? <Empty icon="Users" title="No direct reports" /> : team.map((u, i) => {
            const [tone, label] = status(u); const open = S.tasks.filter((x) => x.assigneeId === u.id && x.status !== 'done').length; const a = S.assessments[u.id];
            return (
              <div key={u.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '13px 0', borderTop: i ? '1px solid #EDF1F8' : 'none' }}>
                <div style={{ flex: 1, minWidth: 0 }}><Person u={u} sub={open + ' open task' + (open === 1 ? '' : 's') + ' · review ' + (a ? 'submitted' : 'pending')} /></div>
                <Badge tone={tone}>{label}</Badge>
                <button type="button" aria-label={'Assign task to ' + u.name} title="Assign task" onClick={() => setAssign(u.id)} style={{ width: '34px', height: '34px', borderRadius: '50%', border: '1px solid #DCE5F5', background: '#fff', color: '#06367E', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}><PIcon name="Plus" size={16} /></button>
              </div>
            );
          })}
        </Card>
        <div style={{ display: 'grid', gap: m ? '16px' : '22px', minWidth: 0 }}>
          <Card>
            <CardHead title="Leave requests" sub={leaves.length ? leaves.length + ' waiting for you' : 'Nothing waiting'} style={{ marginBottom: leaves.length ? '4px' : '18px' }} />
            {leaves.length === 0 ? <Empty icon="CalendarDays" title="You're all caught up" /> : leaves.map((l) => <LeaveRequestCard key={l.id} l={l} onDecide={setDecide} />)}
          </Card>
          <Card>
            <CardHead title="Attendance corrections" sub={corrections.length ? corrections.length + ' waiting for you' : 'Nothing waiting'} style={{ marginBottom: corrections.length ? '4px' : '18px' }} />
            {corrections.length === 0 ? <Empty icon="ClockAlert" title="No corrections to review" /> : corrections.map((c) => <CorrectionCard key={c.id} c={c} />)}
          </Card>
        </div>
      </div>
      <DecideModal item={decide} onClose={() => setDecide(null)} />
      <AssignTaskModal open={!!assign} preset={assign} onClose={() => setAssign(null)} />
    </>
  );
}

Object.assign(window, { TasksPage, PerformancePage, HolidaysPage, TeamPage, AssignTaskModal, DecideModal, LeaveRequestCard, CorrectionCard, HOL_TONE });
