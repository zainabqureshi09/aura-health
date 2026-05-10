import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative bg-brand-blue py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-green/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center">
              <img
                src={logo}
                alt="Hassan Medical Store logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl text-white tracking-tight">
                Hassan
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-brand-green uppercase">
                Medical Store
              </span>
            </div>
          </div>
          <p className="mt-6 text-brand-light/60 text-base max-w-sm leading-relaxed">
            Pakistan's premium digital pharmacy. Experience the gold standard of healthcare with
            genuine medicines and 24/7 expert care.
          </p>
          <div className="mt-8 flex gap-4">
            {/* Social Placeholders */}
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div className="w-4 h-4 bg-white/20 rounded-sm" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Explore</p>
          <ul className="space-y-4 text-sm font-medium">
            <li>
              <a
                href="#features"
                className="text-brand-light/60 hover:text-brand-green transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="text-brand-light/60 hover:text-brand-green transition-colors"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#assistant"
                className="text-brand-light/60 hover:text-brand-green transition-colors"
              >
                AI Assistant
              </a>
            </li>
            <li>
              <a
                href="#upload"
                className="text-brand-light/60 hover:text-brand-green transition-colors"
              >
                Upload Rx
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Contact</p>
          <ul className="space-y-4 text-sm font-medium">
            <li className="text-brand-light/60">+92 300 0000000</li>
            <li className="text-brand-light/60">hello@hassanmedical.pk</li>
            <li className="text-brand-light/60">Main Boulevard, Lahore</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-light/40">
        <p>© {new Date().getFullYear()} Hassan Medical Store. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-brand-green transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-brand-green transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
