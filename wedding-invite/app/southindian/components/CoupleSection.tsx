"use client";

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

// Custom icon mapping for consistency with user request
const byPrefixAndName = {
    fasdt: { leaf: faLeaf }
};

// Generate ~80 petas with distributed positions/rotations for the background effect
const slideImages = [
    "/photo1.jpg", // ⬅ REPLACE THESE WITH YOUR ACTUAL IMAGES IN /public
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg"
];

export default function CoupleSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [petals, setPetals] = useState<{ id: number, top: string, left: string, rotate: string, scale: number, opacity: number }[]>([]);

    // Generate ~1000 petals on the client side only to avoid hydration mismatch
    useEffect(() => {
        setPetals(Array.from({ length: 270 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 80}%`, // Concentrated over the 2832px image area
            left: `${Math.random() * 100}%`,
            rotate: `${Math.random() * 360}deg`,
            scale: 0.6 + Math.random() * 1.0,
            opacity: 0.3 + Math.random() * 0.5
        })));
    }, []);

    // This handles the timer to automatically change the picture every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full" style={{ height: "500vh" }}>

            <div className="absolute top-0 left-0 w-full h-full z-0 flex flex-col pointer-events-none">
                <div className="w-full h-full overflow-hidden relative">
                    <img
                        src="/pinkbg.avif"
                        className="w-full h-auto block"
                        alt="Pink Background Part"
                    />

                    {/* ── PETAL EFFECT LAYER ── */}
                    <div className="absolute inset-0 z-10">
                        {petals.map((p) => (
                            <div
                                key={p.id}
                                className="absolute text-white pointer-events-none"
                                style={{
                                    top: p.top,
                                    left: p.left,
                                    transform: `rotate(${p.rotate}) scale(${p.scale})`,
                                    opacity: p.opacity,
                                    fontSize: "22px" // Significant size for high visibility
                                }}
                            >
                                <FontAwesomeIcon icon={byPrefixAndName.fasdt['leaf']} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Text Overlay for BRIDE AND GROOM */}
            <div className='absolute top-0 left-0 w-full flex flex-col items-center justify-start z-20 pt-[8%]'>
                <div className='tracking-[0.3em]' style={{ color: "#ffffff", fontFamily: "Castellar, serif", fontSize: "clamp(1rem, 4vw, 2rem)", marginBottom: "0.2rem", fontWeight: "bold", paddingBottom: "1%", marginTop: "8%" }}>
                    MEET THE
                </div>
                <div style={{ color: "#ffffff", fontFamily: "Castellar, serif", fontSize: "clamp(2.5rem, 8vw, 4.5rem)", lineHeight: 1.1 }}>
                    BRIDE AND
                </div>
                <div style={{ color: "#ffffff", fontFamily: "Castellar, serif", fontSize: "clamp(3rem, 9vw, 4.5rem)", lineHeight: 1.1 }}>
                    GROOM
                </div>
            </div>

            {/* Bottom Thank You Paragraph */}
            <div className="absolute top-[8%] left-0 w-full flex justify-center z-20 px-8 pt-[2%] " style={{ marginTop: "10%" }}>
                <p
                    className="text-center w-full max-w-4xl"
                    style={{
                        color: "#ffffff",
                        fontFamily: "sans-serif",
                        fontWeight: 300,
                        fontSize: "clamp(0.9rem, 2vw, 1.4rem)",
                        lineHeight: 1.8,
                        opacity: 1,
                        marginTop: "5%", // Reduced for mobile
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
                <div className="relative w-[85%] md:w-[45%] flex items-center justify-center mb-16">
                    {/* 1. The Cycling Photos (Positioned Behind - z-0) */}
                    {slideImages.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Slide ${index}`}
                            className={`absolute inset-0 object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                                }`}
                            style={{ 
                                zIndex: 1, 
                                width: "45%", 
                                height: "53%", 
                                borderRadius: "10%", 
                                top: "50%", 
                                left: "50%",
                                transform: "translate(-50%, -26.5%)" // Center it perfectly within the frame
                            }}
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
                <div className="flex flex-col items-center pt-8 " style={{ marginTop: "12%" }}>
                    <h3
                        className="text-[#f9efa7] font-regular tracking-[0.3em] mb-1 text-center drop-shadow-md"
                        style={{ fontFamily: "Castellar, serif", fontSize: "clamp(2rem, 5vw, 5rem) " }}
                    >
                        PLEASE RSVP
                    </h3>
                    <p
                        className="text-[#ffffff] italic mb-6 text-center"
                        style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 0.45vw, 2rem)", marginBottom: "10%" }}
                    >
                        Click to message on WhatsApp
                    </p>

                    {/* Animated Circular Button - WhatsApp Link */}
                    <div className="relative group flex flex-col items-center">
                        <a
                            href="#WHATSAPP_LINK"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-24 h-24 rounded-full border-[4px] border-[#f9efa7]/40 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-[#f9efa7] relative cursor-pointer opacity-100"
                        >
                            <div className="absolute inset-0 rounded-full border-2 border-[#f9efa7]/30 animate-ping opacity-100" />
                            <div className="w-14 h-14 rounded-full border border-[#f9efa7]/10 flex items-center justify-center pointer-events-none opacity-100">
                                <div className="w-6 h-6 rounded-full bg-[#f9efa7]" />
                            </div>
                        </a>
                    </div>
                    <div>
                        {/* 2. The bridge car centered on the transition boundary */}
                        <img
                            src="/car.avif"
                            alt="Transition Car"
                            style={{
                                position: "absolute",
                                top: "324vh",
                                left: "50vw",
                                bottom: "0%",
                                transform: "translate(-50%, -50%)",
                                width: "48%",
                                height: "auto",
                                zIndex: 9999
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
