"use client";
import { useEffect, useRef } from "react";
import { Code, User, Camera } from "lucide-react";

const developers = [
  {
    name: "Ahmad GrowGot",
    role: "Lead Product Designer",
    image: "https://i.pravatar.cc/150?u=ahmad",
    bio: "Visionary designer focused on sustainable urban agriculture solutions.",
    social: { github: "#", linkedin: "#", instagram: "#" }
  },
  {
    name: "Siti Lestari",
    role: "System Engineer",
    image: "https://i.pravatar.cc/150?u=siti",
    bio: "Expert in anaerobic composting systems and organic nutrient extraction.",
    social: { github: "#", linkedin: "#", instagram: "#" }
  }
];

export default function DeveloperSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="developer"
      ref={sectionRef}
      style={{
        padding: "100px 2rem",
        background: "#ffffff",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{
            display: "inline-block", background: "rgba(48,102,37,0.08)",
            color: "#306625", padding: "6px 18px", borderRadius: 50,
            fontSize: 12, fontWeight: 600, letterSpacing: 2,
            textTransform: "uppercase", marginBottom: 16,
          }}>
            Tim Pengembang
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700, color: "#1a1a1a", marginBottom: 16,
          }}>
            Di Balik GrowGot
          </h2>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: 40,
          justifyContent: "center"
        }}>
          {developers.map((dev, i) => (
            <div
              key={dev.name}
              className="reveal glass-card"
              style={{
                padding: 40,
                borderRadius: 24,
                textAlign: "center",
                transition: "all 0.4s ease",
                animationDelay: `${i * 0.2}s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-10px)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(48,102,37,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(48,102,37,0.12)";
              }}
            >
              <div style={{ position: "relative", width: 140, height: 140, margin: "0 auto 24px" }}>
                <div style={{
                  position: "absolute", inset: -8,
                  background: "linear-gradient(135deg, #306625, #7bc67a)",
                  borderRadius: "50%",
                  opacity: 0.2,
                }} />
                <img
                  src={dev.image}
                  alt={dev.name}
                  style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", position: "relative" }}
                />
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: "#1a1a1a", marginBottom: 6 }}>{dev.name}</h3>
              <p style={{ color: "#306625", fontWeight: 600, fontSize: 14, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>
                {dev.role}
              </p>
              <p style={{ color: "#666", lineHeight: 1.7, fontSize: 15, marginBottom: 24 }}>{dev.bio}</p>
              
              <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
                <a href={dev.social.github} style={{ color: "#aaa", transition: "color 0.3s" }} onMouseEnter={e => e.currentTarget.style.color = "#306625"} onMouseLeave={e => e.currentTarget.style.color = "#aaa"}><Code size={20} /></a>
                <a href={dev.social.linkedin} style={{ color: "#aaa", transition: "color 0.3s" }} onMouseEnter={e => e.currentTarget.style.color = "#306625"} onMouseLeave={e => e.currentTarget.style.color = "#aaa"}><User size={20} /></a>
                <a href={dev.social.instagram} style={{ color: "#aaa", transition: "color 0.3s" }} onMouseEnter={e => e.currentTarget.style.color = "#306625"} onMouseLeave={e => e.currentTarget.style.color = "#aaa"}><Camera size={20} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
