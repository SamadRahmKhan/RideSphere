import { Layout } from "@/components/layout/Layout";
import { Leaf, Award, Users, Target } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">About RideSphere</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">Crafting premium bicycles for every adventure since 2010.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-display text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">RideSphere was born from a simple belief: everyone deserves a bike that inspires them to ride more. Founded in Portland by a group of passionate cyclists, we set out to create bicycles that combine exceptional quality with sustainable practices.</p>
              <p className="text-muted-foreground">Today, we're proud to have helped over 50,000 riders find their perfect bike, from weekend warriors to daily commuters and everything in between.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="Our team" className="rounded-lg shadow-lg" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Leaf, title: "Sustainable", desc: "Eco-friendly materials and carbon-neutral shipping" },
              { icon: Award, title: "Quality", desc: "Lifetime warranty on all frames" },
              { icon: Users, title: "Community", desc: "50,000+ happy riders worldwide" },
              { icon: Target, title: "Innovation", desc: "Continuously improving designs" }
            ].map(v => (
              <div key={v.title} className="text-center p-6 rounded-lg bg-card border">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4"><v.icon className="h-6 w-6 text-primary" /></div>
                <h3 className="font-display font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
