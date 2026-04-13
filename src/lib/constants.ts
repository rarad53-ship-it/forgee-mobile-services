export const SITE_NAME = "فورجي لخدمات الجوال";
export const SITE_DESCRIPTION = "محل فورجي المتخصص في صيانة وبرمجة الجوالات، بيع الإكسسوارات، وخدمات الشحن الإلكتروني";
export const SITE_TAGLINE = "صيانة، إكسسوارات، وشحن إلكتروني بسرعة وموثوقية";

export const CATEGORIES = [
  { key: "all", label: "الكل", icon: "📋" },
  { key: "repair", label: "📱 صيانة وبرمجة", icon: "🔧", inquiryMode: true },
  { key: "accessories", label: "🎧 الإكسسوارات", icon: "🎧", inquiryMode: true },
  { key: "telecom", label: "💰 خدمات الاتصالات", icon: "💰", inquiryMode: false },
] as const;

export type CategoryKey = (typeof CATEGORIES)[number]["key"];
