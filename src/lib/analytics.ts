const STORAGE_KEY = "forgee_analytics";

/**
 * 👥 نوع التفاعل (Traffic System)
 */
export type EventType =
  | "page_view"
  | "lead_click"
  | "whatsapp_click"
  | "pricing_click";

/**
 * 📊 شكل الحدث
 */
export interface AnalyticsEvent {
  type: EventType;
  source?: "hero" | "service_card" | "floating" | "pricing" | "unknown";
  service?: string;
  page?: string;
  sessionId: string;
  time: number;
}

/**
 * 🧠 إنشاء Session ID لكل زيارة
 */
const getSessionId = () => {
  let session = sessionStorage.getItem("forgee_session");

  if (!session) {
    session = Math.random().toString(36).substring(2, 10);
    sessionStorage.setItem("forgee_session", session);
  }

  return session;
};

/**
 * 🔥 تسجيل حدث عام
 */
export const trackEvent = (data: Omit<AnalyticsEvent, "time" | "sessionId">) => {
  try {
    const existing: AnalyticsEvent[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );

    const event: AnalyticsEvent = {
      ...data,
      sessionId: getSessionId(),
      time: Date.now(),
    };

    existing.push(event);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch (error) {
    console.warn("Analytics error:", error);
  }
};

/**
 * 📄 تتبع زيارة صفحة
 */
export const trackPageView = (page: string) => {
  trackEvent({
    type: "page_view",
    page,
    source: "unknown",
  });
};

/**
 * 💰 تتبع Lead (ضغط مهم)
 */
export const trackLead = (service: string, source: AnalyticsEvent["source"]) => {
  trackEvent({
    type: "lead_click",
    service,
    source,
  });
};

/**
 * 📞 تتبع واتساب
 */
export const trackWhatsAppClick = (
  service: string,
  source: AnalyticsEvent["source"] = "unknown"
) => {
  trackEvent({
    type: "whatsapp_click",
    service,
    source,
  });
};

/**
 * 📊 جلب البيانات
 */
export const getAnalytics = (): AnalyticsEvent[] => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
};

/**
 * 📈 Dashboard Summary (Traffic + Leads)
 */
export const getSummary = () => {
  const data = getAnalytics();

  const summary = {
    totalEvents: data.length,
    totalLeads: 0,
    totalPageViews: 0,
    totalWhatsApp: 0,

    bySource: {
      hero: 0,
      service_card: 0,
      floating: 0,
      pricing: 0,
      unknown: 0,
    },

    byService: {} as Record<string, number>,
    byPage: {} as Record<string, number>,

    sessions: new Set<string>().size,
  };

  data.forEach((e) => {
    // 📌 حسب النوع
    if (e.type === "lead_click") summary.totalLeads++;
    if (e.type === "page_view") summary.totalPageViews++;
    if (e.type === "whatsapp_click") summary.totalWhatsApp++;

    // 📌 المصدر
    if (e.source) summary.bySource[e.source]++;

    // 📌 الخدمة
    if (e.service) {
      summary.byService[e.service] =
        (summary.byService[e.service] || 0) + 1;
    }

    // 📌 الصفحة
    if (e.page) {
      summary.byPage[e.page] =
        (summary.byPage[e.page] || 0) + 1;
    }
  });

  return summary;
};

/**
 * 🧹 تنظيف البيانات
 */
export const clearAnalytics = () => {
  localStorage.removeItem(STORAGE_KEY);
};
