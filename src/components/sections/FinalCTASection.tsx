"use client";

import { Button } from "@/components/ui/button";
import { Users, Clock } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { useOpenModal } from "./ModalProvider";

const FinalCTASection = () => {
  const { finalCTA } = siteContent;
  const openModal = useOpenModal();
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-biocure-mint/50 to-biocure-gold/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
            {finalCTA.headline.main}{" "}
            <span className="text-gradient-gold">{finalCTA.headline.highlight}</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            {finalCTA.subheadline}
          </p>

          {/* CTA Button */}
          <Button
            variant="cta"
            size="xl"
            className="mb-6"
            onClick={openModal}
          >
            {finalCTA.ctaButton}
          </Button>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
            <Users className="w-5 h-5" />
            <span>{finalCTA.socialProof}</span>
          </div>

          {/* Urgency */}
          <div className="inline-flex items-center gap-2 bg-biocure-gold/20 text-foreground px-4 py-2 rounded-full text-sm font-medium">
            <Clock className="w-4 h-4 text-biocure-gold" />
            {finalCTA.urgency}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
