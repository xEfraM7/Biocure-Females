"use client";

import React from "react";
import { Modal } from "@/utils/Modal";
import { GHLCalendarWidget } from "@/components/calendar/GHLCalendarWidget";
import { siteContent } from "@/content/site-content";

const { leadModal } = siteContent;

// Go High Level Configuration
const GHL_CONFIG = {
    calendarId: "8x1BzuE9XL53vQ4BO5ni",
    locationId: "gPVdo0TzIYGrIdW3NEZ1",
};

interface CalendarModalProps {
    isOpen: boolean;
    onClose: () => void;
}

/**
 * Calendar Modal with Go High Level widget
 * Opens the GHL calendar booking widget in a modal
 */
export const CalendarModal: React.FC<CalendarModalProps> = ({
    isOpen,
    onClose,
}) => {
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            title={leadModal.title}
            description={leadModal.description}
            size="xl"
            className="border-biocure-gold/10"
        >
            <div className="w-full overflow-hidden rounded-lg">
                <GHLCalendarWidget
                    calendarId={GHL_CONFIG.calendarId}
                    locationId={GHL_CONFIG.locationId}
                    className="w-full"
                />
            </div>
        </Modal>
    );
};

export default CalendarModal;
