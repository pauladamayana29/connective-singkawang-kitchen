import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Phone, Mail, User } from "lucide-react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { toast } from "sonner";
import heroImg from "@/assets/hero-restaurant.jpg";

const ReservationsPage = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", date: "", time: "", guests: "2", notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reservation request sent! We'll confirm via email shortly.");
    setForm({ name: "", email: "", phone: "", date: "", time: "", guests: "2", notes: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Reserve a table" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-foreground mb-4"
          >
            Reserve a <span className="text-gold glow-gold">Table</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground font-accent text-xl"
          >
            Your Singkawang dining experience awaits
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-2xl">
          <SectionTitle subtitle="Book Now" title="Make a Reservation" />

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-card p-8 md:p-12 rounded-sm border border-border"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-body tracking-wider uppercase text-muted-foreground mb-2">
                  <User size={14} className="text-gold" /> Full Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-body tracking-wider uppercase text-muted-foreground mb-2">
                  <Mail size={14} className="text-gold" /> Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-body tracking-wider uppercase text-muted-foreground mb-2">
                <Phone size={14} className="text-gold" /> Phone
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors"
                placeholder="+62 xxx xxxx xxxx"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-body tracking-wider uppercase text-muted-foreground mb-2">
                  <Calendar size={14} className="text-gold" /> Date
                </label>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-body tracking-wider uppercase text-muted-foreground mb-2">
                  <Clock size={14} className="text-gold" /> Time
                </label>
                <input
                  type="time"
                  required
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-body tracking-wider uppercase text-muted-foreground mb-2">
                  <Users size={14} className="text-gold" /> Guests
                </label>
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-body tracking-wider uppercase text-muted-foreground mb-2 block">Special Requests</label>
              <textarea
                rows={3}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="Any dietary requirements or special occasions?"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground font-body tracking-widest uppercase text-sm rounded-sm hover:bg-primary/90 transition-all glow-lantern"
            >
              Confirm Reservation
            </button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default ReservationsPage;
