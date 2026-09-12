import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TechnologySection from "./components/TechnologySection";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <TechnologySection />
      <Footer />
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;