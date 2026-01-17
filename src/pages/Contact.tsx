import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">Have questions? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label htmlFor="name">Name</Label><Input id="name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required /></div>
                <div><Label htmlFor="email">Email</Label><Input id="email" type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label htmlFor="phone">Phone</Label><Input id="phone" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} /></div>
                <div><Label htmlFor="subject">Subject</Label><Input id="subject" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} required /></div>
              </div>
              <div><Label htmlFor="message">Message</Label><Textarea id="message" rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} required /></div>
              <Button type="submit" size="lg">Send Message</Button>
            </form>

            {/* Info */}
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="font-display font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex gap-3"><MapPin className="h-5 w-5 text-primary shrink-0" /><span className="text-muted-foreground">123 Cycle Lane, Portland, OR 97201</span></div>
                  <div className="flex gap-3"><Phone className="h-5 w-5 text-primary shrink-0" /><span className="text-muted-foreground">(555) 123-4567</span></div>
                  <div className="flex gap-3"><Mail className="h-5 w-5 text-primary shrink-0" /><span className="text-muted-foreground">hello@rideSphere.com</span></div>
                  <div className="flex gap-3"><Clock className="h-5 w-5 text-primary shrink-0" /><span className="text-muted-foreground">Mon-Sat: 9AM-6PM, Sun: 10AM-4PM</span></div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden h-64">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178837.08043692853!2d-122.75855731562498!3d45.5426026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b0b7da97427%3A0x1c36b9e6f6d18591!2sPortland%2C%20OR!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location map" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
