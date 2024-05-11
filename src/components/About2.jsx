import { FaCircleCheck } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

export default function About2() {
  const { inView, ref: intersectionRef } = useInView({ threshold: 0.5 });

  return (
    <section id="about" className="w-full lg:hidden flex md:flex-row flex-col h-screen" ref={intersectionRef}>
      <div className="flex-1 flex">
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
                <FaCircleCheck className="lg:h-5 lg:w-5 w-3 text-secondary-content" />
              </div>
              <div className="timeline-start md:text-end mb-10 card text-xs italic bg-secondary p-3 text-secondary-content">
                <div className="lg:text-lg text-base font-black">Our Mission</div>
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
                <FaCircleCheck className="lg:h-5 lg:w-5 w-3 text-secondary-content" />
              </div>
              <div className="timeline-end mb-10 card text-xs italic bg-secondary p-3 text-secondary-content">
                <div className="lg:text-lg text-base font-black">Our Vision</div>A world
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
                <FaCircleCheck className="lg:h-5 lg:w-5 w-3 text-secondary-content" />
              </div>
              <div className="timeline-start md:text-end mb-10 card text-xs italic bg-secondary p-3 text-secondary-content">
                <div className="lg:text-lg text-base font-black">Our Work</div>
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
                <FaCircleCheck className="lg:h-5 lg:w-5 w-3 text-secondary-content" />
              </div>
              <div className="timeline-end mb-10 text-sm italic lg:text-sm card bg-secondary p-3 text-secondary-content">
                <div className="lg:text-lg text-base font-black">Our Approach</div>
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
