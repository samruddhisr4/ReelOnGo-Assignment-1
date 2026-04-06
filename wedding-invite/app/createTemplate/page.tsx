"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faMusic, faPalette, faMagic, faShapes } from "@fortawesome/free-solid-svg-icons";

// Import Components for Live Preview
import HeroSection from "../southindian/components/HeroSection";
import CoupleSection from "../southindian/components/CoupleSection";
import CarSection from "../southindian/components/CarSection";
import CountdownSection from "../southindian/components/CountdownSection";
import MusicPlayer from "../southindian/components/MusicPlayer";


// Data from showcase.tsx and previous turned results
const templates = ["-NoSelection-", "South Indian", "City", "Muslim", "Sikh", "Beach", "Mountain"];
const hoveringElements = ["-NoSelection-", "Lanterns", "Stars", "Balloons"];
const placards = ["-NoSelection-", "Plain Off-white", "Graphically Enhanced"];
const songs = ["-NoSelection-", "Guzarish Ghajini", "Khuda Jaane", "Main Agar Kahoon Flute", "Sajni", "Tera hone laga hoon"];

export default function CreateTemplate() {
    const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
    const [selectedHover, setSelectedHover] = useState(hoveringElements[0]);
    const [selectedPlacard, setSelectedPlacard] = useState(placards[0]);
    const [selectedSong, setSelectedSong] = useState(songs[0]);
    const [weddingDate, setWeddingDate] = useState("");
    const [weddingTime, setWeddingTime] = useState("");


    const createFinalLink = () => {
        const params = new URLSearchParams();
        if (selectedTemplate !== "-NoSelection-") params.set("template", selectedTemplate);
        if (selectedHover !== "-NoSelection-") params.set("fx", selectedHover);
        if (selectedPlacard !== "-NoSelection-") params.set("placard", selectedPlacard);
        if (selectedSong !== "-NoSelection-") params.set("song", selectedSong);
        if (weddingDate) params.set("date", weddingDate);
        if (weddingTime) params.set("time", weddingTime);

        const baseUrl = window.location.origin + "/southindian";
        const finalUrl = `${baseUrl}?${params.toString()}`;

        navigator.clipboard.writeText(finalUrl);
        alert("Success! Your customized invitation link has been copied to your clipboard.\n\n" + finalUrl);
    };
    return (
        <div className="flex min-h-[110vh] bg-[#f9f8f4] overflow-hidden">
            {/* Sidebar (Left) */}
            <aside className="w-85 md:w-96 bg-white border-r border-gray-200 shadow-xl z-20 flex flex-col h-full">
                <div className="p-8 border-b border-gray-100">
                    <h1 className="text-3xl font-[family-name:var(--font-playfair)] font-bold text-[#1a1a1a]">Customize</h1>
                    <p className="text-gray-500 text-sm mt-1">Personalise your perfect invite</p>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                    {/* Template Selection */}
                    <Dropdown
                        label="Template"
                        icon={faShapes}
                        options={templates}
                        value={selectedTemplate}
                        onChange={setSelectedTemplate}
                    />

                    {/* Hovering Elements */}
                    <Dropdown
                        label="Hovering Elements"
                        icon={faMagic}
                        options={hoveringElements}
                        value={selectedHover}
                        onChange={setSelectedHover}
                    />

                    {/* Event Placard */}
                    <Dropdown
                        label="Event Placard"
                        icon={faPalette}
                        options={placards}
                        value={selectedPlacard}
                        onChange={setSelectedPlacard}
                    />

                    {/* Wedding Song */}
                    <Dropdown
                        label="Wedding Song"
                        icon={faMusic}
                        options={songs}
                        value={selectedSong}
                        onChange={setSelectedSong}
                    />

                    {/* Wedding Date & Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-50">
                        <div className="space-y-3">
                            <label className="flex items-center gap-2.5 text-[11px] font-black text-gray-400 uppercase tracking-[.15em]">Wedding Date</label>
                            <input
                                type="date"
                                value={weddingDate}
                                onChange={(e) => setWeddingDate(e.target.value)}
                                className="w-full bg-white border-2 border-gray-100 rounded-2xl px-4 py-3 focus:outline-none focus:border-black transition-all font-bold text-[#1a1a1a] shadow-sm text-sm"
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="flex items-center gap-2.5 text-[11px] font-black text-gray-400 uppercase tracking-[.15em]">Time</label>
                            <input
                                type="time"
                                value={weddingTime}
                                onChange={(e) => setWeddingTime(e.target.value)}
                                className="w-full bg-white border-2 border-gray-100 rounded-2xl px-4 py-3 focus:outline-none focus:border-black transition-all font-bold text-[#1a1a1a] shadow-sm text-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Sidebar Footer */}
                <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                    <button
                        onClick={createFinalLink}
                        className="w-full py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
                    >
                        Create Final Link
                    </button>
                    <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-[0.4em] font-black">REELONGO INVITES</p>
                </div>
            </aside>

            {/* Preview Area (Right) */}
            <main className="flex-1 relative bg-[#f1f0ea] flex items-center justify-center p-12 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#d1d0c9_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />

                <div className="relative w-full max-w-[420px] aspect-[9/19] bg-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.18)] border-[8px] border-black overflow-hidden group transition-all duration-700">
                    {selectedTemplate === "South Indian" ? (
                        /* LIVE SIMULATOR - Mobile Frame Viewport */
                        <div className="absolute inset-0 overflow-y-auto overflow-x-hidden bg-[#0d1a2e] custom-scrollbar">
                            <div style={{ transform: "scale(0.4) translateZ(0)", transformOrigin: "top left", width: "250%" }}>
                                <div className="relative w-full">
                                    <div className="absolute top-4 right-4 z-[10000]">
                                        <MusicPlayer selectedSong={selectedSong} />
                                    </div>
                                    <HeroSection fx={selectedHover} weddingDate={weddingDate} weddingTime={weddingTime} />
                                    <CoupleSection />
                                    <CarSection placard={selectedPlacard} />
                                    <CountdownSection targetDate={weddingDate} />
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* PLACEHOLDER WRAPPER */
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                            <div className="absolute top-10 left-10 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 border-l-2 border-orange-200 pl-4">Live Preview</div>

                            <h2 className="text-7xl md:text-8xl lg:text-9xl font-[family-name:var(--font-playfair)] italic font-black text-gray-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none group-hover:scale-110 transition-transform duration-700 opacity-10 pointer-events-none">
                                {selectedTemplate}
                            </h2>

                            <div className="space-y-6 z-10 w-full">
                                <p className="text-orange-300 uppercase tracking-[0.2em] text-xs font-black">
                                    {selectedTemplate === "-NoSelection-" ? "Select Template to Preview" : "Current Selection"}
                                </p>
                                <h3 className={`text-5xl font-[family-name:var(--font-playfair)] font-bold transition-all duration-500 ${selectedTemplate === "-NoSelection-" ? "text-gray-100 italic" : "text-[#1a1a1a] drop-shadow-sm"}`}>
                                    {selectedTemplate}
                                </h3>

                                <div className="flex flex-wrap items-center justify-center gap-4 mt-8 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    <Badge label={`Style: ${selectedPlacard}`} color={selectedPlacard === "-NoSelection-" ? "bg-gray-50 text-gray-300 border-gray-100" : "bg-orange-50 text-orange-800 border-orange-100"} />
                                    <Badge label={`FX: ${selectedHover}`} color={selectedHover === "-NoSelection-" ? "bg-gray-50 text-gray-300 border-gray-100" : "bg-blue-50 text-blue-800 border-blue-100"} />
                                    <Badge label={`Audio: ${selectedSong}`} color={selectedSong === "-NoSelection-" ? "bg-gray-50 text-gray-300 border-gray-100" : "bg-emerald-50 text-emerald-800 border-emerald-100"} />
                                </div>

                                {(weddingDate || weddingTime) && (
                                    <div className="flex flex-wrap items-center justify-center gap-4 mt-4 animate-in fade-in slide-in-from-bottom-2 duration-700">
                                        {weddingDate && <Badge label={`Date: ${weddingDate}`} color="bg-rose-50 text-rose-800 border-rose-100" />}
                                        {weddingTime && <Badge label={`Time: ${weddingTime}`} color="bg-amber-50 text-amber-800 border-amber-100" />}
                                    </div>
                                )}
                            </div>

                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full px-12">
                                <div className="p-5 border border-dashed border-gray-200 rounded-2xl bg-gray-50/80 backdrop-blur-sm group-hover:border-gray-300 transition-colors">
                                    <p className="text-[11px] text-gray-400 italic font-medium leading-relaxed max-w-2xl mx-auto">
                                        The preview is generating in real-time. Select "South Indian" to see the full scrollable invitation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

function Dropdown({ label, icon, options, value, onChange }: { label: string, icon: any, options: string[], value: string, onChange: (v: string) => void }) {
    return (
        <div className="space-y-3">
            <label className="flex items-center gap-2.5 text-[11px] font-black text-gray-400 uppercase tracking-[.15em]">
                <div className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center">
                    <FontAwesomeIcon icon={icon} className="text-gray-400 w-3 h-3" />
                </div>
                {label}
            </label>
            <div className="relative group">
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full bg-white border-2 border-gray-100 rounded-2xl px-5 py-4 appearance-none focus:outline-none focus:ring-0 focus:border-black transition-all cursor-pointer font-bold text-[#1a1a1a] shadow-sm hover:shadow-md hover:border-gray-200"
                >
                    {options.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-300 group-hover:text-black transition-all">
                    <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
                </div>
            </div>
        </div>
    );
}

function Badge({ label, color }: { label: string, color: string }) {
    return (
        <span className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest border ${color} shadow-sm backdrop-blur-sm transition-all hover:scale-105 cursor-default`}>
            {label}
        </span>
    );
}