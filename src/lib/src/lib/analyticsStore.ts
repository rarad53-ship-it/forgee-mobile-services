const STORAGE_KEY = "forgee_analytics";

type EventType = {
  service?: string;
  source: "hero" | "service_card" | "floating" | "unknown";
  time: number;
};

export const trackEvent = (data: Omit<EventType, "time">) => {
  try {
    const existing = localStorage.getItem(STORAGE_KEY);
    const events: EventType[] = existing ? JSON.parse(existing) : [];

    events.push({
      ...data,
      time: Date.now(),
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  } catch {}
};

export const getAnalytics = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const clearAnalytics = () => {
  localStorage.removeItem(STORAGE_KEY);
};
