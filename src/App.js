import "./App.css";
import NavBar from "./NavBar";
import HeaderBody from "./HeaderBody";
import AboutUs from "./AboutUs";
import OurService from "./OurService";
import WorkProgress from "./WorkProgress";
import Showcase from "./Showcase";
import FooterSection from "./FooterSection";
import TechnologyExpertise from "./TechnologyExpertise";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeaderBody />
      <AboutUs />
      <OurService />
      <TechnologyExpertise />
      <WorkProgress />
      <Showcase />
      <FooterSection />
    </div>
  );
}

export default App;
