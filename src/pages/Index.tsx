import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Utensils, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import MarqueeBar from "@/components/MarqueeBar";
import SectionTitle from "@/components/SectionTitle";
import heroImg from "@/assets/hero-restaurant.jpg";
import kwetiau from "@/assets/food-kwetiau.jpg";
import choipan from "@/assets/food-choipan.jpg";
import bakso from "@/assets/food-bakso.jpg";
import fuyunghai from "@/assets/food-fuyunghai.jpg";
import nasicampur from "@/assets/food-nasicampur.jpg";
import interior from "@/assets/about-interior.jpg";
import familyImg from "@/assets/gallery-family.jpg";

const signatureDishes = [
  { name: "Kwetiau Goreng Singkawang", desc: "Wok-fried flat rice noodles with prawns & smoky char", img: kwetiau, price: "$14" },
  { name: "Choipan", desc: "Hand-wrapped Hakka vegetable dumplings, steamed to perfection", img: choipan, price: "$10" },
  { name: "Bakso Ikan", desc: "Bouncy fish balls in aromatic clear broth", img: bakso, price: "$12" },
  { name: "Fu Yung Hai", desc: "Golden egg foo young with tangy sweet & sour sauce", img: fuyunghai, price: "$13" },
  { name: "Nasi Campur Hakka", desc: "Mixed rice with braised pork, tofu, vegetables & egg", img: nasicampur, price: "$15" },
];

const stats = [
  { icon: Star, value: "45+", label: "Years of Heritage" },
  { icon: Users, value: "500K+", label: "Happy Guests" },
  { icon: Utensils, value: "50+", label: "Signature Dishes" },
  { icon: MapPin, value: "3", label: "Locations" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Connective Restaurant Interior"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sm font-body tracking-[0.4em] uppercase text-gold mb-6"
          >
            Authentic Singkawang Chinese Peranakan
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-6 leading-tight"
          >
            A Taste of<br />
            <span className="text-gold glow-gold">Singkawang</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-lg mx-auto text-foreground/70 font-accent text-xl mb-10"
          >
            Where generations of Hakka culinary wisdom meet the soul of Borneo's most cherished flavors.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/reservations"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body tracking-widest uppercase text-sm rounded-sm hover:bg-primary/90 transition-all glow-lantern"
            >
              Reserve a Table <ArrowRight size={16} />
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold/40 text-gold font-body tracking-widest uppercase text-sm rounded-sm hover:bg-gold/10 transition-all"
            >
              Explore Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <MarqueeBar />

      {/* Stats */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <stat.icon className="mx-auto mb-3 text-gold" size={28} />
                <p className="text-3xl md:text-4xl font-display font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground tracking-wider uppercase mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Our Specialties"
            title="Signature Dishes"
            description="Each dish tells a story of Singkawang — crafted with recipes passed down through generations of Hakka families."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureDishes.map((dish, i) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-card rounded-sm overflow-hidden border border-border hover:border-gold/30 transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-display font-semibold text-foreground">{dish.name}</h3>
                    <span className="text-gold font-display font-bold text-lg">{dish.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-accent">{dish.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-gold font-body tracking-widest uppercase text-sm hover:gap-4 transition-all"
            >
              View Full Menu <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-32 overflow-hidden">
        <img
          src={interior}
          alt="Connective interior"
          loading="lazy"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-body tracking-[0.3em] uppercase text-gold mb-4">The Experience</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
                Dining Like in <span className="text-gold">Singkawang</span>
              </h2>
              <p className="text-muted-foreground font-accent text-xl leading-relaxed mb-6">
                Step into a world where red lanterns sway gently overhead, vintage photographs of old Singkawang line the wooden walls, and the aroma of wok-fried delicacies fills the air. Our "Chinese warteg" style display lets you choose from dozens of freshly prepared dishes — just like the beloved street-side eateries of Singkawang.
              </p>
              <p className="text-muted-foreground font-accent text-xl leading-relaxed mb-10">
                Large round tables invite families to gather, share, and connect over generous portions of Hakka comfort food. This is more than a meal — it's a homecoming.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 border border-gold/40 text-gold font-body tracking-widest uppercase text-sm rounded-sm hover:bg-gold/10 transition-all"
              >
                Our Story <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Second Marquee (reverse) */}
      <div className="bg-muted overflow-hidden py-3 border-y border-border">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[1, 2, 3].map((i) => (
            <span key={i} className="text-sm font-body tracking-[0.2em] uppercase text-muted-foreground mx-4">
              ✦ Hakka Heritage   •   🏮 Red Lantern Ambiance   •   ✦ Family Recipes   •   🏮 Street-Side Charm   •   ✦ Generous Portions   •   🏮 Authentic Flavors   •   ✦ Warm Hospitality
            </span>
          ))}
        </div>
      </div>

      {/* Family CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="aspect-[4/3] rounded-sm overflow-hidden">
                <img
                  src={familyImg}
                  alt="Family dining at Connective"
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-body tracking-[0.3em] uppercase text-gold mb-4">Family First</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Gather Around the Table
              </h2>
              <p className="text-muted-foreground font-accent text-lg leading-relaxed mb-8">
                At Connective, every meal is a celebration. Our large round tables are designed for sharing — not just food, but stories, laughter, and memories. Bring your family, bring your friends, and let us take care of the rest.
              </p>
              <Link
                to="/reservations"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body tracking-widest uppercase text-sm rounded-sm hover:bg-primary/90 transition-all glow-lantern"
              >
                Book Your Table <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
