import { Home, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const menuItems = [
  {
    label: "ABOUT US",
    link: "/about",
    children: [
      { label: "About IBBI", link: "/about" },
      { label: "Governing Board", link: "/governing-board" },
      { label: "Advisory Committee", link: "/about" },
      { label: "Officers of IBBI", link: "/about" },
    ],
  },
  {
    label: "LEGAL FRAMEWORK",
    link: "/legal-framework",
    children: [
      { label: "The Code", link: "/legal-framework" },
      { label: "Rules", link: "/legal-framework" },
      { label: "Regulations", link: "/legal-framework" },
      { label: "Circulars", link: "/legal-framework" },
      { label: "Guidelines", link: "/legal-framework" },
    ],
  },
  {
    label: "SERVICE PROVIDER",
    link: "/ip-corner",
    children: [
      { label: "Insolvency Professionals", link: "/ip-corner" },
      { label: "Insolvency Professional Agencies", link: "/ip-corner" },
      { label: "Information Utilities", link: "/ip-corner" },
      { label: "Registered Valuers", link: "/ip-corner" },
    ],
  },
  {
    label: "EXAMINATION",
    link: "/about",
    children: [
      { label: "Limited Insolvency Examination", link: "/about" },
      { label: "Valuation Examination", link: "/about" },
    ],
  },
  {
    label: "MEDIA",
    link: "/about",
    children: [
      { label: "Press Releases", link: "/about" },
      { label: "Newsletter", link: "/about" },
      { label: "Videos", link: "/about" },
    ],
  },
  {
    label: "ORDERS",
    link: "/orders",
    children: [
      { label: "Disciplinary Orders", link: "/orders" },
      { label: "Resolution Plans", link: "/orders" },
    ],
  },
  {
    label: "RESOURCES",
    link: "/about",
    children: [
      { label: "Annual Reports", link: "/about" },
      { label: "Research", link: "/about" },
      { label: "Statistics", link: "/about" },
    ],
  },
  { label: "DOWNLOADS", link: "/downloads", children: [] },
  { label: "CONTACT US", link: "/contact", children: [] },
];

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <>
        <div className="gov-saffron-line" />
        <nav className="gov-nav">
          <div className="container mx-auto flex items-center justify-between px-4">
            <Link to="/" className="gov-nav-item flex items-center">
              <Home size={16} />
            </Link>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button className="gov-nav-item">
                  <Menu size={20} />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0 overflow-y-auto">
                <SheetHeader className="p-4 border-b border-border">
                  <SheetTitle className="text-left text-sm">Menu</SheetTitle>
                </SheetHeader>
                <div className="py-2">
                  {menuItems.map((item) => (
                    <div key={item.label} className="border-b border-border last:border-0">
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.link}
                          onClick={() => setMobileOpen(false)}
                          className="flex-1 px-4 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                        >
                          {item.label}
                        </Link>
                        {item.children.length > 0 && (
                          <button
                            onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                            className="px-4 py-3 text-muted-foreground hover:text-foreground"
                          >
                            <ChevronDown
                              size={14}
                              className={`transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                            />
                          </button>
                        )}
                      </div>
                      {item.children.length > 0 && mobileExpanded === item.label && (
                        <div className="bg-muted/50 pb-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.link}
                              onClick={() => setMobileOpen(false)}
                              className="block px-8 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </>
    );
  }

  return (
    <>
      <div className="gov-saffron-line" />
      <nav className="gov-nav">
        <div className="container mx-auto flex items-center flex-wrap">
          <Link to="/" className="gov-nav-item flex items-center">
            <Home size={16} />
          </Link>
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="gov-nav-item relative"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link to={item.link} className="flex items-center gap-1">
                {item.label}
                {item.children.length > 0 && <ChevronDown size={12} />}
              </Link>
              {item.children.length > 0 && openMenu === item.label && (
                <div className="absolute top-full left-0 bg-background shadow-lg rounded-b z-50 min-w-[220px] border border-border">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.link}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
