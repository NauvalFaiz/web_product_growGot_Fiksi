"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";

// Set worker source for PDF.js using a CDN that matches the exact API version
// This prevents "API version does not match Worker version" errors
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PDFViewer() {
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  const [error, setError] = useState(null);
  const bookRef = useRef(null);

  // Handle window resize for responsive book size
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onPageFlip = useCallback((e) => {
    setCurrentPage(e.data);
  }, []);

  const nextButton = () => bookRef.current.pageFlip().flipNext();
  const prevButton = () => bookRef.current.pageFlip().flipPrev();

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  // Calculate optimal dimensions to fill the screen
  const isMobile = windowWidth < 768;
  const paddingX = isMobile ? 20 : 100;
  const paddingY = isMobile ? 40 : 150;
  
  const maxWidth = windowWidth - paddingX;
  const maxHeight = (typeof window !== "undefined" ? window.innerHeight : 800) - paddingY;
  
  const aspectRatio = isMobile ? (1 / 1.414) : (1.414 / 1);
  
  let bookWidth, bookHeight;
  
  if (maxWidth / maxHeight > aspectRatio) {
    // Height is the constraint
    bookHeight = maxHeight;
    bookWidth = maxHeight * aspectRatio;
  } else {
    // Width is the constraint
    bookWidth = maxWidth;
    bookHeight = maxWidth / aspectRatio;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-2 md:p-4 overflow-hidden transition-colors duration-500">
      {/* Header / Title */}
      <div className="absolute top-8 left-0 right-0 flex justify-center z-10 pointer-events-none">
        <h1 className="text-2xl md:text-4xl font-serif italic text-[#d4a373] drop-shadow-lg animate-fade-in">
          Tata Cara Pembuatan
        </h1>
      </div>

      {/* Book Container */}
      <div className="relative mt-8 mb-20 animate-fade-in flex items-center justify-center">
        {/* Background "Hardcover" effect */}
        <div className="absolute inset-0 bg-[#3d2517] rounded-lg shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)] transform scale-[1.03] -z-10 border border-white/5 ring-4 ring-[#1a0f0a]/50"></div>
        
        <Document
          file="/ebook/EbookRevisi.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(err) => {
            console.error("PDF Load Error:", err);
            setError(err.message);
          }}
          loading={
            <div className="flex flex-col items-center justify-center text-[#d4a373]/50" style={{ height: bookHeight, width: bookWidth }}>
              <div className="w-12 h-12 border-4 border-[#d4a373] border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="font-serif italic">Opening the parchment...</p>
            </div>
          }
        >
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-red-50/10 backdrop-blur-sm z-50 p-8 text-center">
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-red-100 max-w-md">
                <p className="text-red-600 font-bold mb-2">Gagal memuat E-Book</p>
                <p className="text-gray-600 text-sm mb-4">{error}</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold"
                >
                  Coba Lagi
                </button>
              </div>
            </div>
          )}
          {numPages > 0 && (
            <div className="relative group perspective-1000" style={{ width: bookWidth, height: bookHeight }}>
              <HTMLFlipBook
                width={Math.floor(isMobile ? bookWidth : bookWidth / 2)}
                height={Math.floor(bookHeight)}
                size="fixed"
                minWidth={300}
                maxWidth={3000}
                minHeight={400}
                maxHeight={3000}
                maxShadowOpacity={0.6}
                showCover={true}
                mobileScrollSupport={true}
                onFlip={onPageFlip}
                className="ebook-pageflip rounded-sm overflow-hidden"
                ref={bookRef}
                useMouseEvents={true}
                flippingTime={1000}
                startPage={0}
                drawShadow={true}
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <div key={`page_${index + 1}`} className="bg-[#fdfbf7] relative shadow-[inset_0_0_50px_rgba(0,0,0,0.05)]">
                    <Page
                      pageNumber={index + 1}
                      width={Math.floor(isMobile ? bookWidth : bookWidth / 2)}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      loading={""}
                    />
                    
                    {/* Inner page shadow (spine side) */}
                    {index > 0 && index < numPages - 1 && (
                      <div className={`absolute top-0 bottom-0 w-32 pointer-events-none z-10 opacity-60 ${
                        index % 2 !== 0 
                          ? "right-0 bg-gradient-to-l from-black/20 to-transparent" // Right page (spine on left)
                          : "left-0 bg-gradient-to-r from-black/20 to-transparent" // Left page (spine on right)
                      }`} />
                    )}
                    
                    {/* Realistic page edges shadow */}
                    <div className="absolute inset-0 pointer-events-none border-[1px] border-black/5 z-10" />
                  </div>
                ))}
              </HTMLFlipBook>

              {/* Central Spine shadow - deeper and more realistic */}
              {!isMobile && currentPage > 0 && currentPage < numPages - 1 && (
                <>
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[4px] bg-black/40 z-20 pointer-events-none blur-[1px]" />
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[30px] bg-gradient-to-r from-transparent via-black/20 to-transparent z-10 pointer-events-none" />
                </>
              )}
            </div>
          )}
        </Document>
      </div>

      {/* Controls Overlay */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 px-8 py-4 glass rounded-full shadow-2xl z-30 border border-white/10">
        <button
          onClick={prevButton}
          className="p-2 hover:bg-white/10 rounded-full transition-all active:scale-95 disabled:opacity-20 text-[#d4a373]"
          disabled={currentPage === 0}
          title="Previous Page"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        <div className="flex flex-col items-center min-w-[100px]">
          <span className="text-sm font-serif italic text-[#d4a373]">
            Parchment {currentPage + 1} <span className="text-[#d4a373]/40 mx-1">of</span> {numPages}
          </span>
          <div className="w-full bg-white/10 h-1.5 mt-1 rounded-full overflow-hidden">
            <div 
              className="bg-[#d4a373] h-full transition-all duration-500 ease-out" 
              style={{ width: `${((currentPage + 1) / numPages) * 100}%` }}
            />
          </div>
        </div>

        <button
          onClick={nextButton}
          className="p-2 hover:bg-white/10 rounded-full transition-all active:scale-95 disabled:opacity-20 text-[#d4a373]"
          disabled={currentPage >= numPages - 1}
          title="Next Page"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>

        <div className="w-[1px] h-6 bg-white/10 mx-2" />

        <button
          onClick={toggleFullScreen}
          className="p-2 hover:bg-white/10 rounded-full transition-all text-[#d4a373]"
          title="Toggle Fullscreen"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
        </button>
      </div>


      <style jsx global>{`
        .ebook-pageflip {
          box-shadow: 0 0 50px rgba(0,0,0,0.5);
        }
        .react-pdf__Page__canvas {
          margin: 0 auto;
          display: block !important;
        }
        /* Hide scrollbars during flip */
        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}
