import { Clock, BadgeCheck, HeartHandshake, Headphones } from "lucide-react";

const reasons = [
  { icon: Clock, title: "سرعة التنفيذ", body: "إصلاح وتسليم في أسرع وقت" },
  { icon: BadgeCheck, title: "قطع أصلية", body: "نستخدم قطع غيار أصلية فقط" },
  { icon: HeartHandshake, title: "أسعار منافسة", body: "أفضل الأسعار في السوق" },
  { icon: Headphones, title: "دعم مستمر", body: "متواجدون دائماً لخدمتك" },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-2xl font-black text-foreground">
          لماذا فورجي؟
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {reasons.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-2 rounded-2xl bg-card p-5 text-center shadow-sm ring-1 ring-border"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15">
                <Icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-sm font-bold text-card-foreground">{title}</h3>
              <p className="text-xs text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
