import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import interior from "@/assets/about-interior.jpg";
import heroImg from "@/assets/hero-restaurant.jpg";
import chefImg from "@/assets/gallery-chef.jpg";

const values = [
  { title: "Heritage", desc: "Recipes passed down through four generations of Hakka families from Singkawang." },
  { title: "Authenticity", desc: "We source traditional ingredients and cook with time-honored techniques — no shortcuts." },
  { title: "Family", desc: "Large round tables, generous portions, and a warm welcome for every guest." },
  { title: "Community", desc: "A gathering place that connects people through the universal language of food." },
];

const AboutPage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="About Connective" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-bold text-foreground mb-4"
        >
          Our <span className="text-gold glow-gold">Story</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-muted-foreground font-accent text-xl"
        >
          Four generations of Hakka culinary passion
        </motion.p>
      </div>
    </section>

    {/* Story */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <img src={interior} alt="Restaurant buffet display" loading="lazy" width={1920} height={1080} className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-body tracking-[0.3em] uppercase text-gold mb-4">Est. 1978</p>
            <h2 className="text-4xl font-display font-bold text-foreground mb-6">
              From Singkawang to Your Table
            </h2>
            <div className="space-y-4 text-muted-foreground font-accent text-lg leading-relaxed">
              <p>
                Connective was born from a simple dream: to share the authentic flavors of Singkawang's Chinese Peranakan cuisine with the world. Founded by the Lim family in 1978, our restaurant started as a humble street-side eatery — a place where neighbors gathered around large round tables to share stories and steaming bowls of kwetiau.
              </p>
              <p>
                Today, four generations later, we remain true to the recipes and traditions that made Singkawang's culinary scene legendary. Our "Chinese warteg" style display invites you to choose from an array of freshly prepared dishes, just as our grandfather envisioned.
              </p>
              <p>
                The red lanterns overhead, the vintage photographs on our wooden walls, and the open-air warmth of our dining space — everything at Connective is designed to transport you to the charming streets of Singkawang.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="What We Stand For" title="Our Values" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center p-8 border border-border rounded-sm hover:border-gold/30 transition-all"
            >
              <h3 className="text-xl font-display font-bold text-gold mb-3">{v.title}</h3>
              <p className="text-muted-foreground font-accent text-base">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Chef */}
    <section className="relative py-32 overflow-hidden">
      <img src={chefImg} alt="Our chef" loading="lazy" width={1280} height={960} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-body tracking-[0.3em] uppercase text-gold mb-4">Master Chef</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            The Art of Wok Hei
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-accent text-xl leading-relaxed">
            Our head chef, a fourth-generation Hakka cook, commands the wok with precision and passion. The signature "breath of the wok" — wok hei — infuses every dish with an unmistakable smoky aroma that you won't find anywhere else.
          </p>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
