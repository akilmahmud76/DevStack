import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TechGrid from "./components/TechGrid.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <Hero />
      <TechGrid />
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2500} />
    </div>
  );
}
