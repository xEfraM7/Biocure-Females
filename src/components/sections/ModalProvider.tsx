"use client";

import { createContext, useContext, useState } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout";

// Lazy load the heavy modal
const CalendarModal = dynamic(
    () => import("@/components/modals/CalendarModal").then((mod) => mod.CalendarModal),
    { ssr: false, loading: () => null }
);

// Context for modal state
const ModalContext = createContext<{ openModal: () => void } | null>(null);

export function useOpenModal() {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useOpenModal must be used within ModalProvider");
    }
    return context.openModal;
}

interface ModalProviderProps {
    children: React.ReactNode;
}

/**
 * Provider that wraps the app and provides modal functionality to all sections
 */
export function ModalProvider({ children }: ModalProviderProps) {
    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
    const openModal = () => setIsLeadModalOpen(true);

    return (
        <ModalContext.Provider value={{ openModal }}>
            <Navbar onOpenModal={openModal} />
            {children}
            <CalendarModal
                isOpen={isLeadModalOpen}
                onClose={() => setIsLeadModalOpen(false)}
            />
        </ModalContext.Provider>
    );
}
