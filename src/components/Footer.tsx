import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Copyright Policy", href: "#" },
  { label: "Hyperlinking Policy", href: "#" },
  { label: "Disclaimer", href: "#" },
  { label: "Help", href: "#" },
];

const importantLinks = [
  { label: "About IBBI", to: "/about" },
  { label: "Legal Framework", to: "/legal-framework" },
  { label: "FAQs", to: "/faqs" },
  { label: "Tenders", to: "/tenders" },
  { label: "Right to Information", to: "/rti" },
  { label: "Contact Us", to: "/contact" },
];

const externalLinks = [
  { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
  { label: "National Company Law Tribunal", href: "https://nclt.gov.in" },
  { label: "India.gov.in", href: "https://www.india.gov.in" },
  { label: "Data.gov.in", href: "https://data.gov.in" },
];

const Footer = () => {
  return (
    <footer className="gov-footer">
      <div className="gov-saffron-line" />
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-sm font-bold mb-3 text-primary-foreground">About IBBI</h3>
            <p className="text-xs leading-relaxed opacity-80">
              The Insolvency and Bankruptcy Board of India was established on 1st October, 2016 under the Insolvency and Bankruptcy Code, 2016 (Code). It is a key pillar of the ecosystem responsible for implementation of the Code.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-sm font-bold mb-3 text-primary-foreground">Important Links</h3>
            <ul className="space-y-1.5">
              {importantLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-xs hover:underline opacity-80 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h3 className="text-sm font-bold mb-3 text-primary-foreground">External Links</h3>
            <ul className="space-y-1.5">
              {externalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs hover:underline opacity-80 hover:opacity-100 transition-opacity flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink size={10} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 pt-4">
          <div className="flex flex-wrap gap-3 mb-3">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-xs hover:underline opacity-70 hover:opacity-100">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
            <p className="text-xs opacity-70">
              © 2026 Insolvency and Bankruptcy Board of India. All Rights Reserved.
            </p>
            <p className="text-xs opacity-70">
              Last Updated: 30th March, 2026 | Visitors: 12,345,678
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
