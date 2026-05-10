import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#features", label: "Features" },
  { href: "#products", label: "Products" },
  { href: "#assistant", label: "AI Assistant" },
  { href: "#upload", label: "Prescription" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Simple active section tracking
      const sections = links.map(l => l.href.substring(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= window.scrollY + 100) {
          setActive(`#${section}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "h-20" : "h-24"
      }`}
    >
      <div className="h-full mx-auto max-w-7xl px-4 flex items-center">
        <div
          className={`flex-1 flex items-center justify-between rounded-2xl px-6 py-2.5 transition-all duration-500 ${
            scrolled ? "glass shadow-elegant border-brand-blue/10" : "bg-transparent"
          }`}
        >
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-green/20 blur-lg rounded-full scale-0 group-hover:scale-110 transition-transform duration-500" />
              <img 
                src={logo} 
                alt="Hassan Medical Store" 
                className="h-10 md:h-11 w-auto object-contain relative drop-shadow-md group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl leading-none text-brand-blue tracking-tight">
                Hassan
              </span>
              <span className="text-[10px] font-bold tracking-[0.22em] text-brand-green uppercase mt-0.5">
                Medical Store
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-semibold transition-all duration-300 nav-link-hover py-1 ${
                  active === l.href ? "text-brand-blue nav-link-active" : "text-brand-text/60 hover:text-brand-blue"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-primary shadow-elegant hover:scale-105 hover:glow-green transition-all duration-300 active:scale-95"
            >
              Order Now
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-2.5 rounded-xl glass hover:bg-brand-blue/5 transition-colors"
              aria-label="Toggle Menu"
            >
              {open ? <X className="w-6 h-6 text-brand-blue" /> : <Menu className="w-6 h-6 text-brand-blue" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            className="md:hidden absolute top-full inset-x-4 mt-2 overflow-hidden"
          >
            <div className="glass shadow-elegant rounded-2xl p-6 flex flex-col gap-4 border border-brand-blue/5">
              {links.map((l, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-semibold text-brand-text/80 hover:text-brand-blue px-4 py-3 rounded-xl hover:bg-brand-blue/5 transition-all"
                >
                  {l.label}
                </motion.a>
              ))}
              <hr className="border-brand-blue/5 my-2" />
              <a
                href="https://wa.me/923000000000"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-primary text-white font-bold"
              >
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

