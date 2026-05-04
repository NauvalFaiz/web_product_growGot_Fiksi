"use client";
import { useEffect, useRef } from "react";
import { ChevronRight, ArrowDown } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

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
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 2rem 60px",
        background: "linear-gradient(135deg, #f5f2eb 0%, #ffffff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative leaf shapes */}
      <div style={{
        position: "absolute", top: "10%", right: "-5%",
        width: 400, height: 400,
        background: "radial-gradient(circle, rgba(48,102,37,0.06) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />
      <div style={{
        position: "absolute", bottom: "5%", left: "-10%",
        width: 500, height: 500,
        background: "radial-gradient(circle, rgba(74,154,58,0.04) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 10 }}>
        <span className="reveal" style={{
          display: "inline-block",
          background: "rgba(48,102,37,0.08)",
          color: "#306625",
          padding: "6px 20px",
          borderRadius: 50,
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: 2,
          textTransform: "uppercase",
          marginBottom: 24,
        }}>
          Revolusi Pengolahan Sampah Organik
        </span>

        <h1 className="reveal" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(40px, 8vw, 84px)",
          lineHeight: 1.05,
          fontWeight: 700,
          color: "#1a1a1a",
          marginBottom: 32,
          letterSpacing: "-2px",
        }}>
          Pupuk Alami dari <br />
          <span className="shimmer-text">Sisa Dapur Anda</span>
        </h1>

        <p className="reveal" style={{
          fontSize: "clamp(16px, 2vw, 20px)",
          color: "#555",
          maxWidth: 680,
          margin: "0 auto 48px",
          lineHeight: 1.6,
          fontWeight: 300,
        }}>
          GrowGot membantu Anda mengubah sampah organik menjadi pupuk cair organik (POC) 
          berkualitas tinggi dengan sistem komposter pintar yang bersih, estetis, dan tanpa bau.
        </p>

        <div className="reveal" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#product"
            style={{
              background: "linear-gradient(135deg, #306625, #4a9a3a)",
              color: "white",
              padding: "16px 36px",
              borderRadius: 50,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 16,
              display: "flex",
              alignItems: "center",
              gap: 10,
              boxShadow: "0 10px 25px rgba(48,102,37,0.3)",
              transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-4px) scale(1.02)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 15px 35px rgba(48,102,37,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 25px rgba(48,102,37,0.3)";
            }}
          >
            Lihat Produk <ChevronRight size={20} />
          </a>
          
          <a
            href="#ebook"
            style={{
              background: "white",
              color: "#306625",
              padding: "16px 36px",
              borderRadius: 50,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 16,
              border: "1px solid rgba(48,102,37,0.2)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#f0f7ee";
              (e.currentTarget as HTMLElement).style.borderColor = "#306625";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "white";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(48,102,37,0.2)";
            }}
          >
            Pelajari E-Book
          </a>
        </div>

        {/* Scroll indicator */}
        <div 
          className="reveal animate-bounce-slow" 
          style={{ 
            position: "absolute", 
            bottom: -60, 
            left: "50%", 
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            color: "#306625",
            opacity: 0.6,
          }}
        >
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>Scroll</span>
          <ArrowDown size={20} />
        </div>
      </div>
    </section>
  );
}
