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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-strong text-sm hover:bg-foreground/10 transition"
          >
            View full catalogue →
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                active === c.id
                  ? "bg-gradient-primary text-white shadow-lg glow-green"
                  : "glass hover:bg-brand-blue/5 text-brand-blue/60 hover:text-brand-blue border border-brand-blue/5"
              }`}
            >
              <c.icon
                className={`w-4 h-4 ${active === c.id ? "text-white" : "text-brand-green"}`}
              />
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((p, i) => (
            <motion.div
              key={p.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl glass-strong border border-brand-blue/5 overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500"
            >
              <div className="aspect-square bg-gradient-to-br from-brand-blue/5 via-brand-green/5 to-transparent grid place-items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <Pill className="w-24 h-24 text-brand-blue/20 group-hover:text-brand-blue/40 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-brand-blue/5 text-[10px] font-bold text-brand-blue uppercase tracking-widest shadow-sm">
                    {p.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-brand-blue group-hover:text-brand-green transition-colors">
                  {p.name}
                </h3>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-brand-muted font-medium uppercase tracking-wider">
                      Price
                    </span>
                    <span className="text-xl font-bold text-brand-blue">{p.price}</span>
                  </div>
                  <a
                    href="https://wa.me/923000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 grid place-items-center rounded-2xl bg-gradient-primary text-white shadow-lg hover:scale-110 hover:glow-green transition-all duration-300"
                    aria-label="Order"
                  >
                    <ShoppingBag className="w-5 h-5" />
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
