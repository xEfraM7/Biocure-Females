"use client";

import React from "react";

interface GHLCalendarWidgetProps {
    calendarId: string;
    locationId: string;
    className?: string;
}

/**
 * Go High Level Calendar Widget
 * Embeds GHL calendar for appointment booking
 */
export const GHLCalendarWidget: React.FC<GHLCalendarWidgetProps> = ({
    calendarId,
    locationId,
    className = "",
}) => {
    const widgetUrl = `https://api.leadconnectorhq.com/widget/booking/${calendarId}?locationId=${locationId}`;

    return (
        <div className={`ghl-calendar-widget ${className}`}>
            <iframe
                src={widgetUrl}
                style={{
                    width: "100%",
                    height: "700px",
                    border: "none",
                    borderRadius: "12px",
                }}
                title="Schedule Your Consultation"
                allow="camera; microphone"
            />
        </div>
    );
};

export default GHLCalendarWidget;
