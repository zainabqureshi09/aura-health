import { motion } from "framer-motion";
import { Pill, FileUp, Truck, Headphones, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: Pill,
    title: "Online Pharmacy",
    desc: "Browse thousands of authentic medicines and order in seconds.",
  },
  {
    icon: FileUp,
    title: "Prescription Upload",
    desc: "Securely upload your Rx and let our expert pharmacists handle the rest.",
  },
  {
    icon: Truck,
    title: "Swift Delivery",
    desc: "Same-day temperature-controlled delivery across all major cities.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    desc: "Direct access to licensed pharmacists for all your healthcare queries.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Quality",
    desc: "100% authentic medical supplies sourced directly from manufacturers.",
  },
  {
    icon: Zap,
    title: "Express Service",
    desc: "Urgent medical needs dispatched within minutes of confirmation.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-32 bg-white/30">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-brand-green uppercase tracking-[0.2em] mb-4"
          >
            Smart Healthcare
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-brand-blue mb-6"
          >
            Pharmacy services <span className="text-gradient">reimagined</span> for you.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-muted text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            We combine pharmaceutical expertise with modern technology to deliver a healthcare
            experience that's fast, reliable, and patient-centered.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl p-10 bg-white border border-brand-blue/5 shadow-card hover:shadow-elegant transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-brand-green/5 blur-3xl group-hover:bg-brand-green/10 transition-colors" />

              <div className="relative">
                <div className="w-16 h-16 grid place-items-center rounded-2xl bg-brand-blue/5 group-hover:bg-gradient-primary group-hover:glow-green transition-all duration-500">
                  <f.icon className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-brand-blue group-hover:text-brand-green transition-colors duration-300">
                  {f.title}
                </h3>

                <p className="mt-4 text-brand-muted leading-relaxed text-base">{f.desc}</p>

                <div className="mt-8 flex items-center gap-3 text-sm font-bold text-brand-blue opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Learn more</span>
                  <div className="w-6 h-[2px] bg-brand-green rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
