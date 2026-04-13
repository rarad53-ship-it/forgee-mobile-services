import { useState, useEffect, useMemo } from "react";
import { Service, FALLBACK_SERVICES } from "@/lib/data";
import type { CategoryKey } from "@/lib/constants";

const CACHE_KEY = "forgee_services";
const CACHE_TTL = 5 * 60 * 1000; // 5 min

export function useServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isFallback, setIsFallback] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  useEffect(() => {
    // Try cache first
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, ts } = JSON.parse(cached);
        if (Date.now() - ts < CACHE_TTL && Array.isArray(data) && data.length > 0) {
          setServices(data);
          setLoading(false);
          return;
        }
      }
    } catch {}

    fetch("/data/services.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then((data: Service[]) => {
        const active = data.filter((s) => s.active);
        if (active.length === 0) {
          setServices(FALLBACK_SERVICES);
          setIsFallback(true);
        } else {
          setServices(active);
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify({ data: active, ts: Date.now() }));
          } catch {}
        }
      })
      .catch(() => {
        setServices(FALLBACK_SERVICES);
        setIsFallback(true);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredServices = useMemo(
    () => (activeCategory === "all" ? services : services.filter((s) => s.category === activeCategory)),
    [services, activeCategory]
  );

  return { services, filteredServices, loading, error, isFallback, activeCategory, setActiveCategory };
}
