import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/data";
import { SITE_NAME } from "@/lib/constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">

        {/* 🟢 اسم الموقع */}
        <span className="text-lg font-black text-foreground">
          {SITE_NAME}
        </span>

        {/* 🔗 روابط الموقع */}
        <div className="flex items-center gap-4">

          <Link to="/" className="font-bold text-sm hover:text-blue-600">
            الرئيسية
          </Link>

          <Link to="/pricing" className="font-bold text-sm hover:text-blue-600">
            الأسعار
          </Link>

          {/* 📱 زر واتساب */}
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-whatsapp px-4 py-2 text-sm font-bold text-whatsapp-foreground transition-transform hover:scale-105 active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            احصل على عرض خلال 5 دقائق 🚀
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
