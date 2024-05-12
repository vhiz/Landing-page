import { BiLogoOkRu } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { FaGithub, FaPhone, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className=" hidden md:footer fixed bottom-0 items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <BiLogoOkRu className="text-3xl" />
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <div className="tooltip" data-tip="Whatsapp">
          <a
            href="https://wa.me/09056394367?text=Hello%20welcome%2C%20how%20may%20I%20be%20of%20assistance"
            target="_blank"
            className="btn btn-ghost btn-circle"
          >
            <FaWhatsapp />
          </a>
        </div>
        <div className="tooltip" data-tip="X">
          <a
            href="https://twitter.com/The_api_guy33?t=xAKsZTpLidITkXlAGtTBWA&s=09"
            target="_blank"
            className="btn btn-ghost btn-circle"
          >
            <FaXTwitter />
          </a>
        </div>
        <div className="tooltip" data-tip="Github">
          <a
            href="https://github.com/vhiz"
            target="_blank"
            className="btn btn-ghost btn-circle"
          >
            <FaGithub />
          </a>
        </div>
        <div className="tooltip" data-tip="Gmail">
          <a
            href="mailto:victormgbeahurike82@gmail.com?subject=Hello&body=Hi%20there!"
            target="_blank"
            className="btn btn-ghost btn-circle"
          >
            <SiGmail />
          </a>
        </div>
        <div className="tooltip" data-tip="Phone">
          <a
            href="tel:+2349056394367"
            target="_blank"
            className="btn btn-ghost btn-circle"
          >
            <FaPhone />
          </a>
        </div>
        <div className="tooltip" data-tip="Portfolio">
          <a
            href="https://portfolio-49f29.web.app/"
            target="_blank"
            className="btn btn-ghost btn-circle"
          >
            <CgWebsite />
          </a>
        </div>
      </nav>
    </footer>
  );
}
