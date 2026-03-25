import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import heroImg from "@/assets/hero-restaurant.jpg";
import interior from "@/assets/about-interior.jpg";
import familyImg from "@/assets/gallery-family.jpg";
import chefImg from "@/assets/gallery-chef.jpg";
import exteriorImg from "@/assets/gallery-exterior.jpg";
import kwetiau from "@/assets/food-kwetiau.jpg";
import choipan from "@/assets/food-choipan.jpg";
import bakso from "@/assets/food-bakso.jpg";
import fuyunghai from "@/assets/food-fuyunghai.jpg";
import kodok from "@/assets/food-kodok.jpg";
import tausi from "@/assets/food-tausi.jpg";
import nasicampur from "@/assets/food-nasicampur.jpg";

const galleryImages = [
  { src: heroImg, alt: "Restaurant interior with red lanterns", span: "col-span-2 row-span-2" },
  { src: kwetiau, alt: "Kwetiau Goreng Singkawang", span: "" },
  { src: chefImg, alt: "Chef cooking with wok", span: "" },
  { src: choipan, alt: "Choipan dumplings", span: "" },
  { src: interior, alt: "Buffet display counter", span: "col-span-2" },
  { src: bakso, alt: "Bakso Ikan soup", span: "" },
  { src: exteriorImg, alt: "Restaurant exterior at night", span: "col-span-2 row-span-2" },
  { src: fuyunghai, alt: "Fu Yung Hai", span: "" },
  { src: familyImg, alt: "Family dining together", span: "col-span-2" },
  { src: kodok, alt: "Kodok Goreng Mentega", span: "" },
  { src: tausi, alt: "Ikan Tahu Tausi", span: "" },
  { src: nasicampur, alt: "Nasi Campur Hakka", span: "" },
];

const GalleryPage = () => (
  <Layout>
    <section className="py-24">
      <div className="container mx-auto px-6">
        <SectionTitle
          subtitle="Visual Journey"
          title="Gallery"
          description="Step inside Connective — from the glow of red lanterns to the sizzle of the wok."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={`overflow-hidden rounded-sm ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 cursor-pointer min-h-[200px]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default GalleryPage;
