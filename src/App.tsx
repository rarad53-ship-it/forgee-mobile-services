import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
// 🔥 (اختياري لاحقاً)
// import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>

            {/* 🟢 الصفحة الرئيسية */}
            <Route path="/" element={<Index />} />

            {/* 💰 صفحة الأسعار */}
            <Route path="/pricing" element={<Pricing />} />

            {/* 📊 (مستقبلاً) لوحة التحكم */}
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}

            {/* ❌ صفحة 404 */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
