'use client';

import { useState } from 'react';

const ROLES = [
  {
    title: "Java Full Stack Developer",
    exp: "3–8 years",
    tech: "java",
    loc: "hyderabad",
    types: ["fulltime", "c2h"],
    skills: ["Java 17+", "Spring Boot", "Microservices", "React / Angular", "REST APIs", "SQL", "AWS"]
  },
  {
    title: "AI / ML Engineer",
    exp: "2–8 years",
    tech: "ai",
    loc: "hyderabad",
    types: ["fulltime", "c2h"],
    skills: ["Python", "LLMs", "Generative AI", "TensorFlow / PyTorch", "LangChain", "Vector Databases"]
  },
  {
    title: "DevOps / Cloud Engineer",
    exp: "3–10 years",
    tech: "cloud",
    loc: "hyderabad",
    types: ["fulltime", "c2h"],
    skills: ["AWS / Azure", "Docker", "Kubernetes", "Terraform", "Jenkins", "CI/CD", "Linux"]
  },
  {
    title: "Data Engineer",
    exp: "3–8 years",
    tech: "data",
    loc: "hyderabad",
    types: ["fulltime", "c2h"],
    skills: ["Python", "SQL", "Spark", "Databricks", "Snowflake", "Kafka", "Airflow"]
  },
  {
    title: "ServiceNow Developer / GRC Consultant",
    exp: "2–7 years",
    tech: "snow",
    loc: "hyderabad",
    types: ["fulltime", "c2h"],
    skills: ["ServiceNow ITSM", "ITOM", "IRM / GRC", "JavaScript", "IntegrationHub", "CMDB"]
  }
];

const GROUPS = [
  { kind: "tech", label: "Technology", basis: "1 1 200px", options: [["all", "All technologies"], ["java", "Java / Full Stack"], ["ai", "AI & ML"], ["cloud", "Cloud & DevOps"], ["data", "Data"], ["snow", "ServiceNow / GRC"]] },
  { kind: "loc", label: "Location", basis: "1 1 160px", options: [["all", "All locations"], ["hyderabad", "Hyderabad"]] },
  { kind: "type", label: "Job type", basis: "1 1 180px", options: [["all", "All job types"], ["fulltime", "Full-time"], ["c2h", "Contract to Hire"]] }
];

const selectStyle = { appearance: "none", WebkitAppearance: "none", width: "100%", background: "#fff", border: "1px solid #DCE5F5", borderRadius: "999px", padding: "13px 40px 13px 18px", font: "inherit", fontSize: "14px", fontWeight: "600", color: "#101B33", cursor: "pointer" };
const caret = (
  <span aria-hidden="true" style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", display: "inline-flex", color: "#6B7688", pointerEvents: "none" }}><svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1.6 6 6.4l5-4.8" /></svg></span>
);
const searchIcon = (
  <svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="9" cy="9" r="6.1" /><path d="M13.6 13.6 17 17" /></svg>
);

const pinSm = (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17.5s5.6-5.2 5.6-9.2A5.6 5.6 0 0 0 4.4 8.3c0 4 5.6 9.2 5.6 9.2Z" /><circle cx="10" cy="8.2" r="2.1" /></svg>
);
const pin = (
  <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17.5s5.6-5.2 5.6-9.2A5.6 5.6 0 0 0 4.4 8.3c0 4 5.6 9.2 5.6 9.2Z" /><circle cx="10" cy="8.2" r="2.1" /></svg>
);
const clock = (
  <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="7.4" /><path d="M10 5.8V10l2.8 1.8" /></svg>
);
const arrow = (size) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 10h11M11 5.5l4.5 4.5L11 14.5" /></svg>
);

export default function OpenRoles() {
  const [f, setF] = useState({ tech: "all", loc: "all", type: "all" });
  const [q, setQ] = useState("");
  const query = q.toLowerCase().trim();
  const shown = ROLES.filter((r) =>
    (f.tech === "all" || r.tech === f.tech) &&
    (f.loc === "all" || r.loc === f.loc) &&
    (f.type === "all" || r.types.includes(f.type)) &&
    (!query || (r.title + " " + r.skills.join(" ")).toLowerCase().includes(query))
  );

  return (
    <section id="openroles" style={{ background: "#F6F9FE", borderTop: "1px solid #E3EAF6", borderBottom: "1px solid #E3EAF6" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "clamp(72px, 9vw, 122px) clamp(20px, 4vw, 40px)" }}>
        <div data-reveal style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "clamp(20px, 3vw, 40px)", marginBottom: "clamp(34px, 4vw, 54px)" }}>
          <div style={{ minWidth: "0" }}>
            <p style={{ margin: "0 0 16px", fontSize: "12px", fontWeight: "800", letterSpacing: ".14em", textTransform: "uppercase", color: "#2F80EC" }}>Open Positions</p>
            <h2 style={{ margin: "0 0 14px", maxWidth: "18ch", fontSize: "clamp(32px, 4.1vw, 58px)", lineHeight: "1.03", letterSpacing: "-.034em", fontWeight: "800", color: "#101B33" }}>Roles we are hiring for now</h2>
            <p style={{ margin: "0", maxWidth: "54ch", fontSize: "16px", lineHeight: "1.65", color: "#6B7688", textWrap: "pretty" }}>Apply by email and our consultants will match you to the right mandate — often within the same week.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fff", border: "1px solid #D9E4F6", borderRadius: "999px", padding: "10px 18px", fontSize: "13.5px", fontWeight: "700", color: "#101B33" }}><span style={{ color: "#2F80EC", display: "inline-flex" }}>{pin}</span>Hyderabad</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fff", border: "1px solid #D9E4F6", borderRadius: "999px", padding: "10px 18px", fontSize: "13.5px", fontWeight: "700", color: "#101B33" }}><span style={{ color: "#2F80EC", display: "inline-flex" }}>{clock}</span>Full-time &amp; Contract to Hire</span>
          </div>
        </div>

        <div data-reveal style={{ background: "#fff", border: "1px solid #E3EAF6", borderRadius: "18px", padding: "clamp(16px, 1.8vw, 22px)", marginBottom: "clamp(18px, 2vw, 26px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
            <label style={{ flex: "2 1 260px", position: "relative", display: "flex", alignItems: "center", minWidth: "0" }}>
              <span aria-hidden="true" style={{ position: "absolute", left: "18px", display: "inline-flex", color: "#8A94A6", pointerEvents: "none" }}>{searchIcon}</span>
              <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search role or skill — e.g. Kubernetes" style={{ width: "100%", background: "#F7FAFE", border: "1px solid #DCE5F5", borderRadius: "999px", padding: "13px 18px 13px 46px", font: "inherit", fontSize: "14px", fontWeight: "600", color: "#101B33" }} />
            </label>
            {GROUPS.map((g) => (
              <div key={g.kind} style={{ flex: g.basis, position: "relative", display: "flex", alignItems: "center", minWidth: "0" }}>
                <select value={f[g.kind]} onChange={(e) => setF({ ...f, [g.kind]: e.target.value })} aria-label={g.label} style={selectStyle}>
                  {g.options.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                </select>
                {caret}
              </div>
            ))}
            <button type="button" onClick={() => { setF({ tech: "all", loc: "all", type: "all" }); setQ(""); }} style={{ flex: "0 0 auto", background: "none", border: "none", padding: "0 8px", font: "inherit", fontSize: "13.5px", fontWeight: "700", color: "#2F80EC", cursor: "pointer", whiteSpace: "nowrap" }}>Clear</button>
          </div>
          <p style={{ margin: "12px 0 0", paddingLeft: "4px", fontSize: "13.5px", fontWeight: "600", color: "#6B7688" }}>Showing {shown.length} of {ROLES.length} roles</p>
        </div>

        <div data-reveal style={{ background: "#fff", border: "1px solid #E3EAF6", borderRadius: "22px", overflow: "hidden" }}>
          {shown.map((r, i) => (
            <article key={r.title} style={{ padding: "clamp(24px, 2.6vw, 34px) clamp(22px, 2.6vw, 38px)", borderBottom: "1px solid #EEF3FB" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                <span style={{ fontSize: "11.5px", fontWeight: "800", letterSpacing: ".12em", color: "#B6C4DC" }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ border: "1px solid #C9D8F2", borderRadius: "999px", padding: "4px 12px", fontSize: "11px", fontWeight: "800", letterSpacing: ".08em", textTransform: "uppercase", color: "#2F80EC", whiteSpace: "nowrap" }}>{r.exp}</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "clamp(16px, 2.4vw, 32px)" }}>
                <div style={{ flex: "1 1 420px", minWidth: "0" }}>
                  <h3 style={{ margin: "0 0 8px", fontSize: "clamp(19px, 1.55vw, 23px)", lineHeight: "1.2", letterSpacing: "-.022em", fontWeight: "800", color: "#101B33", textWrap: "balance" }}>{r.title}</h3>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: "600", color: "#8A94A6" }}><span style={{ color: "#2F80EC", display: "inline-flex" }}>{pinSm}</span>Hyderabad · Full-time &amp; C2H</span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }}>
                    {r.skills.map((s) => (
                      <span key={s} style={{ background: "#F5F8FD", border: "1px solid #E3EAF6", borderRadius: "8px", padding: "6px 12px", fontSize: "12.5px", fontWeight: "600", color: "#41506B", whiteSpace: "nowrap" }}>{s}</span>
                    ))}
                  </div>
                </div>
                <a href={"mailto:hr@aarnikshasolutions.com?subject=" + encodeURIComponent("Application — " + r.title)} style={{ flex: "0 0 auto", marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: "8px", background: "#06367E", borderRadius: "999px", padding: "12px 24px", fontSize: "14px", fontWeight: "700", letterSpacing: "-.01em", color: "#fff", textDecoration: "none", whiteSpace: "nowrap" }}>Apply{arrow(14)}</a>
              </div>
            </article>
          ))}

          {shown.length === 0 && (
            <div style={{ padding: "clamp(40px, 5vw, 64px) clamp(22px, 2.6vw, 38px)", textAlign: "center", borderBottom: "1px solid #EEF3FB" }}>
              <p style={{ margin: "0 0 6px", fontSize: "18px", fontWeight: "800", letterSpacing: "-.02em", color: "#101B33" }}>No roles match those filters</p>
              <p style={{ margin: "0", fontSize: "15px", color: "#6B7688" }}>Clear a filter, or email your CV to hr@aarnikshasolutions.com and we will get in touch when a matching mandate opens.</p>
            </div>
          )}

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "clamp(18px, 2.4vw, 36px)", background: "#06367E", padding: "clamp(26px, 2.8vw, 36px) clamp(22px, 2.6vw, 38px)" }}>
            <div style={{ minWidth: "0" }}>
              <h3 style={{ margin: "0 0 8px", fontSize: "clamp(20px, 1.75vw, 25px)", lineHeight: "1.18", letterSpacing: "-.026em", fontWeight: "800", color: "#fff", textWrap: "balance" }}>Don&apos;t see your role listed?</h3>
              <p style={{ margin: "0", maxWidth: "62ch", fontSize: "15px", lineHeight: "1.6", color: "rgba(255,255,255,.78)", textWrap: "pretty" }}>New mandates open every week across engineering, cloud and enterprise platforms. Email your CV to hr@aarnikshasolutions.com and we will reach out when there is a fit.</p>
            </div>
            <a href={"mailto:hr@aarnikshasolutions.com?subject=" + encodeURIComponent("Application — General profile")} style={{ display: "inline-flex", alignItems: "center", gap: "9px", background: "#fff", borderRadius: "999px", padding: "13px 26px", fontSize: "14.5px", fontWeight: "700", letterSpacing: "-.01em", color: "#06367E", textDecoration: "none", whiteSpace: "nowrap" }}>Email your profile{arrow(15)}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
