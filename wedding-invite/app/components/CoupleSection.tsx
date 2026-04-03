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
        <div className="relative w-full overflow-hidden">
            {/* Base Background Image */}
            <img
                src="/pinkbg.avif"
                className="w-full h-auto block"
                alt="Couple Background"
            />
            {/* Text Overlay for BRIDE AND GROOM */}
            <div className='absolute top-0 left-0 w-full flex flex-col items-center justify-start z-20 pt-[20%]'>
                <div className='text-30xl' style={{ color: "White", fontFamily: "sans-serif", fontWeight: "10", fontSize: "2rem" }}>
                    MEET THE
                </div>
                <div className='text-5xl font-bold mt-2' style={{ color: "White", fontFamily: "sans-serif" }}>
                    BRIDE AND GROOM
                </div>
            </div>

            {/* Bottom Thank You Paragraph */}
            <div className="absolute bottom-[10%] left-0 w-full flex justify-center z-20 px-8">
                <p
                    className="text-center w-full max-w-4xl"
                    style={{
                        color: "white",
                        fontFamily: "sans-serif",
                        fontWeight: 300,
                        fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
                        lineHeight: 1.6,
                        opacity: 0.9
                    }}
                >
                    We are both so delighted that you are able to join us in celebrating what we hope will be one of the happiest days of our lives. The affection shown to us by so many people since our Nichayathartham has been incredibly moving, and has touched us both deeply. We would like to take this opportunity to thank everyone most sincerely for their kindness. We are looking forward to see you at the wedding.
                </p>
            </div>

            {/* Overlay Slideshow Image */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
                {/* 
                    This wrapper matches the size of the frame (w-[30%]).
                    The photos and the frame both exist inside this box!
                */}
                <div className="relative w-[30%] flex items-center justify-center">

                    {/* 1. The Cycling Photos (Positioned Behind - z-0) */}
                    {slideImages.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Slide ${index}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                                }`}
                            style={{ zIndex: 1, width: "45%", height: "53%", borderRadius: "10%", top: "36%", left: "27%" }}
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
            </div>
        </div>
    );
}