import { siteContent } from "@/content/site-content";

const HowItWorksSection = () => {
  const { howItWorks } = siteContent;

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
            {howItWorks.header.main}{" "}
            <span className="text-gradient-gold">{howItWorks.header.highlight}</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-biocure-gold to-transparent mx-[16.666%]" />

          {howItWorks.steps.map((step) => (
            <div key={step.title} className="relative text-center">
              {/* Icon Container */}
              <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-background rounded-full shadow-card border-2 border-primary flex items-center justify-center">
                <step.icon className="w-9 h-9 text-primary" />
              </div>

              {/* Step Label */}
              <p className="text-sm font-medium text-biocure-gold mb-2 uppercase tracking-wider">
                {step.step}
              </p>

              {/* Title */}
              <h3 className="text-xl font-semibold font-heading text-foreground mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
