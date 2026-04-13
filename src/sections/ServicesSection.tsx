import ServiceCard from "@/components/ServiceCard";
import CategoryTabs from "@/components/CategoryTabs";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import ErrorState from "@/components/ErrorState";
import { useServices } from "@/hooks/useServices";
import { CATEGORIES } from "@/lib/constants";
import { Info } from "lucide-react";

const ServicesSection = () => {
  const {
    filteredServices,
    loading,
    error,
    isFallback,
    activeCategory,
    setActiveCategory,
  } = useServices();

  // Determine inquiry mode for current category
  const currentCat = CATEGORIES.find((c) => c.key === activeCategory);
  const inquiryMode =
    currentCat && "inquiryMode" in currentCat ? currentCat.inquiryMode : false;

  return (
    <section id="services" className="py-12 px-4">
      <div className="container mx-auto">

        {/* 🔥 TITLE (محسن للتحويل) */}
        <h2 className="mb-3 text-center text-2xl font-black text-foreground">
          خدماتنا الأكثر طلباً
        </h2>

        {/* ⚡ TRUST LINE (عنصر تحويل نفسي) */}
        <p className="mb-6 text-center text-sm text-muted-foreground">
          ⚡ رد خلال دقائق • 💬 تواصل مباشر واتساب • 🛡️ ضمان على الخدمة
        </p>

        {/* CATEGORY FILTER */}
        <div className="mb-6">
          <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
        </div>

        {/* Fallback Notice */}
        {isFallback && !loading && (
          <div className="mb-6 flex items-center justify-center gap-2 rounded-xl bg-secondary p-3 text-sm text-muted-foreground">
            <Info className="h-4 w-4" />
            يتم عرض بيانات تجريبية حالياً
          </div>
        )}

        {/* Error State */}
        {error && !isFallback && <ErrorState />}

        {/* Loading */}
        {loading ? (
          <LoadingSkeleton />
        ) : activeCategory === "all" ? (
          // Grouped view
          CATEGORIES.filter((c) => c.key !== "all").map((cat) => {
            const catServices = filteredServices.filter(
              (s) => s.category === cat.key
            );
            if (catServices.length === 0) return null;

            const catInquiry =
              "inquiryMode" in cat ? cat.inquiryMode : false;

            return (
              <div key={cat.key} className="mb-10 last:mb-0">

                {/* Category Title (محسن) */}
                <h3 className="mb-4 text-xl font-bold text-foreground">
                  {cat.label}
                </h3>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {catServices.map((s) => (
                    <ServiceCard
                      key={s.id}
                      service={s}
                      inquiryMode={catInquiry}
                    />
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((s) => (
              <ServiceCard
                key={s.id}
                service={s}
                inquiryMode={inquiryMode}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
