import { trackEvent } from "@/lib/analytics";

/**
 * 🔥 تتبع ضغط واتساب بشكل موحد مع النظام الكامل
 */
export function trackWhatsAppClick(
  serviceName?: string,
  source: "hero" | "service" | "floating" | "pricing" | "unknown" = "unknown"
) {
  try {
    trackEvent("whatsapp_click", {
      service: serviceName || "general",
      source,
    });
  } catch (e) {
    console.error("Analytics error:", e);
  }
}
