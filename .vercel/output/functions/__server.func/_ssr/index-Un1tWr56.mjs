import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Lenis } from "../_libs/lenis.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { A as AnimatePresence, m as motion, u as useScroll, a as useInView } from "../_libs/framer-motion.mjs";
import { A as ArrowRight, X, M as Menu, S as Sparkles, U as Upload, a as ShieldCheck, T as Truck, C as Clock, P as Pill, F as FileUp, H as Headphones, Z as Zap, B as Bot, b as User, c as Send, d as Heart, e as Baby, f as Stethoscope, g as ShoppingBag, h as FileCheckCorner, i as Star, j as MapPin, k as Phone, l as MessageCircle } from "../_libs/lucide-react.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function SmoothScroll() {
  reactExports.useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    let raf = 0;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return null;
}
const logo = "/assets/logo-eM63o7uZ.png";
function LoadingScreen() {
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2e3);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: loading && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
      className: "fixed inset-0 z-[100] flex items-center justify-center bg-brand-light",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { scale: 0.8, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { duration: 0.5 },
            className: "relative",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-brand-green/20 blur-2xl rounded-full animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: logo,
                  alt: "Hassan Medical Store",
                  className: "h-20 w-auto object-contain relative drop-shadow-xl"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-2xl text-brand-blue tracking-tight", children: [
            "Hassan ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-green", children: "Medical" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 w-48 h-1 bg-brand-blue/5 rounded-full overflow-hidden relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { left: "-100%" },
              animate: { left: "100%" },
              transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              },
              className: "absolute top-0 bottom-0 w-1/2 bg-gradient-primary"
            }
          ) })
        ] })
      ] })
    }
  ) });
}
const links = [
  { href: "#features", label: "Features" },
  { href: "#products", label: "Products" },
  { href: "#assistant", label: "AI Assistant" },
  { href: "#upload", label: "Prescription" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const [active, setActive] = reactExports.useState("");
  reactExports.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => l.href.substring(1));
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      initial: { y: -100 },
      animate: { y: 0 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "h-20" : "h-24"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full mx-auto max-w-7xl px-4 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex-1 flex items-center justify-between rounded-2xl px-6 py-2.5 transition-all duration-500 ${scrolled ? "glass shadow-elegant border-brand-blue/10" : "bg-transparent"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "flex items-center gap-4 group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-brand-green/20 blur-lg rounded-full scale-0 group-hover:scale-110 transition-transform duration-500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: logo,
                      alt: "Hassan Medical Store",
                      className: "h-10 md:h-11 w-auto object-contain relative drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-xl leading-none text-brand-blue tracking-tight", children: "Hassan" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold tracking-[0.22em] text-brand-green uppercase mt-0.5", children: "Medical Store" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-10", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: l.href,
                  className: `text-sm font-semibold transition-all duration-300 nav-link-hover py-1 ${active === l.href ? "text-brand-blue nav-link-active" : "text-brand-text/60 hover:text-brand-blue"}`,
                  children: l.label
                },
                l.href
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://wa.me/923000000000",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "hidden sm:flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-primary shadow-elegant hover:scale-105 hover:glow-green transition-all duration-300 active:scale-95",
                    children: [
                      "Order Now",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setOpen((v) => !v),
                    className: "md:hidden p-2.5 rounded-xl glass hover:bg-brand-blue/5 transition-colors",
                    "aria-label": "Toggle Menu",
                    children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6 text-brand-blue" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-6 h-6 text-brand-blue" })
                  }
                )
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0, y: -20 },
            animate: { opacity: 1, height: "auto", y: 0 },
            exit: { opacity: 0, height: 0, y: -20 },
            className: "md:hidden absolute top-full inset-x-4 mt-2 overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass shadow-elegant rounded-2xl p-6 flex flex-col gap-4 border border-brand-blue/5", children: [
              links.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.a,
                {
                  initial: { opacity: 0, x: -10 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: i * 0.05 },
                  href: l.href,
                  onClick: () => setOpen(false),
                  className: "text-base font-semibold text-brand-text/80 hover:text-brand-blue px-4 py-3 rounded-xl hover:bg-brand-blue/5 transition-all",
                  children: l.label
                },
                l.href
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-brand-blue/5 my-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://wa.me/923000000000",
                  className: "flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-primary text-white font-bold",
                  children: "Order on WhatsApp"
                }
              )
            ] })
          }
        ) })
      ]
    }
  );
}
const heroImg = "/assets/hero-medical-C5cnOv79.jpg";
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen pt-0 pb-20 overflow-hidden bg-brand-light flex items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[140px] animate-pulse-soft" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[140px] animate-pulse-soft",
          style: { animationDelay: "2s" }
        }
      ),
      Array.from({ length: 20 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "absolute w-1.5 h-1.5 rounded-full bg-brand-green/30",
          style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          },
          animate: {
            y: [0, -60, 0],
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.3, 1]
          },
          transition: {
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }
        },
        i
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 mt-24 lg:mt-32 grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          className: "text-center lg:text-left",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-brand-blue/10 text-xs font-bold text-brand-blue mb-10 shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-brand-green" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tracking-[0.1em] uppercase", children: "Pakistan's Premium Digital Pharmacy" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-10 text-brand-blue", children: [
              "Your Trusted",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Healthcare" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Partner."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-brand-muted leading-relaxed max-w-xl mb-12 mx-auto lg:mx-0", children: "Experience the gold standard of pharmacy. Premium medicines, surgical essentials, and expert consultation delivered with integrity to your doorstep." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center lg:justify-start gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "https://wa.me/923000000000",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "group flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-primary text-white font-bold shadow-elegant hover:scale-[1.03] hover:glow-green transition-all duration-300 active:scale-95",
                  children: [
                    "Order on WhatsApp",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#upload",
                  className: "flex items-center gap-3 px-10 py-5 rounded-2xl glass-strong border border-brand-blue/10 text-brand-blue font-bold hover:bg-brand-blue/5 transition-all duration-300 shadow-card hover:scale-[1.02]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-5 h-5" }),
                    "Upload Rx"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-3 gap-6 md:gap-10 border-t border-brand-blue/5 pt-10", children: [
              { icon: ShieldCheck, label: "100% Genuine", color: "text-brand-green" },
              { icon: Truck, label: "Fast Delivery", color: "text-brand-blue" },
              { icon: Clock, label: "24/7 Service", color: "text-brand-green" }
            ].map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.6 + i * 0.1 },
                className: "flex flex-col items-center lg:items-start gap-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center border border-brand-blue/5 ${f.color}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "w-6 h-6" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-brand-text/50 text-center lg:text-left", children: f.label })
                ]
              },
              f.label
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
          className: "relative order-first lg:order-last",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-brand-green/10 blur-[120px] rounded-full animate-pulse-soft" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                whileHover: { y: -10 },
                transition: { duration: 0.8, ease: "easeOut" },
                className: "relative aspect-square rounded-full overflow-hidden glass p-4 shadow-elegant animate-float mx-auto max-w-[500px] lg:max-w-full",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full w-full rounded-full overflow-hidden group border-4 border-white/50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: heroImg,
                      alt: "Medical Care",
                      className: "w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brand-blue/30 to-transparent pointer-events-none" })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: 30 },
                animate: { opacity: 1, x: 30 },
                whileInView: { x: 0 },
                transition: { delay: 1, duration: 1 },
                className: "absolute -right-4 top-16 glass-strong p-6 rounded-[2rem] shadow-elegant hidden md:block border border-white/50 backdrop-blur-xl z-10",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-brand-blue tracking-tighter", children: "15k+" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-brand-green uppercase tracking-[0.2em] mt-1", children: "Happy Patients" })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: -30 },
                animate: { opacity: 1, x: -30 },
                whileInView: { x: 0 },
                transition: { delay: 1.3, duration: 1 },
                className: "absolute -left-4 bottom-16 glass-strong p-6 rounded-[2rem] shadow-elegant hidden md:block border border-white/50 backdrop-blur-xl z-10",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-6 h-6 text-brand-green" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-brand-blue leading-none", children: "Fastest Delivery" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-brand-muted mt-2 font-bold uppercase tracking-wider", children: "Under 45 mins" })
                  ] })
                ] })
              }
            )
          ]
        }
      )
    ] })
  ] });
}
const features = [
  {
    icon: Pill,
    title: "Online Pharmacy",
    desc: "Browse thousands of authentic medicines and order in seconds."
  },
  {
    icon: FileUp,
    title: "Prescription Upload",
    desc: "Securely upload your Rx and let our expert pharmacists handle the rest."
  },
  {
    icon: Truck,
    title: "Swift Delivery",
    desc: "Same-day temperature-controlled delivery across all major cities."
  },
  {
    icon: Headphones,
    title: "Expert Support",
    desc: "Direct access to licensed pharmacists for all your healthcare queries."
  },
  {
    icon: ShieldCheck,
    title: "Genuine Quality",
    desc: "100% authentic medical supplies sourced directly from manufacturers."
  },
  {
    icon: Zap,
    title: "Express Service",
    desc: "Urgent medical needs dispatched within minutes of confirmation."
  }
];
function Features() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "features", className: "relative py-32 bg-white/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          className: "text-xs font-bold text-brand-green uppercase tracking-[0.2em] mb-4",
          children: "Smart Healthcare"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-4xl md:text-6xl font-bold text-brand-blue mb-6",
          children: [
            "Pharmacy services ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "reimagined" }),
            " for you."
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.1 },
          className: "text-brand-muted text-lg md:text-xl max-w-2xl leading-relaxed",
          children: "We combine pharmaceutical expertise with modern technology to deliver a healthcare experience that's fast, reliable, and patient-centered."
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.5, delay: i * 0.1 },
        whileHover: { y: -8 },
        className: "group relative rounded-2xl p-10 bg-white border border-brand-blue/5 shadow-card hover:shadow-elegant transition-all duration-500 overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-12 -right-12 w-32 h-32 rounded-full bg-brand-green/5 blur-3xl group-hover:bg-brand-green/10 transition-colors" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 grid place-items-center rounded-2xl bg-brand-blue/5 group-hover:bg-gradient-primary group-hover:glow-green transition-all duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "w-8 h-8 text-brand-blue group-hover:text-white transition-colors" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 text-2xl font-bold text-brand-blue group-hover:text-brand-green transition-colors duration-300", children: f.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-brand-muted leading-relaxed text-base", children: f.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-3 text-sm font-bold text-brand-blue opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Learn more" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-[2px] bg-brand-green rounded-full" })
            ] })
          ] })
        ]
      },
      f.title
    )) })
  ] }) });
}
const messages = [
  { who: "user", text: "I have a sore throat and mild fever." },
  { who: "ai", text: "Try Panadol Extra and warm fluids. Want me to add it to your cart?" },
  { who: "user", text: "Yes, and any vitamin C?" },
  { who: "ai", text: "Adding Redoxon 1g — fast delivery in 35 minutes." }
];
function Assistant() {
  const [shown, setShown] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const id = setInterval(() => setShown((s) => s >= messages.length ? 1 : s + 1), 1800);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "assistant", className: "relative py-28 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[160px] rounded-full" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium text-primary uppercase tracking-widest flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
          " AI Healthcare Assistant"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-4xl md:text-5xl font-bold", children: [
          "A pharmacist ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "in your pocket" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground max-w-lg", children: "Describe a symptom, search for a medicine, or get dosage guidance. Our AI assistant is trained on verified medical data and supervised by licensed pharmacists." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: [
          "Smart symptom checker",
          "Instant medicine search",
          "Dosage & interaction alerts",
          "Refill reminders"
        ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary glow-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: t })
        ] }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { duration: 0.7 },
          className: "relative glass-strong rounded-[2.5rem] p-8 shadow-elegant border border-brand-blue/5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pb-6 border-b border-brand-blue/5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 grid place-items-center rounded-2xl bg-gradient-primary shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-6 h-6 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-bold text-brand-blue", children: "Hassan Medical AI" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-brand-green animate-pulse" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-brand-green uppercase tracking-wider", children: "online" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full glass flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-brand-green" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-5 min-h-[300px]", children: messages.slice(0, shown).map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                className: `flex gap-4 ${m.who === "user" ? "justify-end" : ""}`,
                children: [
                  m.who === "ai" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 shrink-0 grid place-items-center rounded-xl bg-brand-blue/5 border border-brand-blue/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-4 h-4 text-brand-blue" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `max-w-[80%] px-5 py-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${m.who === "user" ? "bg-gradient-primary text-white rounded-tr-sm glow-green" : "glass-strong text-brand-blue border border-brand-blue/5 rounded-tl-sm"}`,
                      children: m.text
                    }
                  ),
                  m.who === "user" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 shrink-0 grid place-items-center rounded-xl bg-brand-blue/5 border border-brand-blue/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-brand-blue" }) })
                ]
              },
              i
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-3 glass-strong rounded-2xl px-5 py-3.5 border border-brand-blue/5 shadow-inner", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  className: "flex-1 bg-transparent outline-none text-sm font-medium placeholder:text-brand-muted text-brand-blue",
                  placeholder: "Ask about a medicine or symptom…"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-10 h-10 grid place-items-center rounded-xl bg-gradient-primary text-white shadow-lg hover:scale-110 hover:glow-green transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-5 h-5" }) })
            ] })
          ]
        }
      )
    ] })
  ] });
}
const supabaseUrl = "";
const supabaseAnonKey = "";
{
  console.warn(
    "Supabase credentials missing. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file."
  );
}
const supabase = createClient(supabaseUrl, supabaseAnonKey);
const categories = [
  { id: "all", label: "All", icon: Sparkles },
  { id: "medicine", label: "Medicines", icon: Pill },
  { id: "vitamin", label: "Vitamins", icon: Heart },
  { id: "baby", label: "Baby Care", icon: Baby },
  { id: "personal", label: "Personal Care", icon: Sparkles },
  { id: "equipment", label: "Equipment", icon: Stethoscope }
];
const staticProducts = [
  { name: "Panadol Extra", cat: "medicine", price: "Rs. 120", tag: "Pain Relief" },
  { name: "Centrum Multivitamin", cat: "vitamin", price: "Rs. 1,850", tag: "Daily Wellness" },
  { name: "Pampers Premium", cat: "baby", price: "Rs. 2,400", tag: "Baby Care" },
  { name: "Dettol Antiseptic", cat: "personal", price: "Rs. 380", tag: "Hygiene" },
  { name: "Omron BP Monitor", cat: "equipment", price: "Rs. 9,500", tag: "Devices" },
  { name: "Brufen 400mg", cat: "medicine", price: "Rs. 95", tag: "Pain Relief" },
  { name: "Redoxon Vitamin C", cat: "vitamin", price: "Rs. 720", tag: "Immunity" },
  { name: "Accu-Chek Glucometer", cat: "equipment", price: "Rs. 4,200", tag: "Devices" }
];
function Products() {
  const [active, setActive] = reactExports.useState("all");
  const [products, setProducts] = reactExports.useState(staticProducts);
  const [loading, setLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const { data, error } = await supabase.from("products").select("*");
        if (error) {
          if (error.code !== "PGRST116" && error.code !== "42P01") {
            console.error("Supabase error:", error);
          }
        } else if (data && data.length > 0) {
          setProducts(data);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);
  const filtered = active === "all" ? products : products.filter((p) => p.cat === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "products", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-primary uppercase tracking-widest", children: "Curated catalogue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-4xl md:text-5xl font-bold text-brand-blue", children: [
          "Everything for your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "wellbeing" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://wa.me/923000000000",
          target: "_blank",
          rel: "noreferrer",
          className: "inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-strong text-sm font-bold text-brand-blue hover:bg-brand-blue/5 transition-all shadow-sm",
          children: "View full catalogue →"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex flex-wrap gap-3", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setActive(c.id),
        className: `inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${active === c.id ? "bg-gradient-primary text-white shadow-lg glow-green" : "glass hover:bg-brand-blue/5 text-brand-blue/60 hover:text-brand-blue border border-brand-blue/5"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            c.icon,
            {
              className: `w-4 h-4 ${active === c.id ? "text-white" : "text-brand-green"}`
            }
          ),
          c.label
        ]
      },
      c.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8", children: filtered.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        layout: true,
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, delay: i * 0.05 },
        whileHover: { y: -8 },
        className: "group relative rounded-3xl glass-strong border border-brand-blue/5 overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-square bg-gradient-to-br from-brand-blue/5 via-brand-green/5 to-transparent grid place-items-center relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-700" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { className: "w-24 h-24 text-brand-blue/20 group-hover:text-brand-blue/40 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-brand-blue/5 text-[10px] font-bold text-brand-blue uppercase tracking-widest shadow-sm", children: p.tag }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-brand-blue group-hover:text-brand-green transition-colors", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-brand-muted font-medium uppercase tracking-wider", children: "Price" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold text-brand-blue", children: p.price })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://wa.me/923000000000",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "w-12 h-12 grid place-items-center rounded-2xl bg-gradient-primary text-white shadow-lg hover:scale-110 hover:glow-green transition-all duration-300",
                  "aria-label": "Order",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-5 h-5" })
                }
              )
            ] })
          ] })
        ]
      },
      p.name
    )) })
  ] }) });
}
function UploadRx() {
  const [file, setFile] = reactExports.useState(null);
  const [progress, setProgress] = reactExports.useState(0);
  const inputRef = reactExports.useRef(null);
  const handleFile = (f) => {
    if (!f) return;
    setFile(f);
    setProgress(0);
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(id);
          return 100;
        }
        return p + 7;
      });
    }, 80);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "upload", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-primary uppercase tracking-widest", children: "Prescription upload" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-4xl md:text-5xl font-bold", children: [
        "Snap it. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "We handle the rest" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Upload your doctor's prescription and our pharmacist will prepare and dispatch your order." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "mt-12 glass-strong rounded-[2.5rem] p-10 shadow-elegant border border-brand-blue/5",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            onDragOver: (e) => e.preventDefault(),
            onDrop: (e) => {
              e.preventDefault();
              handleFile(e.dataTransfer.files?.[0] ?? null);
            },
            onClick: () => inputRef.current?.click(),
            className: "relative border-2 border-dashed border-brand-blue/10 rounded-[2rem] p-16 text-center cursor-pointer hover:border-brand-green/40 hover:bg-brand-green/5 transition-all duration-500 group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  ref: inputRef,
                  type: "file",
                  accept: "image/*,.pdf",
                  className: "hidden",
                  onChange: (e) => handleFile(e.target.files?.[0] ?? null)
                }
              ),
              !file ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 mx-auto rounded-3xl bg-gradient-primary shadow-lg glow-green grid place-items-center group-hover:scale-110 transition-transform duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-9 h-9 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 font-bold text-2xl text-brand-blue", children: "Drop your prescription here" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-brand-muted mt-2 font-medium", children: "PNG, JPG or PDF · up to 10MB" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-blue/5 text-brand-blue text-sm font-bold group-hover:bg-brand-blue/10 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Browse Files" }) })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left max-w-md mx-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 glass rounded-2xl border border-brand-blue/5 shadow-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-xl bg-brand-blue/5 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileCheckCorner, { className: "w-7 h-7 text-brand-green" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-brand-blue truncate max-w-[180px]", children: file.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-brand-muted font-bold uppercase tracking-wider mt-0.5", children: [
                        (file.size / 1024).toFixed(1),
                        " KB"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: (e) => {
                        e.stopPropagation();
                        setFile(null);
                        setProgress(0);
                      },
                      className: "p-3 rounded-xl hover:bg-red-50 hover:text-red-500 transition-colors",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 h-2 rounded-full bg-brand-blue/5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    animate: { width: `${progress}%` },
                    className: "h-full bg-gradient-primary shadow-sm"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-brand-blue uppercase tracking-widest", children: progress < 100 ? `Uploading… ${progress}%` : "Success" }),
                  progress === 100 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-brand-green uppercase tracking-widest", children: "Pharmacist reviewing" })
                ] })
              ] })
            ]
          }
        )
      }
    )
  ] }) });
}
const stats = [
  { value: 25e4, suffix: "+", label: "Medicines delivered" },
  { value: 48e3, suffix: "+", label: "Happy customers" },
  { value: 12, suffix: " yrs", label: "Years of trust" },
  { value: 30, suffix: " min", label: "Avg. delivery time" }
];
function Counter({ value, suffix }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    n.toLocaleString(),
    suffix
  ] });
}
function Stats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: i * 0.1 },
      className: "glass-strong rounded-3xl p-8 text-center border border-brand-blue/5 shadow-card hover:shadow-elegant transition-all duration-500",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl md:text-6xl font-bold text-gradient leading-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { value: s.value, suffix: s.suffix }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs font-bold text-brand-text/50 uppercase tracking-[0.2em]", children: s.label })
      ]
    },
    s.label
  )) }) }) });
}
const items = [
  {
    name: "Ayesha K.",
    city: "Karachi",
    text: "Got my mother's prescription delivered within 25 minutes. Felt premium and reliable."
  },
  {
    name: "Bilal R.",
    city: "Lahore",
    text: "The AI assistant suggested the right vitamin combo. Honestly impressed."
  },
  {
    name: "Sana M.",
    city: "Islamabad",
    text: "Beautiful app, genuine medicines, and the WhatsApp ordering is so easy."
  },
  {
    name: "Hamza T.",
    city: "Rawalpindi",
    text: "Late-night emergency — they delivered within 30 minutes. Lifesaver."
  },
  {
    name: "Maria F.",
    city: "Faisalabad",
    text: "Finally a pharmacy that feels modern. The upload feature is brilliant."
  }
];
function Testimonials() {
  const loop = [...items, ...items];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-28 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-primary uppercase tracking-widest", children: "Loved by patients" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-4xl md:text-5xl font-bold max-w-2xl", children: [
        "Trusted across ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Pakistan" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          animate: { x: ["0%", "-50%"] },
          transition: { duration: 40, repeat: Infinity, ease: "linear" },
          className: "flex gap-5 w-max",
          children: loop.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "w-[380px] glass-strong rounded-3xl p-8 shrink-0 border border-brand-blue/5 shadow-card hover:shadow-elegant transition-all duration-500",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-brand-green", children: Array.from({ length: 5 }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-current drop-shadow-sm" }, j)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-base leading-relaxed text-brand-blue font-medium italic", children: [
                  '"',
                  t.text,
                  '"'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-gradient-primary grid place-items-center font-bold text-white shadow-md", children: t.name[0] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-brand-blue", children: t.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-brand-green uppercase tracking-widest mt-0.5", children: t.city })
                  ] })
                ] })
              ]
            },
            i
          ))
        }
      )
    ] })
  ] });
}
function Contact() {
  const [loading, setLoading] = reactExports.useState(false);
  const [formData, setFormData] = reactExports.useState({
    name: "",
    phone: "",
    address: "",
    message: ""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from("delivery_requests").insert([
        {
          full_name: formData.name,
          phone_number: formData.phone,
          address: formData.address,
          message: formData.message
        }
      ]);
      if (error) throw error;
      toast.success("Request sent successfully! We'll contact you shortly.");
      setFormData({ name: "", phone: "", address: "", message: "" });
    } catch (error) {
      console.error("Error sending request:", error);
      const message = error instanceof Error ? error.message : "Failed to send request. Please check your Supabase connection.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-primary uppercase tracking-widest", children: "Get in touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-4xl md:text-5xl font-bold", children: [
        "One tap to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "care" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-lg", children: "Reach out via WhatsApp, call us directly, or drop your details and we'll get back within minutes." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-5", children: [
        { icon: MapPin, label: "Main Boulevard, Lahore, Pakistan" },
        { icon: Phone, label: "+92 300 0000000" },
        { icon: Clock, label: "Open 24 / 7 — every day" }
      ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-5 glass-strong rounded-2xl p-5 border border-brand-blue/5 shadow-sm hover:shadow-card transition-all duration-300 group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 grid place-items-center rounded-xl bg-brand-blue/5 group-hover:bg-gradient-primary transition-all duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "w-6 h-6 text-brand-blue group-hover:text-white transition-colors" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-medium text-brand-blue", children: c.label })
          ]
        },
        c.label
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://wa.me/923000000000",
          target: "_blank",
          rel: "noreferrer",
          className: "mt-10 inline-flex items-center gap-4 px-8 py-4 rounded-2xl text-white font-bold shadow-lg hover:scale-[1.03] transition-all duration-500 animate-pulse-glow",
          style: { background: "#25D366" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-6 h-6" }),
            "Chat on WhatsApp"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.form,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        onSubmit: handleSubmit,
        className: "glass-strong rounded-[2.5rem] p-10 shadow-elegant border border-brand-blue/5 space-y-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-8 bg-brand-green rounded-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-brand-blue tracking-tight", children: "Request a delivery" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold text-brand-text/40 uppercase tracking-widest ml-1", children: "Full Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  name: "name",
                  value: formData.name,
                  onChange: handleChange,
                  className: "w-full bg-brand-blue/5 border border-brand-blue/5 rounded-2xl px-5 py-4 outline-none focus:border-brand-green/40 focus:bg-white transition-all shadow-inner",
                  placeholder: "John Doe",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold text-brand-text/40 uppercase tracking-widest ml-1", children: "Phone Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  name: "phone",
                  value: formData.phone,
                  onChange: handleChange,
                  className: "w-full bg-brand-blue/5 border border-brand-blue/5 rounded-2xl px-5 py-4 outline-none focus:border-brand-green/40 focus:bg-white transition-all shadow-inner",
                  placeholder: "+92 300 0000000",
                  required: true
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold text-brand-text/40 uppercase tracking-widest ml-1", children: "Delivery Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                name: "address",
                value: formData.address,
                onChange: handleChange,
                className: "w-full bg-brand-blue/5 border border-brand-blue/5 rounded-2xl px-5 py-4 outline-none focus:border-brand-green/40 focus:bg-white transition-all shadow-inner",
                placeholder: "Your full address",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold text-brand-text/40 uppercase tracking-widest ml-1", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                name: "message",
                value: formData.message,
                onChange: handleChange,
                rows: 4,
                className: "w-full bg-brand-blue/5 border border-brand-blue/5 rounded-2xl px-5 py-4 outline-none focus:border-brand-green/40 focus:bg-white transition-all shadow-inner resize-none",
                placeholder: "Which medicines do you need?"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              disabled: loading,
              className: "w-full py-5 rounded-2xl bg-gradient-primary text-white font-bold shadow-lg hover:scale-[1.01] hover:glow-green transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2",
              children: [
                loading ? "Sending..." : "Send Request",
                !loading && /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-5 h-5" })
              ]
            }
          )
        ]
      }
    )
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative bg-brand-blue py-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-green/10 blur-[120px] rounded-full pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 grid md:grid-cols-4 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: logo,
              alt: "Hassan Medical Store logo",
              className: "h-8 w-auto object-contain"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-2xl text-white tracking-tight", children: "Hassan" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold tracking-[0.2em] text-brand-green uppercase", children: "Medical Store" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-brand-light/60 text-base max-w-sm leading-relaxed", children: "Pakistan's premium digital pharmacy. Experience the gold standard of healthcare with genuine medicines and 24/7 expert care." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex gap-4", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 bg-white/20 rounded-sm" })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-white mb-6 uppercase tracking-widest text-xs", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 text-sm font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#features",
              className: "text-brand-light/60 hover:text-brand-green transition-colors",
              children: "Features"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#products",
              className: "text-brand-light/60 hover:text-brand-green transition-colors",
              children: "Products"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#assistant",
              className: "text-brand-light/60 hover:text-brand-green transition-colors",
              children: "AI Assistant"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#upload",
              className: "text-brand-light/60 hover:text-brand-green transition-colors",
              children: "Upload Rx"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-white mb-6 uppercase tracking-widest text-xs", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 text-sm font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-brand-light/60", children: "+92 300 0000000" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-brand-light/60", children: "hello@hassanmedical.pk" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-brand-light/60", children: "Main Boulevard, Lahore" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-light/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Hassan Medical Store. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-brand-green transition-colors", children: "Privacy Policy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-brand-green transition-colors", children: "Terms of Service" })
      ] })
    ] })
  ] });
}
function FloatingWhatsApp() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.a,
    {
      href: "https://wa.me/923000000000",
      target: "_blank",
      rel: "noreferrer",
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { delay: 1.5, type: "spring" },
      whileHover: { scale: 1.1, boxShadow: "0 0 25px rgba(37, 211, 102, 0.4)" },
      className: "fixed bottom-8 right-8 z-40 w-16 h-16 grid place-items-center rounded-2xl text-white shadow-2xl animate-pulse-glow",
      style: { background: "#25D366" },
      "aria-label": "Chat on WhatsApp",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-7 h-7" })
    }
  );
}
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      style: { scaleX: scrollYProgress, transformOrigin: "0% 50%" },
      className: "fixed top-0 left-0 right-0 h-[3px] bg-gradient-primary z-[60]"
    }
  );
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SmoothScroll, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Features, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Assistant, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Products, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UploadRx, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhatsApp, {})
  ] });
}
export {
  Index as component
};
