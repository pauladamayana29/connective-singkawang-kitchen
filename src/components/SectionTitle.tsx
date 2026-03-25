import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionTitle = ({ subtitle, title, description, light }: SectionTitleProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7 }}
    className="text-center mb-16"
  >
    {subtitle && (
      <p className="text-sm font-body tracking-[0.3em] uppercase text-gold mb-3">{subtitle}</p>
    )}
    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 ${light ? "text-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />
    {description && (
      <p className="max-w-2xl mx-auto text-muted-foreground font-accent text-lg leading-relaxed">
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionTitle;
