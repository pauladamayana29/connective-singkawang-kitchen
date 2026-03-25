import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import kwetiau from "@/assets/food-kwetiau.jpg";
import choipan from "@/assets/food-choipan.jpg";
import bakso from "@/assets/food-bakso.jpg";
import fuyunghai from "@/assets/food-fuyunghai.jpg";
import kodok from "@/assets/food-kodok.jpg";
import tausi from "@/assets/food-tausi.jpg";
import nasicampur from "@/assets/food-nasicampur.jpg";

const categories = ["All", "Noodles", "Dumplings", "Soups", "Wok Specialties", "Rice"];

const menuItems = [
  { name: "Kwetiau Goreng Singkawang", desc: "Wok-fried flat rice noodles with fresh prawns, egg, and vegetables", price: "$14", img: kwetiau, category: "Noodles" },
  { name: "Choipan", desc: "Traditional Hakka steamed dumplings filled with jicama and dried shrimp", price: "$10", img: choipan, category: "Dumplings" },
  { name: "Bakso Ikan", desc: "Handmade fish balls in clear savory broth with bok choy", price: "$12", img: bakso, category: "Soups" },
  { name: "Fu Yung Hai", desc: "Fluffy egg omelette topped with sweet and sour sauce", price: "$13", img: fuyunghai, category: "Wok Specialties" },
  { name: "Kodok Goreng Mentega", desc: "Crispy butter-fried frog legs with garlic and scallions", price: "$18", img: kodok, category: "Wok Specialties" },
  { name: "Ikan Tahu Tausi", desc: "Steamed fish and golden tofu in savory black bean sauce", price: "$16", img: tausi, category: "Wok Specialties" },
  { name: "Nasi Campur Hakka", desc: "Steamed rice with braised pork belly, tofu, vegetables, and fried egg", price: "$15", img: nasicampur, category: "Rice" },
  { name: "Mie Goreng Hakka", desc: "Stir-fried egg noodles with pork, cabbage, and soy sauce", price: "$13", img: kwetiau, category: "Noodles" },
  { name: "Sup Tahu Seafood", desc: "Silky tofu and mixed seafood in rich aromatic broth", price: "$14", img: bakso, category: "Soups" },
];

const MenuPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? menuItems : menuItems.filter((item) => item.category === active);

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Culinary Heritage"
            title="Our Menu"
            description="From the wok to your table — every dish is a tribute to Singkawang's rich Chinese Peranakan culinary tradition."
          />

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2 text-sm font-body tracking-widest uppercase rounded-sm transition-all ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-gold hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group bg-card rounded-sm overflow-hidden border border-border hover:border-gold/30 transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-body tracking-widest uppercase text-gold">{item.category}</span>
                  <div className="flex items-center justify-between mt-2 mb-2">
                    <h3 className="text-lg font-display font-semibold text-foreground">{item.name}</h3>
                    <span className="text-gold font-display font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-accent">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MenuPage;
