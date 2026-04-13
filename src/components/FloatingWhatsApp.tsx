import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/data";

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 start-6 z-50 flex flex-col items-center gap-2">
      <span className="rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-lg">
        تواصل معنا الآن
      </span>
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-xl animate-pulse-wa transition-transform hover:scale-110 active:scale-95"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
