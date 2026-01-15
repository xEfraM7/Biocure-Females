import { FadeIn } from "@/components/common";
import { siteContent } from "@/content/site-content";

const FeaturesSection = () => {
  const { features } = siteContent;

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
            {features.header.main}{" "}
            <span className="text-gradient-gold">{features.header.highlight}</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.items.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.1} className="h-full">
              <div
                className="group h-full flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-semibold font-heading text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
