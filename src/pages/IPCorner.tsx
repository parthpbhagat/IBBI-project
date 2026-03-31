import Layout from "@/components/Layout";
import { Users, Search, FileText, Award, BookOpen } from "lucide-react";

const IPCorner = () => {
  return (
    <Layout>
      <div className="bg-muted py-3">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary">Home</a>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium">IP Corner</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-foreground mb-6">
          IP <span className="text-gov-saffron">Corner</span>
        </h1>

        {/* Search IP */}
        <div className="bg-background rounded-lg shadow-sm border border-border p-6 mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Search Insolvency Professional</h2>
          <div className="flex gap-3 flex-wrap">
            <input type="text" placeholder="Enter Name or Registration Number" className="flex-1 min-w-[250px] border border-border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
            <button className="px-6 py-2 bg-gov-blue text-primary-foreground rounded text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
              <Search size={16} /> Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Users, title: "List of IPs", desc: "View complete list of registered Insolvency Professionals." },
            { icon: Award, title: "IP Agencies", desc: "List of Insolvency Professional Agencies (IPAs)." },
            { icon: FileText, title: "IP Regulations", desc: "Regulations governing Insolvency Professionals." },
            { icon: BookOpen, title: "Examination", desc: "Limited Insolvency Examination details and schedule." },
            { icon: FileText, title: "Disciplinary Actions", desc: "Disciplinary orders against Insolvency Professionals." },
            { icon: Users, title: "IP Entities", desc: "Registered Insolvency Professional Entities." },
          ].map((item) => (
            <a key={item.title} href="#" className="bg-background rounded-lg shadow-sm border border-border p-5 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-lg bg-gov-blue flex items-center justify-center mb-3 group-hover:bg-gov-saffron transition-colors">
                <item.icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 text-sm">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default IPCorner;
