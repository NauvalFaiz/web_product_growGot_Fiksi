"use client";
import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";

export default function IntroOverlay() {
  const [phase, setPhase] = useState(0); // 0=show, 1=animate out, 2=gone
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + 2;
      });
    }, 30);

    // Start slide out after 1.8s
    const t1 = setTimeout(() => setPhase(1), 1800);
    // Remove after animation
    const t2 = setTimeout(() => setPhase(2), 2700);

    return () => { clearInterval(interval); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === 2) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0d1f0a",
        overflow: "hidden",
        transform: phase === 1 ? "translateY(-100%)" : "translateY(0)",
        transition: phase === 1 ? "transform 0.9s cubic-bezier(0.76,0,0.24,1)" : "none",
      }}
    >
      {/* Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: (i % 5) + 6,
            height: (i % 5) + 6,
            background: i % 3 === 0 ? "#4a9a3a" : i % 3 === 1 ? "#306625" : "#7bc67a",
            borderRadius: "50%",
            left: `${(i * 8.3) % 100}%`,
            top: `${(i * 13.7) % 100}%`,
            opacity: 0.3,
            animation: `leafFloat ${4 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}

      {/* Green blob bg */}
      <div style={{
        position: "absolute",
        width: 500, height: 500,
        background: "radial-gradient(circle, rgba(48,102,37,0.4) 0%, transparent 70%)",
        borderRadius: "50%",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        animation: "blobMorph 4s ease-in-out infinite",
      }} />

      {/* Logo */}
      <div style={{ textAlign: "center", }}>
        <div
          style={{
            width: 300, height: 300,
            marginBottom : -80,
            display: "flex", alignItems: "center", justifyContent: "center",
            animation: "scaleIn 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards",
          }}
        >
          <img src="/logo.svg" alt="GrowGot" style={{ width: "200%", height: "auto" }} />
        </div>

        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 15,
            marginTop: 8,
            fontWeight: 300,
            letterSpacing: 3,
            textTransform: "uppercase",
            animation: "fadeUp 0.7s ease 0.5s both",
          }}
        >
          Smart Composting System
        </p>

        {/* Progress bar */}
        <div
          style={{
            width: 200, height: 2,
            background: "rgba(255,255,255,0.1)",
            borderRadius: 2,
            margin: "32px auto 0",
            overflow: "hidden",
            animation: "fadeIn 0.5s ease 0.6s both",
          }}
        >
          <div style={{
            height: "100%",
            width: `${progress}%`,
            background: "linear-gradient(90deg, #306625, #7bc67a)",
            borderRadius: 2,
            transition: "width 0.05s linear",
          }} />
        </div>
      </div>
    </div>
  );
}