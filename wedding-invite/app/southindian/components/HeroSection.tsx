"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// LANTERNS
const lanterns = [
    // ── Top-left cluster ──
    { id: 1, left: "2%", top: "2%", width: "6.5%", animDelay: "0s", animDur: "4.2s", rotate: "-8deg" },
    { id: 2, left: "10%", top: "9%", width: "5.5%", animDelay: "1.1s", animDur: "5s", rotate: "5deg" },
    { id: 3, left: "0%", top: "24%", width: "5%", animDelay: "2s", animDur: "4.5s", rotate: "-4deg" },
    { id: 4, left: "4%", top: "6%", width: "3.75%", animDelay: "0.6s", animDur: "4.5s", rotate: "-4deg" },
    { id: 5, left: "16%", top: "4%", width: "4.5%", animDelay: "1.7s", animDur: "5.8s", rotate: "3deg" },
    { id: 6, left: "7%", top: "17%", width: "3%", animDelay: "3.1s", animDur: "4.7s", rotate: "-6deg" },
    { id: 7, left: "10%", top: "29%", width: "4.5%", animDelay: "0.4s", animDur: "5.2s", rotate: "7deg" },
    { id: 23, left: "41%", top: "7%", width: "3.5%", animDelay: "1.3s", animDur: "5.8s", rotate: "7deg" },

    // ── Top-right cluster ──
    { id: 8, left: "86%", top: "1%", width: "7%", animDelay: "0.5s", animDur: "4.8s", rotate: "6deg" },
    { id: 9, left: "77%", top: "13%", width: "5.5%", animDelay: "1.8s", animDur: "5.2s", rotate: "-7deg" },
    { id: 10, left: "91%", top: "24%", width: "6%", animDelay: "0.9s", animDur: "4s", rotate: "4deg" },
    { id: 11, left: "79%", top: "7%", width: "5%", animDelay: "2.2s", animDur: "5.6s", rotate: "-5deg" },
    { id: 12, left: "93%", top: "10%", width: "3.5%", animDelay: "1.3s", animDur: "4.3s", rotate: "9deg" },
    { id: 13, left: "90%", top: "5.6%", width: "4.5%", animDelay: "2.8s", animDur: "5s", rotate: "-3deg" },
    { id: 14, left: "85%", top: "19%", width: "3.75%", animDelay: "0.2s", animDur: "4.6s", rotate: "5deg" },

    // ── Top-center (above text, flanking names) ──
    { id: 15, left: "28%", top: "4%", width: "3.5%", animDelay: "2.5s", animDur: "4.9s", rotate: "-6deg" },
    { id: 16, left: "24%", top: "7%", width: "4.5%", animDelay: "1.0s", animDur: "5.4s", rotate: "4deg" },
    { id: 17, left: "73%", top: "1%", width: "5%", animDelay: "3.2s", animDur: "4.1s", rotate: "-2deg" },
    { id: 18, left: "76%", top: "3%", width: "4.5%", animDelay: "0.8s", animDur: "5.7s", rotate: "6deg" },
    { id: 19, left: "63%", top: "6%", width: "4.65%", animDelay: "1.5s", animDur: "4.4s", rotate: "-5deg" },

    // ── Extra scattered fill across the sky ──
    { id: 20, left: "25%", top: "1.2%", width: "3.5%", animDelay: "2.1s", animDur: "5.6s", rotate: "4deg" },
    { id: 21, left: "6.9%", top: "2.9%", width: "5%", animDelay: "0.6s", animDur: "4.0s", rotate: "-5deg" },
    { id: 22, left: "92%", top: "2%", width: "4.5%", animDelay: "1.3s", animDur: "5.8s", rotate: "7deg" },
];

const events = [
    { title: "MEHENDI", date: "Friday, March 9th 2026" },
    { title: "HALDI", date: "Friday, March 10th 2026" },
    { title: "SANGEET", date: "Friday, March 10th 2026" },
    { title: "ENGAGEMENT", date: "Friday, March 11th 2026" },
    { title: "MUHURTHAM", date: "Friday, March 12th 2026" },
    { title: "RECEPTION", date: "Friday, March 17th 2026" },
];

const storyMilestones = [
    { title: "MET", date: "January 2018", desc: "Mutual Friends" },
    { title: "RELATIONSHIP", date: "July 2018", desc: "Coffee & A Walk" },
    { title: "PROPOSED", date: "December 2022", desc: "Snowy Mountain Top" },
    { title: "TOGETHER FOREVER", date: "March 10, 2026", desc: "Our Wedding Day" },
];

const floatKeyframes = `
@keyframes lanternFloat {
    0%   { transform: translateY(0px)    rotate(var(--r)); }
    50%  { transform: translateY(-18px)  rotate(calc(var(--r) * -1)); }
    100% { transform: translateY(0px)    rotate(var(--r)); }
}
`;

export default function HeroSection({ fx = "-NoSelection-", weddingDate = "", weddingTime = "" }: { fx?: string, weddingDate?: string, weddingTime?: string }) {
    const showLanterns = fx === "Lanterns";

    // Format date for display (e.g., 2025-04-12 -> 12 · 04 · 2025)
    const formattedDate = weddingDate 
        ? weddingDate.split("-").reverse().join(" · ") 
        : "12 · 04 · 2025";

    return (
        <div>
            <section className="relative w-full flex flex-col items-center z-20">
                <style>{floatKeyframes}</style>

                {/* ── Full temple image — shown completely, no cropping ── */}
                <div className="relative w-full">
                    <img
                        src="/templebg.avif"
                        alt="Temple"
                        className="w-full h-auto block"
                        style={{ position: "relative" }}
                    />

                    {/* ── Car positioned at the tail/end of the temple background ── */}
                    <img
                        src="/car0.avif"
                        alt="Wedding Car"
                        style={{
                            position: "absolute",
                            bottom: "0%",
                            left: "50%",
                            transform: "translateX(-50%) translateY(22%)",
                            width: "65%",
                            height: "auto",
                            zIndex: 9999
                        }}
                    />

                    {/* Golden Border Tile */}
                    <div
                        className="absolute pointer-events-none"
                        style={{
                            bottom: "0",
                            zIndex: 12,
                            top: "35.29%",
                            left: "22%",
                            right: "20.85%",
                            height: "13.1rem",
                            backgroundImage: "url('/golden border.png')",
                            backgroundRepeat: "repeat-x",
                            backgroundSize: "contain",
                            color: "#F3ECBA"
                        }}
                    />

                    {/* Pink Lanterns (Conditional) */}
                    {showLanterns && lanterns.map((l) => (
                        <img
                            key={l.id}
                            src="/pinklantern.avif"
                            alt=""
                            aria-hidden="true"
                            style={{
                                position: "absolute",
                                left: l.left,
                                top: l.top,
                                width: l.width,
                                height: "auto",
                                opacity: 1,
                                zIndex: 5,
                                ["--r" as string]: l.rotate,
                                animation: `lanternFloat ${l.animDur} ease-in-out ${l.animDelay} infinite`,
                                pointerEvents: "none",
                                filter: "drop-shadow(0 4px 12px rgba(255,180,200,0.55))",
                            }}
                        />
                    ))}

                    {/* ── SKY TEXT OVERLAY ── */}
                    <div className="absolute top-0 left-0 w-full flex flex-col items-center pt-8 px-4 z-10">
                        <div className="absolute inset-0 h-full bg-gradient-to-b from-[#0d1a2e]/40 via-[#0d1a2e]/10 to-transparent pointer-events-none" />
                        <div className="relative z-10 text-center flex flex-col items-center">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-[0.2em] text-white drop-shadow-2xl"
                                style={{ paddingTop: "clamp(50px, 15vw, 150px)", fontFamily: "Castellar", textShadow: "0 2px 20px rgba(0,0,0,0.7)", paddingBottom: "0.5em" }}>
                                MEENAYA
                            </h1>
                            <p className="text-[#ffffff] text-lg md:text-2xl mt-2 italic"
                                style={{ fontFamily: "Baskerville Old Face", textShadow: "0 1px 10px rgba(0,0,0,0.8)", paddingBottom: "1em" }}>
                                WEDS
                            </p>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-[0.2em] text-white drop-shadow-2xl mt-1"
                                style={{ fontFamily: "Castellar", textShadow: "0 2px 20px rgba(0,0,0,0.7)" }}>
                                KAVYA
                            </h1>
                            <p className="mt-6 text-white/85 text-xs md:text-base tracking-[0.4em] uppercase font-bold"
                                style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}>
                                {formattedDate} {weddingTime && `· ${weddingTime}`}
                            </p>
                        </div>
                    </div>

                    {/* ── GANPATI ICON ── */}
                    <img src="/ganpati.avif" alt="Ganpati" style={{ position: "absolute", top: "328vh", left: "50vw", transform: "translate(-50%, -50%)", width: "clamp(100px, 15vw, 155px)", height: "auto", zIndex: 20 }} />

                    {/* ── MAIN CONTENT (Positioned over temple image) ── */}
                    <div style={{ position: "absolute", top: "338vh", left: "50vw", transform: "translate(-50%, 0)", width: "95%", maxWidth: "1600px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 20 }}>
                        <div className="flex flex-col items-center justify-center w-full">

                            <p style={{ color: "#f3ecba", fontWeight: "bold", fontFamily: "'Noto Serif Devanagari','Noto Serif',serif", fontSize: "clamp(1.2rem,2.5vw,1.4rem)", margin: "0 0 1.7rem" }}>
                                ॐ श्री गणेशाय नमः
                            </p>

                            <p style={{ color: "#F3ECBA", fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(1rem,2vw,1.3rem)", fontStyle: "italic", margin: "0 0 1rem" }}>
                                With the heavenly blessings of
                            </p>

                            <p style={{ color: "#F3ECBA", fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(1.2rem,2.8vw,1.6rem)", fontWeight: 600, lineHeight: 1.4, margin: "0 0 0.5rem" }}>
                                Smt. Parvathi Ammal &amp;<br />Shri Krishnan Iyer
                            </p>

                            <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg,transparent,#F3ECBA,transparent)", margin: "1rem 0" }} />

                            <p style={{ fontFamily: "Cormorant Upright", fontSize: "clamp(1.2rem,2.8vw,1.6rem)", color: "#F3ECBA", fontWeight: 600, lineHeight: 1.4, margin: "0 0 2.5rem" }}>
                                Smt. Kamakshi Ammal &amp;<br />Shri Srinivasan Iyer
                            </p>

                            <p style={{ fontFamily: "Cormorant Upright", fontSize: "clamp(4.5rem,3.5vw,2.2rem)", fontWeight: 700, color: "#F3ECBA", letterSpacing: "0.3em", margin: "0 0 1.5rem", textTransform: "uppercase" }}>
                                INVITE
                            </p>

                            <p style={{ fontFamily: "Cormorant Upright", fontSize: "clamp(1rem,2vw,1.3rem)", color: "#F3ECBA", fontStyle: "italic", margin: "0 0 2rem" }}>
                                You to join us in the wedding celebrations of
                            </p>

                            <p style={{ fontFamily: "Cormorant Upright", fontSize: "clamp(2.5rem, 8vw, 4.2rem)", fontWeight: 700, color: "#f3ecba", lineHeight: 1, margin: "0" }}>
                                Vishu
                            </p>

                            <p style={{ fontFamily: "Cormorant Upright", fontSize: "clamp(1.2rem, 4vw, 2rem)", color: "#F3ECBA", fontStyle: "italic", lineHeight: 1.1, margin: "0.5rem 0" }}>
                                &amp;
                            </p>

                            <p style={{ fontFamily: "Cormorant Upright", fontSize: "clamp(2.5rem, 8vw, 4.2rem)", fontWeight: 700, color: "#F3ECBA", lineHeight: 1, margin: "0 0 1.5rem" }}>
                                Kavya
                            </p>

                            <p style={{ fontFamily: "Cormorant Upright", fontSize: "clamp(0.9rem,1.8vw,1.2rem)", color: "#F3ECBA", fontStyle: "italic", margin: "0 0 0.5rem" }}>
                                Daughter of
                            </p>
                            <p style={{ fontFamily: "Cormorant Upright", fontSize: "clamp(1.1rem,2.5vw,1.5rem)", color: "#F3ECBA", fontWeight: 600, lineHeight: 1.4, margin: "0" }}>
                                Smt. Parvathi &amp;<br />Shri K. Ramaswamy
                            </p>

                            <br /><br /><br /><br />

                            <p style={{ fontFamily: "serif", fontSize: "clamp(1.5rem,2vw,1.3rem)", color: "#F3ECBA", fontStyle: "italic", margin: "0 0 8rem" }}>
                                On the following events
                            </p>

                            {/* ── EVENTS GRID ── */}
                            <div className="relative w-full overflow-hidden flex flex-col items-center py-32 px-10" style={{ marginBottom: "10%" }}>
                                <img
                                    src="/eventouterbg.png"
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-fill z-0 opacity-100"
                                    style={{ borderRadius: "3%", width: "90%", left: "5%", height: "100%" }}
                                />
                                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 justify-items-center max-w-[1000px] w-full mx-auto">
                                    {events.map((event, i) => (
                                        <div key={i} className="relative flex flex-col items-center justify-between w-[180px]" style={{ aspectRatio: "3/4.2" }}>
                                            <div className="absolute inset-0 overflow-hidden z-0" style={{ borderRadius: "35px" }}>
                                                <img src="/eventbg.avif" alt="" className="w-full h-full object-cover opacity-100 mix-blend-multiply" />
                                            </div>
                                            <img src="/eventbgflower.avif" alt="" className="absolute z-10 w-[45%]" style={{ top: "-3%", right: "-3%" }} />
                                            <img src="/eventbgflower.avif" alt="" className="absolute z-10 w-[45%]" style={{ bottom: "-3%", left: "-3%", transform: "rotate(180deg)" }} />
                                            <div className="relative z-20 flex flex-col items-center justify-between text-center h-full w-full px-2 py-6">
                                                <h3 className="text-[#3c6b57] tracking-[0.1em] text-lg mt-10 pb-1" style={{ fontFamily: "Castellar, serif" }}>{event.title}</h3>
                                                <div className="flex flex-col items-center gap-1">
                                                    <p className="text-[#4e7263] text-xs leading-relaxed font-bold" style={{ fontFamily: "Georgia, serif" }}>
                                                        {event.date} <br /> Jaipur <br /> 6pm Onwards
                                                    </p>
                                                    <a href="#" className="text-[#3c6b57] text-xs uppercase tracking-wider border-b border-[#3c6b57] pb-10 hover:opacity-70">
                                                        See the route
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* ── TIMELINE ── */}
                            <div className="relative w-full max-w-[1400px] mt-40 mb-32 z-10 px-4 mx-auto">
                                <h2 className="text-[#f3ecba] text-4xl font-bold tracking-[0.2em] mb-32 text-center" style={{ fontFamily: "Castellar", fontSize: "clamp(2rem, 5vw, 3.5rem)", marginTop: "6%" }}>OUR JOURNEY</h2>
                                <div className="relative grid grid-cols-4 grid-rows-[160px_80px_160px] w-full items-center">
                                    <div className="absolute top-[200px] left-0 w-full h-[6px] bg-[#f9efa7] z-0 rounded-full">
                                        <div className="absolute left-[-18px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[20px] border-r-[#f9efa7]" />
                                        <div className="absolute right-[-18px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[20px] border-l-[#f9efa7]" />
                                    </div>
                                    {storyMilestones.map((m, idx) => {
                                        const isAbove = idx % 2 === 0;
                                        return (
                                            <React.Fragment key={idx}>
                                                <div className="row-start-1 flex items-end justify-center pt-8 px-2">
                                                    {isAbove && (
                                                        <div className="p-6 rounded-2xl border-2 border-double border-[#f3ecba] bg-[#0c504b]/40 backdrop-blur-sm text-center" style={{ width: "100%", height: "100%" }}>
                                                            <h4 className="text-[#f3ecba] text-sm font-bold tracking-widest mb-1" style={{ fontFamily: "Castellar", fontSize: "clamp(1rem, 2vw, 1.2rem)" }}>{m.title}</h4>
                                                            <p className="text-[#f3ecba]/80 text-xs italic mb-2">{m.date}</p>
                                                            <p className="text-[#f3ecba]/70 text-[10px] leading-tight">{m.desc}</p>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="row-start-2 flex items-center justify-center">
                                                    <div className="relative z-10 p-2 bg-[#0c504b] rounded-full border border-[#f3ecba]/50 transition-transform duration-500 hover:rotate-[360deg]">
                                                        <svg className="w-6 h-6 fill-[#f3ecba]" viewBox="0 0 24 24">
                                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="row-start-3 flex items-start justify-center pt-8 px-2">
                                                    {!isAbove && (
                                                        <div className="p-6 rounded-2xl border-2 border-double border-[#f3ecba] bg-[#0c504b]/40 backdrop-blur-sm text-center">
                                                            <h4 className="text-[#f3ecba] text-sm font-bold tracking-widest mb-1" style={{ fontFamily: "Castellar", fontSize: "clamp(1rem, 2vw, 1.2rem)" }}>{m.title}</h4>
                                                            <p className="text-[#f3ecba]/80 text-xs italic mb-2">{m.date}</p>
                                                            <p className="text-[#f3ecba]/70 text-[10px] leading-tight">{m.desc}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </React.Fragment>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* ── SEE THE ROUTE SECTION ── */}
                            <div className="relative w-full flex flex-col items-center mt-32 mb-40 z-10 px-8" style={{ marginTop: "10%", marginBottom: "5%" }}>
                                <h3 className="text-[#f9efa7] font-bold tracking-[0.3em] mb-4 text-center drop-shadow-lg" style={{ fontFamily: "Castellar", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>SEE THE ROUTE</h3>
                                <p className="text-[#f9efa7]/80 italic mb-12" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.2rem, 3.5vw, 1.8rem)" }}>Click to open the map</p>
                                <div className="relative group flex flex-col items-center">
                                    <a href="https://maps.google.com" target="_blank" className="w-24 h-24 rounded-full border-4 border-[#f9efa7]/40 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-[#f9efa7] relative shadow-[0_0_30px_rgba(249,239,167,0.2)]">
                                        <div className="absolute inset-0 rounded-full border-2 border-[#f9efa7]/30 animate-ping" />
                                        <div className="w-16 h-16 rounded-full border-2 border-[#f9efa7]/20 flex items-center justify-center">
                                            <div className="w-6 h-6 rounded-full bg-[#f9efa7]" />
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
