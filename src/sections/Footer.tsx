import { Phone, MessageCircle } from "lucide-react";
import { CONTACT_NUMBERS, buildWhatsAppUrl } from "@/lib/data";
import { SITE_NAME } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-primary py-10 px-4 text-primary-foreground">
      <div className="container mx-auto space-y-6 text-center">
        <h2 className="text-xl font-bold text-accent">{SITE_NAME}</h2>
        <p className="text-sm text-primary-foreground/60">4G لخدمات الاتصالات</p>

        <div className="space-y-3">
          <p className="text-sm text-primary-foreground/70">للاتصال المباشر حسب مشغل خطك:</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {CONTACT_NUMBERS.map((c) => (
              <a
                key={c.number}
                href={`tel:+${c.full}`}
                className="inline-flex items-center gap-2 rounded-xl bg-primary-foreground/10 px-4 py-3 text-sm font-bold transition-colors hover:bg-primary-foreground/20"
                dir="ltr"
              >
                <Phone className="h-4 w-4" />
                {c.number}
              </a>
            ))}
          </div>
        </div>

        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-whatsapp px-6 py-3 font-bold text-whatsapp-foreground transition-transform hover:scale-105 active:scale-95"
        >
          <MessageCircle className="h-5 w-5" />
          تواصل عبر واتساب
        </a>

        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} {SITE_NAME}. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
