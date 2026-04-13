import { AlertCircle } from "lucide-react";

const ErrorState = () => (
  <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-destructive/10 p-8 text-center">
    <AlertCircle className="h-8 w-8 text-destructive" />
    <p className="text-sm font-bold text-destructive">عذراً، تعذر تحميل الخدمات.</p>
    <button
      onClick={() => window.location.reload()}
      className="rounded-xl bg-primary px-6 py-2 text-sm font-bold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
    >
      إعادة المحاولة
    </button>
  </div>
);

export default ErrorState;
