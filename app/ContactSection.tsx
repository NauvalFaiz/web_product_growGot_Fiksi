"use client";
import { useEffect, useRef } from "react";
import { Mail, MapPin, Send } from "lucide-react";

// TikTok Icon
const TikTok = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// Instagram Icon (FIX)
const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="18" cy="6" r="1" fill="currentColor"/>
  </svg>
);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement)
            .querySelectorAll(".reveal")
            .forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ padding: "100px 2rem", background: "#f5f2eb" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80 }}>

          {/* INFO */}
          <div className="reveal">
            <h2>Ada Pertanyaan? Kami Siap Membantu.</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

              {/* EMAIL */}
              <a href="mailto:growmaggott@gmail.com" style={{ display: "flex", gap: 20 }}>
                <Mail size={24} />
                <span>growmaggott@gmail.com</span>
              </a>

              {/* MAP */}
              <a href="https://www.google.com/maps/search/?api=1&query=-7.973305,112.651559" target="_blank">
                <MapPin size={24} />
                <span>SMK Telkom Malang</span>
              </a>

              {/* INSTAGRAM FIX */}
              <a href="https://instagram.com/growmaggot" target="_blank">
                <InstagramIcon size={24} />
                <span>@growmaggot</span>
              </a>

              {/* TIKTOK */}
              <a href="https://www.tiktok.com/@growgot" target="_blank">
                <TikTok size={24} />
                <span>@growgot</span>
              </a>

            </div>
          </div>

          {/* FORM */}
          <div className="reveal">
            <form style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <input placeholder="Nama" />
              <input placeholder="Email" />
              <textarea placeholder="Pesan" />
              <button type="submit">
                Kirim <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}