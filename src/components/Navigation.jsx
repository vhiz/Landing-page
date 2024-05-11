import { FaArrowUp } from "react-icons/fa6";
import { TiHomeOutline } from "react-icons/ti";
import { GoInfo } from "react-icons/go";
import { TbCalendarStats } from "react-icons/tb";
import { RiGroup2Line } from "react-icons/ri";
import { IoSchoolOutline } from "react-icons/io5";
import { SiGithubsponsors } from "react-icons/si";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuActivity } from "react-icons/lu";
import { CiPhone } from "react-icons/ci";

export default function Navigation() {
  return (
    <div>
      <ul className="menu menu-sm justify-between w-screen md:w-fit md:h-fit menu-horizontal md:menu-vertical bg-base-200 md:rounded-box fixed bottom-0 md:right-5 md:top-10 z-20">
        <li>
          <a className="tooltip md:tooltip-left" data-tip="Home" href="#header">
            <TiHomeOutline className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a className="tooltip md:tooltip-left" data-tip="About" href="#about">
            <GoInfo className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            className="tooltip md:tooltip-left"
            data-tip="Program"
            href="#program"
          >
            <TbCalendarStats className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            className="tooltip md:tooltip-left"
            data-tip="Beneficiaries"
            href="#beneficiary"
          >
            <RiGroup2Line className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            className="tooltip md:tooltip-left"
            data-tip="School"
            href="#children"
          >
            <IoSchoolOutline className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            className="tooltip md:tooltip-left"
            data-tip="Sponsorship"
            href="#sponsorship"
          >
            <SiGithubsponsors className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            className="tooltip md:tooltip-left"
            data-tip="Food Drive"
            href="#foodDrive"
          >
            <IoFastFoodOutline className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            className="tooltip md:tooltip-left"
            data-tip="Activities"
            href="#update"
          >
            <LuActivity className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            className="tooltip md:tooltip-left"
            data-tip="Contact"
            href="#contact"
          >
            <CiPhone className="h-5 w-5" />
          </a>
        </li>
      </ul>
      <a className="btn btn-circle hidden lg:inline-flex fixed bottom-24 right-5 z-20" href="#header">
        <FaArrowUp />
      </a>
    </div>
  );
}
