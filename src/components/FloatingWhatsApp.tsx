import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/data";
import { trackWhatsAppClick } from "@/lib/analytics";

const FloatingWhatsApp = () => {

  const handleClick = () => {
    // 🔥 تسجيل التتبع
    trackWhatsAppClick("floating");

    // 🚀 توليد الرابط مع المصدر
    const url = buildWhatsAppUrl(undefined, false, "floating");

    // فتح آمن
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="fixed bottom-6 start-6 z-50 flex flex-col items-center gap-2">

      {/* 🧠 CTA محسّن */}
      <span className="rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-lg animate-bounce">
        احصل على عرض سعر الآن 🚀
      </span>

      {/* 🔥 زر واتساب */}
      <button
        onClick={handleClick}
        aria-label="تواصل عبر واتساب"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-xl transition-transform hover:scale-110 active:scale-95"
      >
        <MessageCircle className="h-7 w-7" />
      </button>

    </div>
  );
};

export default FloatingWhatsApp;
