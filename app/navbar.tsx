"use client";
import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#product", label: "Product" },
  { href: "/#ebook", label: "Tata Cara Pembuatan" },
  { href: "/#developer", label: "Developer" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = links.map((l) => l.href.split("#")[1]);
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(48,102,37,0.1)" : "none",
        transition: "all 0.4s ease",
        padding: "0 2rem",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <img src="/logo.svg" alt="GrowGot Logo" style={{ height: 300, width: "auto" }} />
        </a>

        {/* Desktop Links */}
        <div style={{ display: "flex", gap: 36, alignItems: "center" }} className="hidden-mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link ${active === l.href.split("#")[1] ? "active" : ""}`}
              style={{
                textDecoration: "none",
                color: active === l.href.split("#")[1] ? "#306625" : "#555",
                fontWeight: 500,
                fontSize: 15,
                transition: "color 0.3s",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contact"
            style={{
              background: "linear-gradient(135deg, #306625, #4a9a3a)",
              color: "white",
              padding: "10px 24px",
              borderRadius: 50,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 14,
              boxShadow: "0 4px 14px rgba(48,102,37,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(48,102,37,0.45)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 14px rgba(48,102,37,0.35)";
            }}
          >
            Pesan Sekarang
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#306625", display: "none" }}
          className="show-mobile"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          background: "white",
          padding: "1rem 2rem 2rem",
          borderBottom: "1px solid rgba(48,102,37,0.1)",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                textDecoration: "none",
                color: "#306625",
                fontWeight: 500,
                fontSize: 16,
                padding: "8px 0",
                borderBottom: "1px solid rgba(48,102,37,0.08)",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}