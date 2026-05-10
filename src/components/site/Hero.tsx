import { motion } from "framer-motion";
import { ArrowRight, Upload, ShieldCheck, Truck, Clock, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-medical.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-0 pb-20 overflow-hidden bg-brand-light flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[140px] animate-pulse-soft" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[140px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
        
        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-brand-green/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 mt-24 lg:mt-32 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-brand-blue/10 text-xs font-bold text-brand-blue mb-10 shadow-sm">
            <Sparkles className="w-4 h-4 text-brand-green" />
            <span className="tracking-[0.1em] uppercase">Pakistan's Premium Digital Pharmacy</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-10 text-brand-blue">
            Your Trusted
            <br />
            <span className="text-gradient">Healthcare</span>
            <br />
            Partner.
          </h1>

          <p className="text-lg md:text-xl text-brand-muted leading-relaxed max-w-xl mb-12 mx-auto lg:mx-0">
            Experience the gold standard of pharmacy. Premium medicines, surgical essentials, and expert consultation delivered with integrity to your doorstep.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-5">
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-primary text-white font-bold shadow-elegant hover:scale-[1.03] hover:glow-green transition-all duration-300 active:scale-95"
            >
              Order on WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#upload"
              className="flex items-center gap-3 px-10 py-5 rounded-2xl glass-strong border border-brand-blue/10 text-brand-blue font-bold hover:bg-brand-blue/5 transition-all duration-300 shadow-card hover:scale-[1.02]"
            >
              <Upload className="w-5 h-5" />
              Upload Rx
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 md:gap-10 border-t border-brand-blue/5 pt-10">
            {[
              { icon: ShieldCheck, label: "100% Genuine", color: "text-brand-green" },
              { icon: Truck, label: "Fast Delivery", color: "text-brand-blue" },
              { icon: Clock, label: "24/7 Service", color: "text-brand-green" },
            ].map((f, i) => (
              <motion.div 
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex flex-col items-center lg:items-start gap-3"
              >
                <div className={`w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center border border-brand-blue/5 ${f.color}`}>
                  <f.icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text/50 text-center lg:text-left">{f.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative order-first lg:order-last"
        >
          <div className="absolute inset-0 bg-brand-green/10 blur-[120px] rounded-full animate-pulse-soft" />
          
          <motion.div 
            whileHover={{ y: -10 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-square rounded-full overflow-hidden glass p-4 shadow-elegant animate-float mx-auto max-w-[500px] lg:max-w-full"
          >
            <div className="relative h-full w-full rounded-full overflow-hidden group border-4 border-white/50">
              <img
                src={heroImg}
                alt="Medical Care"
                className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/30 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 30 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -right-4 top-16 glass-strong p-6 rounded-[2rem] shadow-elegant hidden md:block border border-white/50 backdrop-blur-xl z-10"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-brand-blue tracking-tighter">15k+</span>
              <span className="text-[10px] font-bold text-brand-green uppercase tracking-[0.2em] mt-1">Happy Patients</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: -30 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="absolute -left-4 bottom-16 glass-strong p-6 rounded-[2rem] shadow-elegant hidden md:block border border-white/50 backdrop-blur-xl z-10"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center">
                <Truck className="w-6 h-6 text-brand-green" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-brand-blue leading-none">Fastest Delivery</span>
                <span className="text-[10px] text-brand-muted mt-2 font-bold uppercase tracking-wider">Under 45 mins</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

