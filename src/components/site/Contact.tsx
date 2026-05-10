import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10">
        <div>
          <p className="text-sm font-medium text-primary uppercase tracking-widest">Get in touch</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            One tap to <span className="text-gradient">care</span>.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            Reach out via WhatsApp, call us directly, or drop your details and we'll get back within
            minutes.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: MapPin, label: "Main Boulevard, Lahore, Pakistan" },
              { icon: Phone, label: "+92 300 0000000" },
              { icon: Clock, label: "Open 24 / 7 — every day" },
            ].map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-5 glass-strong rounded-2xl p-5 border border-brand-blue/5 shadow-sm hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-12 h-12 grid place-items-center rounded-xl bg-brand-blue/5 group-hover:bg-gradient-primary transition-all duration-500">
                  <c.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <span className="text-base font-medium text-brand-blue">{c.label}</span>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/923000000000"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-4 px-8 py-4 rounded-2xl text-white font-bold shadow-lg hover:scale-[1.03] transition-all duration-500 animate-pulse-glow"
            style={{ background: "var(--whatsapp)" }}
          >
            <MessageCircle className="w-6 h-6" />
            Chat on WhatsApp
          </a>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="glass-strong rounded-[2.5rem] p-10 shadow-elegant border border-brand-blue/5 space-y-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-8 bg-brand-green rounded-full" />
            <h3 className="text-2xl font-bold text-brand-blue tracking-tight">
              Request a delivery
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-brand-text/40 uppercase tracking-widest ml-1">
                Full Name
              </label>
              <input
                className="w-full bg-brand-blue/5 border border-brand-blue/5 rounded-2xl px-5 py-4 outline-none focus:border-brand-green/40 focus:bg-white transition-all shadow-inner"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-brand-text/40 uppercase tracking-widest ml-1">
                Phone Number
              </label>
              <input
                className="w-full bg-brand-blue/5 border border-brand-blue/5 rounded-2xl px-5 py-4 outline-none focus:border-brand-green/40 focus:bg-white transition-all shadow-inner"
                placeholder="+92 300 0000000"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-brand-text/40 uppercase tracking-widest ml-1">
              Delivery Address
            </label>
            <input
              className="w-full bg-brand-blue/5 border border-brand-blue/5 rounded-2xl px-5 py-4 outline-none focus:border-brand-green/40 focus:bg-white transition-all shadow-inner"
              placeholder="Your full address"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-brand-text/40 uppercase tracking-widest ml-1">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full bg-brand-blue/5 border border-brand-blue/5 rounded-2xl px-5 py-4 outline-none focus:border-brand-green/40 focus:bg-white transition-all shadow-inner resize-none"
              placeholder="Which medicines do you need?"
            />
          </div>
          <button className="w-full py-5 rounded-2xl bg-gradient-primary text-white font-bold shadow-lg hover:scale-[1.01] hover:glow-green transition-all duration-300">
            Send Request
          </button>
        </motion.form>
      </div>
    </section>
  );
}
