import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10">
        <div>
          <p className="text-sm font-medium text-primary uppercase tracking-widest">
            Get in touch
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            One tap to <span className="text-gradient">care</span>.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            Reach out via WhatsApp, call us directly, or drop your details
            and we'll get back within minutes.
          </p>

          <div className="mt-8 space-y-4">
            {[
              { icon: MapPin, label: "Main Boulevard, Lahore, Pakistan" },
              { icon: Phone, label: "+92 300 0000000" },
              { icon: Clock, label: "Open 24 / 7 — every day" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-3 glass rounded-xl p-4">
                <div className="w-10 h-10 grid place-items-center rounded-lg bg-primary/20">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm">{c.label}</span>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/923000000000"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-white font-medium animate-pulse-glow"
            style={{ background: "var(--whatsapp)" }}
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="glass-strong rounded-3xl p-8 shadow-elegant space-y-4"
        >
          <h3 className="text-2xl font-bold">Request a delivery</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition" placeholder="Full name" />
            <input className="bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition" placeholder="Phone number" />
          </div>
          <input className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition" placeholder="Delivery address" />
          <textarea rows={4} className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition resize-none" placeholder="Which medicines do you need?" />
          <button className="w-full py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium glow-primary hover:scale-[1.01] transition">
            Send request
          </button>
        </motion.form>
      </div>
    </section>
  );
}
