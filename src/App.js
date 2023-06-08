// import logo from './logo.svg';
import "./App.css";
import AboutSection from "./Components/AboutSection";
import ContactSection from "./Components/ContactSection";
import CopyRightSection from "./Components/CopyRightSection";
import FooterSection from "./Components/FooterSection";
import HeaderSection from "./Components/HeaderSection";
import HomeSection from "./Components/HomeSection";
import PortfolioSection from "./Components/PortfolioSection";
import ServiceSection from "./Components/ServiceSection";
import SkillsSection from "./Components/SkillsSection";
import "./Components/styles.css"

function App() {
  return (
    <div className="container">
      <HeaderSection />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ServiceSection />
      <PortfolioSection />
      <ContactSection />
      <FooterSection />
      <CopyRightSection />
    </div>
  );
}

export default App;
