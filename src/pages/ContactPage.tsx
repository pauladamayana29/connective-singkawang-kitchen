import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import exteriorImg from "@/assets/gallery-exterior.jpg";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "Jl. Diponegoro No. 88, Singkawang, West Kalimantan 79112", link: "https://maps.google.com" },
  { icon: Phone, label: "Phone", value: "+62 123 456 7890", link: "tel:+621234567890" },
  { icon: Mail, label: "Email", value: "hello@connective.id", link: "mailto:hello@connective.id" },
  { icon: Clock, label: "Hours", value: "Mon-Fri: 10AM-10PM | Sat-Sun: 9AM-11PM", link: "" },
];

const socials = [
  { icon: Facebook, label: "Facebook", url: "https://facebook.com/connective", handle: "@connective" },
  { icon: Instagram, label: "Instagram", url: "https://instagram.com/connective", handle: "@connective" },
  { icon: Youtube, label: "YouTube", url: "https://youtube.com/connective", handle: "Connective Kitchen" },
];

const ContactPage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <img src={exteriorImg} alt="Contact Connective" className="absolute inset-0 w-full h-full object-cover" width={1280} height={960} />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-bold text-foreground mb-4"
        >
          Get in <span className="text-gold glow-gold">Touch</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground font-accent text-xl"
        >
          We'd love to hear from you
        </motion.p>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <SectionTitle subtitle="Reach Out" title="Contact Info" />
            <div className="space-y-8">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-sm bg-muted flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-body tracking-widest uppercase text-gold mb-1">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} target={item.link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-foreground hover:text-gold transition-colors font-accent text-lg">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-accent text-lg">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-16">
              <h3 className="text-sm font-body tracking-widest uppercase text-gold mb-8">Follow Us</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socials.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3 p-4 bg-card border border-border rounded-sm hover:border-gold/30 transition-all group"
                  >
                    <s.icon size={20} className="text-gold" />
                    <div>
                      <p className="text-sm font-body text-foreground">{s.label}</p>
                      <p className="text-xs text-muted-foreground">{s.handle}</p>
                    </div>
                    <ExternalLink size={14} className="ml-auto text-muted-foreground group-hover:text-gold transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle subtitle="Find Us" title="Location" />
            <div className="aspect-square rounded-sm overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.421725453816!2d108.9876!3d0.9089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3155e3e87b05d0b9%3A0x301576d14177600!2sSingkawang!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Connective Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ContactPage;
