"use client";
import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

export default function MusicPlayer({ selectedSong = "-NoSelection-" }: { selectedSong?: string }) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Map song name to file
    const songMap: { [key: string]: string } = {
        "Guzarish Ghajini": "Guzarish Ghajini.mp3",
        "Khuda Jaane": "Khuda Jaane.mp3",
        "Main Agar Kahoon Flute": "Main Agar Kahoon Flute.mp3",
        "Sajni": "Sajni.mp3",
        "Tera hone laga hoon": "Tera hone laga hoon.mp3",
    };

    const songFile = songMap[selectedSong];

    if (selectedSong === "-NoSelection-" || !songFile) return null;

    useEffect(() => {
        // Attempt autoplay on mount (will likely be blocked by browser until user interaction)
        const playAudio = () => {
            if (audioRef.current) {
                audioRef.current.play().then(() => {
                    setIsPlaying(true);
                }).catch(() => {
                    console.log("Autoplay blocked. Interaction required.");
                });
            }
        };

        playAudio();

        // Optional: play on first click anywhere if autoplay was blocked
        const handleFirstInteraction = () => {
            if (!isPlaying && audioRef.current) {
                playAudio();
                window.removeEventListener("click", handleFirstInteraction);
                window.removeEventListener("scroll", handleFirstInteraction);
            }
        };

        window.addEventListener("click", handleFirstInteraction);
        window.addEventListener("scroll", handleFirstInteraction);

        return () => {
            window.removeEventListener("click", handleFirstInteraction);
            window.removeEventListener("scroll", handleFirstInteraction);
        };
    }, [isPlaying]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <div className="fixed top-8 right-8 z-[10000]">
            <audio ref={audioRef} loop key={songFile}>
                <source src={`/music/${songFile}`} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <button
                onClick={togglePlay}
                className="w-14 h-14 bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:bg-white/30 transition-all duration-500 group overflow-hidden"
                title={isPlaying ? "Pause Music" : "Play Music"}
            >
                {/* Mirror effect / Shine */}
                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-1000 ease-in-out" />
                
                <FontAwesomeIcon
                    icon={isPlaying ? faPause : faPlay}
                    className="text-white text-xl z-10 group-hover:scale-125 transition-transform duration-300"
                />
            </button>
        </div>
    );
}
