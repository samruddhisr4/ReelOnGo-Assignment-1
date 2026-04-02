"use client";
import Image from "next/image";

export default function CoupleSection() {
    return (
        <section
            style={{
                // background: "linear-gradient(180deg, #0a6b5f 0%, #0d7a6d 100%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "60px 20px",
            }}
        >
            {/* Outer container — sized to the scroll */}
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    /* height driven by scroll image aspect ratio (~1.3:1 tall) */
                }}
            >
                {/* ── Layer 1: Scroll (base) ── */}
                <img
                    src="/scroll_invite.png"
                    alt="Decorative scroll"
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        filter: "drop-shadow(0 12px 48px rgba(0,0,0,0.5))",
                        userSelect: "none",
                        pointerEvents: "none",
                    }}
                />

                {/* ── Layer 2: Oval photo frame centered on the scroll ── */}
                <div
                    style={{
                        position: "absolute",
                        /* Center the oval inside the scroll's writeable area */
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "55%",       /* oval is 55% of scroll width */
                        aspectRatio: "1",   /* square bounding box so oval is even */
                        borderRadius: "50%",
                        overflow: "hidden",
                        boxShadow: "0 6px 30px rgba(0,0,0,0.4)",
                        border: "3px solid #b8860b",
                        zIndex: 2,
                    }}
                >
                    <Image
                        src="/eventbg.avif"
                        alt="Couple"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
        </section>
    );
}