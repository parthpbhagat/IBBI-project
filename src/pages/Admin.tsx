import { useState } from "react";
import Layout from "@/components/Layout";

const Admin = () => {
  const [activeTab, setActiveTab] = useState<"company" | "news" | "downloads">("company");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Form states
  const [companyForm, setCompanyForm] = useState({
    name: "", cin: "", process_initiated: "", applicant_name: "", sector: ""
  });
  const [newsForm, setNewsForm] = useState({
    title: "", date: "", size: ""
  });
  const [downloadForm, setDownloadForm] = useState({
    sr_no: "", subject: "", form_name: "", file_size: ""
  });
  const [file, setFile] = useState<File | null>(null);

  const handleCompanySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    const formData = new FormData();
    Object.entries(companyForm).forEach(([key, value]) => formData.append(key, value));
    if (file) formData.append("file", file);

    try {
      const res = await fetch("http://localhost:5000/api/admin/corporate_debtor", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("✅ " + data.message);
        setCompanyForm({ name: "", cin: "", process_initiated: "", applicant_name: "", sector: "" });
        setFile(null);
      } else {
        setMessage("❌ Error: " + data.error);
      }
    } catch (err: any) {
      setMessage("❌ Network Error: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    const formData = new FormData();
    Object.entries(newsForm).forEach(([key, value]) => formData.append(key, value));
    if (file) formData.append("file", file);

    try {
      const res = await fetch("http://localhost:5000/api/admin/news", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("✅ " + data.message);
        setNewsForm({ title: "", date: "", size: "" });
        setFile(null);
      } else {
        setMessage("❌ Error: " + data.error);
      }
    } catch (err: any) {
      setMessage("❌ Network Error: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    const formData = new FormData();
    Object.entries(downloadForm).forEach(([key, value]) => formData.append(key, value));
    if (file) formData.append("file", file);

    try {
      const res = await fetch("http://localhost:5000/api/admin/downloads", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("✅ " + data.message);
        setDownloadForm({ sr_no: "", subject: "", form_name: "", file_size: "" });
        setFile(null);
      } else {
        setMessage("❌ Error: " + data.error);
      }
    } catch (err: any) {
      setMessage("❌ Network Error: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold text-[#0f2d4a] mb-6 text-center">Admin Panel</h1>
        
        {/* Tabs */}
        <div className="flex justify-center border-b border-gray-300 mb-8 overflow-x-auto">
          <button
            onClick={() => { setActiveTab("company"); setMessage(""); }}
            className={`px-6 py-3 font-semibold text-lg transition-colors border-b-4 whitespace-nowrap ${activeTab === "company" ? "border-[#fcb900] text-[#0f2d4a]" : "border-transparent text-gray-500 hover:text-gray-800"}`}
          >
            Add Company Data
          </button>
          <button
            onClick={() => { setActiveTab("news"); setMessage(""); }}
            className={`px-6 py-3 font-semibold text-lg transition-colors border-b-4 whitespace-nowrap ${activeTab === "news" ? "border-[#fcb900] text-[#0f2d4a]" : "border-transparent text-gray-500 hover:text-gray-800"}`}
          >
            Add News Item
          </button>
          <button
            onClick={() => { setActiveTab("downloads"); setMessage(""); }}
            className={`px-6 py-3 font-semibold text-lg transition-colors border-b-4 whitespace-nowrap ${activeTab === "downloads" ? "border-[#fcb900] text-[#0f2d4a]" : "border-transparent text-gray-500 hover:text-gray-800"}`}
          >
            Add Download Form
          </button>
        </div>

        {/* Message Alert */}
        {message && (
          <div className={`p-4 mb-6 rounded ${message.startsWith("✅") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
            {message}
          </div>
        )}

        {/* Form Area */}
        <div className="bg-white shadow-lg border border-gray-100 rounded-lg p-8">
          
          {/* COMPANY FORM */}
          {activeTab === "company" && (
            <form onSubmit={handleCompanySubmit} className="space-y-4">
              <h2 className="text-xl font-bold text-[#fcb900] mb-4">Company Details Form</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Company Name *</label>
                  <input required type="text" value={companyForm.name} onChange={e => setCompanyForm({...companyForm, name: e.target.value})} className="w-full border p-2 rounded focus:border-[#fcb900] outline-none" placeholder="PSL LIMITED" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">CIN No *</label>
                  <input required type="text" value={companyForm.cin} onChange={e => setCompanyForm({...companyForm, cin: e.target.value})} className="w-full border p-2 rounded focus:border-[#fcb900] outline-none" placeholder="L67120DD1987PLC002395" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Process Initiated</label>
                  <input type="text" value={companyForm.process_initiated} onChange={e => setCompanyForm({...companyForm, process_initiated: e.target.value})} className="w-full border p-2 rounded focus:border-[#fcb900] outline-none" placeholder="LIQUIDATOR" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Applicant Name</label>
                  <input type="text" value={companyForm.applicant_name} onChange={e => setCompanyForm({...companyForm, applicant_name: e.target.value})} className="w-full border p-2 rounded focus:border-[#fcb900] outline-none" placeholder="Edelweiss Assets..." />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Sector</label>
                  <input type="text" value={companyForm.sector} onChange={e => setCompanyForm({...companyForm, sector: e.target.value})} className="w-full border p-2 rounded focus:border-[#fcb900] outline-none" placeholder="Manufacturing" />
                </div>
                <div className="md:col-span-2 mt-2">
                  <label className="block text-sm font-bold text-[#0f2d4a] mb-1">Upload PDF File (Saves to public/company_data) *</label>
                  <input required type="file" accept=".pdf" onChange={e => setFile(e.target.files ? e.target.files[0] : null)} className="w-full border p-2 rounded bg-gray-50 text-gray-600" />
                </div>
              </div>

              <button disabled={isLoading} type="submit" className="mt-6 w-full bg-[#0f2d4a] hover:bg-[#1a4a75] text-white font-bold py-3 px-4 rounded transition-colors disabled:opacity-50">
                {isLoading ? "Saving..." : "Save Company Data"}
              </button>
            </form>
          )}

          {/* NEWS FORM */}
          {activeTab === "news" && (
            <form onSubmit={handleNewsSubmit} className="space-y-4">
               <h2 className="text-xl font-bold text-[#fcb900] mb-4">News/Timeline Form</h2>
               
               <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">News Title *</label>
                  <input required type="text" value={newsForm.title} onChange={e => setNewsForm({...newsForm, title: e.target.value})} className="w-full border p-2 rounded focus:border-[#fcb900] outline-none" placeholder="Appointment of new member..." />
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Date (Text) *</label>
                    <input required type="text" value={newsForm.date} onChange={e => setNewsForm({...newsForm, date: e.target.value})} className="w-full border p-2 rounded focus:border-[#fcb900] outline-none" placeholder="30th March, 2026" />
                 </div>
                 <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Size (Text) *</label>
                    <input required type="text" value={newsForm.size} onChange={e => setNewsForm({...newsForm, size: e.target.value})} className="w-full border p-2 rounded focus:border-[#fcb900] outline-none" placeholder="2.5 MB" />
                 </div>
               </div>

               <div className="mt-4">
                  <label className="block text-sm font-bold text-[#0f2d4a] mb-1">Upload PDF File (Saves to public/pdfs) *</label>
                  <input required type="file" accept=".pdf" onChange={e => setFile(e.target.files ? e.target.files[0] : null)} className="w-full border p-2 rounded bg-gray-50 text-gray-600" />
               </div>

               <button disabled={isLoading} type="submit" className="mt-6 w-full bg-[#0f2d4a] hover:bg-[#1a4a75] text-white font-bold py-3 px-4 rounded transition-colors disabled:opacity-50">
                {isLoading ? "Saving..." : "Save News Data"}
               </button>
            </form>
          )}

          {/* DOWNLOADS FORM */}
          {activeTab === "downloads" && (
            <form onSubmit={handleDownloadSubmit} className="space-y-4">
              <h2 className="text-xl font-bold text-[#fcb900] mb-4">Add Forms/Downloads</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Sr. No. (Grouping Number) *</label>
                  <input required type="number" value={downloadForm.sr_no} onChange={e => setDownloadForm({...downloadForm, sr_no: e.target.value})} className="w-full border p-2 rounded focus:border-[#fcb900] outline-none" placeholder="1" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Form/File Name *</label>
                  <input required type="text" value={downloadForm.form_name} onChange={e => setDownloadForm({...downloadForm, form_name: e.target.value})} className="w-full border p-2 rounded focus:border-[#fcb900] outline-none" placeholder="Form A" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Subject (Heading) *</label>
                  <input required type="text" value={downloadForm.subject} onChange={e => setDownloadForm({...downloadForm, subject: e.target.value})} className="w-full border p-2 rounded focus:border-[#fcb900] outline-none" placeholder="Forms under Insolvency Resolution Process..." />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">File Size (e.g. 15.74 KB)</label>
                  <input type="text" value={downloadForm.file_size} onChange={e => setDownloadForm({...downloadForm, file_size: e.target.value})} className="w-full border p-2 rounded focus:border-[#fcb900] outline-none" placeholder="15.74 KB" />
                </div>
                <div className="md:col-span-2 mt-2">
                  <label className="block text-sm font-bold text-[#0f2d4a] mb-1">Upload PDF File (Saves to public/pdfs) *</label>
                  <input required type="file" accept=".pdf" onChange={e => setFile(e.target.files ? e.target.files[0] : null)} className="w-full border p-2 rounded bg-gray-50 text-gray-600" />
                </div>
              </div>

              <button disabled={isLoading} type="submit" className="mt-6 w-full bg-[#0f2d4a] hover:bg-[#1a4a75] text-white font-bold py-3 px-4 rounded transition-colors disabled:opacity-50">
                {isLoading ? "Saving..." : "Save Download Form"}
              </button>
            </form>
          )}
          
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
