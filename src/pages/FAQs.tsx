import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    q: "What is the Insolvency and Bankruptcy Code, 2016?",
    a: "The Insolvency and Bankruptcy Code, 2016 (Code) provides a time-bound process for resolving insolvency in companies and among individuals. Insolvency is a situation where individuals or companies are unable to repay their outstanding debt.",
  },
  {
    q: "What is IBBI?",
    a: "The Insolvency and Bankruptcy Board of India (IBBI) was established on 1st October, 2016 under the Insolvency and Bankruptcy Code, 2016. It is a key pillar of the ecosystem responsible for implementation of the Code.",
  },
  {
    q: "Who is an Insolvency Professional (IP)?",
    a: "An Insolvency Professional is a person registered with IBBI as an insolvency professional under the Insolvency and Bankruptcy Board of India (Insolvency Professionals) Regulations, 2016.",
  },
  {
    q: "What is Corporate Insolvency Resolution Process (CIRP)?",
    a: "CIRP is a process initiated when a corporate debtor commits a default. The process aims to resolve insolvency by allowing creditors to assess the viability of the debtor's business and explore options for restructuring.",
  },
  {
    q: "How can I file a complaint against an Insolvency Professional?",
    a: "Complaints against Insolvency Professionals can be filed through the IBBI website or by writing to the relevant Insolvency Professional Agency (IPA).",
  },
  {
    q: "What is an Information Utility (IU)?",
    a: "An Information Utility is an entity registered with IBBI that stores financial information and provides services related to authentication and verification of financial information.",
  },
  {
    q: "What is the role of Committee of Creditors (CoC)?",
    a: "The Committee of Creditors comprises all financial creditors of the corporate debtor. The CoC is responsible for approving the resolution plan during CIRP.",
  },
  {
    q: "What is liquidation under the Code?",
    a: "Liquidation is the process of winding up a company when the CIRP fails to result in a resolution plan or when the resolution plan is rejected.",
  },
];

const FAQs = () => {
  return (
    <Layout>
      <div className="bg-muted py-3">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary">Home</a>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium">FAQs</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-foreground mb-6">
          Frequently Asked <span className="text-gov-saffron">Questions</span>
        </h1>

        <div className="bg-background rounded-lg shadow-sm border border-border p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-sm font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Layout>
  );
};

export default FAQs;
