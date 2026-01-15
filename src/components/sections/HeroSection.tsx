"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { FadeIn } from "@/components/common";
import { useLenis } from "lenis/react";
import { siteContent } from "@/content/site-content";
import { useOpenModal } from "./ModalProvider";

const HeroSection = () => {
  const lenis = useLenis();
  const { hero } = siteContent;
  const openModal = useOpenModal();

  const handleWatchVideo = () => {
    lenis?.scrollTo("#vsl", { offset: -80 });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-biocure-sage/5 rounded-full blur-3xl transform-gpu will-change-transform" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-biocure-mint/30 rounded-full blur-3xl transform-gpu will-change-transform" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Kicker */}
          <div className="mb-6">
            <p className="inline-block text-sm md:text-base font-medium text-biocure-gold bg-biocure-gold/10 px-4 py-2 rounded-full">
              {hero.kicker}
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-relaxed mb-6">
            {hero.headline.main}
            <br />
            <span className="text-primary">{hero.headline.highlight}</span>
          </h1>

          {/* Subheadline */}
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              {hero.subheadline}
            </p>
          </FadeIn>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-6 mb-12">
            <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
              <FadeIn delay={0.3}>
                <Button
                  variant="heroPrimary"
                  size="xl"
                  onClick={openModal}
                  className="w-full sm:w-auto min-w-[240px]"
                >
                  {hero.primaryCta}
                </Button>
              </FadeIn>

              {/* Micro-copy moved here */}
              <FadeIn delay={0.4}>
                <p className="text-xs text-muted-foreground">
                  {hero.microCopy}
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.3}>
              <Button
                variant="heroOutline"
                size="xl"
                onClick={handleWatchVideo}
                className="gap-2 w-full sm:w-auto whitespace-normal h-auto py-4 sm:py-0 sm:h-14 max-w-md"
              >
                <Play size={18} className="shrink-0" fill="currentColor" />
                <span className="text-left sm:text-center leading-tight">
                  {hero.secondaryCta}
                </span>
              </Button>
            </FadeIn>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
