import type { Metadata } from "next";
import "./globals1.css";

export const metadata: Metadata = {
  title: "GrowGot – Smart Composting System",
  description: "GrowGot adalah sistem komposter pintar yang mengubah sampah organik menjadi pupuk cair berkualitas tinggi.",
  keywords: ["komposter", "pupuk organik", "daur ulang sampah", "GrowGot"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'DM Sans', sans-serif" }}>{children}</body>
    </html>
  );
}