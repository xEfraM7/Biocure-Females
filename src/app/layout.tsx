import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { SmoothScroll } from "@/components/common";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-heading",
    display: "swap",
});

const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-sans",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Biocure",
    description: "Accelerating biotech innovation",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* YouTube preconnect (for video embed) */}
                <link rel="preconnect" href="https://www.youtube.com" />
                <link rel="preconnect" href="https://i.ytimg.com" />
            </head>
            <body className={`antialiased ${poppins.variable} ${openSans.variable}`}>
                <SmoothScroll>
                    <Providers>{children}</Providers>
                </SmoothScroll>
            </body>
        </html>
    );
}
