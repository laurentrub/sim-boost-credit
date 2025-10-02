import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PersonalLoan from "./pages/PersonalLoan";
import AutoLoan from "./pages/AutoLoan";
import ApplyPage from "./pages/ApplyPage";
import AdminDashboard from "./pages/AdminDashboard";
import ResourcesHub from "./pages/resources/ResourcesHub";
import Glossary from "./pages/resources/Glossary";
import FAQ from "./pages/resources/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/personal-loan" element={<PersonalLoan />} />
          <Route path="/auto-loan" element={<AutoLoan />} />
          <Route path="/home-improvement" element={<PersonalLoan />} />
          <Route path="/consolidation" element={<PersonalLoan />} />
          <Route path="/business-loan" element={<PersonalLoan />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/resources" element={<ResourcesHub />} />
          <Route path="/resources/glossary" element={<Glossary />} />
          <Route path="/resources/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
