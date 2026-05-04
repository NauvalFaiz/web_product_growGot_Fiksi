"use client";
import { useEffect, useRef, useState } from "react";

const hotspots = [
  {
    id: "lid",
    top: "28%", left: "50%",
    title: "Tutup Kedap Udara",
    description: "Penutup berbahan HDPE tebal yang menjaga kondisi anaerobik optimal di dalam komposter, mencegah bau keluar dan serangga masuk.",
    icon: "🔒",
    color: "#306625",
  },
  {
    id: "door",
    top: "39%", left: "38%",
    title: "Pintu Input Kompos",
    description: "Lubang input sampah dengan desain ergonomis. Masukkan sisa dapur harian — sayuran, buah, sisa makanan — tanpa buka tutup utama.",
    icon: "🚪",
    color: "#4a9a3a",
  },
  {
    id: "kompos",
    top: "49%", left: "45%",
    title: "Proses Pengomposan",
    description: "Area utama di mana sampah organik diurai oleh mikroorganisme dan maggot menjadi pupuk organik berkualitas tinggi.",
    icon: "🍃",
    color: "#5d4037",
  },
  {
    id: "maggot",
    top: "42%", left: "45%",
    title: "Koloni Maggot BSF",
    description: "Larva Black Soldier Fly yang sangat efisien dalam mereduksi sampah organik secara cepat tanpa menimbulkan bau menyengat.",
    icon: "🐛",
    color: "#8d6e63",
  },
  {
    id: "mesh",
    top: "53%", left: "55%",
    title: "Jaring Pemisah",
    description: "Mesh stainless steel berdiameter 2mm memisahkan padatan dari cairan pupuk, memastikan ekstrak cair jernih dan kaya nutrisi.",
    icon: "🕸️",
    color: "#306625",
  },
  {
    id: "liquid",
    top: "60%", left: "50%",
    title: "Ruang Pupuk Cair",
    description: "Kompartemen bawah menampung pupuk cair (leachate) hasil fermentasi — kaya nitrogen, fosfor, dan kalium siap pakai untuk tanaman.",
    icon: "💧",
    color: "#1e4218",
  },
  {
    id: "tap",
    top: "61%", left: "31%",
    title: "Keran Panen",
    description: "Keran berkualitas food-grade untuk panen pupuk cair kapan saja. Buka, tampung, encerkan 1:10 dengan air, langsung siram tanaman!",
    icon: "🚰",
    color: "#e74c3c",
  },
];

const benefits = [
  { emoji: "🌱", title: "Mudah Digunakan", desc: "Tinggal masukkan sampah organik, tunggu, panen pupuk." },
  { emoji: "♻️", title: "Zero Waste", desc: "Tidak ada sampah organik yang terbuang sia-sia." },
  { emoji: "💰", title: "Hemat Biaya", desc: "Pupuk gratis dari sampah yang selama ini dibuang." },
  { emoji: "🏠", title: "Cocok Indoor", desc: "Desain compact, tidak bau, ideal untuk apartemen." },
];

export default function ProductSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
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
      id="product"
      ref={sectionRef}
      style={{
        padding: "120px 2rem",
        background: "linear-gradient(180deg, #ffffff 0%, #f0f7ee 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG deco */}
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: 300, height: 300,
        background: "radial-gradient(circle, rgba(48,102,37,0.05) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: -130 }}>
          <span style={{
            display: "inline-block", background: "rgba(48,102,37,0.08)",
            color: "#306625", padding: "6px 18px", borderRadius: 50,
            fontSize: 12, fontWeight: 600, letterSpacing: 2,
            textTransform: "uppercase", marginBottom: 16,
          }}>
            Produk Unggulan
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 700, color: "#1a1a1a", marginBottom: 16,
          }}>
            Kenali GrowGot Lebih Dekat
          </h2>
          <p style={{ fontSize: 18, color: "#666", maxWidth: 600, margin: "0 auto" }}>
            Arahkan kursor ke titik-titik pada produk untuk melihat penjelasan detail setiap komponen komposter pintar kami.
          </p>
        </div>

        {/* Main product display - Centered and Larger */}
        <div style={{ display: "flex", justifyContent: "center", position: "relative" }} className="reveal">
          <div style={{ position: "relative", width: "100%", maxWidth: 700 }}>
            {/* Glow */}
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(circle at center, rgba(48,102,37,0.12) 0%, transparent 70%)",
              borderRadius: "50%",
            }} />
            <img
              src="/Product.svg"
              alt="GrowGot Product"
              style={{ width: "100%", height: "auto", objectFit: "contain", position: "relative", filter: "drop-shadow(0 20px 50px rgba(48,102,37,0.2))" }}
            />

            {/* Hotspots */}
            {hotspots.map((hs) => (
              <div
                key={hs.id}
                className="hotspot"
                onMouseEnter={() => setActiveHotspot(hs.id)}
                onMouseLeave={() => setActiveHotspot(null)}
                style={{
                  position: "absolute",
                  top: hs.top, left: hs.left,
                  cursor: "pointer",
                  zIndex: 20,
                }}
              >
                {/* Pulse rings */}
                <div className="pulse-ring" style={{
                  position: "absolute", inset: -4,
                  borderRadius: "50%",
                  border: `2px solid ${hs.color}`,
                  opacity: 0.4,
                }} />

                {/* Dot */}
                <div
                  className="hotspot-dot"
                  style={{
                    width: 22, height: 22,
                    background: hs.color,
                    borderRadius: "50%",
                    border: "4px solid white",
                    boxShadow: `0 4px 12px ${hs.color}66`,
                    position: "relative", zIndex: 2,
                  }}
                />

                {/* Tooltip - Only shown on hover of the pin */}
                <div
                  className="hotspot-tooltip"
                  style={{
                    position: "absolute",
                    bottom: "calc(100% + 20px)",
                    left: "50%",
                    width: 260,
                    background: "white",
                    borderRadius: 18,
                    padding: "20px 24px",
                    boxShadow: "0 15px 45px rgba(0,0,0,0.15)",
                    border: `1px solid ${hs.color}22`,
                    zIndex: 30,
                    opacity: activeHotspot === hs.id ? 1 : 0,
                    transform: `translateX(-50%) translateY(${activeHotspot === hs.id ? 0 : 10}px)`,
                    pointerEvents: activeHotspot === hs.id ? "auto" : "none",
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{hs.icon}</div>
                  <div style={{ fontWeight: 700, color: "#1a1a1a", fontSize: 15, marginBottom: 8 }}>{hs.title}</div>
                  <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{hs.description}</div>
                  {/* Arrow */}
                  <div style={{
                    position: "absolute", bottom: -8, left: "50%",
                    transform: "translateX(-50%) rotate(45deg)",
                    width: 16, height: 16,
                    background: "white",
                    borderRight: `1px solid ${hs.color}22`,
                    borderBottom: `1px solid ${hs.color}22`,
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits grid */}
        <div style={{ marginTop: -80, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 13 }}>
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="reveal glass-card"
              style={{
                padding: 36,
                borderRadius: 24,
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                animationDelay: `${i * 0.1}s`,
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 50px rgba(48,102,37,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: 44, marginBottom: 16 }}>{b.emoji}</div>
              <h4 style={{ fontWeight: 700, color: "#1a1a1a", marginBottom: 12, fontSize: 18 }}>{b.title}</h4>
              <p style={{ color: "#777", fontSize: 15, lineHeight: 1.8 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }
        .hotspot:hover .hotspot-dot {
          transform: scale(1.2);
        }
        .hotspot-dot {
          transition: transform 0.3s ease;
        }
      `}</style>
    </section>
  );
}