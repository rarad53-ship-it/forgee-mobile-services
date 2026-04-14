const STORAGE_KEY = "forgee_analytics";

/**
 * 📊 شكل الحدث
 */
type EventType = {
  service?: string;
  source: "hero" | "service_card" | "floating" | "pricing" | "unknown";
  time: number;
};

/**
 * 🔥 تسجيل حدث جديد
 */
export const trackEvent = (data: Omit<EventType, "time">) => {
  try {
    const existing = localStorage.getItem(STORAGE_KEY);

    const events: EventType[] = existing ? JSON.parse(existing) : [];

    events.push({
      ...data,
      time: Date.now(),
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  } catch (error) {
    console.warn("Analytics storage failed:", error);
  }
};

/**
 * 📥 جلب كل الأحداث
 */
export const getAnalytics = (): EventType[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.warn("Analytics read failed:", error);
    return [];
  }
};

/**
 * 🧹 حذف البيانات
 */
export const clearAnalytics = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn("Analytics clear failed:", error);
  }
};

/**
 * 📈 Dashboard Summary (النسخة الاحترافية)
 */
export const getSummary = () => {
  const data = getAnalytics();

  const summary = {
    totalClicks: data.length,
    bySource: {
      hero: 0,
      service_card: 0,
      floating: 0,
      pricing: 0,
      unknown: 0,
    },
    byService: {} as Record<string, number>,
    last24h: 0,
  };

  const now = Date.now();
  const DAY = 24 * 60 * 60 * 1000;

  data.forEach((event) => {
    // 📌 حسب المصدر
    summary.bySource[event.source]++;

    // 📌 حسب الخدمة
    if (event.service) {
      summary.byService[event.service] =
        (summary.byService[event.service] || 0) + 1;
    }

    // 📌 آخر 24 ساعة
    if (now - event.time < DAY) {
      summary.last24h++;
    }
  });

  return summary;
};
