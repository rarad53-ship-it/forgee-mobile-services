import { getSummary } from "@/lib/analyticsStore";

const Dashboard = () => {
  const { total, bySource, byService } = getSummary();

  return (
    <div className="min-h-screen bg-background p-6">

      {/* العنوان */}
      <h1 className="text-2xl font-black mb-6">
        📊 لوحة تحكم فورجي
      </h1>

      {/* إجمالي الضغطات */}
      <div className="grid gap-4 md:grid-cols-3 mb-8">

        <div className="p-4 rounded-xl bg-card shadow">
          <p className="text-sm text-muted-foreground">إجمالي الطلبات</p>
          <p className="text-2xl font-bold">{total}</p>
        </div>

        <div className="p-4 rounded-xl bg-card shadow">
          <p className="text-sm text-muted-foreground">مصدر Hero</p>
          <p className="text-2xl font-bold">{bySource.hero || 0}</p>
        </div>

        <div className="p-4 rounded-xl bg-card shadow">
          <p className="text-sm text-muted-foreground">Floating</p>
          <p className="text-2xl font-bold">{bySource.floating || 0}</p>
        </div>

      </div>

      {/* المصادر */}
      <div className="mb-8">
        <h2 className="font-bold mb-3">🔥 مصادر العملاء</h2>

        <div className="space-y-2">
          {Object.entries(bySource).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between p-3 rounded-lg bg-secondary"
            >
              <span>{key}</span>
              <span className="font-bold">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* الخدمات */}
      <div>
        <h2 className="font-bold mb-3">💰 أكثر الخدمات طلباً</h2>

        <div className="space-y-2">
          {Object.entries(byService).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between p-3 rounded-lg bg-secondary"
            >
              <span>{key}</span>
              <span className="font-bold">{value}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
