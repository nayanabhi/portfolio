import PortfolioHeader from "./components/Header";
import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import Resume from "./components/Resume";
import PortfolioSection from "./components/Portfolio";
import CodingProfiles from "./components/CodingProfile";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="dark-background">
      <>
        <PortfolioHeader />
        <HeroSection />
        <AboutSection />
        <Resume />
        <PortfolioSection />
        <CodingProfiles/>
        <Footer />
      </>
    </div>
  );
}

export default App;
