import Layout from "@/components/Layout";
import { Calendar, FileText, Download } from "lucide-react";

const tenders = [
  {
    date: "25th March, 2026",
    title: "Tender for Annual Maintenance Contract for IT Infrastructure",
    deadline: "15th April, 2026",
    status: "Open",
  },
  {
    date: "20th March, 2026",
    title: "Tender for Procurement of Office Equipment and Furniture",
    deadline: "10th April, 2026",
    status: "Open",
  },
  {
    date: "15th March, 2026",
    title: "Tender for Hiring of Consultancy Services for Research Studies",
    deadline: "05th April, 2026",
    status: "Open",
  },
  {
    date: "01st March, 2026",
    title: "Tender for Security Services at IBBI Head Office",
    deadline: "20th March, 2026",
    status: "Closed",
  },
  {
    date: "15th February, 2026",
    title: "Tender for Catering Services at IBBI Office",
    deadline: "05th March, 2026",
    status: "Closed",
  },
];

const Tenders = () => {
  return (
    <Layout>
      <div className="bg-muted py-3">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary">Home</a>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium">Tenders</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-foreground mb-6">
          <span className="text-gov-saffron">Tenders</span>
        </h1>

        <div className="bg-background rounded-lg shadow-sm border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gov-navy text-primary-foreground">
                  <th className="px-4 py-3 text-left text-sm font-semibold">S.No.</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Date</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Description</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Last Date</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Download</th>
                </tr>
              </thead>
              <tbody>
                {tenders.map((tender, i) => (
                  <tr key={i} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3 text-sm">{i + 1}</td>
                    <td className="px-4 py-3 text-sm whitespace-nowrap">{tender.date}</td>
                    <td className="px-4 py-3 text-sm">{tender.title}</td>
                    <td className="px-4 py-3 text-sm whitespace-nowrap">{tender.deadline}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        tender.status === "Open" 
                          ? "bg-gov-green/20 text-gov-green" 
                          : "bg-destructive/20 text-destructive"
                      }`}>
                        {tender.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <button className="text-gov-blue hover:text-gov-saffron transition-colors">
                        <Download size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tenders;
