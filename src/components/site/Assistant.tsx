import { motion } from "framer-motion";
import { Sparkles, Send, Bot, User } from "lucide-react";
import { useEffect, useState } from "react";

const messages = [
  { who: "user", text: "I have a sore throat and mild fever." },
  { who: "ai", text: "Try Panadol Extra and warm fluids. Want me to add it to your cart?" },
  { who: "user", text: "Yes, and any vitamin C?" },
  { who: "ai", text: "Adding Redoxon 1g — fast delivery in 35 minutes." },
];

export function Assistant() {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setShown((s) => (s >= messages.length ? 1 : s + 1)), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="assistant" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[160px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-medium text-primary uppercase tracking-widest flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> AI Healthcare Assistant
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            A pharmacist <span className="text-gradient">in your pocket</span>.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-lg">
            Describe a symptom, search for a medicine, or get dosage guidance. Our AI assistant is
            trained on verified medical data and supervised by licensed pharmacists.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Smart symptom checker",
              "Instant medicine search",
              "Dosage & interaction alerts",
              "Refill reminders",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary glow-primary" />
                <span className="text-sm">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative glass-strong rounded-[2.5rem] p-8 shadow-elegant border border-brand-blue/5"
        >
          <div className="flex items-center justify-between pb-6 border-b border-brand-blue/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 grid place-items-center rounded-2xl bg-gradient-primary shadow-sm">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-base font-bold text-brand-blue">Hassan Medical AI</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                  <p className="text-xs font-semibold text-brand-green uppercase tracking-wider">
                    online
                  </p>
                </div>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-brand-green" />
            </div>
          </div>

          <div className="mt-8 space-y-5 min-h-[300px]">
            {messages.slice(0, shown).map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-4 ${m.who === "user" ? "justify-end" : ""}`}
              >
                {m.who === "ai" && (
                  <div className="w-9 h-9 shrink-0 grid place-items-center rounded-xl bg-brand-blue/5 border border-brand-blue/5">
                    <Bot className="w-4 h-4 text-brand-blue" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-5 py-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    m.who === "user"
                      ? "bg-gradient-primary text-white rounded-tr-sm glow-green"
                      : "glass-strong text-brand-blue border border-brand-blue/5 rounded-tl-sm"
                  }`}
                >
                  {m.text}
                </div>
                {m.who === "user" && (
                  <div className="w-9 h-9 shrink-0 grid place-items-center rounded-xl bg-brand-blue/5 border border-brand-blue/5">
                    <User className="w-4 h-4 text-brand-blue" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 glass-strong rounded-2xl px-5 py-3.5 border border-brand-blue/5 shadow-inner">
            <input
              className="flex-1 bg-transparent outline-none text-sm font-medium placeholder:text-brand-muted text-brand-blue"
              placeholder="Ask about a medicine or symptom…"
            />
            <button className="w-10 h-10 grid place-items-center rounded-xl bg-gradient-primary text-white shadow-lg hover:scale-110 hover:glow-green transition-all duration-300">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
