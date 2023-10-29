import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "components/Layout/NavBar/Navbar";
import Routes from "./Routes";
import SideBar from "components/Layout/SideBar/Sidebar";
import { sections } from "pages/DocsPage/data";
import ProvideSection from "components/Layout/Section/useSection";

function App() {
  return (
    <Router>
      <ProvideSection>
        <Navbar Sidebar={<SideBar sections={sections} />} />
        <Routes />
      </ProvideSection>
    </Router>
  );
}

export default App;
