"use client";
import { useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
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
      id="contact"
      ref={sectionRef}
      style={{
        padding: "100px 2rem",
        background: "#f5f2eb",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80 }} className="contact-grid">
          {/* Info side */}
          <div className="reveal">
            <span style={{
              display: "inline-block", background: "rgba(48,102,37,0.08)",
              color: "#306625", padding: "6px 18px", borderRadius: 50,
              fontSize: 12, fontWeight: 600, letterSpacing: 2,
              textTransform: "uppercase", marginBottom: 16,
            }}>
              Hubungi Kami
            </span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700, color: "#1a1a1a", marginBottom: 24,
            }}>
              Ada Pertanyaan? <br /> Kami Siap Membantu.
            </h2>
            <p style={{ color: "#666", fontSize: 16, lineHeight: 1.8, marginBottom: 48 }}>
              Tim GrowGot berkomitmen untuk memberikan solusi terbaik bagi pengelolaan sampah organik Anda. 
              Jangan ragu untuk menghubungi kami untuk konsultasi atau pemesanan.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ width: 52, height: 52, background: "white", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", color: "#306625", boxShadow: "0 8px 20px rgba(0,0,0,0.05)" }}>
                  <Mail size={24} />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#306625", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Email</div>
                  <div style={{ fontSize: 18, color: "#1a1a1a", fontWeight: 500 }}>growmaggott@gmail.com</div>
                </div>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ width: 52, height: 52, background: "white", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", color: "#306625", boxShadow: "0 8px 20px rgba(0,0,0,0.05)" }}>
                  <Phone size={24} />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#306625", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>WhatsApp</div>
                  <div style={{ fontSize: 18, color: "#1a1a1a", fontWeight: 500 }}>+62 812 3456 7890</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ width: 52, height: 52, background: "white", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", color: "#306625", boxShadow: "0 8px 20px rgba(0,0,0,0.05)" }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#306625", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Kantor</div>
                  <div style={{ fontSize: 18, color: "#1a1a1a", fontWeight: 500 }}>SMK Telkom Malang, Indonesia</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="reveal" style={{ 
            background: "white", 
            padding: 48, 
            borderRadius: 32, 
            boxShadow: "0 20px 60px rgba(48,102,37,0.08)",
            border: "1px solid rgba(48,102,37,0.05)"
          }}>
            <form style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a", marginLeft: 4 }}>Nama Lengkap</label>
                  <input type="text" placeholder="John Doe" style={{ padding: "14px 20px", borderRadius: 12, border: "1px solid #eee", background: "#f9f9f9", fontSize: 15, outline: "none" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a", marginLeft: 4 }}>Email</label>
                  <input type="email" placeholder="john@example.com" style={{ padding: "14px 20px", borderRadius: 12, border: "1px solid #eee", background: "#f9f9f9", fontSize: 15, outline: "none" }} />
                </div>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a", marginLeft: 4 }}>Subjek</label>
                <input type="text" placeholder="Tanya stok produk" style={{ padding: "14px 20px", borderRadius: 12, border: "1px solid #eee", background: "#f9f9f9", fontSize: 15, outline: "none" }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a", marginLeft: 4 }}>Pesan</label>
                <textarea rows={5} placeholder="Halo Tim GrowGot..." style={{ padding: "14px 20px", borderRadius: 12, border: "1px solid #eee", background: "#f9f9f9", fontSize: 15, outline: "none", resize: "none" }}></textarea>
              </div>

              <button
                type="submit"
                style={{
                  background: "linear-gradient(135deg, #306625, #4a9a3a)",
                  color: "white",
                  padding: "16px",
                  borderRadius: 12,
                  border: "none",
                  fontWeight: 600,
                  fontSize: 16,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  marginTop: 8,
                  transition: "all 0.3s ease",
                  boxShadow: "0 10px 20px rgba(48,102,37,0.2)"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 15px 30px rgba(48,102,37,0.3)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 20px rgba(48,102,37,0.2)";
                }}
              >
                Kirim Pesan <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
