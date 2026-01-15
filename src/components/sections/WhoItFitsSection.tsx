import { siteContent } from "@/content/site-content";

const WhoItFitsSection = () => {
  const { whoItFits } = siteContent;

  return (
    <section className="py-20 lg:py-28 bg-biocure-mint/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
            {whoItFits.header.main} <span className="text-gradient-gold">{whoItFits.header.highlight}</span>
          </h2>
        </div>

        {/* Personas Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {whoItFits.personas.map((persona) => (
            <div
              key={persona.title}
              className="group flex gap-5 bg-background rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 bg-biocure-gold/20 rounded-xl flex items-center justify-center group-hover:bg-biocure-gold/30 transition-colors duration-300">
                <persona.icon className="w-6 h-6 text-biocure-gold" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
                  {persona.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {persona.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItFitsSection;
