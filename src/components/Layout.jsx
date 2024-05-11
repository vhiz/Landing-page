import About from "./About";
import Beneficiary from "./Beneficiary";
import Children from "./Children";
import Contact from "./Contact";
import FoodDrive from "./FoodDrive";
import Header from "./Header";
import Navigation from "./Navigation";
import Program from "./Program";
import Sponsorship from "./Sponsorship";
import Toggle from "./Toggle";
import Update21 from "./Update21";

export default function Layout() {
  return (
    <div className="snap-mandatory snap-y h-screen overflow-y-scroll scroll-smooth scrollbar-none">
      <Navigation />
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
