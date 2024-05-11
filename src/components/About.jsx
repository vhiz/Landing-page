import { FaCircleCheck } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { inView, ref: intersectionRef } = useInView({ threshold: 0.5 });

  return (
    <section id="about" className="w-full flex md:flex-row flex-col h-screen" ref={intersectionRef}>
      <div className="flex-1 flex h-full">
        <div className="flex-1 flex flex-col gap-4 items-center justify-center px-5">
          <div
            className={`card p-3 bg-secondary text-secondary-content shadow-md flex flex-col gap-3 ${
              inView ? "animate-fadeInLeft" : "animate-fadeOutLeft"
            }`}
          >
            <div className="lg:text-4xl text-xl">
              <h2 className="">About</h2>
              <h3 className="font-bold">
                FlexiSAF <br /> Foundation
              </h3>
            </div>
            <div className="font-light text-justify text-xs md:text-sm italic lg:text-base">
              FlexiSAF Foundation is a non-governmental organization tha focuses
              on providing access to education for underprivileged children as a
              means to solve the scourge of illiteracy and the problem of out of
              school children in Nigeria. Drawing on innovation, advocacy and
              humanitarian services, we are committed to creating a world where
              no child is denied the opportunity to reach their full potential
              due to their gender, background or social class.
            </div>
          </div>
          <div
            className={`card p-3 shadow-md flex flex-col gap-3 ${
              inView ? "animate-fadeInLeft" : "animate-fadeOutLeft"
            }`}
          >
            <div className="font-light text-justify text-xs">
              FlexiSAF Foundation was founded in 2018 by FlexiSAF Edusoft Ltd as
              a signature initiative that merges cutting-edge technology and
              human will to address Nigeria's education challenges with a
              particular focus on the vast marginalized communities
            </div>
          </div>
        </div>
        <div className="relative flex-[0.7]">
          <img
            src="/img2.jpg"
            alt=""
            className={`w-full h-full object-cover ${
              inView
                ? "animate-fadeInRight animate-delay-[1s]"
                : "animate-fadeOutRight"
            }  `}
          />
        </div>
      </div>
      <div className="flex-1 hidden lg:flex">
        <div className="relative flex-[0.7] h-full">
          <img
            src="/img3.jpg"
            alt=""
            className={`w-full h-full object-cover ${
              inView
                ? "animate-fadeInLeft animate-delay-[1s]"
                : "animate-fadeOutLeft"
            } `}
          />
        </div>
        <div className="flex-1 px-5 h-full overflow-y-scroll scrollbar-none">
          <ul
            className={`timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ${
              inView ? "animate-fadeInRight" : "animate-fadeOutRight"
            } `}
          >
            <li>
              <div className="timeline-middle">
                <FaCircleCheck className="h-5 w-5 text-secondary-content" />
              </div>
              <div className="timeline-start md:text-end mb-10 card bg-secondary p-3 text-center text-secondary-content">
                <div className="text-lg font-black">Our Mission</div>
                To end vulnerability of children from poor backgrounds by
                offering them free quality education and life-changing
                mentorship, guidance and counseling
              </div>
              <hr />
            </li>
            <li
              className={`${
                inView
                  ? "animate-fadeIn animate-delay-[1.5s]"
                  : "animate-fadeOut"
              }`}
            >
              <hr />
              <div className="timeline-middle">
                <FaCircleCheck className="h-5 w-5 text-secondary-content" />
              </div>
              <div className="timeline-end mb-10 card bg-secondary p-3 text-center text-secondary-content">
                <div className="text-lg font-black">Our Vision</div>A world
                where no child is denied the opportunity to reach their full
                potential due to their background or social class
              </div>
              <hr />
            </li>
            <li
              className={`${
                inView ? "animate-fadeIn animate-delay-[2s]" : "animate-fadeOut"
              }`}
            >
              <hr />
              <div className="timeline-middle">
                <FaCircleCheck className="h-5 w-5 text-secondary-content" />
              </div>
              <div className="timeline-start md:text-end mb-10 card bg-secondary p-3 text-center text-secondary-content">
                <div className="text-lg font-black">Our Work</div>
                Today, FlexiSAF Foundation works in over 6 states in Nigeria,
                reaching more than 800 beneficiaries through 3 different
                projects.
              </div>
              <hr />
            </li>
            <li
              className={`${
                inView
                  ? "animate-fadeIn animate-delay-[2.5s]"
                  : "animate-fadeOut"
              }`}
            >
              <hr />
              <div className="timeline-middle">
                <FaCircleCheck className="h-5 w-5 text-secondary-content" />
              </div>
              <div className="timeline-end mb-10 text-sm card bg-secondary p-3 text-secondary-content">
                <div className="text-lg font-black">Our Approach</div>
                <span>
                  . Identify the right children <br />
                </span>
                <span className="mt-2">
                  . Identify the right School <br />
                </span>
                <span className="mt-2">
                  . Enroll them <br />
                </span>
                <span className="mt-2">
                  . Mentor them all the way <br />
                </span>
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
