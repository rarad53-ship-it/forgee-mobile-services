import { MessageCircle, Check, Star } from "lucide-react";
import { Service, buildWhatsAppUrl, formatPrice } from "@/lib/data";
import { trackWhatsAppClick } from "@/lib/analytics";

interface Props {
  service: Service;
  inquiryMode?: boolean;
}

const iconMap: Record<string, string> = {
  "services/screen": "📱",
  "services/battery": "🔋",
  "services/software": "💻",
  "services/unlock": "🔓",
  "services/network": "📶",
  "services/charger": "🔌",
  "services/headphones": "🎧",
  "services/cases": "🛡️",
  "services/protector": "📋",
  "services/credit": "💳",
  "services/packages": "📦",
  "services/bills": "🧾",
  "services/gaming": "🎮",
};

const ServiceCard = ({ service, inquiryMode = false }: Props) => {
  const whatsappUrl = buildWhatsAppUrl(service.title, inquiryMode);

  // 🧠 تحسين النص حسب نية العميل
  const buttonText = inquiryMode
    ? "احصل على سعر سريع"
    : "اطلب عبر واتساب الآن";

  // 🔥 تتبع الضغط + فتح واتساب
  const handleClick = () => {
    trackWhatsAppClick(service.title);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="group relative flex flex-col rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border transition-all hover:shadow-lg hover:-translate-y-0.5">

      {/* 🏷️ Badge */}
      {service.badge && (
        <span className="absolute -top-3 start-4 inline-flex items-center gap-1 rounded-full bg-badge px-3 py-1 text-xs font-bold text-badge-foreground">
          <Star className="h-3 w-3" />
          {service.badge}
        </span>
      )}

      {/* 📦 Header */}
      <div className="mb-3 flex items-center gap-3">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl"
          role="img"
          aria-label={service.title}
        >
          {iconMap[service.image] ?? "📱"}
        </span>

        <div className="flex-1">
          <h3 className="text-lg font-bold text-card-foreground">
            {service.title}
          </h3>

          <span
            className="ltr-nums text-sm font-semibold text-accent"
            dir="ltr"
          >
            {formatPrice(service.price)}
          </span>
        </div>
      </div>

      {/* 📝 Description */}
      {service.body && (
        <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
          {service.body}
        </p>
      )}

      {/* ✳️ Features */}
      {service.features?.length > 0 && (
        <ul className="mb-4 flex flex-wrap gap-2">
          {service.features.slice(0, 3).map((f, index) => (
            <li
              key={`${f}-${index}`}
              className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              <Check className="h-3 w-3 text-accent" />
              {f}
            </li>
          ))}
        </ul>
      )}

      {/* 🚀 CTA BUTTON (الأهم) */}
      <button
        onClick={handleClick}
        className="mt-auto flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-3 text-sm font-bold text-whatsapp-foreground transition-transform hover:scale-[1.02] active:scale-95 shadow-md"
      >
        <MessageCircle className="h-5 w-5" />
        {buttonText}
      </button>
    </div>
  );
};

export default ServiceCard;
