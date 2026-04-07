"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSun, faPeopleLine, faCar } from "@fortawesome/free-solid-svg-icons";

// Custom mapping to support user-provided syntax
const byPrefixAndName = {
    fab: { instagram: faInstagram },
    fas: { 'sun-bright': faSun, car: faCar },
    fass: { 'people-line': faPeopleLine } // Fallback to Solid (Free)
};

export default function CarSection() {
    return (
        <div className="relative w-full">
            {/* 1. Background Layer (fills the section without dictating height) */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="/yellowbg.avif"
                    alt="Yellow Background"
                    className="w-screen h-full object-cover block"
                    style={{ height: "350vh" }}
                />
            </div>



            {/* 3. Main Content Layer (Relative flow determines section height) */}
            <div className="relative z-20 w-full flex flex-col items-center px-4 md:px-20 text-[#7b7037] pt-[19%] pb-200">
                {/* ?????? THINGS TO KNOW SECTION ?????? */}
                <div className="w-full flex flex-col items-center">
                    <h2
                        className="tracking-[0.3em] font-bold text-center"
                        style={{ fontFamily: "Castellar, serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", marginBottom: "5%" }}
                    >
                        THINGS TO KNOW
                    </h2>

                    <p
                        className="italic text-center max-w-4xl mb-24 opacity-90"
                        style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1rem, 2vw, 1.4rem)", lineHeight: 1.6 }}
                    >
                        To help you feel at ease and enjoy every moment of the celebrations, we've gathered a few thoughtful details we'd love for you to know before the big day.
                    </p>

                    {/* Information Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-16 md:gap-x-12 w-full max-w-7xl pt-10">
                        {/* Hashtag */}
                        <div className="flex flex-col items-center text-center px-4">
                            <div className="w-20 h-20 mb-8 flex items-center justify-center opacity-70">
                                <FontAwesomeIcon
                                    icon={byPrefixAndName.fab['instagram']}
                                    className="w-full h-full"
                                    style={{ fontSize: "4rem" }}
                                />
                            </div>
                            <h3 className="tracking-[0.2em] font-bold mb-4" style={{ fontFamily: "Castellar, serif", fontSize: "1.4rem" }}>HASHTAG</h3>
                            <p className="opacity-75 leading-relaxed" style={{ fontFamily: "Georgia, serif", fontSize: "0.95rem" }}>While posting photos on social media please use the hashtag - #abkan</p>
                        </div>

                        {/* Weather */}
                        <div className="flex flex-col items-center text-center px-4">
                            <div className="w-25 h-25 mb-8 flex items-center justify-center opacity-70">
                                <FontAwesomeIcon
                                    icon={byPrefixAndName.fas['sun-bright']}
                                    className="w-full h-full"
                                    style={{ fontSize: "4rem" }}
                                />
                            </div>
                            <h3 className="tracking-[0.2em] font-bold mb-4" style={{ fontFamily: "Castellar, serif", fontSize: "1.4rem" }}>WEATHER</h3>
                            <p className="opacity-75 leading-relaxed" style={{ fontFamily: "Georgia, serif", fontSize: "0.95rem" }}>It will be mostly sunny with temperature reaching up to 28 degrees at the venue.</p>
                        </div>

                        {/* Staff */}
                        <div className="flex flex-col items-center text-center px-4">
                            <div className="w-25 h-25 mb-8 flex items-center justify-center opacity-70">
                                <FontAwesomeIcon
                                    icon={byPrefixAndName.fass['people-line']}
                                    className="w-full h-full"
                                    style={{ fontSize: "4rem" }}
                                />
                            </div>
                            <h3 className="tracking-[0.2em] font-bold mb-4" style={{ fontFamily: "Castellar, serif", fontSize: "1.4rem" }}>STAFF</h3>
                            <p className="opacity-75 leading-relaxed" style={{ fontFamily: "Georgia, serif", fontSize: "0.95rem" }}>We recommend the nearby hotel called Bhola Bhawan near the venue for the staff members.</p>
                        </div>

                        {/* Parking */}
                        <div className="flex flex-col items-center text-center px-4">
                            <div className="w-25 h-25 mb-8 flex items-center justify-center opacity-70">
                                <FontAwesomeIcon
                                    icon={byPrefixAndName.fas['car']}
                                    className="w-full h-full"
                                    style={{ fontSize: "4rem" }}
                                />
                            </div>
                            <h3 className="tracking-[0.2em] font-bold mb-4" style={{ fontFamily: "Castellar, serif", fontSize: "1.4rem" }}>PARKING</h3>
                            <p className="opacity-75 leading-relaxed" style={{ fontFamily: "Georgia, serif", fontSize: "0.95rem" }}>Valet parking for all our guests will be available at the venue.</p>
                        </div>
                    </div>

                    {/* ?????? FOLLOW THE ACTION SECTION ?????? */}
                    <div className="flex flex-col items-center" style={{ marginTop: "10%" }}>
                        <h2
                            className="text-[#7b7037] font-bold tracking-[0.3em] mb-4 text-center"
                            style={{ fontFamily: "Castellar, serif", fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
                        >
                            FOLLOW OUR ACTIONS
                        </h2>
                        <p
                            className="text-[#7b7037] italic mb-10 text-center opacity-80"
                            style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)" }}
                        >
                            Click to open our Instagram page
                        </p>

                        <div className="relative group flex flex-col items-center">
                            <a
                                href="#INSTAGRAM_LINK"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-25 h-25 rounded-full border-[4px] border-[#7b7037]/30 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-[#7b7037] relative cursor-pointer"
                            >
                                <div className="absolute inset-0 rounded-full border-2 border-[#7b7037]/20 animate-ping" />
                                <div className="w-14 h-14 flex items-center justify-center">
                                    <div className="w-6 h-6 rounded-full bg-[#7b7037]" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. The second bridge car centered on the bottom junction (Z-9999) */}
            <img
                src="/car2.avif"
                alt="Transition Car Bottom"
                style={{
                    position: "absolute",
                    bottom: "15vh",
                    left: "50vw",
                    transform: "translate(-50%, 50%)",
                    width: "clamp(250px, 55%, 800px)",
                    height: "auto",
                    top: "auto", // ???? Removed static top offset that broke mobile
                    zIndex: 9999
                }}
            />
        </div>
    );
}
