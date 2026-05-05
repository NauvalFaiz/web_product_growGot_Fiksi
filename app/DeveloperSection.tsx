"use client";
import { useEffect, useRef } from "react";

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="18" cy="6" r="1" fill="currentColor"/>
  </svg>
);
const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.22 8.5h4.52V24H.22zM8.56 8.5h4.34v2.1h.06c.6-1.14 2.06-2.34 4.24-2.34 4.54 0 5.38 2.98 5.38 6.86V24h-4.52v-7.9c0-1.88-.04-4.3-2.62-4.3-2.62 0-3.02 2.04-3.02 4.16V24H8.56z"/>
  </svg>
);

const developers = [
  {
    name: "Muhammad Alif Arka Saeka Praya",
    role: "Game Dev",
    image: "/Alif.jpg",
    bio: "COO",
    social: { instagram: "https://www.instagram.com/arkka_x" }
  },
  {
    name: "Aveline Voleta Wardani",
    role: "Full Stack Developers",
    image: "/Ave.jpg",
    bio: "Founder CEO",
    social: { linkedin: "https://www.linkedin.com/in/aveline-voleta-wardani-6288453a6/", instagram: "https://www.instagram.com/avelinewardani" }
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
                {dev.social.linkedin && (
                  <a href={dev.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "#aaa", transition: "color 0.3s" }} onMouseEnter={e => e.currentTarget.style.color = "#306625"} onMouseLeave={e => e.currentTarget.style.color = "#aaa"}>
                    <LinkedinIcon size={20} />
                  </a>
                )}
                {dev.social.instagram && (
                  <a href={dev.social.instagram} target="_blank" rel="noopener noreferrer" style={{ color: "#aaa", transition: "color 0.3s" }} onMouseEnter={e => e.currentTarget.style.color = "#E4405F"} onMouseLeave={e => e.currentTarget.style.color = "#aaa"}>
                    <InstagramIcon size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
