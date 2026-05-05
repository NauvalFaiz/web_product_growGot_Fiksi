"use client";
import IntroOverlay from "./Introoverlay";
import Navbar from "./navbar";
import HeroSection from "./Herosection";
import ProductSection from "./Productsection";
import DeveloperSection from "./DeveloperSection";
import ContactSection from "./ContactSection";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <IntroOverlay />
      <Navbar />
      <HeroSection />
      <ProductSection />
      <div id="ebook" style={{ padding: "80px 2rem", textAlign: "center", background: "#ffffff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, marginBottom: 24 }}>
            Panduan Penggunaan
          </h2>
          <p style={{ color: "#666", marginBottom: 40, maxWidth: 600, margin: "0 auto 40px" }}>
            Baca e-book interaktif kami untuk mengetahui tata cara penggunaan GrowGot secara mendalam.
          </p>
          <a 
            href="/ebook" 
            style={{ 
              display: "inline-block",
              background: "#306625",
              color: "white",
              padding: "16px 40px",
              borderRadius: 50,
              textDecoration: "none",
              fontWeight: 600,
              boxShadow: "0 10px 25px rgba(48,102,37,0.2)"
            }}
          >
            Buka E-Book Interaktif
          </a>
        </div>
      </div>
      <DeveloperSection />
      <ContactSection />
      
      <footer style={{ padding: "60px 2rem", background: "#1a1a1a", color: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src="/logo.svg" alt="GrowGot" style={{ height: 40, filter: "brightness(0) invert(1)" }} />
            <span style={{ fontSize: 24, fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>GrowGot</span>
          </div>
          
          <div style={{ display: "flex", gap: 24 }}>
            <a href="https://instagram.com/growmaggot" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.6)", transition: "color 0.3s" }} onMouseEnter={e => e.currentTarget.style.color = "#E4405F"} onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://tiktok.com/@Growgot" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.6)", transition: "color 0.3s" }} onMouseEnter={e => e.currentTarget.style.color = "#00f2ea"} onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
            </a>
            <a href="mailto:growmaggott@gmail.com" style={{ color: "rgba(255,255,255,0.6)", transition: "color 0.3s" }} onMouseEnter={e => e.currentTarget.style.color = "#4a9a3a"} onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>

          <div style={{ height: "1px", width: "100%", background: "rgba(255,255,255,0.1)" }}></div>
          
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%", color: "rgba(255,255,255,0.4)", fontSize: 14 }} className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} GrowGot. All rights reserved.</p>
            <div style={{ display: "flex", gap: 24 }}>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 600px) {
            .footer-bottom { flex-direction: column; align-items: center; gap: 16px; text-align: center; }
          }
        `}</style>
      </footer>
    </main>
  );
}