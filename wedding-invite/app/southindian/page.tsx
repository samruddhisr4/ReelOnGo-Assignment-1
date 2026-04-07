import React from "react";
import HeroSection from "./components/HeroSection";
import CoupleSection from "./components/CoupleSection";
import CountdownSection from "./components/CountdownSection";
import CarSection from "./components/CarSection";
import MusicPlayer from "./components/MusicPlayer";

export default function SouthIndianInvite({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
    const fx = searchParams.fx || "-NoSelection-";
    const song = searchParams.song || "-NoSelection-";
    const placard = searchParams.placard || "-NoSelection-";
    const brideName = searchParams.bride || "MEENAYA";
    const groomName = searchParams.groom || "KAVYA";
    const weddingDate = searchParams.date || "2025-04-12";
    const weddingTime = searchParams.time || "";

    return (
        <main className="min-h-screen bg-black overflow-x-hidden">
            <MusicPlayer selectedSong={song} />
            <HeroSection
                fx={fx}
                brideName={brideName}
                groomName={groomName}
                weddingDate={weddingDate}
                weddingTime={weddingTime}
            />
            <CoupleSection brideName={brideName} groomName={groomName} />
            <CarSection placard={placard} />
            <CountdownSection targetDate={weddingDate} />
        </main>
    );
}
