import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TechnologySection from "./components/TechnologySection";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <TechnologySection />

      <ToastContainer position="top-right" />
    </>
  );
}

export default App;