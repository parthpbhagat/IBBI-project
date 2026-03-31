import Layout from "@/components/Layout";
import { FileText, Download, Calendar } from "lucide-react";

const orders = [
  { date: "28th March, 2026", title: "Disciplinary Order - Mr. Amit Kumar, IP", type: "Disciplinary", size: "456 KB" },
  { date: "25th March, 2026", title: "Approval of Resolution Plan - XYZ Industries Ltd.", type: "Resolution Plan", size: "1.2 MB" },
  { date: "22nd March, 2026", title: "Disciplinary Order - M/s ABC Valuers LLP", type: "Disciplinary", size: "312 KB" },
  { date: "20th March, 2026", title: "Approval of Resolution Plan - PQR Steels Private Limited", type: "Resolution Plan", size: "890 KB" },
  { date: "18th March, 2026", title: "Disciplinary Order - Sh. Ravi Prakash, IP", type: "Disciplinary", size: "267 KB" },
  { date: "15th March, 2026", title: "Approval of Resolution Plan - LMN Infrastructure Ltd.", type: "Resolution Plan", size: "1.5 MB" },
];

const Orders = () => {
  return (
    <Layout>
      <div className="bg-muted py-3">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary">Home</a>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium">Orders</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-foreground mb-6">
          <span className="text-gov-saffron">Orders</span>
        </h1>

        <div className="flex gap-3 mb-6 flex-wrap">
          <button className="px-4 py-2 text-sm rounded bg-gov-blue text-primary-foreground font-medium">All Orders</button>
          <button className="px-4 py-2 text-sm rounded bg-muted text-foreground hover:bg-border transition-colors font-medium">Disciplinary Orders</button>
          <button className="px-4 py-2 text-sm rounded bg-muted text-foreground hover:bg-border transition-colors font-medium">Resolution Plans</button>
        </div>

        <div className="space-y-3">
          {orders.map((order, i) => (
            <div key={i} className="bg-background rounded-lg shadow-sm border border-border p-4 flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <Calendar size={12} />
                  <span>{order.date}</span>
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                    order.type === "Disciplinary" ? "bg-destructive/20 text-destructive" : "bg-gov-green/20 text-gov-green"
                  }`}>
                    {order.type}
                  </span>
                </div>
                <p className="text-sm text-foreground font-medium">{order.title}</p>
              </div>
              <button className="flex items-center gap-1 text-sm text-gov-blue hover:text-gov-saffron transition-colors ml-4">
                <FileText size={14} />
                <span className="text-xs">({order.size})</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
