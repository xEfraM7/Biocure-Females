"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { useOpenModal } from "./ModalProvider";

const PricingSection = () => {
  const { pricing } = siteContent;
  const openModal = useOpenModal();
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-biocure-mint/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
            {pricing.header.main}{" "}
            <span className="text-primary">{pricing.header.highlight}</span>
          </h2>
        </div>

        {/* Single Pricing Card */}
        <div className="max-w-md mx-auto mt-12">
          <div className="relative bg-background rounded-2xl p-8 lg:p-10 border-2 border-primary shadow-card">
            {/* What's Included */}
            <div className="text-center mb-8">
              <p className="text-lg font-semibold text-foreground">
                {pricing.description}
              </p>
            </div>

            {/* CTA Button */}
            <Button
              variant="heroPrimary"
              size="xl"
              className="w-full mb-8"
              onClick={openModal}
            >
              {pricing.ctaButton}
            </Button>

            {/* Features */}
            <ul className="space-y-4">
              {pricing.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
