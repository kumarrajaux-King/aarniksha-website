export const metadata = { title: 'Page not found | Aarniksha Solutions' };

export default function NotFound() {
  return (
    <section style={{ background: '#06367E', minHeight: '58vh', display: 'grid', placeItems: 'center', padding: '80px 24px' }}>
      <div style={{ textAlign: 'center', maxWidth: '46ch' }}>
        <p style={{ margin: '0 0 18px', fontSize: '12.5px', fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: '#7EAEF6' }}>404</p>
        <h1 style={{ margin: '0 0 18px', fontSize: 'clamp(32px, 4.4vw, 56px)', lineHeight: 1.04, letterSpacing: '-.03em', fontWeight: 800, color: '#fff' }}>We could not find that page.</h1>
        <p style={{ margin: '0 0 28px', fontSize: '16.5px', lineHeight: 1.6, color: 'rgba(255,255,255,.78)' }}>The link may be out of date. Head back to the homepage or get in touch and we will point you the right way.</p>
        <a href="/" style={{ display: 'inline-block', background: '#fff', color: '#06367E', fontSize: '16px', fontWeight: 700, borderRadius: '999px', padding: '16px 30px' }}>Back to homepage</a>
      </div>
    </section>
  );
}
