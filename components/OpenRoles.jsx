'use client';

import { useState } from 'react';
import ApplyModal from './ApplyModal';

const ROLES = [
  {"title":"Salesforce Business Analyst","exp":"4\u20135 years","openings":"1 opening","loc":"Hyderabad \u00B7 On-site","shift":"IST General 10:00 AM\u20137:00 PM","duration":null,"tech":"sfdc","lk":"hyderabad","types":["fulltime"],"skills":["Salesforce Business Analysis","Salesforce Administration","Salesforce CPQ","Requirements Gathering","User Stories","Process Flows","Data Migration","Reports & Dashboards","JIRA","Agile/Scrum"]},
  {"title":"Lead MLOps Engineer","exp":"10\u201314 years","openings":"2 openings","loc":"Hyderabad \u00B7 On-site","shift":"IST General 10:00 AM\u20137:00 PM","duration":null,"tech":"ai","lk":"hyderabad","types":["fulltime"],"skills":["MLOps","Python","TensorFlow / PyTorch","Domino Data Lab","AWS SageMaker","MLflow","Docker / Kubernetes","Model Deployment","ONNX / TorchScript","CI/CD"]},
  {"title":"Lead AI Architect \u2013 LLMOps","exp":"10\u201312 years","openings":"2 openings","loc":"Hyderabad \u00B7 On-site","shift":"IST General 10:00 AM\u20137:00 PM","duration":null,"tech":"ai","lk":"hyderabad","types":["fulltime"],"skills":["LLMOps","Python","FastAPI","LangChain","LlamaIndex","MLflow","BentoML / Ray","RAG","Agentic AI","Kubernetes / Terraform","Bedrock / SageMaker / Vertex AI"]},
  {"title":"SAP SD Functional Consultant","exp":"4\u20135 years","openings":"1 opening","loc":"Remote","shift":"IST General 10:00 AM\u20137:00 PM","duration":null,"tech":"sap","lk":"remote","types":["fulltime"],"skills":["SAP SD","Order-to-Cash","Pricing & Condition Techniques","Shipping & Delivery","Billing & Invoicing","Credit Management","SAP MM / FI Integration","SAP S/4HANA"]},
  {"title":"Azure & Power Platform Administrator","exp":"5\u20138 years","openings":"2 openings","loc":"Remote","shift":"UK Shift 1:30 PM\u201310:30 PM IST","duration":"3\u20136 months, extendable","tech":"cloud","lk":"remote","types":["contract"],"skills":["Azure Administration","Power Platform Administration","Microsoft Entra ID","Power Apps","Power Automate","Power Platform ALM","CI/CD","Azure DevOps","Copilot Studio"]},
  {"title":"Senior Technical Consultant \u2013 ServiceNow","exp":"5\u20136 years","openings":"2 openings","loc":"Mumbai \u00B7 On-site (Chandiwali / Malad / BKC)","shift":"IST General 10:00 AM\u20137:00 PM","duration":"6 months","tech":"snow","lk":"mumbai","types":["contract"],"skills":["ServiceNow","ITSM","ITOM","ITAM","CMDB","Discovery","Service Mapping","Event Management","HAM","SAM"]},
  {"title":"Salesforce Commerce Cloud (SFCC) Developer","exp":"6\u20137 years","openings":"2 openings","loc":"Chennai \u00B7 Hybrid","shift":"IST General 10:00 AM\u20137:00 PM","duration":null,"tech":"sfdc","lk":"chennai","types":["fulltime"],"skills":["SFCC","SFRA","OCAPI / SCAPI","Headless Commerce","Cartridges / Hooks / Jobs","OMS / ERP Integrations","Checkout & Promotions","CI/CD / Git"]},
  {"title":"Salesforce Experience Cloud Developer","exp":"6\u20137 years","openings":"2 openings","loc":"Hyderabad / Kochi \u00B7 On-site","shift":"IST General 10:00 AM\u20137:00 PM","duration":null,"tech":"sfdc","lk":"hyderabad","types":["fulltime"],"skills":["LWC","Experience Cloud","Community Cloud","Apex","Lightning Data Service","Wire Adapters","REST APIs","Permission Sets / Sharing Rules"]},
  {"title":"Salesforce B2B Commerce Cloud Developer","exp":"5\u20136 years","openings":"1 opening","loc":"Remote \u00B7 UAE Region","shift":"IST General 10:00 AM\u20137:00 PM","duration":"3 months","tech":"sfdc","lk":"remote","types":["contract"],"skills":["Salesforce B2B Commerce","LWR / Aura","Apex / LWC","Catalog & Price Books","Buyer Groups","Checkout & Promotions","SAP / Oracle ERP","Payment Gateways"]},
  {"title":"Salesforce Agentforce Implementation Specialist","exp":"3\u20135 years","openings":"2 openings","loc":"Bangalore \u00B7 On-site","shift":"IST General 10:00 AM\u20137:00 PM","duration":null,"tech":"sfdc","lk":"bangalore","types":["contract"],"skills":["Agentforce","Agent Builder","Apex / Flow Actions","Atlas Reasoning Engine","Data Cloud Grounding","Einstein Trust Layer","Multi-agent Architecture","Observability"]},
  {"title":"Senior ServiceNow Developer \u2013 Agentic AI","exp":"6\u20137 years","openings":"1 opening","loc":"Remote","shift":"UK Shift 1:30 PM\u201310:30 PM IST","duration":null,"tech":"snow","lk":"remote","types":["fulltime"],"skills":["ServiceNow Agentic AI","Now Assist","ITSM / ITOM / ITAM","JavaScript","Glide API","Flow Designer","IntegrationHub","REST / SOAP","CSA + CAD certified"]},
  {"title":"Senior ServiceNow Developer \u2013 SPM","exp":"7\u20138 years","openings":"1 opening","loc":"Remote","shift":"IST General 10:00 AM\u20137:00 PM","duration":"Immediate joiners","tech":"snow","lk":"remote","types":["fulltime"],"skills":["ServiceNow SPM","ITBM","Demand & PPM","APM","Resource Management","Financial Planning","JavaScript / Glide","SAFe","CIS-SPM certified"]},
  {"title":"Ansible Developer","exp":"5+ years","openings":null,"loc":"Bangalore / Hyderabad \u00B7 Hybrid","shift":null,"duration":"Immediate\u201315 days","tech":"cloud","lk":"bangalore","types":["fulltime"],"skills":["Ansible","Linux","Python","RESTCONF / NETCONF","GitHub","CI/CD","Network Automation","Azure DevOps"]},
  {"title":"ServiceNow Tech Lead","exp":"6\u20137 years","openings":null,"loc":"Offshore \u00B7 Remote","shift":null,"duration":"6 months \u00B7 BGV","tech":"snow","lk":"remote","types":["contract"],"skills":["ServiceNow Architecture","ITSM / ITOM / ITAM","CMDB","JavaScript","Glide API","Flow Designer","IntegrationHub","Code Review","Team Leadership"]},
  {"title":"ServiceNow Platform Developer","exp":"5\u20138 years","openings":null,"loc":"Offshore \u00B7 Remote","shift":null,"duration":"6 months, extendable \u00B7 BGV","tech":"snow","lk":"remote","types":["contract"],"skills":["ServiceNow Platform","JavaScript","Glide Scripting","Business Rules","Client Scripts","Flow Designer","IntegrationHub","Service Portal / UI Builder","Update Sets"]},
  {"title":"Broadband Operations / Network Domain SME","exp":"10\u201312 years","openings":"2 openings","loc":"Bangalore \u00B7 WFO 5 days","shift":null,"duration":null,"tech":"embedded","lk":"bangalore","types":["fulltime"],"skills":["Broadband Operations","FTTH / FTTx","GPON / XGS-PON","OLT / ONT / ONU","BNG / BRAS","DHCP / DNS / AAA","NOC Operations","TR-069 / TR-369","Telecom OSS/BSS"]},
  {"title":"Java Full Stack Developer","exp":"3\u20138 years","openings":null,"loc":"Hyderabad","shift":null,"duration":null,"tech":"java","lk":"hyderabad","types":["fulltime","c2h"],"skills":["Java 8/11/17+","Spring Boot","Spring Security","Microservices","REST APIs","Hibernate / JPA","React / Angular","TypeScript","Docker & Kubernetes","AWS / Azure","JUnit / Mockito"]},
  {"title":"AI / ML Engineer","exp":"2\u20138 years","openings":null,"loc":"Hyderabad","shift":null,"duration":null,"tech":"ai","lk":"hyderabad","types":["fulltime","c2h"],"skills":["Python","Machine Learning","Deep Learning","TensorFlow / PyTorch","NLP & Generative AI","LLMs & Transformers","RAG & Vector Databases","MLflow / Kubeflow","FastAPI","AWS / Azure / GCP"]},
  {"title":"DevOps / Cloud Engineer","exp":"3\u201310 years","openings":null,"loc":"Hyderabad","shift":null,"duration":null,"tech":"cloud","lk":"hyderabad","types":["fulltime","c2h"],"skills":["AWS / Azure / GCP","Linux","Docker & Kubernetes","Terraform","Jenkins / GitHub Actions","Ansible","Python / Bash","Cloud Security & IAM","Prometheus / Grafana","ELK / OpenSearch"]},
  {"title":"Data Engineer","exp":"3\u20138 years","openings":null,"loc":"Hyderabad","shift":null,"duration":null,"tech":"data","lk":"hyderabad","types":["fulltime","c2h"],"skills":["Python / PySpark","SQL","ETL / ELT","Apache Spark","Databricks","Snowflake / BigQuery / Redshift","Azure Data Factory / AWS Glue","Kafka","Airflow","Data Lakehouse"]},
  {"title":"AOSP / Android Platform Developer \u2013 Middleware & Framework","exp":"4\u201310 years","openings":null,"loc":"Hyderabad","shift":null,"duration":null,"tech":"embedded","lk":"hyderabad","types":["fulltime","c2h"],"skills":["AOSP / Android Framework","Android Middleware","Android HAL","Java / Kotlin","C / C++","Binder IPC","AIDL","Soong Build System","Android Automotive / AAOS","SELinux","Git / Gerrit"]},
  {"title":"ITSM Professional","exp":"3\u20138 years","openings":null,"loc":"Hyderabad","shift":null,"duration":null,"tech":"itsm","lk":"hyderabad","types":["fulltime","c2h"],"skills":["IT Service Management","ITIL 4","Incident Management","Problem Management","Change Management","Configuration Management / CMDB","Service Level Management","SLA / KPI Management","ServiceNow / Jira"]},
  {"title":"Requirement Engineer \u2013 Java / Spring / React","exp":"4\u20139 years","openings":null,"loc":"Hyderabad","shift":null,"duration":null,"tech":"java","lk":"hyderabad","types":["fulltime","c2h"],"skills":["Requirements Engineering","Java","Spring Boot","React.js","REST APIs","Microservices","User Stories","Functional Specifications","JIRA / Confluence","UML / Process Flow"]},
  {"title":"Commercial Data \u2013 Quality Assurance (QA)","exp":"3\u20138 years","openings":null,"loc":"Hyderabad","shift":null,"duration":null,"tech":"data","lk":"hyderabad","types":["fulltime","c2h"],"skills":["QA Automation","Data Validation & Reconciliation","ETL Testing","SQL","Database Testing","API Testing","Python","Selenium / Playwright","Data Migration Testing","JIRA"]},
  {"title":"SAP HANA Analytics Developer","exp":"4\u201310 years","openings":null,"loc":"Hyderabad","shift":null,"duration":null,"tech":"sap","lk":"hyderabad","types":["fulltime","c2h"],"skills":["SAP HANA","HANA Native Development","Embedded Analytics","CDS Views","Calculation Views","SQLScript","HANA Data Modeling","BW/4HANA","ABAP CDS","SAP S/4HANA","SAP Fiori"]},
  {"title":"RDK-B + Wi-Fi Embedded Software Developer","exp":"4\u201310 years","openings":null,"loc":"Hyderabad","shift":null,"duration":null,"tech":"embedded","lk":"hyderabad","types":["fulltime","c2h"],"skills":["RDK-B","Embedded C / C++","Embedded Linux","Wi-Fi Drivers & Middleware","Broadband CPE","DOCSIS / Gateway","TR-069 / TR-181","WPA2 / WPA3","Wi-Fi 6 / 6E","Yocto / Buildroot"]},
  {"title":"Senior ServiceNow Developer","exp":"5\u201310 years","openings":null,"loc":"Hyderabad","shift":null,"duration":null,"tech":"snow","lk":"hyderabad","types":["fulltime","c2h"],"skills":["ServiceNow Development","ITSM / ITOM / ITAM","JavaScript","Glide API","Script Includes","Business Rules","Flow Designer","IntegrationHub","REST / SOAP APIs","Service Portal / UI Builder","CMDB"]},
  {"title":"ServiceNow GRC Consultant","exp":"4\u20139 years","openings":null,"loc":"Hyderabad","shift":null,"duration":null,"tech":"snow","lk":"hyderabad","types":["fulltime","c2h"],"skills":["ServiceNow GRC / IRM","Risk Management","Compliance Management","Policy & Compliance","Audit Management","Vendor Risk Management","Regulatory Change Management","Advanced Risk","Control Objectives"]}
];

const GROUPS = [
  { kind: "tech", label: "Technology", basis: "1 1 210px", options: [["all","All technologies"],["sfdc","Salesforce"],["snow","ServiceNow & GRC"],["ai","AI & ML"],["cloud","Cloud & DevOps"],["java","Java / Full Stack"],["data","Data & Analytics"],["sap","SAP"],["embedded","Embedded & Telecom"],["itsm","ITSM"]] },
  { kind: "loc", label: "Location", basis: "1 1 175px", options: [["all","All locations"],["hyderabad","Hyderabad"],["bangalore","Bangalore"],["mumbai","Mumbai"],["chennai","Chennai"],["remote","Remote / Offshore"]] },
  { kind: "type", label: "Job type", basis: "1 1 185px", options: [["all","All job types"],["fulltime","Full-time"],["contract","Contract"],["c2h","Contract to Hire"]] }
];

const selectStyle = { appearance: "none", WebkitAppearance: "none", width: "100%", background: "#fff", border: "1px solid #DCE5F5", borderRadius: "999px", padding: "13px 40px 13px 18px", font: "inherit", fontSize: "14px", fontWeight: "600", color: "#101B33", cursor: "pointer" };
const chipStyle = { background: "#F5F8FD", border: "1px solid #E3EAF6", borderRadius: "8px", padding: "6px 12px", fontSize: "12.5px", fontWeight: "600", color: "#41506B", whiteSpace: "nowrap" };
const metaStyle = { display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: "600", color: "#8A94A6" };
const pillBlue = { border: "1px solid #C9D8F2", borderRadius: "999px", padding: "4px 12px", fontSize: "11px", fontWeight: "800", letterSpacing: ".08em", textTransform: "uppercase", color: "#2F80EC", whiteSpace: "nowrap" };
const pillGrey = { border: "1px solid #E3EAF6", background: "#F5F8FD", borderRadius: "999px", padding: "4px 12px", fontSize: "11px", fontWeight: "800", letterSpacing: ".08em", textTransform: "uppercase", color: "#6B7688", whiteSpace: "nowrap" };

const caret = (
  <span aria-hidden="true" style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", display: "inline-flex", color: "#6B7688", pointerEvents: "none" }}><svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1.6 6 6.4l5-4.8" /></svg></span>
);
const searchIcon = (
  <svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="9" cy="9" r="6.1" /><path d="M13.6 13.6 17 17" /></svg>
);
const pinIcon = (size) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17.5s5.6-5.2 5.6-9.2A5.6 5.6 0 0 0 4.4 8.3c0 4 5.6 9.2 5.6 9.2Z" /><circle cx="10" cy="8.2" r="2.1" /></svg>
);
const clockIcon = (size) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="7.4" /><path d="M10 5.8V10l2.8 1.8" /></svg>
);
const arrow = (size) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 10h11M11 5.5l4.5 4.5L11 14.5" /></svg>
);

export default function OpenRoles() {
  const [f, setF] = useState({ tech: "all", loc: "all", type: "all" });
  const [q, setQ] = useState("");
  const [applyRole, setApplyRole] = useState(null);
  const query = q.toLowerCase().trim();
  const shown = ROLES.filter((r) =>
    (f.tech === "all" || r.tech === f.tech) &&
    (f.loc === "all" || r.lk === f.loc) &&
    (f.type === "all" || r.types.includes(f.type)) &&
    (!query || (r.title + " " + r.skills.join(" ") + " " + r.loc).toLowerCase().includes(query))
  );

  return (
    <section id="openroles" style={{ scrollMarginTop: "clamp(76px, 6vw, 100px)", background: "#F6F9FE", borderTop: "1px solid #E3EAF6", borderBottom: "1px solid #E3EAF6" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "clamp(72px, 9vw, 122px) clamp(20px, 4vw, 40px)" }}>
        <div data-reveal style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "clamp(20px, 3vw, 40px)", marginBottom: "clamp(34px, 4vw, 54px)" }}>
          <div style={{ minWidth: "0" }}>
            <p style={{ margin: "0 0 16px", fontSize: "12px", fontWeight: "800", letterSpacing: ".14em", textTransform: "uppercase", color: "#2F80EC" }}>Open Positions</p>
            <h2 style={{ margin: "0 0 14px", maxWidth: "18ch", fontSize: "clamp(32px, 4.1vw, 58px)", lineHeight: "1.03", letterSpacing: "-.034em", fontWeight: "800", color: "#101B33" }}>Roles we are hiring for now</h2>
            <p style={{ margin: "0", maxWidth: "58ch", fontSize: "16px", lineHeight: "1.65", color: "#6B7688", textWrap: "pretty" }}>{ROLES.length} live mandates across Salesforce, ServiceNow, AI, cloud, data, SAP and embedded engineering. Filter the list, then apply by email &#8212; our consultants take it from there.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fff", border: "1px solid #D9E4F6", borderRadius: "999px", padding: "10px 18px", fontSize: "13.5px", fontWeight: "700", color: "#101B33" }}><span style={{ color: "#2F80EC", display: "inline-flex" }}>{pinIcon(15)}</span>Hyderabad &#183; Bangalore &#183; Mumbai &#183; Chennai &#183; Remote</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fff", border: "1px solid #D9E4F6", borderRadius: "999px", padding: "10px 18px", fontSize: "13.5px", fontWeight: "700", color: "#101B33" }}><span style={{ color: "#2F80EC", display: "inline-flex" }}>{clockIcon(15)}</span>Full-time &#183; Contract &#183; C2H</span>
          </div>
        </div>

        <div data-reveal style={{ background: "#fff", border: "1px solid #E3EAF6", borderRadius: "18px", padding: "clamp(16px, 1.8vw, 22px)", marginBottom: "clamp(18px, 2vw, 26px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
            <label style={{ flex: "2 1 260px", position: "relative", display: "flex", alignItems: "center", minWidth: "0" }}>
              <span aria-hidden="true" style={{ position: "absolute", left: "18px", display: "inline-flex", color: "#8A94A6", pointerEvents: "none" }}>{searchIcon}</span>
              <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={"Search role or skill \u2014 e.g. Kubernetes"} style={{ width: "100%", background: "#F7FAFE", border: "1px solid #DCE5F5", borderRadius: "999px", padding: "13px 18px 13px 46px", font: "inherit", fontSize: "14px", fontWeight: "600", color: "#101B33" }} />
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
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <span style={{ fontSize: "11.5px", fontWeight: "800", letterSpacing: ".12em", color: "#B6C4DC" }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={pillBlue}>{r.exp}</span>
                {r.openings && <span style={pillGrey}>{r.openings}</span>}
                {r.duration && <span style={pillGrey}>{r.duration}</span>}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "clamp(16px, 2.4vw, 32px)" }}>
                <div style={{ flex: "1 1 420px", minWidth: "0" }}>
                  <h3 style={{ margin: "0 0 10px", fontSize: "clamp(19px, 1.55vw, 23px)", lineHeight: "1.2", letterSpacing: "-.022em", fontWeight: "800", color: "#101B33", textWrap: "balance" }}>{r.title}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px" }}>
                    <span style={metaStyle}><span style={{ color: "#2F80EC", display: "inline-flex" }}>{pinIcon(14)}</span>{r.loc}</span>
                    {r.shift && <span style={metaStyle}><span style={{ color: "#2F80EC", display: "inline-flex" }}>{clockIcon(14)}</span>{r.shift}</span>}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }}>
                    {r.skills.map((s) => <span key={s} style={chipStyle}>{s}</span>)}
                  </div>
                </div>
                <button type="button" onClick={() => setApplyRole(r.title)} style={{ flex: "0 0 auto", marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: "8px", background: "#06367E", border: "none", borderRadius: "999px", padding: "12px 24px", font: "inherit", fontSize: "14px", fontWeight: "700", letterSpacing: "-.01em", color: "#fff", cursor: "pointer", whiteSpace: "nowrap" }}>Apply{arrow(14)}</button>
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
            <button type="button" onClick={() => setApplyRole("General profile")} style={{ display: "inline-flex", alignItems: "center", gap: "9px", background: "#fff", border: "none", borderRadius: "999px", padding: "13px 26px", font: "inherit", fontSize: "14.5px", fontWeight: "700", letterSpacing: "-.01em", color: "#06367E", cursor: "pointer", whiteSpace: "nowrap" }}>Send your profile{arrow(15)}</button>
          </div>
        </div>
      </div>
      {applyRole && <ApplyModal role={applyRole} onClose={() => setApplyRole(null)} />}
    </section>
  );
}
