import React from "react";
import HeroSection from "./components/HeroSection";
import CoupleSection from "./components/CoupleSection";
import CountdownSection from "./components/CountdownSection";
import CarSection from "./components/CarSection";

export default function SouthIndianInvite() {
    return (
        <main className="min-h-screen bg-black overflow-x-hidden">
            <HeroSection />
            <CoupleSection />
            <CountdownSection />
            <CarSection />
        </main>
    );
}
