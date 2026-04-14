const Pricing = () => {

  const openWhatsApp = (plan: string, source: string) => {
    const phone = "967774400447";

    const message = encodeURIComponent(
      `مرحباً فورجي، أريد الاشتراك في باقة: ${plan}`
    );

    // 🔥 فتح واتساب مع تتبع المصدر
    window.open(
      `https://wa.me/${phone}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );

    // 📊 (اختياري لو عندك tracking)
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "pricing_whatsapp_click", {
        plan,
        source,
      });
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 py-12 px-4">

      {/* 🧠 العنوان */}
      <h1 className="text-3xl font-black text-center mb-3">
        باقاتنا وأسعارنا
      </h1>

      <p className="text-center text-gray-600 mb-10">
        اختر الباقة المناسبة لك وابدأ خلال دقائق 🚀
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {/* 🟢 الأساسية */}
        <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition">

          <h2 className="text-xl font-bold mb-2">الباقة الأساسية</h2>

          <p className="text-3xl font-black text-blue-600 mb-4">
            يبدأ من 150 ريال
          </p>

          <ul className="text-sm text-gray-600 mb-6 space-y-2">
            <li>✔️ تصليح بسيط</li>
            <li>✔️ وقت تنفيذ سريع</li>
            <li>✔️ دعم واتساب</li>
          </ul>

          <button
            onClick={() => openWhatsApp("الباقة الأساسية", "pricing_basic")}
            className="bg-green-500 hover:bg-green-600 transition text-white px-6 py-3 rounded-lg font-bold w-full"
          >
            اطلب عرض سعر الآن
          </button>
        </div>

        {/* 🔵 الاحترافية */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center border-2 border-blue-500 scale-105">

          <div className="text-xs font-bold text-blue-600 mb-2">
            ⭐ الأكثر اختياراً
          </div>

          <h2 className="text-xl font-bold mb-2">الباقة الاحترافية</h2>

          <p className="text-3xl font-black text-blue-600 mb-4">
            يبدأ من 300 ريال
          </p>

          <ul className="text-sm text-gray-600 mb-6 space-y-2">
            <li>✔️ تصليح متقدم</li>
            <li>✔️ ضمان 3
