import { motion } from "framer-motion";
import { ArrowRight, Upload, ShieldCheck, Truck, Clock } from "lucide-react";
import heroImg from "@/assets/hero-medical.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/30 blur-[140px]" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-accent/30 blur-[140px]" />

      {/* floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/60"
          style={{
            left: `${(i * 83) % 100}%`,
            top: `${(i * 47) % 100}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            Pakistan's premium digital pharmacy
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]"
          >
            Your trusted
            <br />
            <span className="text-gradient">digital pharmacy</span>
            <br />
            experience.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl"
          >
            Order medicines, upload prescriptions, and get healthcare essentials
            delivered to your doorstep — fast, genuine, and 24/7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium glow-primary hover:scale-[1.03] transition-transform"
            >
              Order on WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#upload"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-strong font-medium hover:bg-foreground/10 transition-colors"
            >
              <Upload className="w-4 h-4" />
              Upload Prescription
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 grid grid-cols-3 gap-4 max-w-lg"
          >
            {[
              { icon: ShieldCheck, label: "100% Genuine" },
              { icon: Truck, label: "Same-day Delivery" },
              { icon: Clock, label: "24/7 Support" },
            ].map((f) => (
              <div key={f.label} className="flex flex-col items-start gap-2">
                <f.icon className="w-5 h-5 text-primary" />
                <span className="text-xs text-muted-foreground">{f.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30 rounded-full" />
          <div className="relative rounded-3xl overflow-hidden glass-strong p-2 shadow-elegant animate-float">
            <img
              src={heroImg}
              alt="Futuristic medical capsules around glowing DNA helix"
              width={1536}
              height={1024}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute -left-6 bottom-10 glass-strong rounded-2xl p-4 shadow-elegant hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 grid place-items-center rounded-xl bg-primary/20">
                <Truck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">Order delivered</p>
                <p className="text-xs text-muted-foreground">in 32 minutes</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -right-4 top-10 glass-strong rounded-2xl p-4 shadow-elegant hidden md:block"
          >
            <p className="text-xs text-muted-foreground">Today</p>
            <p className="text-2xl font-bold text-gradient">12,480+</p>
            <p className="text-xs">orders delivered</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
