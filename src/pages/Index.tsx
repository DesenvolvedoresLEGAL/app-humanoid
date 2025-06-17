
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Dashboard from "@/components/Dashboard";
import LDRAgent from "@/components/LDRAgent";
import SDRAgent from "@/components/SDRAgent";
import Pipeline from "@/components/Pipeline";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "ldr-agent":
        return <LDRAgent />;
      case "sdr-agent":
        return <SDRAgent />;
      case "pipeline":
        return <Pipeline />;
      case "leads":
        return (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white mb-4">Gestão de Leads</h1>
              <p className="text-slate-400">Em desenvolvimento...</p>
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white mb-4">Configurações</h1>
              <p className="text-slate-400">Em desenvolvimento...</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="flex">
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="flex-1 lg:ml-0">
          <main className="p-6 lg:p-8">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
