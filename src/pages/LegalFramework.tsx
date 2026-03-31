import Layout from "@/components/Layout";
import { FileText, BookOpen, ScrollText, AlertCircle, BookMarked } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    icon: BookOpen,
    title: "The Insolvency and Bankruptcy Code, 2016",
    desc: "The Code provides a time-bound process for resolving insolvency in companies and among individuals.",
    link: "/legal-framework/code",
  },
  {
    icon: FileText,
    title: "Rules",
    desc: "Rules framed under the Insolvency and Bankruptcy Code, 2016 by the Central Government.",
    link: "/legal-framework/rules",
  },
  {
    icon: ScrollText,
    title: "Regulations",
    desc: "Regulations framed by the Insolvency and Bankruptcy Board of India under the Code.",
    link: "/legal-framework/regulations",
  },
  {
    icon: AlertCircle,
    title: "Circulars",
    desc: "Circulars issued by IBBI from time to time for effective implementation of the Code.",
    link: "/legal-framework/circulars",
  },
  {
    icon: BookMarked,
    title: "Guidelines",
    desc: "Guidelines issued by IBBI for stakeholders under the Code.",
    link: "/legal-framework/guidelines",
  },
];

const LegalFramework = () => {
  return (
    <Layout>
      <div className="bg-muted py-3">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary">Home</a>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium">Legal Framework</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-foreground mb-6">
          Legal <span className="text-gov-saffron">Framework</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Link
              key={section.title}
              to={section.link}
              className="bg-background rounded-lg shadow-sm border border-border p-6 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg bg-gov-blue flex items-center justify-center mb-4 group-hover:bg-gov-saffron transition-colors">
                <section.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{section.title}</h3>
              <p className="text-sm text-muted-foreground">{section.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default LegalFramework;
