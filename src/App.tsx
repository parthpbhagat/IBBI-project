import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import LegalFramework from "./pages/LegalFramework.tsx";
import FAQs from "./pages/FAQs.tsx";
import Tenders from "./pages/Tenders.tsx";
import RTI from "./pages/RTI.tsx";
import Orders from "./pages/Orders.tsx";
import IPCorner from "./pages/IPCorner.tsx";
import CorporateProcesses from "./pages/CorporateProcesses.tsx";
import GoverningBoard from "./pages/GoverningBoard.tsx";
import Downloads from "./pages/Downloads.tsx";
import Admin from "./pages/Admin.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/legal-framework" element={<LegalFramework />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/tenders" element={<Tenders />} />
          <Route path="/rti" element={<RTI />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/ip-corner" element={<IPCorner />} />
          <Route path="/corporate-processes" element={<CorporateProcesses />} />
          <Route path="/governing-board" element={<GoverningBoard />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
