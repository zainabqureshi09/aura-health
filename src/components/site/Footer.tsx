import logo from "@/assets/logo.png";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Online Pharmacy", href: "#products" },
      { label: "Prescription Upload", href: "#upload" },
      { label: "AI Consultation", href: "#assistant" },
      { label: "Medicine Search", href: "#products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Contact Us", href: "#contact" },
      { label: "Store Locator", href: "#" },
      { label: "Pharmacy License", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Return Policy", href: "#" },
      { label: "Shipping Info", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-brand-blue pt-24 pb-12 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/20 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-6 gap-16 pb-20 border-b border-white/5">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-elegant flex items-center justify-center p-2.5">
                <img
                  src={logo}
                  alt="Hassan Medical Store logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-3xl text-white tracking-tight leading-none">
                  Hassan
                </span>
                <span className="text-[10px] font-bold tracking-[0.25em] text-brand-green uppercase mt-1">
                  Medical Store
                </span>
              </div>
            </div>
            
            <p className="text-white/60 text-lg leading-relaxed max-w-sm font-medium">
              Pakistan's leading digital pharmacy, combining pharmaceutical excellence with 
              next-generation technology for a healthier tomorrow.
            </p>

            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-green hover:bg-white/10 hover:border-brand-green/30 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-white text-sm font-bold uppercase tracking-[0.15em] mb-8">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-brand-green transition-colors duration-300 flex items-center gap-2 group text-sm font-semibold"
                    >
                      <div className="w-1 h-1 rounded-full bg-brand-green/40 group-hover:bg-brand-green transition-colors" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-sm font-bold uppercase tracking-[0.15em] mb-8">
              Contact
            </h3>
            <ul className="space-y-6">
              {[
                { icon: Phone, text: "+92 300 0000000", href: "tel:+923000000000" },
                { icon: Mail, text: "hello@hassanmedical.pk", href: "mailto:hello@hassanmedical.pk" },
                { icon: MapPin, text: "Main Boulevard, Lahore", href: "#" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="flex items-start gap-3 text-white/50 hover:text-brand-green transition-colors group"
                  >
                    <item.icon className="w-5 h-5 shrink-0 text-brand-green/60 group-hover:text-brand-green mt-0.5" />
                    <span className="text-sm font-semibold leading-relaxed">
                      {item.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} Hassan Medical Store. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="w-1 h-1 rounded-full bg-white/10 hidden md:block" />
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
                Licensed by DRAP Pakistan
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/5 group cursor-pointer hover:bg-white/10 transition-all">
            <span className="text-[10px] font-bold text-brand-green uppercase tracking-[0.15em]">
              System Status: Healthy
            </span>
            <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
}

