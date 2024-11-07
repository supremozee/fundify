import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import HeroSection from "../components/HeroSection";
import GrantOptionsTable from "../components/GrantOptionsTable";
import FeaturesSection from "../components/FeaturesSection";
import StatsSection from "../components/StatsSection";
import Testimonials from "../components/Testimonials";
import PartnersSection from "../components/PartnersSection";
import ComapnyMarquee from "../components/ComapnyMarquee";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="bg-teal-500">
      <div className="white-eclipse-bg">
        <TopBar />
        <Navbar />
        <HeroSection />
        <GrantOptionsTable />
      </div>
      <div className="border-b border-white mx-[4.5rem]"></div>
      <FeaturesSection />
      <div className="border-b border-white mx-[4.5rem]"></div>
      <StatsSection />
      <Testimonials />
      <PartnersSection />
      <ComapnyMarquee />
      <Footer />
    </div>
  );
};

export default LandingPage;
