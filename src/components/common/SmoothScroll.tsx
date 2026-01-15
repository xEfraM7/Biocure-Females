"use client";

import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import "lenis/dist/lenis.css";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Optional: Log to verify it mounts
        console.log("Lenis Smooth Scroll initialized");
    }, []);

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true, anchors: true }}>
            {children}
        </ReactLenis>
    );
}
