import Layout from "@/components/Layout";
import { Info, FileText, ExternalLink } from "lucide-react";

const RTI = () => {
  return (
    <Layout>
      <div className="bg-muted py-3">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary">Home</a>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium">Right to Information</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-foreground mb-6">
          Right to <span className="text-gov-saffron">Information</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-background rounded-lg shadow-sm border border-border p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3">About RTI</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The Right to Information Act, 2005 mandates timely response to citizen requests for government information. It is an initiative taken by Department of Personnel and Training, Ministry of Personnel, Public Grievances and Pensions to provide a RTI Portal Gateway to the citizens for quick search of information on the details of first Appellate Authorities, PIOs etc.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Under the provisions of RTI Act, any citizen of India may request information from a "public authority" which is required to reply expeditiously or within thirty days.
              </p>
            </div>

            <div className="bg-background rounded-lg shadow-sm border border-border p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">RTI Officers</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-3 py-2 text-left text-sm font-semibold text-foreground">Designation</th>
                      <th className="px-3 py-2 text-left text-sm font-semibold text-foreground">Name</th>
                      <th className="px-3 py-2 text-left text-sm font-semibold text-foreground">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-3 py-2 text-sm">Central Public Information Officer</td>
                      <td className="px-3 py-2 text-sm">Sh. Rajesh Kumar</td>
                      <td className="px-3 py-2 text-sm">011-23462999</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-3 py-2 text-sm">First Appellate Authority</td>
                      <td className="px-3 py-2 text-sm">Smt. Priya Sharma</td>
                      <td className="px-3 py-2 text-sm">011-23462998</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-background rounded-lg shadow-sm border border-border p-6">
              <h3 className="text-sm font-semibold text-foreground mb-3">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  "RTI Online Portal",
                  "Manual on RTI Act",
                  "RTI Annual Returns",
                  "Disclosure under Section 4",
                ].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gov-blue hover:text-gov-saffron flex items-center gap-1 transition-colors">
                      <FileText size={12} />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gov-light-blue rounded-lg p-6">
              <h3 className="text-sm font-semibold text-foreground mb-3">File RTI Online</h3>
              <p className="text-xs text-muted-foreground mb-3">
                You can file an RTI application online through the official RTI portal.
              </p>
              <a href="https://rtionline.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-4 py-2 bg-gov-blue text-primary-foreground rounded text-sm font-medium hover:opacity-90 transition-opacity">
                RTI Online Portal <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RTI;
