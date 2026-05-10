import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Features } from "@/components/site/Features";
import { Assistant } from "@/components/site/Assistant";
import { Products } from "@/components/site/Products";
import { UploadRx } from "@/components/site/UploadRx";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { ScrollProgress } from "@/components/site/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hassan Medical Store — Pakistan's Premium Digital Pharmacy" },
      {
        name: "description",
        content:
          "Order genuine medicines, upload prescriptions, and get same-day delivery across Pakistan. AI-assisted healthcare, 24/7.",
      },
      { property: "og:title", content: "Hassan Medical Store — Premium Digital Pharmacy" },
      {
        property: "og:description",
        content:
          "AI-assisted healthcare, prescription upload, WhatsApp ordering, and same-day delivery across Pakistan.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <LoadingScreen />
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Assistant />
        <Products />
        <UploadRx />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
