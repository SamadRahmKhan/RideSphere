import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Leaf,
    title: "Sustainable",
    description: "Eco-friendly materials and practices"
  },
  {
    icon: Shield,
    title: "Quality Built",
    description: "Lifetime warranty on frames"
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Expert support when you need it"
  }
];

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-nature text-primary-foreground">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-lg">
              Visit our showroom to test ride any bike, or get in touch with our 
              experts who'll help you find the perfect match for your riding style.
            </p>
            
            {/* Values */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10 mb-2">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <p className="font-semibold text-sm">{value.title}</p>
                  <p className="text-xs text-primary-foreground/70">{value.description}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild className="group">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link to="/products">Browse Bikes</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80"
              alt="Cyclist riding through nature"
              className="rounded-lg shadow-2xl"
            />
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-lg bg-accent/20 -z-10" />
            <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-secondary/30 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
