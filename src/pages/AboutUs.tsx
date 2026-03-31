import Layout from "@/components/Layout";
import { Building2, Users, Target, Award } from "lucide-react";

const AboutUs = () => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted py-3">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary">Home</a>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium">About Us</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-foreground mb-6">
          About <span className="text-gov-saffron">IBBI</span>
        </h1>

        <div className="prose max-w-none">
          <div className="bg-background rounded-lg shadow-sm border border-border p-6 mb-6">
            <p className="text-foreground leading-relaxed mb-4">
              The Insolvency and Bankruptcy Board of India (IBBI) was established on 1st October, 2016 under the Insolvency and Bankruptcy Code, 2016 (Code). It is a key pillar of the ecosystem responsible for implementation of the Code that consolidates and amends the laws relating to reorganization and insolvency resolution of corporate persons, partnership firms and individuals in a time bound manner for maximization of value of assets of such persons, to promote entrepreneurship, availability of credit and balance the interests of all the stakeholders.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              It has regulatory oversight over the Insolvency Professionals, Insolvency Professional Agencies, Insolvency Professional Entities and Information Utilities. It writes and enforces rules for processes such as corporate insolvency resolution, corporate liquidation, individual insolvency resolution, and individual bankruptcy under the Code.
            </p>
            <p className="text-foreground leading-relaxed">
              It has also been designated as the 'Authority' under the Companies (Registered Valuers and Valuation) Rules, 2017 for regulation and development of the profession of valuers in the country.
            </p>
            <p>It is a unique regulator: regulates a profession as well as processes. It has regulatory oversight over the Insolvency Professionals, Insolvency Professional Agencies, Insolvency Professional Entities and Information Utilities. It writes and enforces rules for processes, namely, corporate insolvency resolution, corporate liquidation, individual insolvency resolution and individual bankruptcy under the Code. It has recently been tasked to promote the development of, and regulate, the working and practices of, insolvency professionals, insolvency professional agencies and information utilities and other institutions, in furtherance of the purposes of the Code. It has also been designated as the ‘Authority’ under the Companies (Registered Valuers and Valuation Rules), 2017 for regulation and development of the profession of valuers in the country.</p>
          </div>

          {/* Key Functions */}
          <h2 className="text-xl font-bold text-foreground mb-4">Key Functions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { icon: Building2, title: "Registration", desc: "Registration of Insolvency Professional Agencies, Insolvency Professionals, and Information Utilities." },
              { icon: Users, title: "Regulation", desc: "Regulation of Insolvency Professionals, Insolvency Professional Agencies, and Information Utilities." },
              { icon: Target, title: "Promotion", desc: "Promotion of transparency, accountability and integrity in the insolvency resolution process." },
              { icon: Award, title: "Development", desc: "Development of the profession of Insolvency Professionals and Registered Valuers." },
            ].map((item) => (
              <div key={item.title} className="bg-background rounded-lg shadow-sm border border-border p-5 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gov-blue flex items-center justify-center shrink-0">
                  <item.icon size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Governing Board */}
          <h2 className="text-xl font-bold text-foreground mb-4">Governing Board</h2>
          <div className="bg-background rounded-lg shadow-sm border border-border p-6">
            <p className="text-foreground leading-relaxed">
              The Board consists of a Chairperson, three ex-officio Members from the Ministries of Finance, Corporate Affairs and Law, and two other whole-time Members. The Board is responsible for the overall functioning and management of the IBBI.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
