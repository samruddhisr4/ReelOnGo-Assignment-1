"use client";

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

// Custom icon mapping for consistency with user request
const byPrefixAndName = {
    fasdt: { leaf: faLeaf }
};

const slideImages = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg"
];

export default function CoupleSection({
    brideName = "MEENAYA",
    groomName = "KAVYA",
    thankYouText = "We are both so delighted that you are able to join us in celebrating what we hope will be one of the happiest days of our lives. The affection shown to us by so many people since our Nichayathartham has been incredibly moving, and has touched us both deeply. We would like to take this opportunity to thank everyone most sincerely for their kindness. We are looking forward to see you at the wedding."
}: {
    brideName?: string;
    groomName?: string;
    thankYouText?: string;
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [petals, setPetals] = useState<{ id: number, top: string, left: string, rotate: string, scale: number, opacity: number }[]>([]);

    useEffect(() => {
        setPetals(Array.from({ length: 270 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 100}%`,
            rotate: `${Math.random() * 360}deg`,
            scale: 0.6 + Math.random() * 1.0,
            opacity: 0.3 + Math.random() * 0.5
        })));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full overflow-hidden">
            {/* Background image layer */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <img
                    src="/pinkbg.avif"
                    className="w-full h-full object-cover block"
                    alt="Pink Background"
                />
                {/* Petal layer */}
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
                                fontSize: "22px"
                            }}
                        >
                            <FontAwesomeIcon icon={byPrefixAndName.fasdt['leaf']} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative z-20 flex flex-col items-center w-full px-4"
                style={{ paddingTop: "clamp(3rem, 10vw, 8rem)", paddingBottom: "clamp(2rem, 6vw, 5rem)" }}>

                {/* MEET THE BRIDE AND GROOM heading */}
                <div style={{ color: "#ffffff", fontFamily: "Castellar, serif", fontSize: "clamp(0.9rem, 3.5vw, 1.8rem)", letterSpacing: "0.3em", fontWeight: "bold", marginBottom: "0.5rem" }}>
                    MEET THE
                </div>
                <div style={{ color: "#ffffff", fontFamily: "Castellar, serif", fontSize: "clamp(1.8rem, 7vw, 4rem)", lineHeight: 1.1 }}>
                    {brideName} AND
                </div>
                <div style={{ color: "#ffffff", fontFamily: "Castellar, serif", fontSize: "clamp(2rem, 8vw, 4.5rem)", lineHeight: 1.1, marginBottom: "clamp(1.5rem, 5vw, 3rem)" }}>
                    {groomName}
                </div>

                {/* Thank you paragraph */}
                <p
                    className="text-center w-full max-w-2xl"
                    style={{
                        color: "#ffffff",
                        fontFamily: "sans-serif",
                        fontWeight: 300,
                        fontSize: "clamp(0.85rem, 2.5vw, 1.3rem)",
                        lineHeight: 1.8,
                        marginBottom: "clamp(2rem, 6vw, 4rem)",
                        padding: "0 0.5rem",
                    }}
                >
                    {thankYouText}
                </p>

                {/* Slideshow frame */}
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md flex items-center justify-center"
                    style={{ marginBottom: "clamp(2rem, 8vw, 5rem)" }}>
                    {slideImages.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Slide ${index}`}
                            className={`absolute object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                            style={{
                                zIndex: 1,
                                width: "45%",
                                height: "53%",
                                borderRadius: "10%",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -26.5%)"
                            }}
                        />
                    ))}
                    <img
                        src="/slideshowbg.avif"
                        className="w-full h-auto relative pointer-events-none"
                        alt="Slideshow Frame"
                        style={{ zIndex: 10 }}
                    />
                </div>

                {/* RSVP Section */}
                <div className="flex flex-col items-center w-full"
                    style={{ marginBottom: "clamp(4rem, 12vw, 8rem)" }}>
                    <h3
                        className="text-[#f9efa7] tracking-[0.3em] text-center drop-shadow-md"
                        style={{ fontFamily: "Castellar, serif", fontSize: "clamp(1.8rem, 6vw, 4rem)", marginBottom: "0.75rem" }}
                    >
                        PLEASE RSVP
                    </h3>
                    <p
                        className="text-[#ffffff] italic text-center"
                        style={{ fontFamily: "Georgia, serif", fontSize: "clamp(0.85rem, 2.5vw, 1.2rem)", marginBottom: "clamp(1.5rem, 4vw, 2.5rem)" }}
                    >
                        Click to message on WhatsApp
                    </p>

                    <div className="relative group flex flex-col items-center">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-24 h-24 rounded-full border-[4px] border-[#f9efa7]/40 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-[#f9efa7] relative shadow-[0_0_30px_rgba(249,239,167,0.2)]"
                        >
                            <div className="absolute inset-0 rounded-full border-2 border-[#f9efa7]/30 animate-ping" />
                            <div className="w-14 h-14 flex items-center justify-center">
                                <div className="w-6 h-6 rounded-full bg-[#f9efa7]" />
                            </div>
                        </a>
                    </div>
                </div>

                {/* Car now uses relative positioning within normal flow. */}
                <div className="relative w-full flex justify-center"
                    style={{ marginTop: "clamp(1rem, 4vw, 3rem)", marginBottom: "-2%" }}>
                    <img
                        src="/car.avif"
                        alt="Transition Car"
                        style={{
                            width: "clamp(220px, 55%, 700px)",
                            height: "auto",
                            zIndex: 9999,
                            position: "relative",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}