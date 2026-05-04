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
      
      <footer style={{ padding: "40px 2rem", textAlign: "center", background: "#1a1a1a", color: "rgba(255,255,255,0.5)" }}>
        <p style={{ fontSize: 14 }}>&copy; {new Date().getFullYear()} GrowGot. All rights reserved.</p>
      </footer>
    </main>
  );
}