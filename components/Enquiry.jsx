'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { ENDPOINT } from '../lib/config';

const Ctx = createContext({ openEnquiry: () => {} });
export const useEnquiry = () => useContext(Ctx);

export function EnquiryProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const openEnquiry = () => setModalOpen(true);
  return (
    <Ctx.Provider value={{ openEnquiry }}>
      {children}
      <EnquiryModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </Ctx.Provider>
  );
}

function EnquiryModal({ modalOpen, setModalOpen }) {
  const closeModal = () => setModalOpen(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', service: 'IT Staffing', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const notSent = !sent;
  const fName = form.name, fEmail = form.email, fCompany = form.company, fService = form.service, fMessage = form.message;
  const onField = (e) => { const { name, value } = e.target; setForm((f) => ({ ...f, [name]: value })); setError(''); };
  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) return setError('Please enter your name.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) return setError('Please enter a valid email address.');
    if (!form.message.trim()) return setError('Please add a short message.');
    setBusy(true);
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(form).toString() });
      if (!res.ok) throw new Error('bad status');
      setSent(true);
    } catch (err) {
      setError('We could not send that just now. Please email info@aarnikshasolutions.com directly.');
    } finally {
      setBusy(false);
    }
  };

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [modalOpen]);

  return (
    <>
  {modalOpen && (<>
    <div onClick={closeModal} style={{ position: "fixed", inset: "0", background: "rgba(6,25,58,.55)", backdropFilter: "blur(3px)", zIndex: "100", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", animation: "ak-fadein .25s ease both" }}>
      <div onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" style={{ width: "min(560px, 100%)", maxHeight: "92vh", overflowY: "auto", background: "#fff", borderRadius: "22px", padding: "clamp(24px, 3vw, 40px)", boxShadow: "0 40px 90px rgba(2,22,56,.35)", animation: "ak-pop .32s cubic-bezier(.2,.7,.3,1) both" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
          <div>
            <p style={{ margin: "0 0 8px", fontSize: "12px", fontWeight: "800", letterSpacing: ".14em", textTransform: "uppercase", color: "#2F80EC" }}>Talk to an Expert</p>
            <h3 style={{ margin: "0", fontSize: "clamp(24px, 2.4vw, 32px)", lineHeight: "1.1", letterSpacing: "-.025em", fontWeight: "800", color: "#101B33" }}>Let's build your team.</h3>
          </div>
          <button className="x67" type="button" onClick={closeModal} aria-label="Close" style={{ flex: "0 0 auto", width: "38px", height: "38px", borderRadius: "50%", border: "1px solid #E3EAF6", background: "#F8FAFE", color: "#43506A", fontSize: "17px", cursor: "pointer" }}>&#215;</button>
        </div>

        {sent && (<>
          <div style={{ marginTop: "26px", background: "#E9EFFB", border: "1px solid #CFDFF9", borderRadius: "16px", padding: "26px" }}>
            <p style={{ margin: "0 0 8px", fontSize: "19px", fontWeight: "700", color: "#06367E" }}>Thank you &#8212; message received.</p>
            <p style={{ margin: "0", fontSize: "15.5px", lineHeight: "1.6", color: "#43506A" }}>A member of our team will get back to you within one business day.</p>
          </div>
        </>)}

        {notSent && (<>
          <form onSubmit={submit} style={{ marginTop: "26px", display: "grid", gap: "16px" }}>
            <label style={{ display: "grid", gap: "7px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", color: "#43506A" }}>Full name</span>
              <input className="x68" type="text" name="name" value={fName} onChange={onField} placeholder="Your name" style={{ width: "100%", fontSize: "15.5px", color: "#101B33", background: "#F8FAFE", border: "1px solid #E1E8F4", borderRadius: "12px", padding: "14px 16px", outline: "none", transition: "border-color .2s ease, background .2s ease" }} />
            </label>
            <label style={{ display: "grid", gap: "7px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", color: "#43506A" }}>Work email</span>
              <input className="x69" type="email" name="email" value={fEmail} onChange={onField} placeholder="you@company.com" style={{ width: "100%", fontSize: "15.5px", color: "#101B33", background: "#F8FAFE", border: "1px solid #E1E8F4", borderRadius: "12px", padding: "14px 16px", outline: "none", transition: "border-color .2s ease, background .2s ease" }} />
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
              <label style={{ display: "grid", gap: "7px" }}>
                <span style={{ fontSize: "13px", fontWeight: "700", color: "#43506A" }}>Company</span>
                <input className="x70" type="text" name="company" value={fCompany} onChange={onField} placeholder="Company name" style={{ width: "100%", fontSize: "15.5px", color: "#101B33", background: "#F8FAFE", border: "1px solid #E1E8F4", borderRadius: "12px", padding: "14px 16px", outline: "none", transition: "border-color .2s ease, background .2s ease" }} />
              </label>
              <label style={{ display: "grid", gap: "7px" }}>
                <span style={{ fontSize: "13px", fontWeight: "700", color: "#43506A" }}>How can we help?</span>
                <select className="x71" name="service" value={fService} onChange={onField} style={{ width: "100%", fontSize: "15.5px", color: "#101B33", background: "#F8FAFE", border: "1px solid #E1E8F4", borderRadius: "12px", padding: "14px 16px", outline: "none", appearance: "none" }}>
                  <option value="IT Staffing">IT Staffing</option>
                  <option value="Non-IT Staffing">Non-IT Staffing</option>
                  <option value="Permanent Hiring">Permanent Hiring</option>
                  <option value="Contract Staffing">Contract Staffing</option>
                  <option value="Executive Search">Executive Search</option>
                  <option value="Recruitment Process Outsourcing (RPO)">Recruitment Process Outsourcing (RPO)</option>
                  <option value="Payroll & Compliance Support">Payroll &amp; Compliance Support</option>
                  <option value="HR Consulting">HR Consulting</option>
                </select>
              </label>
            </div>
            <label style={{ display: "grid", gap: "7px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", color: "#43506A" }}>Message</span>
              <textarea className="x72" name="message" value={fMessage} onChange={onField} rows="3" placeholder="Tell us about the roles you're hiring for" style={{ width: "100%", fontSize: "15.5px", color: "#101B33", background: "#F8FAFE", border: "1px solid #E1E8F4", borderRadius: "12px", padding: "14px 16px", outline: "none", resize: "vertical", fontFamily: "inherit", transition: "border-color .2s ease, background .2s ease" }}></textarea>
            </label>
            <p style={{ margin: "0", minHeight: "18px", fontSize: "13.5px", fontWeight: "600", color: "#D4453B" }}>{error}</p>
            <button className="x73" type="submit" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px", background: "#2F80EC", color: "#fff", fontSize: "16px", fontWeight: "700", border: "none", borderRadius: "999px", padding: "17px 30px", cursor: "pointer", boxShadow: "0 12px 26px rgba(47,128,236,.3)", transition: "background .25s ease, transform .25s ease" }}>Send enquiry <span style={{ fontSize: "13px" }}>&#8599;</span></button>
          </form>
        </>)}
      </div>
    </div>
  </>)}    </>
  );
}
