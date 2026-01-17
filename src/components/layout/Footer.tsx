import { Link } from "react-router-dom";
import { Bike, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  bikes: [
    { label: "Mountain Bikes", href: "/products?category=mountain" },
    { label: "Road Bikes", href: "/products?category=road" },
    { label: "City Bikes", href: "/products?category=city" },
    { label: "Electric Bikes", href: "/products?category=electric" },
    { label: "Kids Bikes", href: "/products?category=kids" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  support: [
    { label: "Warranty", href: "/services#warranty" },
    { label: "Repairs", href: "/services#repairs" },
    { label: "Sizing Guide", href: "/services#sizing" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground">
                <Bike className="h-5 w-5 text-primary" />
              </div>
              <span className="font-display text-xl font-bold">
                RideSphere
              </span>
            </Link>
            <p className="text-primary-foreground/80 max-w-sm mb-6">
              Crafting premium bicycles for every adventure since 2010. 
              We believe in sustainable mobility and the joy of cycling.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Bikes */}
          <div>
            <h4 className="font-display font-semibold mb-4">Our Bikes</h4>
            <ul className="space-y-2">
              {footerLinks.bikes.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  123 Cycle Lane<br />
                  Portland, OR 97201
                </span>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  <Phone className="h-5 w-5 shrink-0" />
                  <span className="text-sm">(555) 123-4567</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@rideSphere.com"
                  className="flex items-center gap-3 text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  <Mail className="h-5 w-5 shrink-0" />
                  <span className="text-sm">hello@rideSphere.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} RideSphere. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
