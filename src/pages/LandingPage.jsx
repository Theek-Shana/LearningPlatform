import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Courses", "Features", "Instructors", "Pricing"];

const STATS = [
  { value: "50K+", label: "Active Students" },
  { value: "1,200+", label: "Video Courses" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "200+", label: "Expert Instructors" },
];

const FEATURES = [
  {
    icon: "▶",
    title: "YouTube-Powered Learning",
    desc: "Access curated YouTube content integrated directly into structured learning paths.",
    accent: "#00E5FF",
  },
  {
    icon: "✦",
    title: "AI Summarization",
    desc: "Our AI engine distills hours of video into sharp, actionable summaries you can review in minutes.",
    accent: "#FF4D8D",
  },
  {
    icon: "⬡",
    title: "Role-Based Access",
    desc: "Students, instructors, and admins each get tailored dashboards and permissions.",
    accent: "#A78BFA",
  },
  {
    icon: "◈",
    title: "Secure Authentication",
    desc: "JWT-secured sessions with Spring Security ensure your data stays protected at all times.",
    accent: "#34D399",
  },
  {
    icon: "⊞",
    title: "Course Management",
    desc: "Instructors can create, edit, and publish courses with rich media and structured modules.",
    accent: "#FBBF24",
  },
  {
    icon: "↗",
    title: "Scalable on AWS",
    desc: "Built on AWS for reliability and auto-scaling — handles traffic spikes effortlessly.",
    accent: "#F87171",
  },
];

const COURSES = [
  { title: "React & Modern Frontend", tag: "Frontend", hours: "42h", students: "8.2K", color: "#00E5FF" },
  { title: "Spring Boot Mastery", tag: "Backend", hours: "38h", students: "6.1K", color: "#FF4D8D" },
  { title: "AWS Cloud Essentials", tag: "DevOps", hours: "29h", students: "9.4K", color: "#A78BFA" },
  { title: "Machine Learning with Python", tag: "AI/ML", hours: "55h", students: "12K", color: "#34D399" },
];

const TESTIMONIALS = [
  {
    name: "Asel Perera",
    role: "Software Engineer",
    text: "The AI summaries saved me hours. I could grasp complex topics in minutes and jump straight to practice.",
    avatar: "A",
    color: "#00E5FF",
  },
  {
    name: "Ruwan Silva",
    role: "Full Stack Developer",
    text: "Best structured learning I've experienced. The YouTube integration feels completely seamless.",
    avatar: "R",
    color: "#FF4D8D",
  },
  {
    name: "Nimasha Fernando",
    role: "DevOps Engineer",
    text: "Role-based dashboards are a game changer. Everything I need is exactly where I expect it.",
    avatar: "N",
    color: "#A78BFA",
  },
];

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % FEATURES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navBg = scrollY > 60 ? "rgba(5,5,10,0.95)" : "transparent";

  return (
    <div style={styles.root}>
      {/* Background Effects */}
      <div style={styles.bgGlow1} />
      <div style={styles.bgGlow2} />
      <div style={styles.bgGrid} />

      {/* NAV */}
      <nav style={{ ...styles.nav, background: navBg }}>
        <div style={styles.navInner}>
          <div style={styles.logo}>
            <span style={styles.logoIcon}>⬡</span>
            <span style={styles.logoText}>LearnForge</span>
          </div>
          <div style={styles.navLinks}>
            {NAV_LINKS.map((l) => (
              <a key={l} href="#" style={styles.navLink}>{l}</a>
            ))}
          </div>
          <div style={styles.navActions}>
            <button style={styles.btnGhost}>Sign In</button>
            <button style={styles.btnPrimary}>Get Started</button>
          </div>
          <button style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div style={styles.mobileMenu}>
            {NAV_LINKS.map((l) => (
              <a key={l} href="#" style={styles.mobileLink}>{l}</a>
            ))}
            <button style={{ ...styles.btnPrimary, width: "100%", marginTop: 12 }}>Get Started</button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section ref={heroRef} style={styles.hero}>
        <div style={styles.heroBadge}>
          <span style={styles.badgeDot} />
          AI-Powered Learning Platform
        </div>
        <h1 style={styles.heroTitle}>
          Master Skills
          <br />
          <span style={styles.heroGradient}>Faster Than</span>
          <br />
          Ever Before
        </h1>
        <p style={styles.heroDesc}>
          Structured courses, YouTube content, and AI-powered summaries — all in one place.
          Learn smarter, not harder.
        </p>
        <div style={styles.heroCTA}>
          <button style={styles.btnLarge}>Start Learning Free →</button>
          <button style={styles.btnOutline}>▶ Watch Demo</button>
        </div>
        <div style={styles.heroStats}>
          {STATS.map((s) => (
            <div key={s.label} style={styles.statItem}>
              <span style={styles.statValue}>{s.value}</span>
              <span style={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
        {/* Floating cards */}
        <div style={{ ...styles.floatCard, top: "18%", right: "6%", animationDelay: "0s" }}>
          <span style={{ color: "#34D399", fontSize: 18 }}>✓</span>
          <span style={styles.floatText}>New lesson unlocked!</span>
        </div>
        <div style={{ ...styles.floatCard, bottom: "28%", right: "3%", animationDelay: "1.5s" }}>
          <span style={{ color: "#FBBF24", fontSize: 18 }}>★</span>
          <span style={styles.floatText}>AI Summary ready</span>
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.section}>
        <div style={styles.sectionLabel}>PLATFORM FEATURES</div>
        <h2 style={styles.sectionTitle}>Everything You Need to <span style={styles.accent}>Excel</span></h2>
        <div style={styles.featuresGrid}>
          {FEATURES.map((f, i) => (
            <div
              key={i}
              style={{
                ...styles.featureCard,
                borderColor: activeFeature === i ? f.accent : "rgba(255,255,255,0.06)",
                boxShadow: activeFeature === i ? `0 0 30px ${f.accent}22` : "none",
                transform: activeFeature === i ? "translateY(-4px)" : "none",
              }}
              onMouseEnter={() => setActiveFeature(i)}
            >
              <div style={{ ...styles.featureIcon, color: f.accent }}>{f.icon}</div>
              <h3 style={styles.featureTitle}>{f.title}</h3>
              <p style={styles.featureDesc}>{f.desc}</p>
              <div style={{ ...styles.featureLine, background: f.accent }} />
            </div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section style={{ ...styles.section, background: "rgba(255,255,255,0.015)" }}>
        <div style={styles.sectionLabel}>POPULAR COURSES</div>
        <h2 style={styles.sectionTitle}>Top Courses <span style={styles.accent}>This Month</span></h2>
        <div style={styles.coursesGrid}>
          {COURSES.map((c, i) => (
            <div key={i} style={styles.courseCard}>
              <div style={{ ...styles.courseThumb, background: `linear-gradient(135deg, ${c.color}22, ${c.color}08)`, borderColor: `${c.color}33` }}>
                <span style={{ fontSize: 40 }}>📺</span>
                <div style={{ ...styles.courseTag, color: c.color, borderColor: `${c.color}44` }}>{c.tag}</div>
              </div>
              <div style={styles.courseBody}>
                <h3 style={styles.courseTitle}>{c.title}</h3>
                <div style={styles.courseMeta}>
                  <span>⏱ {c.hours}</span>
                  <span>👥 {c.students} students</span>
                </div>
                <button style={{ ...styles.courseBtn, color: c.color, borderColor: `${c.color}44` }}>
                  Enroll Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI BANNER */}
      <section style={styles.aiBanner}>
        <div style={styles.aiBannerInner}>
          <div style={styles.aiIcon}>✦</div>
          <div>
            <h2 style={styles.aiTitle}>AI-Powered Summarization</h2>
            <p style={styles.aiDesc}>
              Our intelligent engine analyzes video content and generates concise, structured summaries — saving you hours while maximizing retention.
            </p>
            <button style={styles.btnLarge}>Try AI Summary →</button>
          </div>
          <div style={styles.aiVisual}>
            <div style={styles.aiCard}>
              <div style={styles.aiCardLabel}>AI Summary</div>
              <div style={styles.aiLine} />
              <div style={styles.aiLine} />
              <div style={{ ...styles.aiLine, width: "60%" }} />
              <div style={{ ...styles.aiChip, background: "#00E5FF22", color: "#00E5FF" }}>Key Concept 1</div>
              <div style={{ ...styles.aiChip, background: "#FF4D8D22", color: "#FF4D8D" }}>Key Concept 2</div>
              <div style={{ ...styles.aiChip, background: "#A78BFA22", color: "#A78BFA" }}>Key Concept 3</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={styles.section}>
        <div style={styles.sectionLabel}>TESTIMONIALS</div>
        <h2 style={styles.sectionTitle}>What Our <span style={styles.accent}>Students Say</span></h2>
        <div style={styles.testiGrid}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={styles.testiCard}>
              <div style={styles.testiQuote}>"</div>
              <p style={styles.testiText}>{t.text}</p>
              <div style={styles.testiAuthor}>
                <div style={{ ...styles.testiAvatar, background: `${t.color}33`, color: t.color }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={styles.testiName}>{t.name}</div>
                  <div style={styles.testiRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaGlow} />
        <h2 style={styles.ctaTitle}>Ready to Start Your Journey?</h2>
        <p style={styles.ctaDesc}>Join 50,000+ learners who are already leveling up their skills.</p>
        <button style={styles.btnLarge}>Create Free Account →</button>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.logo}>
            <span style={styles.logoIcon}>⬡</span>
            <span style={styles.logoText}>LearnForge</span>
          </div>
          <p style={styles.footerText}>© 2025 LearnForge. Built with React + Spring Boot + AWS.</p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #05050A; }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
}

const styles = {
  root: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#05050A",
    color: "#E8E8F0",
    minHeight: "100vh",
    overflowX: "hidden",
    position: "relative",
  },
  bgGlow1: {
    position: "fixed", top: "-20%", left: "-10%",
    width: 700, height: 700,
    background: "radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)",
    pointerEvents: "none", zIndex: 0,
  },
  bgGlow2: {
    position: "fixed", bottom: "-20%", right: "-10%",
    width: 600, height: 600,
    background: "radial-gradient(circle, rgba(255,77,141,0.06) 0%, transparent 70%)",
    pointerEvents: "none", zIndex: 0,
  },
  bgGrid: {
    position: "fixed", inset: 0,
    backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
    pointerEvents: "none", zIndex: 0,
  },
  nav: {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(255,255,255,0.04)",
    transition: "background 0.3s ease",
  },
  navInner: {
    maxWidth: 1200, margin: "0 auto",
    padding: "16px 24px",
    display: "flex", alignItems: "center", gap: 32,
  },
  logo: { display: "flex", alignItems: "center", gap: 10, cursor: "pointer" },
  logoIcon: { fontSize: 24, color: "#00E5FF" },
  logoText: { fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, color: "#fff" },
  navLinks: { display: "flex", gap: 32, marginLeft: "auto" },
  navLink: {
    color: "rgba(255,255,255,0.6)", textDecoration: "none",
    fontSize: 14, fontWeight: 500, transition: "color 0.2s",
  },
  navActions: { display: "flex", gap: 12 },
  btnGhost: {
    background: "transparent", border: "1px solid rgba(255,255,255,0.15)",
    color: "rgba(255,255,255,0.8)", padding: "8px 20px",
    borderRadius: 8, cursor: "pointer", fontSize: 14, fontWeight: 500,
  },
  btnPrimary: {
    background: "linear-gradient(135deg, #00E5FF, #0099FF)",
    border: "none", color: "#000", padding: "8px 20px",
    borderRadius: 8, cursor: "pointer", fontSize: 14, fontWeight: 700,
  },
  hamburger: {
    display: "none", background: "none", border: "none",
    color: "#fff", fontSize: 22, cursor: "pointer",
  },
  mobileMenu: {
    display: "flex", flexDirection: "column", gap: 8,
    padding: "16px 24px", borderTop: "1px solid rgba(255,255,255,0.06)",
  },
  mobileLink: {
    color: "rgba(255,255,255,0.7)", textDecoration: "none",
    padding: "10px 0", fontSize: 16, fontWeight: 500,
  },
  hero: {
    position: "relative", zIndex: 1,
    minHeight: "100vh", display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center",
    textAlign: "center", padding: "120px 24px 80px",
  },
  heroBadge: {
    display: "inline-flex", alignItems: "center", gap: 8,
    background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.2)",
    color: "#00E5FF", padding: "6px 16px", borderRadius: 100,
    fontSize: 13, fontWeight: 500, marginBottom: 32,
  },
  badgeDot: {
    width: 6, height: 6, borderRadius: "50%",
    background: "#00E5FF",
    animation: "pulse 2s infinite",
  },
  heroTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "clamp(48px, 8vw, 88px)",
    fontWeight: 800, lineHeight: 1.05,
    color: "#fff", marginBottom: 24,
    letterSpacing: "-2px",
  },
  heroGradient: {
    background: "linear-gradient(135deg, #00E5FF 0%, #FF4D8D 50%, #A78BFA 100%)",
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "shimmer 4s linear infinite",
  },
  heroDesc: {
    fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(255,255,255,0.5)",
    maxWidth: 560, lineHeight: 1.7, marginBottom: 40, fontWeight: 300,
  },
  heroCTA: { display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", marginBottom: 64 },
  btnLarge: {
    background: "linear-gradient(135deg, #00E5FF, #0099FF)",
    border: "none", color: "#000", padding: "14px 32px",
    borderRadius: 10, cursor: "pointer", fontSize: 16, fontWeight: 700,
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  btnOutline: {
    background: "transparent", border: "1px solid rgba(255,255,255,0.2)",
    color: "#fff", padding: "14px 32px",
    borderRadius: 10, cursor: "pointer", fontSize: 16, fontWeight: 500,
  },
  heroStats: {
    display: "flex", gap: "clamp(24px, 4vw, 60px)",
    flexWrap: "wrap", justifyContent: "center",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    paddingTop: 40,
  },
  statItem: { display: "flex", flexDirection: "column", alignItems: "center", gap: 4 },
  statValue: {
    fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 40px)",
    fontWeight: 800, color: "#fff",
  },
  statLabel: { fontSize: 13, color: "rgba(255,255,255,0.4)", fontWeight: 400 },
  floatCard: {
    position: "absolute",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 12, padding: "10px 16px",
    display: "flex", alignItems: "center", gap: 8,
    animation: "float 4s ease-in-out infinite",
  },
  floatText: { fontSize: 13, color: "rgba(255,255,255,0.8)", fontWeight: 500 },
  section: {
    position: "relative", zIndex: 1,
    maxWidth: 1200, margin: "0 auto",
    padding: "100px 24px",
  },
  sectionLabel: {
    fontSize: 11, fontWeight: 700, letterSpacing: 3,
    color: "#00E5FF", marginBottom: 16, textTransform: "uppercase",
  },
  sectionTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "clamp(32px, 5vw, 52px)",
    fontWeight: 800, color: "#fff",
    marginBottom: 56, lineHeight: 1.1,
  },
  accent: { color: "#00E5FF" },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 20,
  },
  featureCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 16, padding: "28px 28px 24px",
    cursor: "pointer", position: "relative", overflow: "hidden",
    transition: "all 0.3s ease",
  },
  featureIcon: {
    fontSize: 28, marginBottom: 16,
    display: "block",
  },
  featureTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 10,
  },
  featureDesc: { fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 },
  featureLine: { height: 2, width: 40, borderRadius: 2, marginTop: 20 },
  coursesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 20,
  },
  courseCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 16, overflow: "hidden",
    transition: "transform 0.2s",
  },
  courseThumb: {
    height: 160, display: "flex", alignItems: "center", justifyContent: "center",
    position: "relative", border: "none",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  courseTag: {
    position: "absolute", top: 12, right: 12,
    border: "1px solid", borderRadius: 6,
    padding: "3px 10px", fontSize: 11, fontWeight: 700,
  },
  courseBody: { padding: "20px 20px 24px" },
  courseTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 10,
  },
  courseMeta: {
    display: "flex", gap: 16,
    fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 16,
  },
  courseBtn: {
    background: "transparent", border: "1px solid",
    padding: "8px 16px", borderRadius: 8,
    cursor: "pointer", fontSize: 13, fontWeight: 600,
    transition: "all 0.2s",
  },
  aiBanner: {
    position: "relative", zIndex: 1,
    background: "linear-gradient(135deg, rgba(0,229,255,0.05), rgba(255,77,141,0.05))",
    borderTop: "1px solid rgba(255,255,255,0.05)",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    padding: "80px 24px",
  },
  aiBannerInner: {
    maxWidth: 1200, margin: "0 auto",
    display: "flex", gap: 60, alignItems: "center", flexWrap: "wrap",
  },
  aiIcon: {
    fontSize: 80, color: "#FF4D8D",
    flexShrink: 0,
    animation: "float 3s ease-in-out infinite",
  },
  aiTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "clamp(28px, 4vw, 44px)",
    fontWeight: 800, color: "#fff", marginBottom: 16,
  },
  aiDesc: {
    fontSize: 16, color: "rgba(255,255,255,0.5)",
    lineHeight: 1.7, maxWidth: 480, marginBottom: 28,
  },
  aiVisual: { marginLeft: "auto" },
  aiCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 16, padding: 24, minWidth: 240,
  },
  aiCardLabel: {
    fontSize: 12, fontWeight: 700, color: "#FF4D8D",
    letterSpacing: 2, textTransform: "uppercase", marginBottom: 16,
  },
  aiLine: {
    height: 8, background: "rgba(255,255,255,0.08)",
    borderRadius: 4, marginBottom: 8, width: "100%",
  },
  aiChip: {
    display: "inline-block", padding: "4px 12px",
    borderRadius: 100, fontSize: 12, fontWeight: 600,
    marginTop: 8, marginRight: 6,
  },
  testiGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 20,
  },
  testiCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 16, padding: "32px 28px",
    position: "relative",
  },
  testiQuote: {
    fontFamily: "'Syne', sans-serif",
    fontSize: 60, color: "rgba(0,229,255,0.2)",
    lineHeight: 1, marginBottom: 8,
  },
  testiText: {
    fontSize: 15, color: "rgba(255,255,255,0.6)",
    lineHeight: 1.7, marginBottom: 24,
  },
  testiAuthor: { display: "flex", alignItems: "center", gap: 12 },
  testiAvatar: {
    width: 42, height: 42, borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16,
  },
  testiName: { fontSize: 15, fontWeight: 700, color: "#fff" },
  testiRole: { fontSize: 13, color: "rgba(255,255,255,0.4)" },
  ctaSection: {
    position: "relative", zIndex: 1,
    textAlign: "center", padding: "120px 24px",
  },
  ctaGlow: {
    position: "absolute", top: "50%", left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600, height: 300,
    background: "radial-gradient(ellipse, rgba(0,229,255,0.1) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  ctaTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "clamp(36px, 6vw, 64px)",
    fontWeight: 800, color: "#fff", marginBottom: 16,
  },
  ctaDesc: {
    fontSize: 18, color: "rgba(255,255,255,0.45)",
    marginBottom: 40,
  },
  footer: {
    position: "relative", zIndex: 1,
    borderTop: "1px solid rgba(255,255,255,0.06)",
    padding: "32px 24px",
  },
  footerInner: {
    maxWidth: 1200, margin: "0 auto",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    flexWrap: "wrap", gap: 16,
  },
  footerText: { fontSize: 13, color: "rgba(255,255,255,0.3)" },
};