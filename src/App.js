import "./App.css";
import { BrowserRouter } from "react-router-dom";
import HeaderSection from "./Components/HeaderSection";
import HomeSection from "./Components/HomeSection";
import AboutSection from "./Components/AboutSection";
import SkillsSection from "./Components/SkillsSection";
import ResumeSection from "./Components/ResumeSection";
import PortfolioSection from "./Components/PortfolioSection";
import ContactSection from "./Components/ContactSection";
import CopyRightSection from "./Components/CopyRightSection";
import { Helmet } from "react-helmet";
import icon from "./Components/Assects/logo.png"

const App = () => (
  <BrowserRouter>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Vallarasu_Kanthasamy</title>
      <link rel="icon"  href={icon} type="image/x-icon" />
      {/* Add other meta tags or link tags here */}
    </Helmet>
    <div className="container shadow p-sm-3 p-md-3 rounded-5">
      <div className="px-md-5">
        <HeaderSection />
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ResumeSection />
        <PortfolioSection />
        <ContactSection />
        <CopyRightSection />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
