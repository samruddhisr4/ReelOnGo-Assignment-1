"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBookOpen,
    faPodcast,
    faGripVertical,
    faIcons
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { title } from "process";

export default function Showcase() {
    return (
        <div className="min-h-screen relative flex flex-col items-center justify-center text-center px-4 overflow-hidden" style={{ backgroundColor: "#f9f8f4", color: "#1a1a1a" }}>

            {/* Navbar (Minimal) */}
            <nav className="absolute top-0 w-full flex justify-between items-center px-6 md:px-10 py-6 z-20" style={{ borderBottom: "1.7px solid black", backgroundColor: "#000000" }}>
                <div className="flex items-center gap-2">
                    <img src="/showcase/logo.png" alt="Logo" className="h-7 md:h-7" />
                </div>
                <Link href="/createTemplate">
                    <button className="px-6 md:px-6 py-3 md:py-3 bg-[#1a1a1a] text-black bg-white rounded-full text-base md:text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-xl flex items-center justify-between mx-auto gap-3 group" >
                        Create Template
                        <div className="w-2 h-2 bg-black rounded-full group-hover:scale-150 transition-transform"></div>
                    </button>
                </Link>
            </nav>

            {/* Hero Content */}
            <div className="max-w-6xl mx-auto space-y-6 md:space-y-10 z-10 py-20 " style={{ marginTop: "8%" }} >

                <p className="text-[1.2rem] md:text-[1.3rem] tracking-[-0.05em] uppercase font-semibold text-gray-500 mb-1 md:mb-4 opacity-80">
                    Introducing
                </p>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] tracking-tight leading-[0.9] font-black italic mb-10% ">
                    <span className="not-italic">Digital Templates for</span><br />
                    Beautiful <span className="not-italic">Invitations</span>
                </h2>

                {/* Headline block */}
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "0.01em",
                        maxWidth: "100%",
                        marginLeft: "auto",
                        marginRight: "auto",
                        padding: "0 12px",
                    }}
                >
                    <h2
                        style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: "clamp(20px, 2.5vw, 32px)",
                            fontWeight: 700,
                            color: "#1a1a18",
                            lineHeight: 1.2,
                            letterSpacing: "-0.02em",
                            margin: "0 0 8px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }}
                    >
                        Your love story deserves a{" "}
                        <em
                            style={{
                                fontStyle: "italic",
                                color: "#7a7a72",
                            }}
                        >
                            stunning
                        </em>{" "}
                        first impression.
                    </h2>

                    <p
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "14px",
                            color: "#7a7a72",
                            lineHeight: 1.4,
                            margin: 0,
                        }}
                    >
                        Handcrafted templates for Indian weddings — personalise in minutes.
                    </p>
                </div>



            </div>
            {/* Various clickable thumbnail of Templates */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 md:gap-x-16 md:gap-y-24 lg:gap-x-24 px-10 md:px-16 lg:px-24 py-24 max-w-[95rem] mx-auto">
                <Link href="/southindian">
                    {renderTemplateCard({
                        title: "South Indian",
                        image: "/showcase/southindian.png",
                        description: "Perfect for traditional South Indian weddings — effortless to edit, share. Designed to feel completely yours."
                    })}
                </Link>
                {
                    renderTemplateCard({
                        title: "City",
                        image: "/showcase/city.png",
                        description: "Modern and sophisticated city-themed invites — effortless to edit, share. Designed for the urban couple."
                    })
                }
                {
                    renderTemplateCard({
                        title: "Muslim",
                        image: "/showcase/muslim.png",
                        description: "Elegant Nikah and Walima templates — effortless to edit, share. Beautifully crafted for your special day."
                    })
                }
                {
                    renderTemplateCard({
                        title: "Sikh",
                        image: "/showcase/sikh.png",
                        description: "Regal Anand Karaj templates — effortless to edit, share. Traditional designs for a memorable wedding."
                    })
                }
                {
                    renderTemplateCard({
                        title: "Beach",
                        image: "/showcase/beach.png",
                        description: "Relaxed and beautiful beach wedding invites — effortless to edit, share. Perfect for destination weddings."
                    })
                }
                {
                    renderTemplateCard({
                        title: "Mountain",
                        image: "/showcase/mountain.png",
                        description: "Stunning mountain and nature themed templates — effortless to edit, share. Designed for the adventurous heart."
                    })
                }
            </div>
        </div>
    );
}

function renderTemplateCard({ title, image, description }: { title: string, image: string, description: string }) {
    return (
        <div className="group cursor-pointer flex flex-col space-y-4">
            {/* Image Container with Badges */}
            <div className="relative aspect-[16/11] bg-white rounded-[2rem] border-[1px] border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center p-4">

                {/* Mockup Image */}
                <div className="w-full h-full flex items-center justify-center p-2">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </div>

            {/* Captions */}
            <div className="space-y-3 px-1 text-left">
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-[#1a1a1a]">{title}</h3>
                </div>
                <p className="text-sm text-gray-500 font-light leading-snug max-w-[90%]">
                    {description}
                </p>
            </div>
        </div>
    );
}
