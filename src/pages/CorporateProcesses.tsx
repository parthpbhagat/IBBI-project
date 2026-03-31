import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { ChevronRight } from "lucide-react";

type CorporateDebtorData = {
  id: number;
  name: string;
  cin: string;
  file_url?: string;
  [key: string]: any;
};

// --- MOCK DETAILS COMPONENT based on Screenshot ---
const CorporateDebtorDetails = ({ debtor, onBack }: { debtor: CorporateDebtorData, onBack: () => void }) => {
  // We mock some data if the backend doesn't provide it yet
  const processInitiated = debtor.process_initiated || "LIQUIDATOR";
  const applicantName = debtor.applicant_name || "Edelweiss Assets Reconstruction Co Ltd";
  const sector = debtor.sector || "";

  const professionals = debtor.professionals || [
    { name: "MAVENT RESTRUCTURING SERVICES LLP ( Ravindra Kumar Goyal )", regNo: "IBBI/IPE-0154/IPA-3/2023-24/50058", appointedAs: "Liquidator" },
    { name: "MAVENT RESTRUCTURING SERVICES LLP ( MUKESH KUMAR JAIN )", regNo: "IBBI/IPE-0154/IPA-3/2023-24/50058", appointedAs: "Liquidator" },
    { name: "Nitin Jain", regNo: "IBBI/IPA-001/IP-P01562/2019-2020/12462", appointedAs: "Liquidator" },
    { name: "Nitin Jain", regNo: "IBBI/IPA-001/IP-P01562/2019-2020/12462", appointedAs: "RP" },
    { name: "Mr. Nilesh Sharma", regNo: "IBBI/IPA-002/IP-N00104/2017-2018/10232", appointedAs: "RP" },
    { name: "Mr. Nilesh Sharma", regNo: "IBBI/IPA-002/IP-N00104/2017-2018/10232", appointedAs: "IRP" }
  ];

  return (
    <div className="w-full bg-white pb-16">
      {/* Banner */}
      <div className="bg-[#cca355] text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-300 via-transparent to-transparent">
             <svg className="absolute w-full h-full text-white/30" xmlns="http://www.w3.org/2000/svg">
                <defs><pattern id="grid2" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/></pattern></defs>
                <rect width="100%" height="100%" fill="url(#grid2)" />
             </svg>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-6xl flex justify-between items-end flex-wrap">
          <div>
            <h1 className="text-3xl font-normal tracking-wide mb-2 uppercase">CORPORATE PROCESSES</h1>
            <nav className="text-sm font-light">
              <a href="/" className="hover:underline text-white">Home</a>
              <span className="mx-2">›</span>
              <button onClick={onBack} className="hover:underline text-white">Corporate Processes</button>
              <span className="mx-2">›</span>
              <span className="uppercase">{debtor.name}</span>
            </nav>
          </div>
          <div className="text-sm font-medium mt-4 md:mt-0">
            CIN No: <span className="uppercase">{debtor.cin}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Menu */}
        <div className="w-full md:w-64 flex-shrink-0">
           <div className="bg-[#fcb900] text-white p-4 font-normal text-lg mb-2">
             CORPORATE<br/>PROCESSES
           </div>
           <nav className="flex flex-col text-[14px] text-[#0f2d4a]">
             {[ 
               { label: "Details About CD", active: true },
               { label: "Public Announcement", active: false },
               { label: "Claims", active: false },
               { label: "Invitation for Resolution Plan", active: false },
               { label: "Orders", active: false },
               { label: "Auction Notice", active: false }
             ].map((item, idx) => (
               <button key={idx} className={`flex items-center gap-2 py-3 border-b border-dotted border-gray-300 text-left hover:text-[#fcb900] transition-colors ${item.active ? "font-bold text-[#0f2d4a]" : "font-normal"}`}>
                 <ChevronRight size={14} className={item.active ? "text-[#fcb900]" : "text-gray-400"} />
                 {item.label}
               </button>
             ))}
           </nav>
        </div>

        {/* Content Area */}
        <div className="flex-grow">
          <h2 className="text-[16px] font-bold text-gray-900 mb-3">For CIRP/Liquidation Assignment</h2>
          <div className="border border-gray-300 mb-8 w-full max-w-4xl">
            <table className="w-full text-[13px] text-left border-collapse">
              <tbody>
                <tr className="border-b border-gray-200">
                  <th className="py-2.5 px-4 bg-gray-50/50 font-normal w-1/3 text-gray-700">CIN No</th>
                  <td className="py-2.5 px-4 font-medium uppercase border-l border-gray-200">{debtor.cin}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-2.5 px-4 bg-gray-50/50 font-normal w-1/3 text-gray-700">Name of the Corporate Debtor</th>
                  <td className="py-2.5 px-4 font-medium uppercase border-l border-gray-200">{debtor.name}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-2.5 px-4 bg-gray-50/50 font-normal w-1/3 text-gray-700">Process Initiated</th>
                  <td className="py-2.5 px-4 font-medium uppercase border-l border-gray-200">{processInitiated}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-2.5 px-4 bg-gray-50/50 font-normal w-1/3 text-gray-700">Name of the Applicant</th>
                  <td className="py-2.5 px-4 font-medium border-l border-gray-200">{applicantName}</td>
                </tr>
                <tr>
                  <th className="py-2.5 px-4 bg-gray-50/50 font-normal w-1/3 text-gray-700">Sector of business of CD</th>
                  <td className="py-2.5 px-4 font-medium border-l border-gray-200">{sector}</td>
                </tr>
                {debtor.file_url && (
                <tr className="border-t border-gray-200">
                  <th className="py-2.5 px-4 bg-gray-50/50 font-normal w-1/3 text-gray-700">Actions / Document</th>
                  <td className="py-2.5 px-4 font-medium border-l border-gray-200">
                    <a href={debtor.file_url} target="_blank" rel="noopener noreferrer" className="bg-[#1eb4b8] text-white px-4 py-1.5 rounded text-xs inline-block mr-2 mt-1 hover:bg-[#1aa3a7] transition">
                      View Document (PDF)
                    </a>
                    <a href={debtor.file_url} download target="_blank" rel="noopener noreferrer" className="bg-[#2b7cbc] text-white px-4 py-1.5 rounded text-xs inline-block mt-1 hover:bg-[#20669b] transition">
                      Download PDF
                    </a>
                  </td>
                </tr>
                )}
              </tbody>
            </table>
          </div>

          <h2 className="text-[18px] font-light text-gray-900 mb-3">Professionals Associated</h2>
          <div className="border border-gray-300 w-full overflow-x-auto">
            <table className="w-full text-[13px] text-left border-collapse min-w-[600px]">
              <thead>
                <tr>
                   <th colSpan={3} className="bg-[#0f2d4a] text-white py-1.5 px-4 text-center font-normal text-xs">
                     Process with ICD: 15-02-2019
                   </th>
                </tr>
                <tr className="bg-[#fcb900] text-gray-900 border-b border-gray-300">
                  <th className="py-2 px-4 font-semibold text-center w-[45%] border-r border-gray-300">Name</th>
                  <th className="py-2 px-4 font-semibold text-center w-[35%] border-r border-gray-300">Registration No.</th>
                  <th className="py-2 px-4 font-semibold text-center w-[20%]">Appointed As</th>
                </tr>
              </thead>
              <tbody>
                {professionals.map((prof, i) => (
                   <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
                     <td className="py-2.5 px-4 text-[#2b7cbc] hover:underline cursor-pointer border-r border-gray-200 text-xs">
                       {prof.name}
                     </td>
                     <td className="py-2.5 px-4 text-gray-700 border-r border-gray-200 text-xs">
                       {prof.regNo}
                     </td>
                     <td className="py-2.5 px-4 text-gray-700 text-xs">
                       {prof.appointedAs}
                     </td>
                   </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <button 
              onClick={onBack}
              className="bg-[#cca355] hover:bg-[#b58c42] text-white px-6 py-1.5 rounded-sm shadow text-sm font-medium transition-colors"
            >
              Back
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};


// --- MAIN PAGE COMPONENT ---
const CorporateProcesses = () => {
  const [urlParams] = useSearchParams();
  const urlId = urlParams.get("id");

  const [formData, setFormData] = useState({ name: "", cin: "" });
  const [searchParams, setSearchParams] = useState({ name: "", cin: "", submitted: false });
  const [selectedDebtor, setSelectedDebtor] = useState<CorporateDebtorData | null>(null);

  const { data: dbResults = [], isLoading, error } = useQuery<CorporateDebtorData[]>({
    queryKey: ["corporateDebtor", searchParams, urlId],
    queryFn: async () => {
      // If we are looking for a specific ID in the URL
      if (urlId) {
        const response = await fetch(`http://localhost:5000/api/corporate_debtor?id=${urlId}`);
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      }

      // Normal search
      if (!searchParams.submitted) return [];
      
      const queryStr = new URLSearchParams();
      if (searchParams.name) queryStr.append("name", searchParams.name);
      if (searchParams.cin) queryStr.append("cin", searchParams.cin);
      
      const response = await fetch(`http://localhost:5000/api/corporate_debtor?${queryStr}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    enabled: !!urlId || searchParams.submitted
  });

  useEffect(() => {
    if (urlId && dbResults.length > 0) {
      setSelectedDebtor(dbResults[0]);
    }
  }, [urlId, dbResults]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ ...formData, submitted: true });
  };

  const handleClear = () => {
    setFormData({ name: "", cin: "" });
    setSearchParams({ name: "", cin: "", submitted: false });
    setSelectedDebtor(null);
  };

  // If a debtor is selected, show only the details view
  if (selectedDebtor) {
    return (
      <Layout>
        <CorporateDebtorDetails debtor={selectedDebtor} onBack={() => setSelectedDebtor(null)} />
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Banner Section */}
      <div className="bg-[#cca355] text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-300 via-transparent to-transparent">
             <svg className="absolute w-full h-full text-white/30" xmlns="http://www.w3.org/2000/svg">
                <defs><pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/></pattern></defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
             </svg>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-6xl">
          <h1 className="text-3xl font-normal tracking-wide mb-2 uppercase">CORPORATE PROCESSES</h1>
          <nav className="text-sm font-light">
            <a href="/" className="hover:underline text-white">Home</a>
            <span className="mx-2">›</span>
            <span>Corporate Processes</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 mb-16 flex flex-col items-center max-w-5xl">
        
        {/* Yellow Instruction Box */}
        <div className="bg-[#d49a00] text-center p-3 mb-6 w-full text-[15px] font-bold text-gray-900 border border-[#b8860b]">
           To retrieve data pertaining to a particular CD, please provide details and click relevant link or click the link w/o name to fetch the complete available records
        </div>

        {/* Main Form Box */}
        <div className="bg-white border-2 border-gray-100 shadow-[0_0_15px_rgba(0,0,0,0.05)] rounded-md w-full p-0">
          <div className="border-b border-gray-200 pt-6 pb-2 px-8">
            <h2 className="text-[18px] text-[#0f2d4a] font-normal border-b-[3px] border-[#fcb900] pb-1 inline-block">
              Corporate Debtor Master Data
            </h2>
          </div>
          
          <form className="p-8 px-8 md:px-16" onSubmit={handleSubmit}>
            <div className="space-y-6">
              
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] text-gray-700 font-bold">
                  Corporate Debtor Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Maruti Cotex Limited"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-blue-400 w-full md:w-4/5 text-sm"
                />
              </div>

              <div className="flex flex-col gap-1.5 pt-1">
                <label className="text-[14px] text-gray-700 font-bold">
                  Corporate Debtor CIN No.
                </label>
                <input
                  type="text"
                  placeholder="e.g. U17115PN2006PLC022143"
                  value={formData.cin}
                  onChange={(e) => setFormData({ ...formData, cin: e.target.value })}
                  className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-blue-400 w-full md:w-4/5 text-sm uppercase"
                />
              </div>

              <div className="flex gap-4 pt-4">
                 <button type="submit" className="bg-[#112a46] hover:bg-[#1a3d66] text-white px-10 py-2 rounded font-semibold text-sm transition-colors">
                   SUBMIT
                 </button>
                 <button type="button" onClick={handleClear} className="bg-[#1eb4b8] hover:bg-[#1aa3a7] text-white px-10 py-2 rounded font-semibold text-sm transition-colors">
                   CLEAR ALL
                 </button>
              </div>

            </div>
          </form>
        </div>

        {/* Bottom Action Links/Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mt-6 max-w-4xl mx-auto w-full">
           {["Public Announcement", "Claims", "Invitation of Resolution Plan", "Auction Notices", "Orders", "Summary of Outcome"].map((link, idx) => (
             <button key={idx} className="bg-[#2b7cbc] hover:bg-[#20669b] text-white px-4 py-2 rounded text-[13px] font-medium transition-colors">
               {link}
             </button>
           ))}
        </div>

        {/* Search Results Display Section */}
        {searchParams.submitted && (
          <div className="mt-12 w-full animate-in fade-in slide-in-from-bottom-4">
             <h3 className="text-lg font-bold text-[#0f2d4a] mb-4 border-b border-gray-200 pb-2">Search Results</h3>
             
             {isLoading ? (
                <div className="flex justify-center p-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#fcb900]"></div>
                </div>
             ) : error ? (
                <div className="text-red-500 bg-red-50 p-4 border border-red-200 rounded">
                  Error fetching data. Ensure the database server is running and the 'corporate_debtors' table exists.
                </div>
             ) : dbResults.length > 0 ? (
                <div className="overflow-x-auto border border-gray-200 rounded">
                  <table className="w-full text-sm text-left align-middle border-collapse.">
                    <thead className="bg-gray-100 text-gray-700">
                      <tr>
                        <th className="px-4 py-3 border-b font-semibold">ID</th>
                        <th className="px-4 py-3 border-b font-semibold">Corporate Debtor Name</th>
                        <th className="px-4 py-3 border-b font-semibold">CIN No.</th>
                        <th className="px-4 py-3 border-b font-semibold text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white text-gray-600">
                      {dbResults.map((row: any, i: number) => (
                        <tr key={row.id || i} className="hover:bg-gray-50 bg-white">
                          <td className="px-4 py-3 align-middle">{row.id || i + 1}</td>
                          <td className="px-4 py-3 align-middle font-medium text-gray-900">{row.name}</td>
                          <td className="px-4 py-3 align-middle">{row.cin}</td>
                          <td className="px-4 py-3 align-middle text-right">
                             <a 
                               href={`/corporate-processes?id=${row.id}`} 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded text-xs font-semibold shadow-sm transition-colors"
                             >
                               View Details
                             </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
             ) : (
                <div className="text-gray-500 bg-gray-50 p-6 text-center border border-gray-200 rounded">
                  No records found for the given search criteria.
                </div>
             )}
          </div>
        )}

      </div>
    </Layout>
  );
};

export default CorporateProcesses;
