import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=1920&q=80"
          alt="Cyclist on mountain trail"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 mb-6 border border-primary-foreground/20 animate-fade-in">
            <span className="text-sm font-medium text-primary-foreground">
              New 2024 Collection Available
            </span>
            <ChevronRight className="h-4 w-4 text-primary-foreground" />
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in [animation-delay:100ms]">
            Ride the Earth.
            <br />
            <span className="text-accent">Feel the Freedom.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-lg animate-fade-in [animation-delay:200ms]">
            Premium bicycles crafted for every journey. From mountain peaks to city streets, 
            discover the bike that moves you.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:300ms]">
            <Button size="lg" variant="secondary" asChild className="group">
              <Link to="/products">
                Explore Our Bikes
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in [animation-delay:400ms]">
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">14+</p>
              <p className="text-sm text-primary-foreground/70">Years Experience</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">50K+</p>
              <p className="text-sm text-primary-foreground/70">Happy Riders</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">100%</p>
              <p className="text-sm text-primary-foreground/70">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
}
