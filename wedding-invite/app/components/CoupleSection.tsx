"use client";
import Image from "next/image";

export default function CoupleSection() {
    return (
        <section
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "80px 20px", // slightly more spacing
            }}
        >
            {/* Parent container */}
            <div
                style={{
                    position: "relative",
                    width: "60%", // ⬅️ control overall size (reduce = scroll looks bigger in view)
                    maxWidth: "700px",
                }}
            >
                {/* ── Scroll Image (BASE) ── */}
                <img
                    src="/scroll_invite.png"
                    alt="Scroll"
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        filter: "drop-shadow(0 12px 48px rgba(0,0,0,0.5))",
                    }}
                />

                {/* ── Overlay Image (EVENT BG) ── */}
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",

                        width: "25%", // ⬅️ smaller than before (was 55%)
                        aspectRatio: "1",

                        borderRadius: "33%",
                        overflow: "hidden",

                        boxShadow: "0 6px 30px rgba(0,0,0,0.4)",
                        border: "3px solid #b8860b",
                        zIndex: 2,
                    }}
                >
                    <Image
                        src="/eventbg.avif"
                        alt="Event"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
        </section>
    );
}