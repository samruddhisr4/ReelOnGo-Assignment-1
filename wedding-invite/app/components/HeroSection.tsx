"use client";
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
    // { id: 22, left: "92%", top: "2%", width: "4.5%", animDelay: "1.3s", animDur: "5.8s", rotate: "7deg" },
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

const floatKeyframes = `
@keyframes lanternFloat {
    0%   { transform: translateY(0px)    rotate(var(--r)); }
    50%  { transform: translateY(-18px)  rotate(calc(var(--r) * -1)); }
    100% { transform: translateY(0px)    rotate(var(--r)); }
}
`;

const inviteKeyframes = `
@keyframes fadeInUp {
  0%   { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes shimmer {
  0%, 100% { opacity: 0.7; }
  50%       { opacity: 1; }
}
`;

export default function HeroSection() {
    return (
        <div>
            <section className="relative w-full flex flex-col items-center overflow-hidden">
                <style>{floatKeyframes}</style>

                {/* ── Full temple image — shown completely, no cropping ── */}
                <div className="relative w-full">
                    <img
                        src="/templebg.avif"
                        alt="Temple"
                        className="w-full h-auto block"
                        style={{ position: "relative" }}
                    // 'block' removes inline gap; 'h-auto' preserves full image height
                    />

                    <div
                        className="absolute pointer-events-none"
                        style={{
                            bottom: "0",
                            zIndex: 12,
                            top: "35.29%",
                            left: "22%",
                            right: "20.85%",
                            height: "13.1rem", // The explicit height of your tile 
                            backgroundImage: "url('/golden border.png')",
                            backgroundRepeat: "repeat-x", // This is what handles true repeating
                            backgroundSize: "contain",
                            color: "#F3ECBA"
                        }}
                    />

                    {/* ── Pink Lanterns scattered in the sky around the temple ── */}
                    {lanterns.map((l) => (
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
                                // CSS custom property for rotate value used in keyframes
                                ["--r" as string]: l.rotate,
                                animation: `lanternFloat ${l.animDur} ease-in-out ${l.animDelay} infinite`,
                                pointerEvents: "none",
                                filter: "drop-shadow(0 4px 12px rgba(255,180,200,0.55))",
                            }}
                        />
                    ))}
                    {/* ── END lanterns ── */}

                    {/* ── Text overlay sits in the TEAL SKY at the top of the image ── */}
                    <div className="absolute top-0 left-0 w-full flex flex-col items-center pt-8 px-4 z-10">
                        {/* Soft dark wash only over the sky area so text is legible */}
                        <div className="absolute inset-0 h-full bg-gradient-to-b from-[#0d1a2e]/40 via-[#0d1a2e]/10 to-transparent pointer-events-none" />

                        <div className="relative z-10 text-center flex flex-col items-center">

                            <h1
                                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest text-white drop-shadow-2xl"
                                style={{ paddingTop: "13%", fontFamily: "Castellar", textShadow: "0 2px 20px rgba(0,0,0,0.7)", paddingBottom: "0.5em" }}
                            >
                                MEENAYA
                            </h1>
                            <p className="text-[#ffffff] text-1.8xl md:text-3xl mt-2 "
                                style={{ fontFamily: "Baskerville Old Face", textShadow: "0 1px 10px rgba(0,0,0,0.8)", paddingBottom: "1em" }}>
                                WEDS
                            </p>
                            <h1
                                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest text-white drop-shadow-2xl mt-1"
                                style={{ fontFamily: "Castellar", textShadow: "0 2px 20px rgba(0,0,0,0.7)" }}
                            >
                                KAVYA
                            </h1>
                            <p className="mt-4 text-[#f]/75 text-base tracking-widest"
                                style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}>
                                12 · 04 · 2025
                            </p>
                        </div>
                        <img src="/ganpati.avif" alt="" style={{ position: "absolute", top: "635%", left: "50%", transform: "translate(-50%, -50%)", width: "10%", height: "auto" }} />

                        <div style={{ position: "absolute", top: "790%", left: "50%", transform: "translate(-50%, -50%)", width: "90%", maxWidth: "800px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <div className="flex flex-col items-center justify-center w-full">
                                <p style={{ color: "#f3ecba", filter: "brightness(0.9)", fontWeight: "bold", fontFamily: "'Noto Serif Devanagari','Noto Serif',serif", fontSize: "clamp(1.2rem,2.5vw,1.4rem)", margin: "0 0 1.7rem" }}>
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

                                <p style={{ fontFamily: "Cormorant Upright", fontSize: "clamp(1.5rem,3.5vw,2.2rem)", fontWeight: 700, color: "#F3ECBA", letterSpacing: "0.3em", margin: "0 0 1.5rem", textTransform: "uppercase" }}>
                                    INVITE
                                </p>

                                <p style={{ fontFamily: "Cormorant Upright", fontSize: "clamp(1rem,2vw,1.3rem)", color: "#F3ECBA", fontStyle: "italic", margin: "0 0 2rem" }}>
                                    You to join us in the wedding celebrations of
                                </p>

                                <p style={{ fontFamily: "Cormorant Upright", fontSize: "clamp(3.5rem,6vw,4rem)", fontWeight: 700, color: "#f3ecba", lineHeight: 1.1, margin: "0" }}>
                                    Vishu
                                </p>

                                <p style={{ fontFamily: "Cormorant Upright", fontSize: "clamp(1.5rem,4vw,2.5rem)", color: "#F3ECBA", fontStyle: "italic", lineHeight: 1.1, margin: "1rem 0" }}>
                                    &amp;
                                </p>

                                <p style={{ fontFamily: "Cormorant Upright", fontSize: "clamp(3.5rem,6vw,4rem)", fontWeight: 700, color: "#F3ECBA", lineHeight: 1.1, margin: "0 0 1.5rem" }}>
                                    Kavya
                                </p>

                                <p style={{ fontFamily: "Cormorant Upright", fontSize: "clamp(0.9rem,1.8vw,1.2rem)", color: "#F3ECBA", fontStyle: "italic", margin: "0 0 0.5rem" }}>
                                    Daughter of
                                </p>
                                <p style={{ fontFamily: "Cormorant Upright", fontSize: "clamp(1.1rem,2.5vw,1.5rem)", color: "#F3ECBA", fontWeight: 600, lineHeight: 1.4, margin: "0" }}>
                                    Smt. Parvathi &amp;<br />Shri K. Ramaswamy
                                </p>
                                <br /><br /><br /><br />
                                <p style={{ fontFamily: "serif", fontSize: "clamp(1.5rem,2vw,1.3rem)", color: "#F3ECBA", fontStyle: "italic", margin: "0 0 2rem" }}>
                                    On the following events
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ── END text overlay ── */}

                </div>
                {/* ── END image wrapper ── */}

            </section>



















        </div>
    );
}
