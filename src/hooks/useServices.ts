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
    let isMounted = true;
    const controller = new AbortController();

    const loadServices = async () => {
      try {
        // 🧠 1. Load from cache first
        const cached = localStorage.getItem(CACHE_KEY);

        if (cached) {
          try {
            const { data, ts } = JSON.parse(cached);

            if (
              Array.isArray(data) &&
              data.length > 0 &&
              Date.now() - ts < CACHE_TTL
            ) {
              if (isMounted) {
                setServices(data);
                setLoading(false);
              }
              return;
            }
          } catch {
            localStorage.removeItem(CACHE_KEY);
          }
        }

        // 🌐 2. Fetch fresh data
        const res = await fetch("/data/services.json", {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error("Failed to fetch services");

        const data: Service[] = await res.json();

        const active = data.filter((s) => s.active !== false);

        if (!active.length) {
          if (isMounted) {
            setServices(FALLBACK_SERVICES);
            setIsFallback(true);
          }
        } else {
          if (isMounted) {
            setServices(active);
          }

          // 💾 save cache
          try {
            localStorage.setItem(
              CACHE_KEY,
              JSON.stringify({
                data: active,
                ts: Date.now(),
              })
            );
          } catch {}
        }
      } catch (err) {
        if (isMounted) {
          setServices(FALLBACK_SERVICES);
          setIsFallback(true);
          setError(true);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadServices();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  // 🎯 Filter optimization (stable + fast)
  const filteredServices = useMemo(() => {
    if (activeCategory === "all") return services;
    return services.filter((s) => s.category === activeCategory);
  }, [services, activeCategory]);

  return {
    services,
    filteredServices,
    loading,
    error,
    isFallback,
    activeCategory,
    setActiveCategory,
  };
}
