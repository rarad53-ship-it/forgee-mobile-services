import { MessageCircle, ChevronDown } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/data";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-bl from-primary to-[hsl(var(--hero-gradient-to))] py-20 px-4 text-primary-foreground">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />

      <div className="container relative mx-auto text-center">
        <h1 className="text-4xl font-black leading-tight sm:text-5xl">
          <span className="text-accent">{SITE_NAME}</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg font-medium text-primary-foreground/80">
          {SITE_TAGLINE}
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-whatsapp px-8 py-4 text-lg font-bold text-whatsapp-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            <MessageCircle className="h-6 w-6" />
            تواصل واتساب للاستفسار
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-2xl border-2 border-primary-foreground/30 px-6 py-3 text-sm font-bold text-primary-foreground/90 transition-colors hover:bg-primary-foreground/10"
          >
            تصفح الخدمات
            <ChevronDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
