import {
  Users,
  FileText,
  Building2,
  Briefcase,
  ListOrdered,
  ScrollText,
  HelpCircle,
  Info,
  Landmark,
} from "lucide-react";
import { Link } from "react-router-dom";

const quickLinksRow1 = [
  { icon: Users, label: "IP Corner", color: "bg-gov-ql-1", link: "/ip-corner" },
  { icon: FileText, label: "Intimation of Application", color: "bg-gov-ql-2", link: "/legal-framework" },
  { icon: Building2, label: "Corporate Processes", color: "bg-gov-ql-3", link: "/corporate-processes" },
  { icon: Briefcase, label: "Employee Corner", color: "bg-gov-ql-4", link: "/about" },
];

const quickLinksRow2 = [
  { icon: ListOrdered, label: "Listing and Auction Platform", color: "bg-gov-ql-2", link: "/orders" },
  { icon: ScrollText, label: "Tender", color: "bg-destructive", link: "/tenders" },
  { icon: HelpCircle, label: "FAQs", color: "bg-gov-ql-3", link: "/faqs" },
  { icon: Info, label: "Right to Information", color: "bg-gov-ql-1", link: "/rti" },
  { icon: Landmark, label: "List & FAQs of Unclaimed Deposits", color: "bg-gov-ql-4", link: "/faqs" },
];

const QuickLinks = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
          Quick <span className="text-gov-saffron">Links</span>
        </h2>

        {/* Row 1 - 4 items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-3 md:mb-4">
          {quickLinksRow1.map((link) => (
            <Link
              key={link.label}
              to={link.link}
              className={`gov-quick-link ${link.color} rounded-lg min-h-[100px] md:min-h-[120px]`}
            >
              <link.icon size={28} className="mb-2 md:mb-3 md:w-9 md:h-9" />
              <span className="text-xs md:text-sm font-semibold leading-tight">{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Row 2 - 5 items */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {quickLinksRow2.map((link) => (
            <Link
              key={link.label}
              to={link.link}
              className={`gov-quick-link ${link.color} rounded-lg min-h-[100px] md:min-h-[120px]`}
            >
              <link.icon size={28} className="mb-2 md:mb-3 md:w-9 md:h-9" />
              <span className="text-xs md:text-sm font-semibold leading-tight">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
