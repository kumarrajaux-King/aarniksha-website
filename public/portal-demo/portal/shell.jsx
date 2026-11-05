const NAV = [
  { group: 'Me', items: [['home', 'Home', 'LayoutDashboard'], ['attendance', 'Attendance', 'CalendarCheck'], ['leave', 'Leave', 'CalendarDays'], ['tasks', 'Tasks', 'ListChecks'], ['performance', 'Performance', 'Target'], ['holidays', 'Holidays', 'PartyPopper']] },
  { group: 'My team', roles: ['manager', 'hr_admin', 'super_admin'], items: [['team', 'Team', 'Users']] },
  { group: 'Admin', roles: ['hr_admin', 'super_admin'], items: [['admin', 'Overview', 'LayoutGrid'], ['admin-employees', 'Employees', 'UserCheck'], ['admin-approvals', 'Approvals', 'Inbox'], ['admin-holidays', 'Holidays & festivals', 'CalendarHeart'], ['admin-outbox', 'Email outbox', 'Mail'], ['admin-roles', 'Roles & access', 'KeyRound', ['super_admin']]] },
];
const routeAllowed = (route, role) => NAV.some((g) => (!g.roles || g.roles.includes(role)) && g.items.some(([k, , , r]) => k === route && (!r || r.includes(role))));
const navFor = (role) => NAV.filter((g) => !g.roles || g.roles.includes(role)).map((g) => ({ ...g, items: g.items.filter(([, , , r]) => !r || r.includes(role)) }));
const ROUTE_LABEL = Object.fromEntries(NAV.flatMap((g) => g.items.map(([k, l]) => [k, l])));

function navCounts(S, me) {
  const t = AKH.todayIso();
  const reports = S.users.filter((u) => u.managerId === me.id).map((u) => u.id);
  return {
    tasks: S.tasks.filter((x) => x.assigneeId === me.id && x.status !== 'done' && x.due <= t).length,
    team: S.leaves.filter((l) => l.status === 'pending' && l.approverId === me.id).length + S.corrections.filter((c) => c.status === 'pending' && reports.includes(c.userId)).length,
    'admin-employees': S.users.filter((u) => u.status === 'pending').length,
    'admin-approvals': S.corrections.filter((c) => c.status === 'pending').length + S.leaves.filter((l) => l.status === 'pending').length,
  };
}

function CountDot({ n, light }) {
  if (!n) return null;
  return <span style={{ minWidth: '20px', height: '20px', padding: '0 6px', borderRadius: '999px', background: light ? '#2F80EC' : '#D4453B', color: '#fff', fontSize: '11px', fontWeight: 800, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>{n}</span>;
}

function NavItem({ k, label, icon, active, count, onClick }) {
  const [h, setH] = React.useState(false);
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} aria-current={active ? 'page' : undefined}
      style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', borderRadius: '12px', border: 'none', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left',
        background: active ? 'rgba(255,255,255,.14)' : h ? 'rgba(255,255,255,.07)' : 'transparent', color: '#fff', opacity: active || h ? 1 : 0.78, fontSize: '14.5px', fontWeight: active ? 700 : 600, transition: 'background .2s ease, opacity .2s ease' }}>
      <PIcon name={icon} size={18} color={active ? '#9CC6FA' : undefined} />
      <span style={{ flex: 1 }}>{label}</span>
      <CountDot n={count} light />
    </button>
  );
}

function Sidebar({ route, go }) {
  const S = useStore(); const { me } = useApp(); const counts = navCounts(S, me);
  return (
    <aside style={{ position: 'sticky', top: 0, height: '100vh', width: '256px', flex: '0 0 256px', background: '#06367E', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', bottom: '-18%', left: '-40%', width: '160%', aspectRatio: '1', borderRadius: '50%', border: '1px solid rgba(255,255,255,.07)', pointerEvents: 'none' }}></div>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '12px', padding: '22px 20px 18px' }}>
        <div style={{ width: '46px', height: '46px', background: '#fff', borderRadius: '12px', padding: '4px', boxSizing: 'border-box', boxShadow: '0 6px 20px rgba(2,22,56,.28)' }}><img src="assets/logo.png" alt="Aarniksha Solutions" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} /></div>
        <div>
          <p style={{ margin: 0, fontSize: '15.5px', fontWeight: 800, letterSpacing: '-.01em', color: '#fff' }}>Aarniksha</p>
          <p style={{ margin: '2px 0 0', fontSize: '10.5px', fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: '#9CC6FA' }}>Employee portal</p>
        </div>
      </div>
      <nav style={{ position: 'relative', flex: 1, overflowY: 'auto', padding: '6px 12px 12px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
        {navFor(me.role).map((g) => (
          <div key={g.group}>
            <p style={{ margin: '0 0 6px', padding: '0 12px', fontSize: '10.5px', fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)' }}>{g.group}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {g.items.map(([k, label, icon]) => <NavItem key={k} k={k} label={label} icon={icon} active={route === k} count={counts[k]} onClick={() => go(k)} />)}
            </div>
          </div>
        ))}
      </nav>
      <div style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,.12)', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Avatar name={me.name} size={36} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: '#fff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{me.name}</p>
          <p style={{ margin: '2px 0 0', fontSize: '12px', color: 'rgba(255,255,255,.66)' }}>{AKStore.ROLES[me.role]}</p>
        </div>
        <button type="button" aria-label="Sign out" title="Sign out" onClick={() => AKStore.act.signOut()} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,.2)', background: 'transparent', color: '#fff', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><PIcon name="LogOut" size={16} /></button>
      </div>
    </aside>
  );
}

function NotifPanel({ go, onClose }) {
  const S = useStore(); const { me, m } = useApp();
  const list = S.notifications.filter((n) => n.userId === me.id).sort((a, b) => b.at.localeCompare(a.at)).slice(0, 12);
  return (
    <div style={{ position: 'absolute', top: m ? '60px' : '62px', right: m ? '12px' : 0, left: m ? '12px' : 'auto', width: m ? 'auto' : '380px', maxHeight: m ? '70%' : '520px', overflowY: 'auto', background: '#fff', border: '1px solid #E3EAF6', borderRadius: '18px', boxShadow: '0 22px 44px rgba(16,27,51,.14)', zIndex: 40, animation: 'ak-pop .24s cubic-bezier(.2,.7,.3,1) both' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 18px', borderBottom: '1px solid #EDF1F8', position: 'sticky', top: 0, background: '#fff' }}>
        <p style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#101B33' }}>Notifications</p>
        <button type="button" onClick={() => AKStore.act.markRead(me.id)} style={{ border: 'none', background: 'none', color: '#2F80EC', fontSize: '13px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>Mark all read</button>
      </div>
      {list.length === 0 ? <Empty icon="Bell" title="You're all caught up" /> : list.map((n) => (
        <button key={n.id} type="button" onClick={() => { onClose(); if (n.link && routeAllowed(n.link, me.role)) go(n.link); }}
          style={{ width: '100%', display: 'flex', gap: '12px', padding: '14px 18px', border: 'none', borderBottom: '1px solid #EDF1F8', background: n.read ? '#fff' : '#F4FAFF', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}>
          <span style={{ width: '8px', height: '8px', marginTop: '6px', borderRadius: '50%', background: n.read ? 'transparent' : '#2F80EC', flex: '0 0 auto' }}></span>
          <span style={{ flex: 1, minWidth: 0 }}>
            <span style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#101B33' }}>{n.title}</span>
            <span style={{ display: 'block', marginTop: '2px', fontSize: '13px', color: '#5B6577' }}>{n.body}</span>
          </span>
          <span style={{ fontSize: '12px', color: '#8A94A6', whiteSpace: 'nowrap' }}>{fmt.ago(n.at)}</span>
        </button>
      ))}
    </div>
  );
}

function Bell({ go }) {
  const S = useStore(); const { me } = useApp(); const [open, setOpen] = React.useState(false);
  const unread = S.notifications.filter((n) => n.userId === me.id && !n.read).length;
  return (
    <>
      <button type="button" aria-label={'Notifications, ' + unread + ' unread'} onClick={() => setOpen((v) => !v)}
        style={{ position: 'relative', width: '42px', height: '42px', borderRadius: '50%', border: '1px solid #E3EAF6', background: open ? '#E9EFFB' : '#fff', color: '#06367E', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <PIcon name="Bell" size={19} />
        {unread ? <span style={{ position: 'absolute', top: '-3px', right: '-3px' }}><CountDot n={unread} /></span> : null}
      </button>
      {open ? <><div onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 30 }}></div><NotifPanel go={go} onClose={() => setOpen(false)} /></> : null}
    </>
  );
}

function Topbar({ go }) {
  const { me } = useApp();
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 20, height: '72px', background: 'rgba(255,255,255,.92)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #E9EDF5', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', padding: '0 32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#5B6577', fontSize: '14px', fontWeight: 600 }}>
        <PIcon name="MapPin" size={16} color="#2F80EC" />{me.location} <span style={{ color: '#C9D3E3' }}>·</span> {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}
      </div>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '14px' }}>
        <a href="/" style={{ fontSize: '14px', fontWeight: 600, color: '#43506A', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>Website <span style={{ fontSize: '12px' }}>&#8599;</span></a>
        <Bell go={go} />
        <Avatar name={me.name} size={40} />
      </div>
    </header>
  );
}

const TABS = [['home', 'Home', 'LayoutDashboard'], ['attendance', 'Attendance', 'CalendarCheck'], ['tasks', 'Tasks', 'ListChecks'], ['leave', 'Leave', 'CalendarDays']];

function MoreSheet({ route, go, onClose }) {
  const S = useStore(); const { me } = useApp(); const counts = navCounts(S, me);
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 50, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(6,25,58,.5)', animation: 'ak-fadein .2s ease both' }}></div>
      <div style={{ position: 'relative', background: '#06367E', borderRadius: '24px 24px 0 0', padding: '10px 16px 24px', maxHeight: '82%', overflowY: 'auto', animation: 'ak-pop .28s cubic-bezier(.2,.7,.3,1) both' }}>
        <div style={{ width: '40px', height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,.3)', margin: '0 auto 14px' }}></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '4px 8px 16px', borderBottom: '1px solid rgba(255,255,255,.12)', marginBottom: '14px' }}>
          <Avatar name={me.name} size={40} />
          <div style={{ flex: 1 }}><p style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#fff' }}>{me.name}</p><p style={{ margin: '2px 0 0', fontSize: '12.5px', color: 'rgba(255,255,255,.66)' }}>{me.designation} · {AKStore.ROLES[me.role]}</p></div>
        </div>
        {navFor(me.role).map((g) => (
          <div key={g.group} style={{ marginBottom: '14px' }}>
            <p style={{ margin: '0 0 6px', padding: '0 12px', fontSize: '10.5px', fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)' }}>{g.group}</p>
            {g.items.map(([k, label, icon]) => <NavItem key={k} k={k} label={label} icon={icon} active={route === k} count={counts[k]} onClick={() => { onClose(); go(k); }} />)}
          </div>
        ))}
        <Btn variant="glass" icon="LogOut" full onClick={() => AKStore.act.signOut()}>Sign out</Btn>
      </div>
    </div>
  );
}

function AppShell({ route, go, children }) {
  const { m } = useApp(); const [more, setMore] = React.useState(false);
  const scroller = React.useRef(null);
  React.useEffect(() => { if (scroller.current) scroller.current.scrollTop = 0; else window.scrollTo(0, 0); }, [route]);
  if (m) {
    const inTabs = TABS.some(([k]) => k === route);
    return (
      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', background: '#F8FAFE' }}>
        <header style={{ position: 'relative', flex: '0 0 auto', height: '64px', background: '#06367E', display: 'flex', alignItems: 'center', gap: '12px', padding: '0 16px' }}>
          <div style={{ width: '36px', height: '36px', background: '#fff', borderRadius: '10px', padding: '3px', boxSizing: 'border-box' }}><img src="assets/logo.png" alt="Aarniksha Solutions" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} /></div>
          <p style={{ flex: 1, margin: 0, fontSize: '16px', fontWeight: 800, color: '#fff', letterSpacing: '-.01em' }}>{ROUTE_LABEL[route]}</p>
          <Bell go={go} />
        </header>
        <main ref={scroller} style={{ flex: 1, overflowY: 'auto', padding: '20px 16px 28px' }}>{children}</main>
        <nav style={{ flex: '0 0 auto', display: 'flex', background: '#fff', borderTop: '1px solid #E3EAF6', padding: '6px 6px 14px' }}>
          {[...TABS, ['__more', 'More', 'Menu']].map(([k, label, icon]) => {
            const on = k === '__more' ? (!inTabs || more) : route === k;
            return (
              <button key={k} type="button" onClick={() => (k === '__more' ? setMore(true) : go(k))}
                style={{ flex: 1, minHeight: '52px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '4px', border: 'none', background: 'none', cursor: 'pointer', fontFamily: 'inherit', color: on ? '#2F80EC' : '#7A859A', fontSize: '11.5px', fontWeight: on ? 800 : 600 }}>
                <PIcon name={icon} size={21} stroke={on ? 2 : 1.6} />{label}
              </button>
            );
          })}
        </nav>
        {more ? <MoreSheet route={route} go={go} onClose={() => setMore(false)} /> : null}
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F8FAFE' }}>
      <Sidebar route={route} go={go} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <Topbar go={go} />
        <main style={{ maxWidth: '1240px', margin: '0 auto', padding: '32px 36px 56px' }}>{children}</main>
      </div>
    </div>
  );
}

Object.assign(window, { AppShell, routeAllowed, navCounts, ROUTE_LABEL });
