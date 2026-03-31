import Layout from "@/components/Layout";
import { useQuery } from "@tanstack/react-query";
import { FileText } from "lucide-react";

type DownloadData = {
  id: number;
  sr_no: number;
  subject: string;
  form_name: string;
  file_size: string;
  file_url: string;
};

const Downloads = () => {
  const { data = [], isLoading, error } = useQuery<DownloadData[]>({
    queryKey: ["downloads"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/api/downloads");
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    }
  });

  // Group data by sr_no/subject
  const groupedData: Record<number, { subject: string, forms: DownloadData[] }> = {};
  data.forEach(item => {
    if (!groupedData[item.sr_no]) {
      groupedData[item.sr_no] = { subject: item.subject, forms: [] };
    }
    groupedData[item.sr_no].forms.push(item);
  });

  // Get ordered keys
  const sortedSrNos = Object.keys(groupedData).map(Number).sort((a, b) => a - b);

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
          <h1 className="text-3xl font-normal tracking-wide mb-2 uppercase">DOWNLOADS</h1>
          <nav className="text-sm font-light">
            <a href="/" className="hover:underline text-white">Home</a>
            <span className="mx-2">›</span>
            <span>Downloads</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 mb-16 w-full max-w-6xl">
        <div className="w-full border border-gray-400 overflow-hidden">
          {/* Header Row */}
          <div className="bg-[#6b6246] text-white font-semibold flex p-3 text-sm border-b border-gray-400">
             <div className="w-[8%] px-2">Sr. No.</div>
             <div className="w-[42%] px-2 border-l border-white/20">Subject</div>
             <div className="w-[50%] px-2 border-l border-white/20">Forms</div>
          </div>

          {/* Table Body */}
          {isLoading ? (
             <div className="p-8 text-center text-gray-500">Loading downloads...</div>
          ) : error ? (
             <div className="p-8 text-center text-red-500">Error loading downloads from database</div>
          ) : sortedSrNos.length === 0 ? (
             <div className="p-8 text-center text-gray-500">No downloads available yet.</div>
          ) : (
             <div className="flex flex-col">
               {sortedSrNos.map((srNo) => {
                 const row = groupedData[srNo];
                 return (
                   <div key={srNo} className="flex p-4 border-b border-gray-400 hover:bg-gray-50/50 transition-colors bg-white">
                     
                     {/* Sr No */}
                     <div className="w-[8%] px-2 font-bold text-gray-900 flex items-center">
                       {srNo}
                     </div>
                     
                     {/* Subject */}
                     <div className="w-[42%] px-2 text-sm text-gray-800 flex items-center font-medium leading-relaxed pr-6 border-l border-gray-100">
                       {row.subject}
                     </div>
                     
                     {/* Forms */}
                     <div className="w-[50%] px-2 border-l border-gray-100">
                       <div className="flex flex-wrap gap-2.5">
                         {row.forms.map((form) => (
                           <a 
                             key={form.id} 
                             href={form.file_url} 
                             target="_blank" 
                             rel="noopener noreferrer"
                             download
                             className="bg-white border-2 border-[#6b6246] hover:bg-[#6b6246] hover:text-white text-[#4a422d] font-bold text-[11px] rounded px-3 py-1.5 flex items-center gap-1.5 shadow-sm transition-colors group"
                             title="Download File"
                           >
                              <FileText size={12} className="text-red-600 group-hover:text-red-300" />
                              {form.form_name} {form.file_size ? `(${form.file_size})` : ''}
                           </a>
                         ))}
                       </div>
                     </div>
                     
                   </div>
                 );
               })}
             </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Downloads;
