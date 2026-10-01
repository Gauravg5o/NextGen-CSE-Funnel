import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import CurriculumSection from "@/components/CurriculumSection";
import CollegesSection from "@/components/CollegesSection";
import SocialProofSection from "@/components/SocialProofSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <ComparisonSection />
      <CurriculumSection />
      <CollegesSection />
      <SocialProofSection />
      <LeadCaptureForm />
      <FAQSection />
      <Footer />
    </main>
  );
}

