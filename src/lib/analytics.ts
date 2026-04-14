const WHATSAPP_KEY = "forgee_whatsapp_clicks";

export function trackWhatsAppClick(serviceName?: string) {
  try {
    const existing = localStorage.getItem(WHATSAPP_KEY);

    let data = {
      total: 0,
      services: {} as Record<string, number>,
    };

    if (existing) {
      data = JSON.parse(existing);
    }

    data.total += 1;

    if (serviceName) {
      data.services[serviceName] =
        (data.services[serviceName] || 0) + 1;
    }

    localStorage.setItem(WHATSAPP_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Analytics error:", e);
  }
}
