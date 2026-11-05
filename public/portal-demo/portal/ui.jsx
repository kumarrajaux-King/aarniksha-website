const DS = window.AarnikshaDesignSystem_f93754;
const AKH = window.AKStore.h;

const AppCtx = React.createContext(null);
const useApp = () => React.useContext(AppCtx);
function useStore() {
  const [, force] = React.useReducer((x) => x + 1, 0);
  React.useEffect(() => window.AKStore.subscribe(force), []);
  return window.AKStore.get();
}

/* Lucide outline icons (CDN) drawn at the brand's 1.6 stroke — see HANDOFF.md, "Icon substitution". */
function PIcon({ name, size = 18, stroke = 1.6, color, style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const L = window.lucide; const el = ref.current;
    if (!L || !el || !L.icons || !L.icons[name]) return;
    const NS = 'http://www.w3.org/2000/svg'; const node = L.icons[name];
    const svg = document.createElementNS(NS, 'svg');
    const a = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': stroke, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' };
    Object.keys(a).forEach((k) => svg.setAttribute(k, a[k]));
    (Array.isArray(node[0]) ? node : node[2] || []).forEach(([tag, at]) => { const c = document.createElementNS(NS, tag); Object.keys(at).forEach((k) => c.setAttribute(k, at[k])); svg.appendChild(c); });
    el.replaceChildren(svg);
  }, [name, size, stroke]);
  return <span ref={ref} aria-hidden="true" style={{ display: 'inline-flex', width: size + 'px', height: size + 'px', flex: '0 0 auto', color, ...style }}></span>;
}

const TONES = { blue: ['#E7F1FD', '#1D6AE3'], green: ['#E3F5EC', '#0F7A55'], amber: ['#FDF1DC', '#8A5A00'], red: ['#FCEAE8', '#B9382F'], grey: ['#EDF1F8', '#4A5670'], navy: ['#06367E', '#FFFFFF'] };
const STATUS = { pending: ['amber', 'Pending'], approved: ['green', 'Approved'], rejected: ['red', 'Declined'], cancelled: ['grey', 'Cancelled'], active: ['green', 'Active'], suspended: ['red', 'Suspended'], todo: ['grey', 'To do'], in_progress: ['blue', 'In progress'], done: ['green', 'Done'] };

function Badge({ tone = 'grey', children, style }) {
  const [bg, fg] = TONES[tone];
  return <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: '999px', background: bg, color: fg, fontSize: '12px', fontWeight: 700, whiteSpace: 'nowrap', ...style }}>{children}</span>;
}
const StatusBadge = ({ status }) => <Badge tone={(STATUS[status] || STATUS.pending)[0]}>{(STATUS[status] || [0, status])[1]}</Badge>;

function Btn({ variant = 'primary', size = 'md', icon, children, full, style, disabled, ...rest }) {
  const [h, setH] = React.useState(false);
  const on = h && !disabled;
  const skins = {
    primary: { background: on ? '#06367E' : '#2F80EC', color: '#fff', border: '1px solid transparent', boxShadow: on ? '0 10px 22px rgba(47,128,236,.28)' : 'none' },
    outline: { background: '#fff', color: on ? '#06367E' : '#101B33', border: '1px solid ' + (on ? '#06367E' : '#DCE3EE') },
    ghost: { background: on ? '#EDF1F8' : 'transparent', color: '#43506A', border: '1px solid transparent' },
    danger: { background: on ? '#FCEAE8' : '#fff', color: '#B9382F', border: '1px solid #F2C9C5' },
    white: { background: '#fff', color: '#06367E', border: '1px solid transparent', boxShadow: on ? '0 12px 26px rgba(2,22,56,.26)' : '0 8px 20px rgba(2,22,56,.16)' },
    glass: { background: on ? 'rgba(255,255,255,.2)' : 'rgba(255,255,255,.1)', color: '#fff', border: '1px solid rgba(255,255,255,.24)' },
  };
  return (
    <button type="button" disabled={disabled} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: size === 'sm' ? '7px 14px' : size === 'lg' ? '15px 26px' : '11px 20px', borderRadius: '999px', fontSize: size === 'sm' ? '13px' : size === 'lg' ? '16px' : '14.5px', fontWeight: 700, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, transition: 'background .2s ease, color .2s ease, border-color .2s ease, box-shadow .2s ease', width: full ? '100%' : undefined, whiteSpace: 'nowrap', fontFamily: 'inherit', ...skins[variant], ...style }} {...rest}>
      {icon ? <PIcon name={icon} size={size === 'sm' ? 15 : 17} /> : null}{children}
    </button>
  );
}

function Card({ children, pad = '24px', style, tint }) {
  return <div style={{ background: tint ? '#F8FAFE' : '#fff', border: '1px solid #E3EAF6', borderRadius: '18px', padding: pad, minWidth: 0, ...style }}>{children}</div>;
}
function CardHead({ title, sub, action, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '18px', ...style }}>
      <div style={{ minWidth: 0 }}>
        <h3 style={{ margin: 0, fontSize: '17px', lineHeight: 1.25, letterSpacing: '-.015em', fontWeight: 800, color: '#101B33' }}>{title}</h3>
        {sub ? <p style={{ margin: '4px 0 0', fontSize: '13.5px', color: '#7A859A' }}>{sub}</p> : null}
      </div>
      {action || null}
    </div>
  );
}
function PageHeader({ eyebrow, title, sub, actions }) {
  const { m } = useApp();
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px', marginBottom: m ? '20px' : '28px' }}>
      <div style={{ minWidth: 0 }}>
        {eyebrow ? <p style={{ margin: '0 0 10px', fontSize: '12px', fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: '#2F80EC' }}>{eyebrow}</p> : null}
        <h1 style={{ margin: 0, fontSize: m ? '28px' : '36px', lineHeight: 1.06, letterSpacing: '-.03em', fontWeight: 800, color: '#101B33' }}>{title}</h1>
        {sub ? <p style={{ margin: '10px 0 0', maxWidth: '60ch', fontSize: '15px', lineHeight: 1.6, color: '#5B6577', textWrap: 'pretty' }}>{sub}</p> : null}
      </div>
      {actions ? <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>{actions}</div> : null}
    </div>
  );
}
function Stat({ label, value, sub, tone }) {
  return (
    <div style={{ minWidth: 0 }}>
      <p style={{ margin: 0, fontSize: '11.5px', fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: '#8A94A6' }}>{label}</p>
      <p style={{ margin: '8px 0 0', fontSize: '30px', lineHeight: 1, letterSpacing: '-.035em', fontWeight: 800, color: tone || '#06367E' }}>{value}</p>
      {sub ? <p style={{ margin: '6px 0 0', fontSize: '13px', color: '#7A859A' }}>{sub}</p> : null}
    </div>
  );
}
const AV_COLORS = ['#06367E', '#2F80EC', '#0A4497', '#1D6AE3', '#0B4A78', '#123A86'];
function Avatar({ name = '?', size = 36 }) {
  const ini = name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase();
  const c = AV_COLORS[[...name].reduce((a, ch) => a + ch.charCodeAt(0), 0) % AV_COLORS.length];
  return <span aria-hidden="true" style={{ width: size + 'px', height: size + 'px', borderRadius: '50%', background: c, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: Math.round(size * 0.36) + 'px', fontWeight: 800, flex: '0 0 auto', letterSpacing: '.02em' }}>{ini}</span>;
}
function Person({ u, sub, size = 36 }) {
  if (!u) return <span style={{ color: '#8A94A6' }}>—</span>;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
      <Avatar name={u.name} size={size} />
      <div style={{ minWidth: 0 }}>
        <p style={{ margin: 0, fontSize: '14.5px', fontWeight: 700, color: '#101B33', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{u.name}</p>
        <p style={{ margin: '2px 0 0', fontSize: '12.5px', color: '#7A859A', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{sub != null ? sub : u.designation}</p>
      </div>
    </div>
  );
}
function Progress({ value, h = 8, color = '#2F80EC' }) {
  return <div style={{ height: h + 'px', borderRadius: '999px', background: '#E9EFFB', overflow: 'hidden' }}><div style={{ width: Math.max(0, Math.min(100, value)) + '%', height: '100%', borderRadius: '999px', background: color, transition: 'width .4s cubic-bezier(.2,.7,.3,1)' }}></div></div>;
}
function Segmented({ options, value, onChange, dark, full }) {
  return (
    <div role="tablist" style={{ display: 'inline-flex', width: full ? '100%' : undefined, padding: '4px', gap: '4px', borderRadius: '999px', background: dark ? 'rgba(255,255,255,.1)' : '#EDF1F8', border: dark ? '1px solid rgba(255,255,255,.16)' : 'none' }}>
      {options.map(([k, label, count]) => {
        const on = value === k;
        return (
          <button key={k} type="button" role="tab" aria-selected={on} onClick={() => onChange(k)}
            style={{ flex: full ? 1 : undefined, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '8px 14px', borderRadius: '999px', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '13.5px', fontWeight: 700, whiteSpace: 'nowrap', transition: 'background .2s ease, color .2s ease',
              background: on ? (dark ? '#fff' : '#fff') : 'transparent', color: on ? '#06367E' : dark ? 'rgba(255,255,255,.82)' : '#4A5670', boxShadow: on && !dark ? '0 2px 8px rgba(16,27,51,.08)' : 'none' }}>
            {label}{count != null ? <span style={{ fontSize: '11.5px', opacity: 0.6 }}>{count}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
function Empty({ icon = 'Inbox', title, body }) {
  return (
    <div style={{ textAlign: 'center', padding: '28px 12px' }}>
      <span style={{ display: 'inline-flex', width: '44px', height: '44px', borderRadius: '50%', background: '#E9EFFB', color: '#2F80EC', alignItems: 'center', justifyContent: 'center' }}><PIcon name={icon} size={20} /></span>
      <p style={{ margin: '12px 0 4px', fontSize: '15px', fontWeight: 700, color: '#101B33' }}>{title}</p>
      {body ? <p style={{ margin: 0, fontSize: '13.5px', color: '#7A859A' }}>{body}</p> : null}
    </div>
  );
}
function Modal({ open, onClose, eyebrow, title, children, width = 520 }) {
  if (!open) return null;
  return <DS.Dialog open eyebrow={eyebrow} title={title} onClose={onClose} style={{ width: 'min(' + width + 'px, 100%)' }}><div style={{ marginTop: '22px' }}>{children}</div></DS.Dialog>;
}
const inputStyle = { width: '100%', fontSize: '15px', color: '#101B33', background: '#F8FAFE', border: '1px solid #E1E8F4', borderRadius: '12px', padding: '13px 14px', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' };
function Label({ children, hint }) {
  return <span style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', fontSize: '13px', fontWeight: 700, color: '#43506A' }}>{children}{hint ? <span style={{ fontWeight: 600, color: '#8A94A6' }}>{hint}</span> : null}</span>;
}
function Input({ label, hint, prefix, style, ...rest }) {
  const [f, setF] = React.useState(false);
  return (
    <label style={{ display: 'grid', gap: '7px', minWidth: 0, ...style }}>
      {label ? <Label hint={hint}>{label}</Label> : null}
      <div style={{ display: 'flex', alignItems: 'stretch', borderRadius: '12px', border: '1px solid ' + (f ? '#2F80EC' : '#E1E8F4'), background: f ? '#fff' : '#F8FAFE', transition: 'border-color .2s ease, background .2s ease', overflow: 'hidden' }}>
        {prefix ? <span style={{ display: 'flex', alignItems: 'center', padding: '0 4px 0 14px', fontSize: '15px', fontWeight: 700, color: '#43506A' }}>{prefix}</span> : null}
        <input onFocus={() => setF(true)} onBlur={() => setF(false)} style={{ ...inputStyle, border: 'none', background: 'transparent' }} {...rest} />
      </div>
    </label>
  );
}
function Select({ label, options, style, ...rest }) {
  return (
    <label style={{ display: 'grid', gap: '7px', minWidth: 0, ...style }}>
      {label ? <Label>{label}</Label> : null}
      <select style={{ ...inputStyle, appearance: 'none', backgroundImage: 'linear-gradient(45deg,transparent 50%,#7A859A 50%),linear-gradient(135deg,#7A859A 50%,transparent 50%)', backgroundPosition: 'calc(100% - 20px) 50%, calc(100% - 15px) 50%', backgroundSize: '5px 5px', backgroundRepeat: 'no-repeat', paddingRight: '36px' }} {...rest}>
        {options.map((o) => Array.isArray(o) ? <option key={o[0]} value={o[0]}>{o[1]}</option> : <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
function TextArea({ label, hint, rows = 3, style, ...rest }) {
  return (
    <label style={{ display: 'grid', gap: '7px', minWidth: 0, ...style }}>
      {label ? <Label hint={hint}>{label}</Label> : null}
      <textarea rows={rows} style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.5 }} {...rest}></textarea>
    </label>
  );
}
const ErrorLine = ({ children }) => children ? <p style={{ margin: 0, fontSize: '13.5px', fontWeight: 600, color: '#D4453B' }}>{children}</p> : null;

const TH = { textAlign: 'left', padding: '12px 16px', fontSize: '11px', fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: '#8A94A6', borderBottom: '1px solid #E9EDF5', whiteSpace: 'nowrap', background: '#F8FAFE' };
const TD = { padding: '14px 16px', fontSize: '14px', color: '#43506A', borderBottom: '1px solid #EDF1F8', verticalAlign: 'middle' };
function Table({ head, children, minWidth = 640 }) {
  return (
    <div style={{ overflowX: 'auto', border: '1px solid #E3EAF6', borderRadius: '16px', background: '#fff' }}>
      <table style={{ width: '100%', minWidth: minWidth + 'px', borderCollapse: 'collapse' }}>
        <thead><tr>{head.map((h, i) => <th key={i} style={{ ...TH, textAlign: h && h.startsWith && h.startsWith('>') ? 'right' : 'left' }}>{h && h.replace ? h.replace(/^>/, '') : h}</th>)}</tr></thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

const fmt = {
  d: (s) => AKH.parse(s).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }),
  dw: (s) => AKH.parse(s).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' }),
  long: (s) => AKH.parse(s).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
  range: (a, b) => a === b ? fmt.dw(a) : fmt.d(a) + ' – ' + fmt.d(b),
  t: (hm) => { if (!hm) return '—'; const [h, mm] = hm.split(':').map(Number); return ((h + 11) % 12 + 1) + ':' + String(mm).padStart(2, '0') + (h < 12 ? ' am' : ' pm'); },
  ago: (isoTs) => { const s = (Date.now() - new Date(isoTs).getTime()) / 1000; if (s < 60) return 'Just now'; if (s < 3600) return Math.floor(s / 60) + 'm ago'; if (s < 86400) return Math.floor(s / 3600) + 'h ago'; const d = Math.floor(s / 86400); return d === 1 ? 'Yesterday' : d + 'd ago'; },
  dur: (a, b) => { const m = AKH.mins(b) - AKH.mins(a); return Math.floor(m / 60) + 'h ' + String(m % 60).padStart(2, '0') + 'm'; },
};
const greet = () => { const h = new Date().getHours(); return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening'; };
const firstName = (u) => u.name.split(' ')[0];

function dayInfo(S, userId, k) {
  const d = AKH.parse(k); const t = AKH.todayIso();
  const u = AKH.user(userId); const rec = (S.attendance[userId] || {})[k];
  const hol = AKH.holidayOn(k);
  if (rec && rec.status === 'leave') return { kind: 'leave', label: 'Leave', tone: 'amber', rec };
  if (AKH.isWeekend(d)) return { kind: 'weekend', label: 'Weekend', tone: null };
  if (hol) return { kind: 'holiday', label: hol.name, tone: 'navy', hol };
  if (rec && rec.in) {
    if (!rec.out && k < t) return { kind: 'missed', label: 'Missed punch', tone: 'red', rec };
    return { kind: rec.status, label: rec.status === 'wfh' ? 'WFH' : 'Office', tone: rec.status === 'wfh' ? 'grey' : 'blue', rec, late: AKH.mins(rec.in) > AKH.mins(window.AKStore.LATE_AFTER) };
  }
  if (k === t) return { kind: 'today', label: 'Not checked in', tone: null };
  if (k > t || (u && u.joined && k < u.joined)) return { kind: 'future', label: '', tone: null };
  return { kind: 'absent', label: 'Absent', tone: 'red' };
}

Object.assign(window, { DS, AKH, AppCtx, useApp, useStore, PIcon, Badge, StatusBadge, STATUS, Btn, Card, CardHead, PageHeader, Stat, Avatar, Person, Progress, Segmented, Empty, Modal, Input, Select, TextArea, Label, ErrorLine, Table, TH, TD, fmt, greet, firstName, dayInfo, inputStyle });
