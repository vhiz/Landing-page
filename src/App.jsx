import About from "./components/About";
import Beneficiary from "./components/Beneficiary";
import Children from "./components/Children";
import FoodDrive from "./components/FoodDrive";
import Header from "./components/Header";
import Program from "./components/Program";
import Sponsorship from "./components/Sponsorship";
import Toggle from "./components/Toggle";
import { FaArrowUp } from "react-icons/fa6";
import Update21 from "./components/Update21";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="snap-mandatory snap-y">
      <a className="btn btn-circle fixed bottom-10 right-5 z-20" href="#header">
        <FaArrowUp />
      </a>
      <Header />
      <About />
      <Toggle />
      <Program />
      <Beneficiary />
      <Children />
      <Sponsorship />
      <FoodDrive />
      <Update21 />
      <Contact />
    </div>
  );
}
