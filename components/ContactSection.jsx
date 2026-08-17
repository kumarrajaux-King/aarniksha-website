'use client';
import { useState } from 'react';
import { ENDPOINT } from '../lib/config';

export default function ContactSection({ hideHeading = false }) {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: 'IT Staffing', serviceOther: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const notSent = !sent;
  const fName = form.name, fEmail = form.email, fCompany = form.company, fService = form.service, fServiceOther = form.serviceOther, fMessage = form.message;
  const isOther = form.service === 'Other';
  const onField = (e) => { const { name, value } = e.target; setForm((f) => ({ ...f, [name]: value })); setError(''); };
  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) return setError('Please enter your name.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) return setError('Please enter a valid email address.');
    if (form.service === 'Other' && !form.serviceOther.trim()) return setError('Please tell us what you need.');
    if (!form.message.trim()) return setError('Please add a short message.');
    setBusy(true);
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ ...form, service: form.service === 'Other' ? form.serviceOther.trim() : form.service }).toString() });
      if (!res.ok) throw new Error('bad status');
      setSent(true);
    } catch (err) {
      setError('We could not send that just now. Please email info@aarnikshasolutions.com directly.');
    } finally {
      setBusy(false);
    }
  };

  return (
  <section id="contact" style={{ background: "#fff" }}>
    <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "clamp(72px, 9vw, 126px) clamp(20px, 4vw, 40px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "clamp(32px, 4.6vw, 72px)", alignItems: "start" }}>
      <div>
        {!hideHeading && (<p data-reveal style={{ margin: "0 0 22px", fontSize: "13px", fontWeight: "800", letterSpacing: ".14em", textTransform: "uppercase", color: "#2F80EC" }}>Contact Us</p>)}
        {!hideHeading && (<h2 data-reveal style={{ margin: "0 0 20px", maxWidth: "16ch", fontSize: "clamp(34px, 4.7vw, 62px)", lineHeight: "1.04", letterSpacing: "-.028em", fontWeight: "800", color: "#101B33" }}>Let's talk about your next hire</h2>)}
        <p data-reveal style={{ margin: "0 0 clamp(24px, 3vw, 36px)", maxWidth: "46ch", fontSize: "clamp(15px, 1.02vw, 17.5px)", lineHeight: "1.62", color: "#5B6577", textWrap: "pretty" }}>Whether you are building a team or exploring your next role, our consultants respond within one business day.</p>
        <div data-reveal style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px 0", borderBottom: "1px solid #E9EDF5" }}>
          <span aria-hidden="true" style={{ flex: "0 0 auto", width: "44px", height: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", background: "#E9EFFB", color: "#2F80EC" }}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2.6" y="4.6" width="14.8" height="10.8" rx="2.2" /><path d="M3.6 6.2l6.4 4.6 6.4-4.6" /></svg></span>
          <div style={{ minWidth: "0" }}>
            <p style={{ margin: "0 0 4px", fontSize: "12px", fontWeight: "800", letterSpacing: ".1em", textTransform: "uppercase", color: "#8A94A6" }}>Email</p>
            <p style={{ margin: "0", fontSize: "17px", fontWeight: "600", letterSpacing: "-.01em", color: "#101B33" }}>info@aarnikshasolutions.com</p>
            <p style={{ margin: "2px 0 0", fontSize: "14px", fontWeight: "600", color: "#8A94A6" }}>Careers &amp; applications — hr@aarnikshasolutions.com</p>
          </div>
        </div>
        <div data-reveal style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px 0", borderBottom: "1px solid #E9EDF5" }}>
          <span aria-hidden="true" style={{ flex: "0 0 auto", width: "44px", height: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", background: "#E9EFFB", color: "#2F80EC" }}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5.6" y="2.2" width="8.8" height="15.6" rx="2.4" /><path d="M8.8 15.2h2.4" /></svg></span>
          <div style={{ minWidth: "0" }}>
            <p style={{ margin: "0 0 4px", fontSize: "12px", fontWeight: "800", letterSpacing: ".1em", textTransform: "uppercase", color: "#8A94A6" }}>Phone</p>
            <p style={{ margin: "0", fontSize: "17px", fontWeight: "600", letterSpacing: "-.01em", color: "#101B33" }}>+91 94923 69600<br />+91 93917 20155</p>
          </div>
        </div>
        <div data-reveal style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px 0", borderBottom: "1px solid #E9EDF5" }}>
          <span aria-hidden="true" style={{ flex: "0 0 auto", width: "44px", height: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", background: "#E9EFFB", color: "#2F80EC" }}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17.4c3.4-4 5.1-6.8 5.1-8.6a5.1 5.1 0 10-10.2 0c0 1.8 1.7 4.6 5.1 8.6z" /><circle cx="10" cy="8.6" r="1.9" /></svg></span>
          <div style={{ minWidth: "0" }}>
            <p style={{ margin: "0 0 4px", fontSize: "12px", fontWeight: "800", letterSpacing: ".1em", textTransform: "uppercase", color: "#8A94A6" }}>Corporate Office</p>
            <p style={{ margin: "0", fontSize: "16.5px", fontWeight: "600", lineHeight: "1.5", letterSpacing: "-.01em", color: "#101B33" }}>Vishnu Smaran, Plot no 1300 &amp; 1301, Allapur, Khanamet, Ayyapa Society, Madhapur, Hyderabad - 500081</p>
            <p style={{ margin: "10px 0 0", fontSize: "14px", fontWeight: "600", lineHeight: "1.5", color: "#8A94A6" }}>Registered Office &#8212; Road No 6, AGI Colony, Moosapet Hyderabad - 500018</p>
          </div>
        </div>
        <div data-reveal style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px 0", borderBottom: "1px solid #E9EDF5" }}>
          <span aria-hidden="true" style={{ flex: "0 0 auto", width: "44px", height: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", background: "#E9EFFB", color: "#2F80EC" }}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="7.6" /><path d="M10 5.8V10l3 1.8" /></svg></span>
          <div style={{ minWidth: "0" }}>
            <p style={{ margin: "0 0 4px", fontSize: "12px", fontWeight: "800", letterSpacing: ".1em", textTransform: "uppercase", color: "#8A94A6" }}>Hours</p>
            <p style={{ margin: "0", fontSize: "17px", fontWeight: "600", letterSpacing: "-.01em", color: "#101B33" }}>Mon&#8211;Fri &#183; 9:30am &#8211; 6:30pm IST</p>
          </div>
        </div>
      </div>

      <div data-reveal style={{ background: "#F8FAFE", border: "1px solid #E3EAF6", borderRadius: "22px", padding: "clamp(26px, 3vw, 40px)", boxShadow: "0 18px 44px rgba(16,27,51,.06)" }}>
        <h3 style={{ margin: "0 0 6px", fontSize: "clamp(22px, 2.2vw, 28px)", lineHeight: "1.14", letterSpacing: "-.025em", fontWeight: "800", color: "#101B33" }}>Send us an enquiry</h3>
        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#6B7688" }}>Tell us what you need and we'll come back with a plan.</p>

        {sent && (<>
          <div style={{ marginTop: "24px", background: "#E9EFFB", border: "1px solid #CFDFF9", borderRadius: "16px", padding: "26px" }}>
            <p style={{ margin: "0 0 8px", fontSize: "19px", fontWeight: "700", color: "#06367E" }}>Thank you &#8212; message received.</p>
            <p style={{ margin: "0", fontSize: "15.5px", lineHeight: "1.6", color: "#43506A" }}>A member of our team will get back to you within one business day.</p>
          </div>
        </>)}

        {notSent && (<>
          <form onSubmit={submit} style={{ marginTop: "24px", display: "grid", gap: "16px" }}>
            <label style={{ display: "grid", gap: "7px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", color: "#43506A" }}>Full name</span>
              <input className="x46" type="text" name="name" value={fName} onChange={onField} placeholder="Your name" style={{ width: "100%", fontSize: "15.5px", color: "#101B33", background: "#F8FAFE", border: "1px solid #E1E8F4", borderRadius: "12px", padding: "15px 16px", outline: "none", transition: "border-color .2s ease, background .2s ease" }} />
            </label>
            <label style={{ display: "grid", gap: "7px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", color: "#43506A" }}>Work email</span>
              <input className="x47" type="email" name="email" value={fEmail} onChange={onField} placeholder="you@company.com" style={{ width: "100%", fontSize: "15.5px", color: "#101B33", background: "#F8FAFE", border: "1px solid #E1E8F4", borderRadius: "12px", padding: "15px 16px", outline: "none", transition: "border-color .2s ease, background .2s ease" }} />
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
            <label style={{ display: "grid", gap: "7px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", color: "#43506A" }}>Company</span>
              <input className="x48" type="text" name="company" value={fCompany} onChange={onField} placeholder="Company name" style={{ width: "100%", fontSize: "15.5px", color: "#101B33", background: "#F8FAFE", border: "1px solid #E1E8F4", borderRadius: "12px", padding: "15px 16px", outline: "none", transition: "border-color .2s ease, background .2s ease" }} />
            </label>
              <label style={{ display: "grid", gap: "7px" }}>
                <span style={{ fontSize: "13px", fontWeight: "700", color: "#43506A" }}>How can we help?</span>
                <select className="x49" name="service" value={fService} onChange={onField} style={{ width: "100%", fontSize: "15.5px", color: "#101B33", background: "#F8FAFE", border: "1px solid #E1E8F4", borderRadius: "12px", padding: "15px 16px", outline: "none", appearance: "none" }}>
                  <option value="IT Staffing">IT Staffing</option>
                  <option value="Non-IT Staffing">Non-IT Staffing</option>
                  <option value="Permanent Hiring">Permanent Hiring</option>
                  <option value="Contract Staffing">Contract Staffing</option>
                  <option value="Executive Search">Executive Search</option>
                  <option value="Recruitment Process Outsourcing (RPO)">Recruitment Process Outsourcing (RPO)</option>
                  <option value="Payroll & Compliance Support">Payroll &amp; Compliance Support</option>
                  <option value="HR Consulting">HR Consulting</option>
                  <option value="Software Development">Software Development</option>
                  <option value="Corporate Trainings">Corporate Trainings</option>
                  <option value="Other">Something else &#8212; type your own</option>
                </select>
                {isOther && (<input className="x48" type="text" name="serviceOther" value={fServiceOther} onChange={onField} placeholder="Tell us what you need" style={{ width: "100%", marginTop: "10px", fontSize: "15.5px", color: "#101B33", background: "#F8FAFE", border: "1px solid #E1E8F4", borderRadius: "12px", padding: "15px 16px", outline: "none", transition: "border-color .2s ease, background .2s ease" }} />)}
              </label>
            </div>
            <label style={{ display: "grid", gap: "7px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", color: "#43506A" }}>Message</span>
              <textarea className="x50" name="message" value={fMessage} onChange={onField} rows="4" placeholder="Tell us about the roles you're hiring for" style={{ width: "100%", fontSize: "15.5px", color: "#101B33", background: "#F8FAFE", border: "1px solid #E1E8F4", borderRadius: "12px", padding: "15px 16px", outline: "none", resize: "vertical", fontFamily: "inherit", transition: "border-color .2s ease, background .2s ease" }}></textarea>
            </label>
            <p style={{ margin: "0", minHeight: "18px", fontSize: "13.5px", fontWeight: "600", color: "#D4453B" }}>{error}</p>
            <button className="x51" type="submit" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px", background: "#2F80EC", color: "#fff", fontSize: "16px", fontWeight: "700", border: "none", borderRadius: "999px", padding: "17px 30px", cursor: "pointer", boxShadow: "0 12px 26px rgba(47,128,236,.3)", transition: "background .25s ease, transform .25s ease" }}>Send enquiry <span style={{ fontSize: "13px" }}>&#8599;</span></button>
          </form>
        </>)}
      </div>
    </div>
  </section>
  );
}

