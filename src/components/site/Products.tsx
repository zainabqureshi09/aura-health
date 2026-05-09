import { motion } from "framer-motion";
import { useState } from "react";
import { ShoppingBag, Heart, Baby, Sparkles, Stethoscope, Pill } from "lucide-react";

const categories = [
  { id: "all", label: "All", icon: Sparkles },
  { id: "medicine", label: "Medicines", icon: Pill },
  { id: "vitamin", label: "Vitamins", icon: Heart },
  { id: "baby", label: "Baby Care", icon: Baby },
  { id: "personal", label: "Personal Care", icon: Sparkles },
  { id: "equipment", label: "Equipment", icon: Stethoscope },
];

const products = [
  { name: "Panadol Extra", cat: "medicine", price: "Rs. 120", tag: "Pain Relief" },
  { name: "Centrum Multivitamin", cat: "vitamin", price: "Rs. 1,850", tag: "Daily Wellness" },
  { name: "Pampers Premium", cat: "baby", price: "Rs. 2,400", tag: "Baby Care" },
  { name: "Dettol Antiseptic", cat: "personal", price: "Rs. 380", tag: "Hygiene" },
  { name: "Omron BP Monitor", cat: "equipment", price: "Rs. 9,500", tag: "Devices" },
  { name: "Brufen 400mg", cat: "medicine", price: "Rs. 95", tag: "Pain Relief" },
  { name: "Redoxon Vitamin C", cat: "vitamin", price: "Rs. 720", tag: "Immunity" },
  { name: "Accu-Chek Glucometer", cat: "equipment", price: "Rs. 4,200", tag: "Devices" },
];

export function Products() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? products : products.filter((p) => p.cat === active);

  return (
    <section id="products" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">
              Curated catalogue
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Everything for your <span className="text-gradient">wellbeing</span>.
            </h2>
          </div>
          <a
            href="https://wa.me/923000000000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-strong text-sm hover:bg-white/10 transition"
          >
            View full catalogue →
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
                active === c.id
                  ? "bg-gradient-primary text-primary-foreground glow-primary"
                  : "glass hover:bg-white/10"
              }`}
            >
              <c.icon className="w-4 h-4" />
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((p, i) => (
            <motion.div
              key={p.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl glass overflow-hidden"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/30 via-accent/20 to-transparent grid place-items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity" />
                <Pill className="w-20 h-20 text-primary group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <p className="text-xs text-primary">{p.tag}</p>
                <h3 className="mt-1 font-semibold">{p.name}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-bold">{p.price}</span>
                  <a
                    href="https://wa.me/923000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 grid place-items-center rounded-full bg-gradient-primary glow-primary hover:scale-110 transition"
                    aria-label="Order"
                  >
                    <ShoppingBag className="w-4 h-4 text-primary-foreground" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
