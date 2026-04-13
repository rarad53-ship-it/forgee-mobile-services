import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/data";

const FloatingWhatsApp = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    // 📊 تتبع الضغطات
    const current = localStorage.getItem("whatsapp_clicks");
    const count = current ? parseInt(current) : 0;
    localStorage.setItem("whatsapp_clicks", String(count + 1));

    // 💬 إرسال إلى واتساب
    const url = buildWhatsAppUrl("طلب عام");
    const finalUrl = `${url}&text=${encodeURIComponent(message)}`;

    window.open(finalUrl, "_blank");

    setOpen(false);
    setMessage("");
  };

  return (
    <>
      {/* 🔥 Floating Button */}
      <div className="fixed bottom-6 start-6 z-50 flex flex-col items-center gap-2">

        <span className="rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-lg">
          تواصل معنا الآن
        </span>

        <button
          onClick={() => setOpen(true)}
          aria-label="تواصل عبر واتساب"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-xl animate-pulse-wa transition-transform hover:scale-110 active:scale-95"
        >
          <MessageCircle className="h-7 w-7" />
        </button>
      </div>

      {/* 🧠 MODAL (Funnel Layer) */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40">

          <div className="w-full max-w-md rounded-t-2xl bg-white p-5">

            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold">
                💬 كيف نقدر نساعدك؟
              </h3>

              <button onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Input */}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="اكتب طلبك (مثال: أريد تصليح شاشة جهاز سامسونج)"
              className="h-28 w-full rounded-xl border p-3 text-sm outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* CTA */}
            <button
              onClick={handleSend}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-3 font-bold text-white hover:bg-green-600"
            >
              <MessageCircle className="h-5 w-5" />
              إرسال إلى واتساب الآن
            </button>

            {/* Trust line */}
            <p className="mt-2 text-center text-xs text-gray-500">
              ⚡ الرد خلال دقائق - خدمة سريعة ومضمونة
            </p>

          </div>
        </div>
      )}
    </>
  );
};

export default FloatingWhatsApp;
