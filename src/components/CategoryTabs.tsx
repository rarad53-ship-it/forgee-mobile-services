import { CATEGORIES, type CategoryKey } from "@/lib/constants";

interface Props {
  active: CategoryKey;
  onChange: (key: CategoryKey) => void;
}

const CategoryTabs = ({ active, onChange }: Props) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.key}
          onClick={() => onChange(cat.key)}
          className={`whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-bold transition-all ${
            active === cat.key
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-card text-muted-foreground ring-1 ring-border hover:bg-secondary"
          }`}
        >
          {cat.key === "all" ? "الكل" : cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
