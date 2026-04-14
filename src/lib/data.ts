export interface Service {
  id: string;
  title: string;
  price: string;
  image: string;
  features: string[];
  active: boolean;
  body: string;
  category: string;
  badge: string;
}

export const WHATSAPP_NUMBER = "967774400447";

export const buildWhatsAppUrl = (
  serviceName?: string,
  isInquiry = false,
  source: string = "unknown" // 🔥 إضافة تتبع المصدر
) => {
  let text: string;

  if (serviceName && isInquiry) {
    text = `مرحباً فورجي، كم سعر ${serviceName}؟`;
  } else if (serviceName) {
    text = `مرحباً فورجي، أريد الاستفسار عن: ${serviceName}`;
  } else {
    text = `مرحباً فورجي، أريد الاستفسار عن خدماتكم`;
  }

  // 🔥 تتبع واتساب (Analytics)
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: serviceName || "general",
      source: source,
    });
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

export const formatPrice = (price: string): string => {
  const num = parseInt(price, 10);
  if (isNaN(num)) return price;
  return `${num.toLocaleString("ar-YE")} ريال`;
};

export const CONTACT_NUMBERS = [
  { number: "774400447", full: "967774400447" },
  { number: "734444801", full: "967734444801" },
  { number: "713336973", full: "967713336973" },
];

export const FALLBACK_SERVICES: Service[] = [
  {
    id: "r1",
    category: "repair",
    title: "تغيير شاشة",
    price: "حسب الموديل",
    image: "services/screen",
    features: ["شاشة أصلية", "ضمان 6 شهور", "تركيب فوري"],
    active: true,
    body: "تغيير شاشات جميع أنواع الجوالات بقطع غيار أصلية",
    badge: "الأكثر طلباً",
  },
  {
    id: "a1",
    category: "accessories",
    title: "شواحن",
    price: "من 500 ريال",
    image: "services/charger",
    features: ["أصلية", "شحن سريع"],
    active: true,
    body: "شواحن أصلية لجميع الأجهزة بتقنية الشحن السريع",
    badge: "",
  },
  {
    id: "t1",
    category: "telecom",
    title: "شحن رصيد",
    price: "حسب الباقة",
    image: "services/credit",
    features: ["فوري", "جميع الشبكات"],
    active: true,
    body: "شحن رصيد لجميع الشبكات المحلية والدولية",
    badge: "",
  },
];
