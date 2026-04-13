import { Wrench, ShieldCheck, Zap } from "lucide-react";

const stats = [
  { icon: Wrench, value: "+500", label: "جهاز تم صيانته" },
  { icon: ShieldCheck, value: "100%", label: "قطع غيار أصلية" },
  { icon: Zap, value: "⚡", label: "خدمة سريعة" },
];

const SocialProofSection = () => {
  return (
    <section className="bg-primary py-10 px-4 text-primary-foreground">
      <div className="container mx-auto grid grid-cols-3 gap-4 text-center">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <Icon className="h-7 w-7 text-accent" />
            <span className="text-xl font-black text-accent ltr-nums" dir="ltr">{value}</span>
            <span className="text-xs font-bold text-primary-foreground/80">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialProofSection;
