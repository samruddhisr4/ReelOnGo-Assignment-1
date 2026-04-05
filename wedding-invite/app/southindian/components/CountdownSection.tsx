"use client";
import React, { useState, useEffect } from "react";

export default function CountdownSection() {
    const calculateTimeLeft = () => {
        const target = new Date("2027-03-10T00:00:00");
        const now = new Date();
        const diff = target.getTime() - now.getTime();

        const totalSeconds = Math.max(0, Math.floor(diff / 1000));
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (

        <div style={{ position: "relative", width: "100%" }}>
            {/* Background Image */}
            <img
                src="/templebg2.avif"
                alt="temple"
                style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                }}
            />

            {/* Overlay Content */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start", // Push to top/sky area
                    alignItems: "center",
                    textAlign: "center",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    paddingTop: "max(4rem, 10vh)", // Ensure it's in the sky
                    paddingLeft: "2rem",
                    paddingRight: "2rem",
                    backgroundColor: "rgba(0,0,0,0.4)",
                }}
            >
                <div style={{ maxWidth: "800px", color: "#f4a300", display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>

                    {/* Title */}
                    <div
                        style={{
                            fontFamily: "Castellar, serif",
                            fontSize: "clamp(1.5rem, 8vw, 1.4rem)",
                            letterSpacing: "0.2em",
                            fontWeight: "bold",
                            paddingTop: "18%",
                            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                        }}
                    >
                        THE COUNTDOWN
                    </div>

                    {/* Timer Grid */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: "clamp(0.5rem, 2.5vw, 2rem)",
                            backgroundColor: "rgba(0,0,0,0.6)",
                            padding: "clamp(1rem, 3vw, 2rem) clamp(1.5rem, 4vw, 3rem)",
                            borderRadius: "15px",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(244, 163, 0, 0.4)",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                        }}
                    >
                        {Object.entries(timeLeft).map(([unit, value]) => (
                            <div key={unit} style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: "clamp(60px, 15vw, 120px)" }}>
                                <div style={{ fontSize: "clamp(1.8rem, 6vw, 3.5rem)", fontWeight: "bold" }}>
                                    {String(value).padStart(2, "0")}
                                </div>
                                <div style={{ fontSize: "clamp(0.6rem, 1.8vw, 0.9rem)", textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.9 }}>
                                    {unit}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div style={{ fontSize: "clamp(1.1rem, 3vw, 1.6rem)", fontStyle: "italic", fontWeight: "300", letterSpacing: "0.05em", color: "#f9efa7", marginTop: "1rem" }}>
                        Our families are excited that you are able to join us in celebrating what we hope will be one of the happiest days of our lives.
                    </div>
                </div>
            </div>
        </div>
    );
}