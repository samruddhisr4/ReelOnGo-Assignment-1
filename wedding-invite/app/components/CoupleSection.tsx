"use client";

import React, { useState, useEffect } from 'react';

const slideImages = [
    "/photo1.jpg", // ⬅ REPLACE THESE WITH YOUR ACTUAL IMAGES IN /public
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg"
];

export default function CoupleSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // This handles the timer to automatically change the picture every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full overflow-hidden" style={{ height: "500vh" }}>

            <div className="absolute top-0 left-0 w-full h-full z-0 flex flex-col pointer-events-none">
                <div className="w-full h-full overflow-hidden relative">
                    <img
                        src="/pinkbg.avif"
                        className="w-full h-auto block"
                        alt="Pink Background Part"
                    />
                </div>
                {/* <div className="w-full h-[66.67%] overflow-hidden relative">
                    <img
                        src="/yellowbg.avif"
                        className="w-full h-auto block"
                        alt="Yellow Background Part"
                    />
                </div> */}
            </div>
            {/* Text Overlay for BRIDE AND GROOM */}
            <div className='absolute top-0 left-0 w-full flex flex-col items-center justify-start z-20 pt-[12%]'>
                <div className='tracking-[0.3em]' style={{ color: "#ffffff", fontFamily: "Castellar, serif", fontSize: "clamp(1.4rem, 4.5vw, 2.5rem)", marginBottom: "0.5rem", fontWeight: "bold", paddingBottom: "2%", marginTop: "12%" }}>
                    MEET THE
                </div>
                <div style={{ color: "#ffffff", fontFamily: "Castellar, serif", fontSize: "clamp(3rem, 6vw, 5.5rem)", lineHeight: 1.1 }}>
                    BRIDE AND
                </div>
                <div style={{ color: "#ffffff", fontFamily: "Castellar, serif", fontSize: "clamp(3.5rem, 7vw, 5.5rem)", lineHeight: 1.1 }}>
                    GROOM
                </div>
            </div>

            {/* Bottom Thank You Paragraph */}
            <div className="absolute top-[11%] left-0 w-full flex justify-center z-20 px-8 pt-[3%] " style={{ marginTop: "14%" }}>
                <p
                    className="text-center w-full max-w-4xl"
                    style={{
                        color: "#ffffff",
                        fontFamily: "sans-serif",
                        fontWeight: 300,
                        fontSize: "clamp(0.9rem, 2vw, 1.4rem)",
                        lineHeight: 1.8,
                        opacity: 1
                        , marginTop: "10%",
                        // marginBottom: "10%"
                    }}
                >
                    We are both so delighted that you are able to join us in celebrating what we hope will be one of the happiest days of our lives. The affection shown to us by so many people since our Nichayathartham has been incredibly moving, and has touched us both deeply. We would like to take this opportunity to thank everyone most sincerely for their kindness. We are looking forward to see you at the wedding.
                </p>
            </div>

            {/* Overlay Slideshow Image */}
            <div className="absolute top-[18%] left-0 w-full h-full flex flex-col items-center justify-start z-10 pt-40" style={{ marginTop: "24%" }}>
                {/* 
                    This wrapper matches the size of the frame (w-[45%]).
                    The photos and the frame both exist inside this box!
                */}
                <div className="relative w-[45%] flex items-center justify-center mb-16">
                    {/* 1. The Cycling Photos (Positioned Behind - z-0) */}
                    {slideImages.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Slide ${index}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                                }`}
                            style={{ zIndex: 1, width: "45%", height: "53%", borderRadius: "10%", top: "36%", left: "27.5%" }}
                        />
                    ))}

                    {/* 2. The Photo Frame (Positioned on Top - z-10) */}
                    <img
                        src="/slideshowbg.avif"
                        className="w-full h-auto relative pointer-events-none"
                        alt="Slideshow Frame"
                        style={{ zIndex: 10 }}
                    />
                </div>

                {/* ── RSVP SECTION MOVED HERE - Just below the slideshow ── */}
                <div className="flex flex-col items-center pt-8 " style={{ marginTop: "15%" }}>
                    <h3
                        className="text-[#f9efa7] font-semibold tracking-[0.3em] mb-1 text-center drop-shadow-md"
                        style={{ fontFamily: "Castellar, serif", fontSize: "clamp(2rem, 5vw, 5rem) " }}
                    >
                        PLEASE RSVP
                    </h3>
                    <p
                        className="text-[#ffffff]/90 italic mb-6 text-center"
                        style={{ fontFamily: "Georgia, serif", fontSize: "clamp(0.8rem, 1.5vw, 1rem)" }}
                    >
                        Click to message on WhatsApp
                    </p>

                    {/* Animated Circular Button - WhatsApp Link */}
                    <div className="relative group flex flex-col items-center">
                        <a
                            href="#WHATSAPP_LINK"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-16 h-16 rounded-full border-[3px] border-[#f9efa7]/40 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-[#f9efa7] relative cursor-pointer"
                        >
                            <div className="absolute inset-0 rounded-full border-2 border-[#f9efa7]/30 animate-ping" />
                            <div className="w-10 h-10 rounded-full border border-[#f9efa7]/10 flex items-center justify-center pointer-events-none">
                                <div className="w-3 h-3 rounded-full bg-[#f9efa7]" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}