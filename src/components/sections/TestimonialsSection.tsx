import { Star } from "lucide-react";
import { siteContent } from "@/content/site-content";

const TestimonialsSection = () => {
  const { testimonials } = siteContent;

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-biocure-mint/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
            {testimonials.header.main}{" "}
            <span className="text-gradient-gold">{testimonials.header.highlight}</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-biocure-gold text-biocure-gold" />
              ))}
            </div>
            <span className="font-medium">{testimonials.ratingText}</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.items.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-background rounded-2xl p-6 lg:p-8 shadow-soft border border-border/50"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-biocure-gold text-biocure-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/90 leading-relaxed mb-6 italic text-sm lg:text-base">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials.verifiedLabel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
