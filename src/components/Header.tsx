import { Search } from "lucide-react";
import indiaEmblem from "@/assets/india-emblem.png";

const Header = () => {
  return (
    <header className="bg-background py-3 px-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3 md:gap-4">
          <img src={indiaEmblem} alt="Government of India Emblem" className="w-16 h-20 md:w-20 md:h-24 object-contain" />
          <div className="hidden sm:block">
            <p className="text-[10px] md:text-xs text-muted-foreground">
              Insolvency and Bankruptcy Board of India
            </p>
            <h1 className="text-sm md:text-lg font-bold text-foreground leading-tight">
              Insolvency and Bankruptcy Board of India
            </h1>
          </div>
        </div>

        {/* Right Section - hidden on small mobile */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex gap-2">
            <a
              href="#"
              className="px-4 py-1.5 text-sm font-medium rounded bg-gov-saffron text-primary-foreground hover:opacity-90 transition-opacity"
            >
              IP/RV Login
            </a>
            <a
              href="#"
              className="px-4 py-1.5 text-sm font-medium rounded bg-gov-saffron text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Grievances / Complaints Login
            </a>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border border-border rounded px-3 py-1.5 text-sm w-48 focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
              <Search size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
