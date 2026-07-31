'use client';
import { useEffect, useRef } from 'react';
import { useEnquiry } from './Enquiry';

export default function HomeHero() {
  const { openEnquiry } = useEnquiry();
  const arcA = useRef(null);
  const arcB = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const y = window.pageYOffset || 0;
      if (y > 1400) return;
      if (arcA.current) arcA.current.style.transform = 'translateY(' + (y * 0.12).toFixed(1) + 'px)';
      if (arcB.current) arcB.current.style.transform = 'translateY(' + (y * -0.08).toFixed(1) + 'px)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
  <section style={{ position: "relative", background: "radial-gradient(120% 80% at 50% 0%, #FFFFFF 0%, #FBFCFE 38%, #F3F6FC 72%, #EDF2FA 100%)", overflow: "hidden" }}>
    <div aria-hidden="true" style={{ position: "absolute", inset: "0", overflow: "hidden", pointerEvents: "none" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "min(1180px, 108vw)", height: "min(1180px, 108vw)" }}>
        <div data-anim style={{ position: "absolute", inset: "0", borderRadius: "50%", border: "1px solid rgba(6,54,126,.055)", animation: "ak-spin 120s linear infinite" }}>
          <span style={{ position: "absolute", top: "-3px", left: "50%", width: "6px", height: "6px", marginLeft: "-3px", borderRadius: "50%", background: "rgba(47,128,236,.35)" }}></span>
        </div>
        <div data-anim style={{ position: "absolute", inset: "13%", borderRadius: "50%", border: "1px solid rgba(6,54,126,.07)", animation: "ak-spin-rev 84s linear infinite" }}>
          <span style={{ position: "absolute", top: "-4px", left: "50%", width: "8px", height: "8px", marginLeft: "-4px", borderRadius: "50%", background: "#2F80EC", boxShadow: "0 0 0 6px rgba(47,128,236,.10)" }}></span>
        </div>
        <div data-anim style={{ position: "absolute", inset: "26%", borderRadius: "50%", border: "1px dashed rgba(6,54,126,.09)", animation: "ak-spin 62s linear infinite" }}>
          <span style={{ position: "absolute", bottom: "-3px", left: "50%", width: "6px", height: "6px", marginLeft: "-3px", borderRadius: "50%", background: "rgba(6,54,126,.3)" }}></span>
        </div>
        <div data-anim style={{ position: "absolute", inset: "39%", borderRadius: "50%", border: "1px solid rgba(6,54,126,.06)", background: "radial-gradient(circle at 50% 42%, rgba(255,255,255,.9), rgba(255,255,255,0) 70%)", animation: "ak-spin-rev 44s linear infinite" }}>
          <span style={{ position: "absolute", top: "50%", right: "-3px", width: "6px", height: "6px", marginTop: "-3px", borderRadius: "50%", background: "rgba(47,128,236,.45)" }}></span>
        </div>
      </div>

      <div ref={arcA} style={{ position: "absolute", top: "-22%", right: "-8%", width: "min(720px, 54vw)", height: "min(720px, 54vw)" }}>
        <div data-anim style={{ width: "100%", height: "100%", borderRadius: "50%", background: "radial-gradient(circle at 40% 36%, #FFFFFF 0%, #FDFEFF 46%, rgba(232,240,252,.9) 66%, rgba(232,240,252,0) 78%)", boxShadow: "0 50px 140px rgba(47,128,236,.10)", animation: "ak-breathe 13s ease-in-out infinite" }}></div>
      </div>

      <div ref={arcB} style={{ position: "absolute", bottom: "-34%", left: "-12%", width: "min(640px, 48vw)", height: "min(640px, 48vw)" }}>
        <div data-anim style={{ width: "100%", height: "100%", borderRadius: "50%", background: "radial-gradient(circle at 55% 45%, rgba(255,255,255,.95), rgba(47,128,236,.07) 58%, rgba(47,128,236,0) 76%)", filter: "blur(6px)", animation: "ak-drift-a 26s ease-in-out infinite" }}></div>
      </div>

      <div data-anim style={{ position: "absolute", top: "8%", left: "6%", width: "min(360px, 30vw)", height: "min(360px, 30vw)", borderRadius: "50%", background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,.98), rgba(255,255,255,0) 72%)", filter: "blur(4px)", animation: "ak-drift-b 32s ease-in-out infinite" }}></div>

      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "min(880px, 78vw)", height: "min(880px, 78vw)" }}>
        <div data-anim style={{ position: "absolute", inset: "0", animation: "ak-spin 34s linear infinite" }}>
          <span style={{ position: "absolute", top: "-5px", left: "50%", width: "10px", height: "10px", marginLeft: "-5px", borderRadius: "50%", background: "#fff", border: "2px solid #2F80EC", boxShadow: "0 4px 14px rgba(47,128,236,.35)" }}></span>
        </div>
        <div data-anim style={{ position: "absolute", inset: "18%", animation: "ak-spin-rev 24s linear infinite" }}>
          <span style={{ position: "absolute", bottom: "-4px", left: "50%", width: "8px", height: "8px", marginLeft: "-4px", borderRadius: "50%", background: "#fff", border: "2px solid rgba(6,54,126,.5)" }}></span>
        </div>
      </div>

      <span data-anim style={{ position: "absolute", top: "22%", left: "22%", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC", animation: "ak-twinkle 6s ease-in-out infinite" }}></span>
      <span data-anim style={{ position: "absolute", top: "34%", right: "24%", width: "4px", height: "4px", borderRadius: "50%", background: "#06367E", animation: "ak-twinkle 7.5s ease-in-out .8s infinite" }}></span>
      <span data-anim style={{ position: "absolute", bottom: "26%", left: "32%", width: "4px", height: "4px", borderRadius: "50%", background: "#2F80EC", animation: "ak-twinkle 5.4s ease-in-out 1.6s infinite" }}></span>
      <span data-anim style={{ position: "absolute", bottom: "18%", right: "16%", width: "5px", height: "5px", borderRadius: "50%", background: "rgba(6,54,126,.6)", animation: "ak-twinkle 8.2s ease-in-out .4s infinite" }}></span>

      <div data-anim style={{ position: "absolute", top: "-10%", left: "0", width: "34%", height: "120%", background: "linear-gradient(100deg, rgba(255,255,255,0), rgba(255,255,255,.85) 45%, rgba(255,255,255,0))", animation: "ak-sheen 16s ease-in-out infinite" }}></div>
    </div>

    <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "clamp(56px, 8vw, 118px) clamp(20px, 4vw, 40px) clamp(72px, 8vw, 120px)", textAlign: "center" }}>
      <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#fff", border: "1px solid #E3E9F3", borderRadius: "999px", padding: "11px 22px", boxShadow: "0 4px 18px rgba(16,27,51,.05)" }}>
        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#2F80EC", flex: "0 0 auto" }}></span>
        <span style={{ fontSize: "clamp(10px, .78vw, 12.5px)", fontWeight: "800", letterSpacing: ".1em", textTransform: "uppercase", color: "#17325F" }}>Connecting Exceptional Talent with Exceptional Businesses</span>
      </div>

      <h1 data-reveal style={{ margin: "clamp(28px, 3.4vw, 48px) 0 0", fontSize: "clamp(42px, 7.1vw, 104px)", lineHeight: "1.1", letterSpacing: "-.015em", fontWeight: "800", color: "#06367E" }}>Building Trust.<br />Delivering Excellence.</h1>

      <p data-reveal style={{ margin: "clamp(14px, 1.6vw, 22px) auto 0", fontSize: "clamp(24px, 3.1vw, 45px)", lineHeight: "1.24", letterSpacing: "-.015em", fontWeight: "500", color: "#101B33", textWrap: "balance" }}>Connecting Exceptional Talent<br />with Exceptional Businesses</p>

      <p data-reveal style={{ margin: "clamp(22px, 2.4vw, 34px) auto 0", maxWidth: "74ch", fontSize: "clamp(15px, 1.06vw, 19px)", lineHeight: "1.72", color: "#5B6577", textWrap: "pretty" }}>We Empower organizations with world-class recruitment, staffing, &amp; business solutions. Our commitment to quality, integrity, and innovation enables businesses to build high-performing teams while helping professionals achieve meaningful careers. Whether you're hiring top talent or seeking your next opportunity, we're here to deliver solutions that create lasting success</p>

      <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center", marginTop: "clamp(30px, 3.4vw, 44px)" }}>
        <button className="x9" type="button" onClick={openEnquiry} style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#2F80EC", color: "#fff", fontSize: "16px", fontWeight: "700", border: "none", borderRadius: "999px", padding: "19px 34px", cursor: "pointer", boxShadow: "0 12px 26px rgba(47,128,236,.32)", transition: "transform .25s ease, box-shadow .25s ease, background .25s ease" }}>Talk to an Expert <span style={{ fontSize: "13px" }}>&#8599;</span></button>
        <a className="x10" href="/services" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#fff", color: "#101B33", fontSize: "16px", fontWeight: "700", border: "1px solid #DCE3EE", borderRadius: "999px", padding: "19px 32px", transition: "transform .25s ease, border-color .25s ease, box-shadow .25s ease" }}>Explore Capabilities <span style={{ fontSize: "13px" }}>&#8599;</span></a>
      </div>

      <div data-reveal style={{ position: "relative", width: "min(460px, 74%)", margin: "clamp(40px, 4.6vw, 62px) auto 0", height: "12px" }}>
        <div style={{ position: "absolute", top: "5px", left: "0", right: "0", height: "1px", background: "linear-gradient(90deg, rgba(47,128,236,.15), rgba(47,128,236,.5), rgba(47,128,236,.15))" }}></div>
        <div style={{ position: "absolute", top: "0", left: "0", display: "flex", justifyContent: "space-between", width: "100%" }}>
          <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#fff", border: "2px solid #2F80EC" }}></span>
          <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#fff", border: "2px solid #2F80EC" }}></span>
          <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#fff", border: "2px solid #2F80EC" }}></span>
        </div>
        <span aria-hidden="true" style={{ position: "absolute", top: "3.5px", left: "0", width: "5px", height: "5px", marginLeft: "3px", borderRadius: "50%", background: "#2F80EC", animation: "ak-travel 5.2s cubic-bezier(.65,0,.35,1) infinite" }}></span>
      </div>
    </div>
  </section>
  );
}
