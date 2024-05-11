import { BsStarFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { MdDragIndicator } from "react-icons/md";

export default function FoodDrive() {
  const { inView, ref: intersectionRef } = useInView({ threshold: 0.5 });

  return (
    <section id="foodDrive" ref={intersectionRef} className="flex ">
      <div
        className={`flex-1 p-3 ${
          inView ? "animate-fadeInLeft" : "animate-fadeOutLeft"
        }`}
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-xl flex items-center gap-1">
            <BsStarFill />
            FOOD DRIVE
          </h2>
          <div className="text-sm italic">
            We unanimously agreed that the foundation should crowdfund to get
            food supplies to the families of our beneficiaries in various
            communities. <br /> We launched campaigns on all platforms and
            raised sum enough to feed about 180 families in four communities.{" "}
            <br /> These food drives tool place in Rugga Community and Kuje
            district in FCT, Kano and Adamawa States
          </div>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center gap-6">
          <img
            src="/img9.jpg"
            alt=""
            className={`w-full h-[30vh] object-contain rounded-md ${
              inView ? "animate-zoomIn animate-delay-[0.5s]" : "animate-zoomOut"
            }`}
          />
          <img
            src="/img10.jpg"
            alt=""
            className={`w-full h-[30vh] object-contain rounded-md ${
              inView ? "animate-zoomIn animate-delay-[0.5s]" : "animate-zoomOut"
            }`}
          />
        </div>
      </div>
      <div className="flex-[2] bg-[url('/img11.jpg')] bg-cover bg-no-repeat bg-center bg-fixed relative">
        <div className="absolute bottom-0 bg-gradient-to-b to-base-100 from-transparent w-full h-[40%]"></div>
        <div className="bg-base-100/50 w-full h-full p-3 flex gap-4">
          <div
            className={`card max-w-xs text-neutral-content bg-neutral p-4 h-fit ${
              inView ? "animate-fadeInUp" : "animate-fadeOutDown"
            }`}
          >
            <h3 className="flex gap-2 text-xl">
              <BsStarFill />
              DIGITAL LEARNING IN THE LIGHT OF COVID19
            </h3>
            <div className="italic text-sm">
              To commemorate the Children's Day 2020, we had a webinar with the
              above title. Our goal was to create a platform through the webinar
              to discuss with other CSOs who are involved in any form of
              education intervention in marginalized communities on how they are
              dealing with the stop to education IN THE LIGHT OF COVID-19 and
              how we bridge this gap through digital learning
              <br />
              <br />
              The response from the public as well as our target audience was
              very impressive. The speakers also influenced attendance from
              their individual organizations and spheres. We had in attendance
              individuals who showed interest from social media promotions, CSOs
              in Education which were contacted via emails and other
              well-meaning Nigeria.
              <br />
              <br />
              <h4 className="font-semibold">
                The Webinar was graced by four <br /> speakers :
              </h4>
              <br />
              <div className="flex gap-4 items-center">
                <MdDragIndicator className="text-base-content" />
                <div className="">
                  Asiya Rodrigo <br />
                  Dr. Abubakar Dahiru
                </div>
              </div>
              <div className="flex gap-4 items-center mt-2">
                <MdDragIndicator className="text-base-content" />
                <div className="">
                  Hajiya Habiba Muhammad <br />
                  Kolade Adebimpe
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div
              className={`card max-w-xs text-neutral-content bg-neutral p-4 h-fit ${
                inView
                  ? "animate-fadeInRight animate-delay-[0.9s]"
                  : "animate-fadeOutRight"
              }`}
            >
              <h3 className="flex gap-2 text-lg">
                <BsStarFill />
                FACEBOOK LIVE
              </h3>
              <div className="italic text-xs mt-2">
                We had an engaging Facebook Live session to discuss alternative
                learning strategies for marginalized communities. The session
                was very interactive with about 137 viewers. We brainstormed on
                the various approaches to learning to ensure that no child is
                left behind.
              </div>
            </div>

            <div
              className={`card max-w-xs text-neutral-content bg-neutral p-4 h-fit mt-2 ${
                inView
                  ? "animate-fadeInRight animate-delay-[1.2s]"
                  : "animate-fadeOutRight"
              }`}
            >
              <h3 className="flex gap-2 text-lg">#HEROESINEDUCATION WEBINAR</h3>
              <div className="italic text-xs mt-2">
                To mark the World Humanitarian day 2020 with the theme
                #RealLifeHeroes, we organized a webinar recognizing some heros
                in the education space in Nigeria. Featured were:
                <br />
                <div className="flex items-center gap-2 mt-3">
                  <MdDragIndicator />{" "}
                  <h3 className="font-semibold">
                    Hussaini Abdu, <br />
                    <span className="text-base-content">
                      Country Director, Plan International
                    </span>
                  </h3>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <MdDragIndicator />{" "}
                  <h3 className="font-semibold">
                    Busayo Morakinyo, <br />
                    <span className="text-base-content">
                      COM, Connected Development
                    </span>
                  </h3>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <MdDragIndicator />{" "}
                  <h3 className="font-semibold">
                    Nelson Egbunu, <br />
                    <span className="text-base-content">
                      Project Manager AccLearn,
                    </span>{" "}
                    <br />
                    <span className="text-base-content">
                      FlexiSAF Foundation
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            <div
              className={`card max-w-xs text-neutral-content bg-neutral p-4 h-fit mt-2 ${
                inView
                  ? "animate-fadeInRight animate-delay-[1.5s]"
                  : "animate-fadeOutRight"
              }`}
            >
              <h3 className="flex gap-2 text-lg">
                <BsStarFill />
                REMOTE LEARNING AT RUGGA COMMUNITY
              </h3>
              <div className="italic text-xs mt-1">
                We introduced a remote learning strategy which is the
                distribution of worksheets to beneficiaries to aid learning
                during the school closure period. The team refreshed their minds
                on what was previously learned and we were glad to see that most
                of them retained what had been taught.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
