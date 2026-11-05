const DEMO = [['u5', 'Employee'], ['u4', 'Manager'], ['u3', 'HR admin'], ['u1', 'Super admin']];
const DEMO_OTP = '1234';
const OTP_LEN = 4;

function OtpBoxes({ value, onChange }) {
  const refs = React.useRef([]);
  const set = (i, ch) => {
    const digits = value.split(''); digits[i] = ch; const next = digits.join('').slice(0, OTP_LEN);
    onChange(next); if (ch && i < OTP_LEN - 1) refs.current[i + 1].focus();
  };
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(' + OTP_LEN + ', 1fr)', gap: '8px' }}>
      {Array.from({ length: OTP_LEN }, (_, i) => (
        <input key={i} ref={(el) => (refs.current[i] = el)} inputMode="numeric" maxLength={1} aria-label={'Digit ' + (i + 1)} value={value[i] || ''}
          onChange={(e) => set(i, e.target.value.replace(/\D/g, '').slice(-1))}
          onKeyDown={(e) => { if (e.key === 'Backspace' && !value[i] && i > 0) refs.current[i - 1].focus(); }}
          onPaste={(e) => { const p = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LEN); if (p) { e.preventDefault(); onChange(p); refs.current[Math.min(p.length, OTP_LEN - 1)].focus(); } }}
          style={{ width: '100%', minWidth: 0, height: '56px', textAlign: 'center', fontSize: '22px', fontWeight: 800, color: '#06367E', background: value[i] ? '#fff' : '#F8FAFE', border: '1px solid ' + (value[i] ? '#2F80EC' : '#E1E8F4'), borderRadius: '12px', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }} />
      ))}
    </div>
  );
}

function AuthNote({ icon, tone = 'blue', title, children }) {
  const c = { blue: ['#E7F1FD', '#1D6AE3'], amber: ['#FDF1DC', '#8A5A00'], red: ['#FCEAE8', '#B9382F'], green: ['#E3F5EC', '#0F7A55'] }[tone];
  return (
    <div style={{ display: 'flex', gap: '14px', background: c[0], borderRadius: '16px', padding: '18px' }}>
      <span style={{ color: c[1], marginTop: '1px' }}><PIcon name={icon} size={20} /></span>
      <div><p style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: 800, color: '#101B33' }}>{title}</p><div style={{ fontSize: '14px', lineHeight: 1.6, color: '#43506A' }}>{children}</div></div>
    </div>
  );
}

function AuthScreen() {
  const { m } = useApp();
  const [step, setStep] = React.useState('login');
  const [mode, setMode] = React.useState('mobile');
  const [id, setId] = React.useState('');
  const [acct, setAcct] = React.useState(null);
  const [otp, setOtp] = React.useState('');
  const [err, setErr] = React.useState('');
  const [timer, setTimer] = React.useState(0);
  const [reg, setReg] = React.useState({ name: '', email: '', phone: '', dept: 'Recruitment', designation: '' });
  React.useEffect(() => { if (!timer) return; const t = setTimeout(() => setTimer(timer - 1), 1000); return () => clearTimeout(t); }, [timer]);

  const sendOtp = () => {
    setErr('');
    if (mode === 'mobile' && id.replace(/\D/g, '').length !== 10) return setErr('Enter your 10-digit mobile number.');
    if (mode === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(id.trim())) return setErr('Enter a valid email address.');
    const u = AKStore.act.findAccount(id);
    if (!u || u.status === 'rejected') return setErr("We couldn't find an account with that " + (mode === 'mobile' ? 'number' : 'email') + '. New here? Request access below.');
    setAcct(u);
    if (u.status === 'pending') return setStep('pending');
    if (u.status === 'suspended') return setStep('suspended');
    setOtp(''); setTimer(30); setStep('otp');
  };
  const verify = () => { if (otp.length < OTP_LEN) return setErr('Enter all ' + OTP_LEN + ' digits.'); if (otp !== DEMO_OTP) return setErr('That code is incorrect. Check the message and try again.'); AKStore.act.signIn(acct.id); };
  const register = () => {
    setErr('');
    if (!reg.name.trim() || !reg.designation.trim()) return setErr('Fill in your name and designation.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(reg.email.trim())) return setErr('Enter a valid email address.');
    if (reg.phone.replace(/\D/g, '').length !== 10) return setErr('Enter your 10-digit mobile number.');
    if (AKStore.act.findAccount(reg.email) || AKStore.act.findAccount(reg.phone)) return setErr('An account already exists with that email or mobile number.');
    setAcct(AKStore.act.register(reg)); setStep('registered');
  };
  const masked = acct ? (mode === 'mobile' ? '+91 ••••• ' + acct.phone.slice(-5) : acct.email.replace(/^(.{2}).*(@.*)$/, '$1•••$2')) : '';
  const back = (s) => () => { setErr(''); setStep(s); };

  let body;
  if (step === 'login') body = (
    <>
      <h2 style={hS}>Sign in</h2>
      <p style={pS}>Use the mobile number or email you registered with. We'll send you a one-time code.</p>
      <Segmented full options={[['mobile', 'Mobile number'], ['email', 'Email']]} value={mode} onChange={(v) => { setMode(v); setId(''); setErr(''); }} />
      <form onSubmit={(e) => { e.preventDefault(); sendOtp(); }} style={{ display: 'grid', gap: '16px', marginTop: '20px' }}>
        {mode === 'mobile'
          ? <Input label="Mobile number" prefix="+91" inputMode="numeric" placeholder="98480 11012" value={id} onChange={(e) => setId(e.target.value.replace(/[^\d ]/g, '').slice(0, 11))} />
          : <Input label="Email" type="email" placeholder="you@aarnikshasolutions.com" value={id} onChange={(e) => setId(e.target.value)} />}
        <ErrorLine>{err}</ErrorLine>
        <DS.Button type="submit" arrow style={{ width: '100%' }}>Send code</DS.Button>
      </form>
      <p style={{ margin: '22px 0 0', fontSize: '14.5px', color: '#5B6577', textAlign: 'center' }}>New to Aarniksha? <a href="#" onClick={(e) => { e.preventDefault(); setErr(''); setStep('register'); }} style={{ fontWeight: 700 }}>Request access</a></p>
      <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #E9EDF5' }}>
        <p style={{ margin: '0 0 10px', fontSize: '11px', fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: '#8A94A6' }}>Demo accounts</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {DEMO.map(([uid, role]) => { const u = AKH.user(uid); return (
            <button key={uid} type="button" onClick={() => { setErr(''); setId(mode === 'mobile' ? u.phone.replace(/(\d{5})(\d{5})/, '$1 $2') : u.email); }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px 6px 6px', borderRadius: '999px', border: '1px solid #DCE5F5', background: '#fff', cursor: 'pointer', fontFamily: 'inherit', fontSize: '13px', fontWeight: 700, color: '#43506A' }}>
              <Avatar name={u.name} size={24} />{role}
            </button>); })}
        </div>
      </div>
    </>
  );
  if (step === 'otp') body = (
    <>
      <BackLink onClick={back('login')} />
      <h2 style={hS}>Enter the code</h2>
      <p style={pS}>We sent a 4-digit code to <strong style={{ color: '#101B33' }}>{masked}</strong>. It expires in 10 minutes.</p>
      <form onSubmit={(e) => { e.preventDefault(); verify(); }} style={{ display: 'grid', gap: '16px' }}>
        <OtpBoxes value={otp} onChange={(v) => { setOtp(v); setErr(''); }} />
        <div style={{ background: '#F4FAFF', border: '1px dashed #C9D8F2', borderRadius: '12px', padding: '10px 14px', fontSize: '13.5px', color: '#43506A' }}>Demo: the code is <strong style={{ color: '#06367E', letterSpacing: '.1em' }}>{DEMO_OTP}</strong></div>
        <ErrorLine>{err}</ErrorLine>
        <DS.Button type="submit" arrow style={{ width: '100%' }}>Verify and sign in</DS.Button>
      </form>
      <p style={{ margin: '18px 0 0', fontSize: '14px', color: '#5B6577', textAlign: 'center' }}>
        {timer ? 'Resend code in 0:' + String(timer).padStart(2, '0') : <a href="#" onClick={(e) => { e.preventDefault(); setTimer(30); }} style={{ fontWeight: 700 }}>Resend code</a>}
      </p>
    </>
  );
  if (step === 'register') body = (
    <>
      <BackLink onClick={back('login')} />
      <h2 style={hS}>Request access</h2>
      <p style={pS}>HR reviews every request. You'll get an email as soon as your account is approved.</p>
      <form onSubmit={(e) => { e.preventDefault(); register(); }} style={{ display: 'grid', gap: '14px' }}>
        <Input label="Full name" value={reg.name} onChange={(e) => setReg({ ...reg, name: e.target.value })} placeholder="As on your ID" />
        <Input label="Email" type="email" value={reg.email} onChange={(e) => setReg({ ...reg, email: e.target.value })} placeholder="you@example.com" />
        <Input label="Mobile number" prefix="+91" inputMode="numeric" value={reg.phone} onChange={(e) => setReg({ ...reg, phone: e.target.value.replace(/[^\d ]/g, '').slice(0, 11) })} placeholder="10-digit number" />
        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: '14px' }}>
          <Select label="Department" options={AKStore.DEPTS} value={reg.dept} onChange={(e) => setReg({ ...reg, dept: e.target.value })} />
          <Input label="Designation" value={reg.designation} onChange={(e) => setReg({ ...reg, designation: e.target.value })} placeholder="e.g. Recruiter" />
        </div>
        <ErrorLine>{err}</ErrorLine>
        <DS.Button type="submit" arrow style={{ width: '100%' }}>Submit request</DS.Button>
      </form>
    </>
  );
  if (step === 'registered') body = (
    <>
      <h2 style={hS}>Request sent</h2>
      <AuthNote icon="CircleCheck" tone="green" title={'Thanks, ' + acct.name.split(' ')[0] + '.'}>Your request is with HR. We'll email <strong>{acct.email}</strong> once it's approved — usually within one working day.</AuthNote>
      <div style={{ marginTop: '20px' }}><Btn variant="outline" full onClick={back('login')}>Back to sign in</Btn></div>
    </>
  );
  if (step === 'pending') body = (
    <>
      <BackLink onClick={back('login')} />
      <h2 style={hS}>Almost there</h2>
      <AuthNote icon="Hourglass" tone="amber" title="Your account is awaiting approval">HR hasn't approved {acct.name.split(' ')[0]}'s access yet. You'll get an email at {acct.email} as soon as it's done.</AuthNote>
    </>
  );
  if (step === 'suspended') body = (
    <>
      <BackLink onClick={back('login')} />
      <h2 style={hS}>Access suspended</h2>
      <AuthNote icon="Ban" tone="red" title="You can't sign in right now">Your portal access has been suspended{acct.suspendedReason ? ' (' + acct.suspendedReason.toLowerCase() + ')' : ''}. Please contact <a href="mailto:hr@aarnikshasolutions.com">hr@aarnikshasolutions.com</a>.</AuthNote>
    </>
  );

  const brand = (
    <div style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(140deg,#04255A 0%,#06367E 52%,#0A4497 100%)', padding: m ? '28px 22px 30px' : '48px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: m ? 'auto' : '100vh', boxSizing: 'border-box' }}>
      <div aria-hidden="true" style={{ position: 'absolute', top: '-30%', right: '-40%', width: '120%', aspectRatio: '1', borderRadius: '50%', border: '1px solid rgba(255,255,255,.09)' }}></div>
      <div aria-hidden="true" style={{ position: 'absolute', bottom: '-50%', left: '-20%', width: '110%', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle at 50% 30%, rgba(47,128,236,.28), rgba(47,128,236,0) 70%)' }}></div>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ width: m ? '48px' : '64px', height: m ? '48px' : '64px', background: '#fff', borderRadius: '14px', padding: '5px', boxSizing: 'border-box', boxShadow: '0 6px 20px rgba(2,22,56,.28)' }}><img src="assets/logo.png" alt="Aarniksha Solutions" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} /></div>
        <div><p style={{ margin: 0, fontSize: '16px', fontWeight: 800, color: '#fff' }}>Aarniksha Solutions</p><p style={{ margin: '3px 0 0', fontSize: '11px', fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: '#9CC6FA' }}>Employee portal</p></div>
      </div>
      <div style={{ position: 'relative', marginTop: m ? '26px' : 0 }}>
        <h1 style={{ margin: 0, maxWidth: '13ch', fontSize: m ? '30px' : 'clamp(40px, 4vw, 58px)', lineHeight: 1.02, letterSpacing: '-.035em', fontWeight: 800, color: '#fff' }}>Your workday, in one place.</h1>
        {!m ? <div style={{ display: 'grid', gap: '14px', marginTop: '32px' }}>
          {[['Clock', 'Check in from the office or from home'], ['CalendarDays', 'Apply for leave and follow every approval'], ['ListChecks', 'Tasks, goals and the holiday calendar together']].map(([ic, t]) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '14px', color: 'rgba(255,255,255,.86)', fontSize: '16px' }}>
              <span style={{ width: '38px', height: '38px', flex: '0 0 auto', borderRadius: '50%', background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.16)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#9CC6FA' }}><PIcon name={ic} size={18} /></span>{t}
            </div>))}
        </div> : null}
      </div>
      {!m ? <a href="/" style={{ position: 'relative', color: 'rgba(255,255,255,.78)', fontSize: '14px', fontWeight: 600 }}>&#8592; Back to aarnikshasolutions.com</a> : null}
    </div>
  );
  return (
    <div style={{ display: m ? 'block' : 'grid', gridTemplateColumns: 'minmax(380px, 1fr) minmax(0, 1.1fr)', minHeight: m ? '100%' : '100vh', height: m ? '100%' : undefined, overflowY: m ? 'auto' : undefined, background: '#fff' }}>
      {brand}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: m ? '28px 20px 36px' : '48px 32px' }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>{body}</div>
      </div>
    </div>
  );
}
const hS = { margin: '0 0 8px', fontSize: '30px', lineHeight: 1.08, letterSpacing: '-.03em', fontWeight: 800, color: '#101B33' };
const pS = { margin: '0 0 22px', fontSize: '15px', lineHeight: 1.6, color: '#5B6577' };
function BackLink({ onClick }) {
  return <button type="button" onClick={onClick} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', margin: '0 0 18px', padding: 0, border: 'none', background: 'none', color: '#43506A', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}><PIcon name="ArrowLeft" size={16} />Back</button>;
}

Object.assign(window, { AuthScreen });
