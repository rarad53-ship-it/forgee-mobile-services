import { useEffect, useState } from "react";
import { getSummary, getAnalytics } from "@/lib/analytics";

const Dashboard = () => {
  const [summary, setSummary] = useState<any>(null);

  useEffect(() => {
    setSummary(getSummary());
  }, []);

  if (!summary) {
    return <div className="p-10 text-center">جاري تحميل البيانات...</div>;
  }

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 p-6">

      <h1 className="text-2xl font-black mb-6">
        📊 لوحة التحكم (CRM فورجي)
      </h1>

      {/* 🔥 الإحصائيات العامة */}
      <div className="grid md:grid-cols-4 gap-4">

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-sm text-gray-500">إجمالي التفاعلات</h2>
          <p className="text-2xl font-bold">{summary.totalClicks}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-sm text-gray-500">ضغطات اليوم</h2>
          <p className="text-2xl font-bold">{summary.last24h}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-sm text-gray-500">Hero</h2>
          <p className="text-2xl font-bold">{summary.bySource.hero}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-sm text-gray-500">Service Cards</h2>
          <p className="text-2xl font-bold">{summary.bySource.service_card}</p>
        </div>

      </div>

      {/* 📦 أكثر الخدمات طلباً */}
      <div className="mt-8 bg-white p-4 rounded-xl shadow">
        <h2 className="font-bold mb-3">🔥 أكثر الخدمات طلباً</h2>

        {Object.entries(summary.byService).map(([key, value]: any) => (
          <div key={key} className="flex justify-between border-b py-2">
            <span>{key}</span>
            <span className="font-bold">{value}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Dashboard;
