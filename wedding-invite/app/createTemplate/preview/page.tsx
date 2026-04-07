"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

// Import All Template Components
import SouthIndianHero from "../../southindian/components/HeroSection";
import SouthIndianCouple from "../../southindian/components/CoupleSection";
import SouthIndianCountdown from "../../southindian/components/CountdownSection";
import SouthIndianCar from "../../southindian/components/CarSection";
import SouthIndianMusic from "../../southindian/components/MusicPlayer";

function UniversalPreviewContent() {
    const searchParams = useSearchParams();
    
    // Core Parameters
    const template = searchParams.get("template") || "South Indian";
    const fx = searchParams.get("fx") || "-NoSelection-";
    const song = searchParams.get("song") || "-NoSelection-";
    const placard = searchParams.get("placard") || "-NoSelection-";
    const brideName = searchParams.get("bride") || "MEENAYA";
    const groomName = searchParams.get("groom") || "KAVYA";
    const weddingDate = searchParams.get("date") || "2025-04-12";
    const weddingTime = searchParams.get("time") || "";

    // ── TEMPLATE ROUTER ──
    switch (template) {
        case "South Indian":
            return (
                <main className="min-h-screen bg-black overflow-x-hidden no-scrollbar">
                    <SouthIndianMusic selectedSong={song} />
                    <SouthIndianHero
                        fx={fx}
                        brideName={brideName}
                        groomName={groomName}
                        weddingDate={weddingDate}
                        weddingTime={weddingTime}
                    />
                    <SouthIndianCouple brideName={brideName} groomName={groomName} />
                    <SouthIndianCar placard={placard} />
                    <SouthIndianCountdown targetDate={weddingDate} />
                </main>
            );
        
        default:
            return (
                <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-400 font-bold p-10 text-center">
                    Template "{template}" coming soon...
                </div>
            );
    }
}

export default function UniversalPreview() {
    return (
        <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen bg-black text-gold">
                Loading Preview...
            </div>
        }>
            <UniversalPreviewContent />
        </Suspense>
    );
}
