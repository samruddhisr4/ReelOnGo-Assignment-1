"use client";
import React from "react";

export default function CarSection() {
    return (
        <div className="relative w-full">
            {/* The bridge car centered on the transition boundary */}
            <img
                src="/car2.avif"
                alt="Transition Car"
                style={{
                    position: "absolute",
                    top: "-1.9%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "55%",
                    height: "auto",
                    zIndex: 50
                }}
            />
            <img src="/yellowbg.avif" alt="Yellow Background" className="w-full h-auto block" />
        </div>
    );
}