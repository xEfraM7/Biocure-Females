import { siteContent } from "@/content/site-content";

const BenefitsSection = () => {
  const { benefits } = siteContent;

  return (
    <section id="benefits" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
            {benefits.header.main}{" "}
            <span className="text-gradient-gold">{benefits.header.highlight}</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.items.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-biocure-sage/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-biocure-gold/20 transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-biocure-gold transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold font-heading text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover decoration */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-biocure-sage/5 to-biocure-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
