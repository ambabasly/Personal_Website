import "./App.css";
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import CasesStudy from "./PortfolioContainer/CasesStudy/CaseStudy";
import Impressum from "./PortfolioContainer/Impressum/Impressum"
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        {/* this handles the casestudy route */}
        <Route path="/casestudy" element={<CasesStudy />} />
        <Route path="/impressum" element={<Impressum />} />
        {/* this handels the index route */}
        <Route path="/" element={<PortfolioContainer />} />
        {/* this handles all the wildcard route that is not defined */}
        <Route path="*" element={<PortfolioContainer />} />
      </Routes>
    </div>
  );
}

export default App;
