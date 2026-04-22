import { useState, useEffect } from "react";

const NAV_LINKS = ["Courses", "Features", "Instructors", "Pricing"];

const STATS = [
  { value: "50K+", label: "Active Students" },
  { value: "1,200+", label: "Video Courses" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "200+", label: "Expert Instructors" },
];

const CATEGORIES = [
  {
    label: "School",
    icon: "🏫",
    color: "#00E5FF",
    sub: ["Mathematics", "Physics", "Chemistry", "Biology", "History", "Literature"],
  },
  {
    label: "University",
    icon: "🎓",
    color: "#A78BFA",
    sub: ["Computer Science", "Engineering", "Medicine", "Law", "Business", "Architecture"],
  },
  {
    label: "Technology",
    icon: "💻",
    color: "#FF4D8D",
    sub: ["Web Development", "Mobile Apps", "Cloud & DevOps", "Cybersecurity", "AI & ML", "Data Science"],
  },
  {
    label: "Science",
    icon: "🔬",
    color: "#34D399",
    sub: ["Biotechnology", "Neuroscience", "Quantum Physics", "Genetics", "Astronomy", "Environmental Sci"],
  },
  {
    label: "Business",
    icon: "📈",
    color: "#FBBF24",
    sub: ["Entrepreneurship", "Finance", "Marketing", "Product Management", "Leadership", "Accounting"],
  },
  {
    label: "Creative Arts",
    icon: "🎨",
    color: "#F87171",
    sub: ["Graphic Design", "UI/UX Design", "Photography", "Video Editing", "Music Theory", "3D Modeling"],
  },
];

const FEATURES = [
  { icon: "▶", title: "YouTube-Powered Learning", desc: "Curated YouTube content integrated into structured learning paths.", accent: "#00E5FF" },
  { icon: "✦", title: "AI Summarization", desc: "AI distills hours of video into sharp, actionable summaries.", accent: "#FF4D8D" },
  { icon: "⬡", title: "Role-Based Access", desc: "Students, instructors, and admins get tailored dashboards.", accent: "#A78BFA" },
  { icon: "◈", title: "Secure Authentication", desc: "JWT-secured sessions with Spring Security.", accent: "#34D399" },
  { icon: "⊞", title: "Course Management", desc: "Create, edit, and publish courses with rich media.", accent: "#FBBF24" },
  { icon: "↗", title: "Scalable on AWS", desc: "Built on AWS for reliability and auto-scaling.", accent: "#F87171" },
];

const COURSES = [
  { title: "React & Modern Frontend", tag: "Frontend", hours: "42h", students: "8.2K", color: "#00E5FF" },
  { title: "Spring Boot Mastery", tag: "Backend", hours: "38h", students: "6.1K", color: "#FF4D8D" },
  { title: "AWS Cloud Essentials", tag: "DevOps", hours: "29h", students: "9.4K", color: "#A78BFA" },
  { title: "Machine Learning with Python", tag: "AI/ML", hours: "55h", students: "12K", color: "#34D399" },
];

const TESTIMONIALS = [
  { name: "Asel Perera", role: "Software Engineer", text: "The AI summaries saved me hours. I could grasp complex topics in minutes.", avatar: "A", color: "#00E5FF" },
  { name: "Ruwan Silva", role: "Full Stack Developer", text: "Best structured learning I've experienced. The YouTube integration is seamless.", avatar: "R", color: "#FF4D8D" },
  { name: "Nimasha Fernando", role: "DevOps Engineer", text: "Role-based dashboards are a game changer. Everything is exactly where I need it.", avatar: "N", color: "#A78BFA" },
];

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setActiveFeature(p => (p + 1) % FEATURES.length), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={s.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior: smooth; }
        html, body { width:100%; background:#06060F; overflow-x:hidden; }
        #root { width:100%; }
        a { text-decoration:none; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        .nav-lnk:hover { color:#fff !important; }
        .sub-item:hover { background:rgba(255,255,255,0.06) !important; }
        .course-card:hover { transform:translateY(-6px) !important; }
        .btn-cta:hover { transform:scale(1.04); box-shadow:0 0 40px rgba(0,229,255,0.35) !important; }
        .btn-ghost:hover { border-color:rgba(255,255,255,0.3) !important; color:#fff !important; }
      `}</style>

      {/* BG */}
      <div style={s.g1} /><div style={s.g2} /><div style={s.g3} />
      <div style={s.grid} />

      {/* NAV */}
      <nav style={{ ...s.nav, background: scrollY > 60 ? "rgba(6,6,15,0.97)" : "transparent" }}>
        <div style={s.navRow}>
          <div style={s.logo}>
            <div style={s.logoBox}>⬡</div>
            <span style={s.logoTxt}>LearnForge</span>
          </div>
          <div style={s.navLinks}>
            {NAV_LINKS.map(l => <a key={l} href="#" className="nav-lnk" style={s.navLnk}>{l}</a>)}
          </div>
          <div style={s.navBtns}>
            <button className="btn-ghost" style={s.ghostBtn}>Sign In</button>
            <button style={s.solidBtn}>Get Started →</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={s.hero}>
        <div style={s.badge}>
          <span style={s.badgeDot} />
          AI-Powered · YouTube-Integrated · AWS-Deployed
        </div>
        <h1 style={s.h1}>
          <span style={s.h1White}>Master Skills</span>
          <span style={s.h1Grad}>Faster Than</span>
          <span style={s.h1White}>Ever Before</span>
        </h1>
        <p style={s.heroP}>
          Structured courses, YouTube content, and AI-powered summaries —<br/>
          all in one place. Learn smarter, not harder.
        </p>
        <div style={s.ctaRow}>
          <button className="btn-cta" style={s.ctaBtn}>Start Learning Free →</button>
          <button style={s.outlineBtn}>▶ Watch Demo</button>
        </div>
        <div style={s.statsRow}>
          {STATS.map(st => (
            <div key={st.label} style={s.statBox}>
              <span style={s.statNum}>{st.value}</span>
              <span style={s.statLbl}>{st.label}</span>
            </div>
          ))}
        </div>
        <div style={{ ...s.floater, top: "22%", right: "7%" }}><span style={{ color: "#34D399" }}>✓</span> New lesson unlocked!</div>
        <div style={{ ...s.floater, bottom: "28%", right: "4%", animationDelay: "1.8s" }}><span style={{ color: "#FBBF24" }}>★</span> AI Summary ready</div>
      </section>

      {/* CATEGORIES */}
      <section style={s.sec}>
        <div style={s.wrap}>
          <div style={s.secLabel}>EXPLORE BY CATEGORY</div>
          <h2 style={s.h2}>Find Your <span style={s.cyan}>Learning Path</span></h2>
          <p style={s.secSub}>From school fundamentals to advanced university disciplines — every learner has a place here.</p>
          <div style={s.catTabs}>
            {CATEGORIES.map((c, i) => (
              <button key={i} onClick={() => setActiveCategory(i)} style={{
                ...s.catBtn,
                background: activeCategory === i ? `${c.color}15` : "rgba(255,255,255,0.03)",
                border: `1px solid ${activeCategory === i ? c.color + "55" : "rgba(255,255,255,0.07)"}`,
                color: activeCategory === i ? c.color : "rgba(255,255,255,0.45)",
              }}>
                <span style={{ fontSize: 18 }}>{c.icon}</span> {c.label}
              </button>
            ))}
          </div>
          <div style={s.subGrid}>
            {CATEGORIES[activeCategory].sub.map((sub, i) => (
              <div key={i} className="sub-item" style={{ ...s.subItem, borderColor: `${CATEGORIES[activeCategory].color}30` }}>
                <span style={{ color: CATEGORIES[activeCategory].color }}>→</span>
                <span>{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={s.sec}>
        <div style={s.wrap}>
          <div style={s.secLabel}>PLATFORM FEATURES</div>
          <h2 style={s.h2}>Everything You Need to <span style={s.cyan}>Excel</span></h2>
          <div style={s.featGrid}>
            {FEATURES.map((f, i) => (
              <div key={i} onMouseEnter={() => setActiveFeature(i)} style={{
                ...s.featCard,
                borderColor: activeFeature === i ? f.accent : "rgba(255,255,255,0.06)",
                boxShadow: activeFeature === i ? `0 0 36px ${f.accent}15` : "none",
                transform: activeFeature === i ? "translateY(-5px)" : "none",
              }}>
                <span style={{ fontSize: 28, color: f.accent, display: "block", marginBottom: 14 }}>{f.icon}</span>
                <h3 style={s.featTitle}>{f.title}</h3>
                <p style={s.featDesc}>{f.desc}</p>
                <div style={{ height: 2, width: 36, borderRadius: 2, background: f.accent, marginTop: 20 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section style={{ ...s.sec, background: "rgba(255,255,255,0.012)" }}>
        <div style={s.wrap}>
          <div style={s.secLabel}>POPULAR COURSES</div>
          <h2 style={s.h2}>Top Courses <span style={s.cyan}>This Month</span></h2>
          <div style={s.courseGrid}>
            {COURSES.map((c, i) => (
              <div key={i} className="course-card" style={s.courseCard}>
                <div style={{ ...s.courseThumb, background: `linear-gradient(135deg, ${c.color}18, ${c.color}05)` }}>
                  <span style={{ fontSize: 42 }}>📺</span>
                  <div style={{ ...s.courseTag, color: c.color, border: `1px solid ${c.color}44` }}>{c.tag}</div>
                </div>
                <div style={s.courseBody}>
                  <h3 style={s.courseTitle}>{c.title}</h3>
                  <div style={s.courseMeta}><span>⏱ {c.hours}</span><span>👥 {c.students}</span></div>
                  <button style={{ ...s.courseEnroll, color: c.color, borderColor: `${c.color}40` }}>Enroll Now →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI BANNER */}
      <section style={s.aiBanner}>
        <div style={s.wrap}>
          <div style={s.aiRow}>
            <div style={{ flex: 1, minWidth: 260 }}>
              <span style={{ fontSize: 60, color: "#FF4D8D", display: "block", marginBottom: 20, animation: "float 3s ease-in-out infinite" }}>✦</span>
              <h2 style={{ ...s.h2, marginBottom: 14 }}>AI-Powered Summarization</h2>
              <p style={{ ...s.secSub, marginBottom: 32 }}>Our intelligent engine analyzes video content and generates concise, structured summaries — saving you hours while maximizing retention.</p>
              <button className="btn-cta" style={s.ctaBtn}>Try AI Summary →</button>
            </div>
            <div style={s.aiCard}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#FF4D8D", letterSpacing: 2, marginBottom: 16 }}>✦ AI SUMMARY</div>
              {[100, 100, 65].map((w, i) => <div key={i} style={{ height: 8, width: `${w}%`, background: "rgba(255,255,255,0.07)", borderRadius: 4, marginBottom: 10 }} />)}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
                {[["Key Concept 1","#00E5FF"],["Key Concept 2","#FF4D8D"],["Key Concept 3","#A78BFA"]].map(([t,c]) => (
                  <span key={t} style={{ padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600, background: `${c}20`, color: c }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={s.sec}>
        <div style={s.wrap}>
          <div style={s.secLabel}>TESTIMONIALS</div>
          <h2 style={s.h2}>What Our <span style={s.cyan}>Students Say</span></h2>
          <div style={s.testiGrid}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={s.testiCard}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 52, color: "rgba(0,229,255,0.12)", lineHeight: 1, marginBottom: 8 }}>"</div>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 24, fontWeight: 300 }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${t.color}20`, color: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Syne',sans-serif", fontWeight: 800 }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={s.ctaSec}>
        <div style={s.ctaGlow} />
        <h2 style={{ ...s.h1White, fontFamily: "'Syne',sans-serif", fontSize: "clamp(36px,6vw,68px)", fontWeight: 800, letterSpacing: "-2px", marginBottom: 14 }}>Ready to Start Your Journey?</h2>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.38)", marginBottom: 44, fontWeight: 300 }}>Join 50,000+ learners already leveling up their skills.</p>
        <button className="btn-cta" style={s.ctaBtn}>Create Free Account →</button>
      </section>

      {/* FOOTER */}
      <footer style={s.footer}>
        <div style={s.wrap}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div style={s.logo}>
              <div style={s.logoBox}>⬡</div>
              <span style={s.logoTxt}>LearnForge</span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.22)" }}>© 2025 LearnForge · React + Spring Boot + AWS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const s = {
  root: { fontFamily: "'DM Sans', sans-serif", background: "#06060F", color: "#E8E8F0", minHeight: "100vh", width: "100%", overflowX: "hidden" },
  g1: { position: "fixed", top: "-15%", left: "-5%", width: 800, height: 800, background: "radial-gradient(circle, rgba(0,229,255,0.055) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 },
  g2: { position: "fixed", bottom: "-20%", right: "-10%", width: 700, height: 700, background: "radial-gradient(circle, rgba(167,139,250,0.055) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 },
  g3: { position: "fixed", top: "40%", left: "35%", width: 500, height: 500, background: "radial-gradient(circle, rgba(255,77,141,0.035) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 },
  grid: { position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.016) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.016) 1px, transparent 1px)", backgroundSize: "64px 64px", pointerEvents: "none", zIndex: 0 },

  nav: { position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, backdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.04)", transition: "background 0.4s" },
  navRow: { width: "100%", padding: "15px 5%", display: "flex", alignItems: "center", gap: 32 },
  logo: { display: "flex", alignItems: "center", gap: 10, cursor: "pointer" },
  logoBox: { width: 34, height: 34, background: "linear-gradient(135deg, #00E5FF, #0077FF)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, color: "#000", fontWeight: 900 },
  logoTxt: { fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 800, color: "#fff", letterSpacing: "-0.5px" },
  navLinks: { display: "flex", gap: 32, marginLeft: "auto" },
  navLnk: { color: "rgba(255,255,255,0.45)", fontSize: 14, fontWeight: 500, transition: "color 0.2s" },
  navBtns: { display: "flex", gap: 10 },
  ghostBtn: { background: "transparent", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)", padding: "9px 22px", borderRadius: 9, cursor: "pointer", fontSize: 14, fontWeight: 500, transition: "all 0.2s" },
  solidBtn: { background: "linear-gradient(135deg, #00E5FF, #0077FF)", border: "none", color: "#000", padding: "9px 22px", borderRadius: 9, cursor: "pointer", fontSize: 14, fontWeight: 700 },

  hero: { position: "relative", zIndex: 1, width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "120px 5% 80px" },
  badge: { display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,229,255,0.07)", border: "1px solid rgba(0,229,255,0.17)", color: "#00E5FF", padding: "6px 18px", borderRadius: 100, fontSize: 12, fontWeight: 600, marginBottom: 38, letterSpacing: 0.4 },
  badgeDot: { width: 6, height: 6, borderRadius: "50%", background: "#00E5FF", animation: "pulse 2s infinite" },
  h1: { display: "flex", flexDirection: "column", marginBottom: 28 },
  h1White: { fontFamily: "'Syne',sans-serif", fontSize: "clamp(50px, 9vw, 100px)", fontWeight: 800, color: "#fff", letterSpacing: "-3px", lineHeight: 1.02 },
  h1Grad: { fontFamily: "'Syne',sans-serif", fontSize: "clamp(50px, 9vw, 100px)", fontWeight: 800, letterSpacing: "-3px", lineHeight: 1.02, background: "linear-gradient(135deg, #00E5FF 0%, #FF4D8D 50%, #A78BFA 100%)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "shimmer 4s linear infinite" },
  heroP: { fontSize: "clamp(15px, 1.8vw, 19px)", color: "rgba(255,255,255,0.4)", maxWidth: 560, lineHeight: 1.85, marginBottom: 42, fontWeight: 300 },
  ctaRow: { display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center", marginBottom: 72 },
  ctaBtn: { background: "linear-gradient(135deg, #00E5FF, #0077FF)", border: "none", color: "#000", padding: "15px 36px", borderRadius: 11, cursor: "pointer", fontSize: 16, fontWeight: 800, transition: "all 0.25s", letterSpacing: "-0.2px" },
  outlineBtn: { background: "transparent", border: "1px solid rgba(255,255,255,0.16)", color: "#fff", padding: "15px 34px", borderRadius: 11, cursor: "pointer", fontSize: 16, fontWeight: 500 },
  statsRow: { display: "flex", gap: "clamp(24px,5vw,80px)", flexWrap: "wrap", justifyContent: "center", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 46 },
  statBox: { display: "flex", flexDirection: "column", alignItems: "center", gap: 5 },
  statNum: { fontFamily: "'Syne',sans-serif", fontSize: "clamp(32px,4.5vw,50px)", fontWeight: 800, color: "#fff", letterSpacing: "-2px" },
  statLbl: { fontSize: 13, color: "rgba(255,255,255,0.32)", fontWeight: 400 },
  floater: { position: "absolute", background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "10px 18px", display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.75)", fontWeight: 500, animation: "float 4s ease-in-out infinite", whiteSpace: "nowrap" },

  sec: { position: "relative", zIndex: 1, width: "100%", padding: "100px 0" },
  wrap: { width: "90%", maxWidth: 1280, margin: "0 auto" },
  secLabel: { fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "#00E5FF", marginBottom: 14, textTransform: "uppercase" },
  h2: { fontFamily: "'Syne',sans-serif", fontSize: "clamp(30px,5vw,56px)", fontWeight: 800, color: "#fff", marginBottom: 14, lineHeight: 1.1, letterSpacing: "-1.5px" },
  secSub: { fontSize: 16, color: "rgba(255,255,255,0.38)", maxWidth: 540, lineHeight: 1.75, marginBottom: 48, fontWeight: 300 },
  cyan: { color: "#00E5FF" },

  catTabs: { display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 },
  catBtn: { display: "flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 10, cursor: "pointer", fontSize: 14, fontWeight: 600, transition: "all 0.25s" },
  subGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(195px, 1fr))", gap: 12 },
  subItem: { display: "flex", alignItems: "center", gap: 10, padding: "13px 18px", background: "rgba(255,255,255,0.03)", border: "1px solid", borderRadius: 10, fontSize: 14, color: "rgba(255,255,255,0.6)", cursor: "pointer", transition: "background 0.2s", fontWeight: 500 },

  featGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 18 },
  featCard: { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "28px", cursor: "pointer", transition: "all 0.3s ease" },
  featTitle: { fontFamily: "'Syne',sans-serif", fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 10, letterSpacing: "-0.3px" },
  featDesc: { fontSize: 14, color: "rgba(255,255,255,0.38)", lineHeight: 1.75 },

  courseGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 },
  courseCard: { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, overflow: "hidden", transition: "transform 0.25s" },
  courseThumb: { height: 155, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", borderBottom: "1px solid rgba(255,255,255,0.05)" },
  courseTag: { position: "absolute", top: 12, right: 12, padding: "3px 10px", borderRadius: 6, fontSize: 11, fontWeight: 700 },
  courseBody: { padding: "20px 20px 24px" },
  courseTitle: { fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 10, letterSpacing: "-0.3px" },
  courseMeta: { display: "flex", gap: 16, fontSize: 12, color: "rgba(255,255,255,0.32)", marginBottom: 16 },
  courseEnroll: { background: "transparent", border: "1px solid", padding: "8px 16px", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 600 },

  aiBanner: { position: "relative", zIndex: 1, width: "100%", background: "linear-gradient(135deg, rgba(0,229,255,0.035), rgba(255,77,141,0.035))", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "90px 0" },
  aiRow: { display: "flex", gap: 60, alignItems: "center", flexWrap: "wrap" },
  aiCard: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: 28, minWidth: 250, flexShrink: 0 },

  testiGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 18 },
  testiCard: { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "30px 26px" },

  ctaSec: { position: "relative", zIndex: 1, width: "100%", textAlign: "center", padding: "130px 5%" },
  ctaGlow: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 350, background: "radial-gradient(ellipse, rgba(0,229,255,0.07) 0%, transparent 70%)", pointerEvents: "none" },

  footer: { position: "relative", zIndex: 1, width: "100%", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "30px 0" },
};