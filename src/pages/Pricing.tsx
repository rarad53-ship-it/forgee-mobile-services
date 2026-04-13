const Pricing = () => {
  const openWhatsApp = (plan: string) => {
    const phone = "967774400447";
    const message = encodeURIComponent(
      `مرحباً، أريد الاشتراك في باقة: ${plan}`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        باقاتنا وأسعارنا
      </h1>

      <p className="text-center text-gray-600 mb-10">
        اختر الباقة المناسبة لك وابدأ الآن
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* 🟢 باقة أساسية */}
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <h2 className="text-xl font-bold mb-2">الباقة الأساسية</h2>
          <p className="text-3xl font-bold text-blue-600 mb-4">
            يبدأ من 150 ريال
          </p>

          <ul className="text-sm text-gray-600 mb-6 space-y-2">
            <li>✔️ تصليح بسيط</li>
            <li>✔️ وقت تنفيذ سريع</li>
            <li>✔️ دعم واتساب</li>
          </ul>

          <button
            onClick={() => openWhatsApp("الباقة الأساسية")}
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold w-full"
          >
            احجز الآن
          </button>
        </div>

        {/* 🔵 باقة احترافية */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center border-2 border-blue-500">
          <h2 className="text-xl font-bold mb-2">الباقة الاحترافية</h2>
          <p className="text-3xl font-bold text-blue-600 mb-4">
            يبدأ من 300 ريال
          </p>

          <ul className="text-sm text-gray-600 mb-6 space-y-2">
            <li>✔️ تصليح متقدم</li>
            <li>✔️ ضمان 3 أشهر</li>
            <li>✔️ خدمة سريعة</li>
          </ul>

          <button
            onClick={() => openWhatsApp("الباقة الاحترافية")}
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold w-full"
          >
            احجز الآن
          </button>
        </div>

        {/* 🔴 باقة VIP */}
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <h2 className="text-xl font-bold mb-2">باقة VIP</h2>
          <p className="text-3xl font-bold text-blue-600 mb-4">
            يبدأ من 500 ريال
          </p>

          <ul className="text-sm text-gray-600 mb-6 space-y-2">
            <li>✔️ صيانة شاملة</li>
            <li>✔️ أولوية التنفيذ</li>
            <li>✔️ دعم مباشر</li>
          </ul>

          <button
            onClick={() => openWhatsApp("باقة VIP")}
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold w-full"
          >
            احجز الآن
          </button>
        </div>

      </div>
    </div>
  );
};

export default Pricing;Add Pricing page
