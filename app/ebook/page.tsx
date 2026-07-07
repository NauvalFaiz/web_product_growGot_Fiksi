"use client";
import dynamic from "next/dynamic";
import Navbar from "../navbar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const PDFViewer = dynamic(() => import("../../components/PDFViewer"), {
  ssr: false,
  loading: () => (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "50vh",
      background: "#f5f2eb",
      color: "#306625"
    }}>
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#306625]"></div>
      <span style={{ marginLeft: 16, fontWeight: 600 }}>Menyiapkan E-Book...</span>
    </div>
  )
});

export default function EBookPage() {
  return (
    <main style={{ background: "#f5f2eb", minHeight: "100vh" }}>
      <Navbar />
      
      <div style={{ padding: "100px 1rem 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", marginBottom: 32 }}>
          <Link href="/#home" style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: 8, 
            color: "#306625", 
            textDecoration: "none", 
            fontWeight: 600,
            fontSize: 14,
            padding: "20px 16px",
            borderRadius: 50,
            background: "rgba(48,102,37,0.05)",
            transition: "all 0.2s ease"
          }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(48,102,37,0.1)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(48,102,37,0.05)"}
          >
            <ArrowLeft size={18} /> Kembali ke Beranda
          </Link>
        </div>
        
        <div style={{ background: "white", borderRadius: 24, overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}>
          <PDFViewer />
        </div>
      </div>
      
      <style jsx global>{`
        body { background: #f5f2eb !important; }
      `}</style>
    </main>
  );
}
