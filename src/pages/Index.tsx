import { Navbar } from "@/components/flydao/Navbar";
import { Hero } from "@/components/flydao/Hero";
import { Dashboard } from "@/components/flydao/Dashboard";
import { Staking } from "@/components/flydao/Staking";
import { Borrowing } from "@/components/flydao/Borrowing";
import { Tokenomics } from "@/components/flydao/Tokenomics";
import { Governance } from "@/components/flydao/Governance";
import { Footer } from "@/components/flydao/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Dashboard />
        <Staking />
        <Borrowing />
        <Tokenomics />
        <Governance />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
