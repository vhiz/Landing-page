import About from "./About";
import About2 from "./About2";
import Beneficiary from "./Beneficiary";
import Children from "./Children";
import Contact from "./Contact";
import FoodDrive from "./FoodDrive";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import Program from "./Program";
import Sponsorship from "./Sponsorship";
import Toggle from "./Toggle";
import Update21 from "./Update21";

export default function Layout() {
  return (
    <div className="snap-mandatory snap-y h-screen overflow-y-scroll scroll-smooth scrollbar-none">
      <Toggle />
      <Navigation />
      <Header />
      <About />
      <About2 />
      <Program />
      <Beneficiary />
      <Children />
      <Sponsorship />
      <FoodDrive />
      <Update21 />
      <Contact />
      <Footer />
    </div>
  );
}
