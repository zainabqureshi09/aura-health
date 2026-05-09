import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-10">
      <div className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Hassan Medical Store logo" className="h-12 w-auto object-contain" />
            <span className="font-display font-bold text-lg">
              Hassan <span className="text-gradient">Medical Store</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Pakistan's premium digital pharmacy. Genuine medicines, AI-assisted
            care and lightning-fast delivery — 24/7.
          </p>
        </div>
        <div>
          <p className="font-semibold mb-3">Explore</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#features" className="hover:text-foreground">Features</a></li>
            <li><a href="#products" className="hover:text-foreground">Products</a></li>
            <li><a href="#assistant" className="hover:text-foreground">AI Assistant</a></li>
            <li><a href="#upload" className="hover:text-foreground">Upload Rx</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Contact</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>+92 300 0000000</li>
            <li>hello@hassanmedical.pk</li>
            <li>Lahore · Karachi · Islamabad</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Hassan Medical Store. All rights reserved.
      </div>
    </footer>
  );
}
