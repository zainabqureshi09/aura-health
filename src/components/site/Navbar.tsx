import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Pill, Menu, X } from "lucide-react";

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
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled ? "glass-strong shadow-elegant" : ""
          }`}
        >
          <a href="#" className="flex items-center gap-2 group">
            <span className="relative grid place-items-center w-9 h-9 rounded-xl bg-gradient-primary glow-primary">
              <Pill className="w-5 h-5 text-primary-foreground" />
            </span>
            <span className="font-display font-bold text-lg tracking-tight">
              Medi<span className="text-gradient">Sphere</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-primary-foreground bg-gradient-primary glow-primary hover:scale-105 transition-transform"
            >
              Order Now
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg glass"
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
