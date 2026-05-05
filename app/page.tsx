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
      <div id="ebook" style={{ padding: "100px 2rem", background: "linear-gradient(to right, #ffffff, #f9fbf8)" }}>
        <div style={{ 
          maxWidth: 1200, 
          margin: "0 auto", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          gap: 100,
          textAlign: "left"
        }} className="ebook-container">
          <div style={{ flex: "0 1 500px" }}>
            <span style={{
              display: "inline-block", background: "rgba(48,102,37,0.08)",
              color: "#306625", padding: "6px 18px", borderRadius: 50,
              fontSize: 12, fontWeight: 600, letterSpacing: 2,
              textTransform: "uppercase", marginBottom: 16,
            }}>
              E-Book Interaktif
            </span>
            <h2 style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontSize: "clamp(32px, 4vw, 48px)", 
              fontWeight: 700, 
              color: "#1a1a1a",
              marginBottom: 24 
            }}>
              Tata Cara Pembuatan
            </h2>
            <p style={{ color: "#666", fontSize: 18, lineHeight: 1.8, marginBottom: 40, maxWidth: 500 }}>
              Pelajari langkah-langkah detail pembuatan dan penggunaan GrowGot melalui e-book interaktif kami yang mudah dipahami.
            </p>
            <a 
              href="/ebook" 
              style={{ 
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                background: "linear-gradient(135deg, #306625, #4a9a3a)",
                color: "white",
                padding: "18px 44px",
                borderRadius: 50,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 16,
                boxShadow: "0 10px 25px rgba(48,102,37,0.25)",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(48,102,37,0.35)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(48,102,37,0.25)";
              }}
            >
              Baca Selengkapnya
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
          <div style={{ flex: "0 1 450px", display: "flex", justifyContent: "center" }} className="hidden-mobile">
            <div style={{ 
              position: "relative",
              width: "100%",
              maxWidth: 450,
              aspectRatio: "4/3",
              background: "white",
              borderRadius: 32,
              boxShadow: "0 30px 60px rgba(0,0,0,0.1)",
              padding: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(0,0,0,0.05)"
            }}>
              <img 
                src="/Product.svg" 
                alt="Ebook Preview" 
                style={{ width: "80%", height: "auto", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.1))" }} 
              />
              {/* Decorative elements */}
              <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, background: "rgba(48,102,37,0.1)", borderRadius: "50%", zIndex: -1 }}></div>
              <div style={{ position: "absolute", bottom: -30, left: -30, width: 120, height: 120, background: "rgba(48,102,37,0.05)", borderRadius: "50%", zIndex: -1 }}></div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 992px) {
            .ebook-container { flex-direction: column !important; text-align: center !important; gap: 40px !important; }
            .ebook-container p { margin: 0 auto 40px !important; }
            .hidden-mobile { display: none !important; }
          }
        `}</style>
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