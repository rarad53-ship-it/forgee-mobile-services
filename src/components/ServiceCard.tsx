import { MessageCircle, Check, Star } from "lucide-react";
import { Service, buildWhatsAppUrl, formatPrice } from "@/lib/data";
import { useState } from "react";

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
  const [clicked, setClicked] = useState(false);

  const whatsappUrl = buildWhatsAppUrl(service.title, inquiryMode);

  // 🎯 CTA ذكي حسب الحالة النفسية
  const buttonText = inquiryMode
    ? "💬 احصل على السعر خلال دقائق"
    : "🚀 اطلب الآن عبر واتساب";

  // 🎯 تتبع ضغط واتساب (مهم جداً للسيو والتحسين)
  const handleClick = () => {
    setClicked(true);

    // localStorage tracking (خفيف بدون backend)
    const current = localStorage.getItem("whatsapp_clicks");
    const count = current ? parseInt(current) : 0;
    localStorage.setItem("whatsapp_clicks", String(count + 1));

    // optional: console tracking
    console.log("WhatsApp Clicked:", service.id);
  };

  return (
    <div className="group relative flex flex-col rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border transition-all hover:shadow-lg hover:-translate-y-0.5">

      {/* 🏷️ Badge ثقة */}
      {service.badge && (
        <span className="absolute -top-3 start-4 inline-flex items-center gap-1 rounded-full bg-badge px-3 py-1 text-xs font-bold text-badge-foreground">
          <Star className="h-3 w-3" />
          {service.badge}
        </span>
      )}

      {/* 🎯 العنوان والسعر */}
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl">
          {iconMap[service.image] ?? "📱"}
        </span>

        <div className="flex-1">
          <h3 className="text-lg font-bold text-card-foreground">
            {service.title}
          </h3>

          <span className="ltr-nums text-sm font-semibold text-accent" dir="ltr">
            {formatPrice(service.price)}
          </span>
        </div>
      </div>

      {/* 🧠 وصف الخدمة (يزيد الثقة) */}
      <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
        {service.body}
      </p>

      {/* 📌 Features */}
      {service.features.length > 0 && (
        <ul className="mb-4 flex flex-wrap gap-2">
          {service.features.slice(0, 3).map((f) => (
            <li
              key={f}
              className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              <Check className="h-3 w-3 text-accent" />
              {f}
            </li>
          ))}
        </ul>
      )}

      {/* 🔥 CTA BUTTON (مُحسن نفسياً + تتبع) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`mt-auto flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all active:scale-95
          ${
            clicked
              ? "bg-green-600"
              : "bg-whatsapp hover:scale-[1.02]"
          }
          text-whatsapp-foreground`}
      >
        <MessageCircle className="h-5 w-5" />
        {buttonText}
      </a>

      {/* 📊 Micro trust line */}
      <p className="mt-2 text-center text-[11px] text-muted-foreground">
        ⚡ يتم الرد خلال دقائق عبر واتساب
      </p>
    </div>
  );
};

export default ServiceCard;
