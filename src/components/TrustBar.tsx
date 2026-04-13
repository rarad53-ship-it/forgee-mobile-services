import { Zap, ShieldCheck, MessageCircle } from "lucide-react";

const items = [
  { icon: Zap, label: "خدمة فورية" },
  { icon: ShieldCheck, label: "ضمان" },
  { icon: MessageCircle, label: "رد سريع" },
];

const TrustBar = () => {
  return (
    <section className="border-b border-border bg-card py-4 px-4">
      <div className="container mx-auto flex items-center justify-around">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon className="h-5 w-5 text-accent" />
            <span className="text-xs font-bold text-foreground sm:text-sm">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
