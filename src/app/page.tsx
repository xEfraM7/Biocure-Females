import { Footer } from "@/components/layout";
import {
    HeroSection,
    VSLSection,
    BenefitsSection,
    WhoItFitsSection,
    FeaturesSection,
    TestimonialsSection,
    HowItWorksSection,
    PricingSection,
    FAQSection,
    FinalCTASection,
    ModalProvider,
} from "@/components/sections";

export default function Home() {
    return (
        <ModalProvider>
            <main className="min-h-screen">
                <HeroSection />
                <VSLSection />
                <BenefitsSection />
                <WhoItFitsSection />
                <FeaturesSection />
                <TestimonialsSection />
                <HowItWorksSection />
                <PricingSection />
                <FAQSection />
                <FinalCTASection />
                <Footer />
            </main>
        </ModalProvider>
    );
}
