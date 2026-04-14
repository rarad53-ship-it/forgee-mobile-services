const STORAGE_KEY = "forgee_analytics";

/**
 * نوع الحدث المخزن
 */
type EventType = {
  service?: string;
  source: "hero" | "service_card" | "floating" | "unknown";
  time: number;
};

/**
 * 🔥 تسجيل حدث جديد (ضغط واتساب)
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
    // فشل التخزين لا يكسر الموقع
    console.warn("Analytics storage failed:", error);
  }
};

/**
 * 📊 جلب كل البيانات
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
 * 🧹 حذف كل البيانات (للاختبار أو إعادة التصفير)
 */
export const clearAnalytics = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn("Analytics clear failed:", error);
  }
};

/**
 * 📈 تحليل سريع جاهز للاستخدام داخل Dashboard
 */
export const getSummary = () => {
  const data = getAnalytics();

  const total = data.length;

  const
