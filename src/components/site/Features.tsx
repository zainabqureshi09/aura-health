import { motion } from "framer-motion";
import {
  Pill,
  FileUp,
  Truck,
  Headphones,
  ShieldCheck,
  Zap,
} from "lucide-react";

const features = [
  { icon: Pill, title: "Online Medicine Ordering", desc: "Browse thousands of medicines and order in seconds." },
  { icon: FileUp, title: "Prescription Upload", desc: "Drag, drop and our pharmacist takes care of the rest." },
  { icon: Truck, title: "Home Delivery", desc: "Same-day delivery across major cities in Pakistan." },
  { icon: Headphones, title: "24/7 Support", desc: "Talk to a real pharmacist any time of the day." },
  { icon: ShieldCheck, title: "Genuine Medicines", desc: "Sourced directly from licensed distributors." },
  { icon: Zap, title: "Lightning Fast", desc: "Express orders dispatched within 15 minutes." },
];

export function Features() {
  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary uppercase tracking-widest">
            Smart features
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Healthcare, <span className="text-gradient">reimagined</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Every feature engineered for trust, speed and a beautifully simple
            experience.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl p-6 glass hover:glass-strong transition-all overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/30 transition-colors" />
              <div className="relative">
                <div className="w-12 h-12 grid place-items-center rounded-xl bg-gradient-primary glow-primary">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
