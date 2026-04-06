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

    return (
        <main className="min-h-screen bg-black overflow-x-hidden">
            <MusicPlayer selectedSong={song} />
            <HeroSection fx={fx} />
            <CoupleSection />
            <CarSection placard={placard} />
            <CountdownSection />
        </main>
    );
}
