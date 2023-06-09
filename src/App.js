import "./App.css";
import { BrowserRouter } from "react-router-dom";
import HeaderSection from "./Components/HeaderSection";
import HomeSection from "./Components/HomeSection";
import AboutSection from "./Components/AboutSection";
import SkillsSection from "./Components/SkillsSection";
import ServiceSection from "./Components/ServiceSection";

const App = () => (
  <BrowserRouter>
    <div className="container shadow p-sm-3 p-md-3 rounded-5">
      <div className="px-md-5">
        <HeaderSection />
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ServiceSection />
        {/* <PortfolioSection /> */}
        {/* <ContactSection /> */}
        {/* <FooterSection /> */}
        {/* <CopyRightSection /> */}
      </div>
    </div>
  </BrowserRouter>
);

export default App;
