import { motion } from "framer-motion";
import { Star } from "lucide-react";

const items = [
  { name: "Ayesha K.", city: "Karachi", text: "Got my mother's prescription delivered within 25 minutes. Felt premium and reliable." },
  { name: "Bilal R.", city: "Lahore", text: "The AI assistant suggested the right vitamin combo. Honestly impressed." },
  { name: "Sana M.", city: "Islamabad", text: "Beautiful app, genuine medicines, and the WhatsApp ordering is so easy." },
  { name: "Hamza T.", city: "Rawalpindi", text: "Late-night emergency — they delivered within 30 minutes. Lifesaver." },
  { name: "Maria F.", city: "Faisalabad", text: "Finally a pharmacy that feels modern. The upload feature is brilliant." },
];

export function Testimonials() {
  const loop = [...items, ...items];
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 mb-12">
        <p className="text-sm font-medium text-primary uppercase tracking-widest">
          Loved by patients
        </p>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold max-w-2xl">
          Trusted across <span className="text-gradient">Pakistan</span>.
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-5 w-max"
        >
          {loop.map((t, i) => (
            <div key={i} className="w-[380px] glass-strong rounded-3xl p-8 shrink-0 border border-brand-blue/5 shadow-card hover:shadow-elegant transition-all duration-500">
              <div className="flex gap-1 text-brand-green">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current drop-shadow-sm" />
                ))}
              </div>
              <p className="mt-6 text-base leading-relaxed text-brand-blue font-medium italic">"{t.text}"</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary grid place-items-center font-bold text-white shadow-md">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-blue">{t.name}</p>
                  <p className="text-xs font-bold text-brand-green uppercase tracking-widest mt-0.5">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
