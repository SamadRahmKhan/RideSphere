import { Layout } from "@/components/layout/Layout";
import { Wrench, Shield, Ruler, Headphones } from "lucide-react";

const services = [
  { icon: Wrench, title: "Repairs & Maintenance", desc: "Full-service bike shop with certified mechanics. From tune-ups to complete overhauls." },
  { icon: Shield, title: "Lifetime Warranty", desc: "All RideSphere frames come with a lifetime warranty. We stand behind our craftsmanship." },
  { icon: Ruler, title: "Professional Fitting", desc: "Get the perfect fit with our bike fitting service. Comfort and performance optimized." },
  { icon: Headphones, title: "Expert Support", desc: "Our cycling experts are here to help you choose the right bike and accessories." }
];

const Services = () => {
  return (
    <Layout>
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Services & Support</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">We're here for you before, during, and after your purchase.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map(s => (
              <div key={s.title} className="p-8 rounded-lg bg-card border border-border">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
