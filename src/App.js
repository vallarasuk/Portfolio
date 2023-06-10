import "./App.css";
import { BrowserRouter } from "react-router-dom";
import HeaderSection from "./Components/HeaderSection";
import HomeSection from "./Components/HomeSection";
import AboutSection from "./Components/AboutSection";
import SkillsSection from "./Components/SkillsSection";
import ResumeSection from "./Components/ResumeSection";

const App = () => (
  <BrowserRouter>
    <div className="container shadow p-sm-3 p-md-3 rounded-5">
      <div className="px-md-5">
        <HeaderSection />
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ResumeSection />
        {/* <PortfolioSection /> */}
        {/* <ContactSection /> */}
        {/* <FooterSection /> */}
        {/* <CopyRightSection /> */}
      </div>
    </div>
  </BrowserRouter>
);

export default App;
