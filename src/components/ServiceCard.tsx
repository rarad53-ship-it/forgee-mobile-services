import { MessageCircle, Check, Star } from "lucide-react";
import { Service, buildWhatsAppUrl, formatPrice } from "@/lib/data";
import { trackEvent } from "@/lib/analytics";

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

  const buttonText = inquiryMode
    ? "احصل على سعر سريع"
    : "اطلب عبر واتساب الآن";

  // 🔥 تتبع + فتح واتساب
  const handleClick = () => {
    trackEvent({
      service: service.title,
      source: "service_card",
    });

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
      <div
