import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-display font-bold text-gold glow-gold mb-4">Connective</h3>
            <p className="font-accent text-lg text-muted-foreground italic mb-6">
              Authentic Singkawang Chinese Peranakan Cuisine
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-body tracking-widest uppercase text-gold mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Home", path: "/" },
                { label: "Our Menu", path: "/menu" },
                { label: "About Us", path: "/about" },
                { label: "Gallery", path: "/gallery" },
                { label: "Reservations", path: "/reservations" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <Link key={item.path} to={item.path} className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-body tracking-widest uppercase text-gold mb-6">Opening Hours</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Clock size={14} className="mt-1 text-gold" />
                <div>
                  <p>Monday – Friday</p>
                  <p className="text-foreground">10:00 AM – 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="mt-1 text-gold" />
                <div>
                  <p>Saturday – Sunday</p>
                  <p className="text-foreground">09:00 AM – 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-body tracking-widest uppercase text-gold mb-6">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-gold transition-colors">
                <MapPin size={14} className="mt-1 text-gold" />
                <span>Jl. Diponegoro No. 88, Singkawang, West Kalimantan</span>
              </a>
              <a href="tel:+621234567890" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone size={14} className="text-gold" />
                <span>+62 123 456 7890</span>
              </a>
              <a href="mailto:hello@connective.id" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Mail size={14} className="text-gold" />
                <span>hello@connective.id</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Connective — Authentic Singkawang Chinese Peranakan Dining. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
