import HeroCTAButton from "@/components/HeroCTAButton";

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 text-center bg-gradient-to-b from-background to-muted">

      {/* 🧠 العنوان الرئيسي */}
      <h1 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
        صيانة و خدمات الجوال بكل احترافية 🚀
      </h1>

      {/* 💬 وصف تسويقي */}
      <p className="mt-4 text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
        نوفر لك أسرع حلول صيانة الجوال، شحن، و خدمات تقنية بأسعار مناسبة وجودة عالية
        مع دعم مباشر عبر واتساب في أي وقت.
      </p>

      {/* 🔥 CTA الرئيسي */}
      <div className="mt-8 flex justify-center">
        <HeroCTAButton />
      </div>

      {/* 📊 عنصر ثقة بسيط */}
      <div className="mt-6 text-xs text-muted-foreground">
        ⚡ أكثر من 500 عميل تم خدمتهم بنجاح
      </div>

    </section>
  );
};

export default HeroSection;
