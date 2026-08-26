'use client';

import { useState } from 'react';

const labelStyle = { fontSize: "13px", fontWeight: "700", color: "#43506A" };
const inputStyle = { width: "100%", font: "inherit", fontSize: "15.5px", color: "#101B33", background: "#F8FAFE", border: "1px solid #E1E8F5", borderRadius: "12px", padding: "13px 16px" };

export default function ApplyModal({ role, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', experience: '', message: '' });
  const [cv, setCv] = useState(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const onField = (e) => { const { name, value } = e.target; setForm((f) => ({ ...f, [name]: value })); setError(''); };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) return setError('Please enter your name.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) return setError('Please enter a valid email address.');
    if (!form.phone.trim()) return setError('Please enter a phone number.');
    if (cv && cv.size > 5 * 1024 * 1024) return setError('CV is larger than 5 MB.');
    setBusy(true);
    try {
      const data = new FormData();
      data.append('role', role);
      Object.keys(form).forEach((k) => data.append(k, form[k]));
      if (cv) data.append('cv', cv);
      const res = await fetch('/apply.php', { method: 'POST', body: data });
      const out = await res.json().catch(() => ({}));
      if (!res.ok || !out.ok) throw new Error(out.error || 'failed');
      setSent(true);
    } catch (err) {
      setError(err.message === 'failed' ? 'Something went wrong. Please email your CV to hr@aarnikshasolutions.com.' : err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: "0", background: "rgba(6,25,58,.55)", backdropFilter: "blur(3px)", zIndex: "100", display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(16px, 4vw, 40px)" }}>
      <div onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" style={{ width: "min(560px, 100%)", maxHeight: "92vh", overflowY: "auto", background: "#fff", borderRadius: "22px", padding: "clamp(24px, 3vw, 40px)" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
          <div style={{ minWidth: "0" }}>
            <p style={{ margin: "0 0 6px", fontSize: "11.5px", fontWeight: "800", letterSpacing: ".12em", textTransform: "uppercase", color: "#2F80EC" }}>Apply</p>
            <h3 style={{ margin: "0", fontSize: "clamp(21px, 2vw, 26px)", lineHeight: "1.2", letterSpacing: "-.026em", fontWeight: "800", color: "#101B33", textWrap: "balance" }}>{role}</h3>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" style={{ flex: "0 0 auto", width: "38px", height: "38px", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#F1F5FC", border: "none", borderRadius: "50%", fontSize: "18px", fontWeight: "700", color: "#43506A", cursor: "pointer" }}>&#215;</button>
        </div>

        {sent ? (
          <div style={{ marginTop: "26px", background: "#E9EFFB", border: "1px solid #CFDFF9", borderRadius: "16px", padding: "26px" }}>
            <p style={{ margin: "0 0 8px", fontSize: "19px", fontWeight: "700", color: "#06367E" }}>Application received.</p>
            <p style={{ margin: "0", fontSize: "15.5px", lineHeight: "1.6", color: "#43506A" }}>Our recruitment team will review your profile and get back to you within two business days.</p>
          </div>
        ) : (
          <form onSubmit={submit} style={{ marginTop: "26px", display: "grid", gap: "16px" }}>
            <label style={{ display: "grid", gap: "7px" }}>
              <span style={labelStyle}>Full name</span>
              <input type="text" name="name" value={form.name} onChange={onField} placeholder="Your name" style={inputStyle} />
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
              <label style={{ display: "grid", gap: "7px" }}>
                <span style={labelStyle}>Email</span>
                <input type="email" name="email" value={form.email} onChange={onField} placeholder="you@email.com" style={inputStyle} />
              </label>
              <label style={{ display: "grid", gap: "7px" }}>
                <span style={labelStyle}>Phone</span>
                <input type="tel" name="phone" value={form.phone} onChange={onField} placeholder="+91" style={inputStyle} />
              </label>
            </div>
            <label style={{ display: "grid", gap: "7px" }}>
              <span style={labelStyle}>Total experience</span>
              <input type="text" name="experience" value={form.experience} onChange={onField} placeholder="e.g. 6 years" style={inputStyle} />
            </label>
            <label style={{ display: "grid", gap: "7px" }}>
              <span style={labelStyle}>CV <span style={{ fontWeight: "600", color: "#8A94A6" }}>&#183; PDF, DOC or DOCX, up to 5 MB</span></span>
              <input type="file" name="cv" accept=".pdf,.doc,.docx,.rtf,.odt" onChange={(e) => { setCv(e.target.files[0] || null); setError(''); }} style={{ width: "100%", font: "inherit", fontSize: "14px", color: "#43506A", background: "#F8FAFE", border: "1px dashed #C9D8F2", borderRadius: "12px", padding: "12px 14px" }} />
            </label>
            <label style={{ display: "grid", gap: "7px" }}>
              <span style={labelStyle}>Cover note</span>
              <textarea name="message" value={form.message} onChange={onField} rows="3" placeholder="Anything you would like us to know" style={{ ...inputStyle, resize: "vertical" }} />
            </label>
            <p style={{ margin: "0", minHeight: "18px", fontSize: "13.5px", fontWeight: "600", color: "#D4453B" }}>{error}</p>
            <button type="submit" disabled={busy} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px", background: "#2F80EC", color: "#fff", font: "inherit", fontSize: "16px", fontWeight: "700", border: "none", borderRadius: "999px", padding: "16px 26px", cursor: busy ? "default" : "pointer", opacity: busy ? ".7" : "1" }}>{busy ? 'Sending...' : 'Submit application'}</button>
            <p style={{ margin: "0", fontSize: "13px", lineHeight: "1.55", color: "#8A94A6" }}>Applications go to hr@aarnikshasolutions.com. You can also email your CV there directly.</p>
          </form>
        )}
      </div>
    </div>
  );
}
