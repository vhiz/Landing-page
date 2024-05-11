import { useInView } from "react-intersection-observer";

export default function Update21() {
  const { inView, ref: intersectionRef } = useInView({ threshold: 0.5 });
  return (
    <section id="update" className="flex flex-col lg:flex-row p-3" ref={intersectionRef}>
      <div className="lg:flex-1">
        <div
          className={`flex md:h-[25vh] lg:h-[29vh] items-center gap-3 w-full p-2 ${
            inView ? "animate-fadeInLeft" : "animate-fadeOutLeft"
          }`}
        >
          <div
            className={`flex-1 w-full h-full ${
              inView ? "animate-fadeIn animate-delay-[0.5s]" : "animate-fade"
            }`}
          >
            <h2 className="md:text-base text-xs font-semibold">
              Interview <br /> With John Doe
            </h2>
            <span className="mt-2 italic text-xs">
              We met with Muhammad Sabo Keana Team lead, Almajiri Child Right
              Initiative (ACRI) An advocacy and educational platform that
              amplifies the call for social inclusion for Almajiri children in
              Nigeria
            </span>
          </div>
          <div className="lg:lg:flex-[2] hidden md:flex relative rounded-md overflow-hidden h-full">
            <img
              src="/img12.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div
          className={`flex md:h-[25vh] lg:h-[29vh] items-center gap-3 w-full p-2 ${
            inView
              ? "animate-fadeInLeft animate-delay-[0.8s]"
              : "animate-fadeOutLeft"
          }`}
        >
          <div
            className={`flex-1 w-full h-full ${
              inView ? "animate-fadeIn animate-delay-[1.3s]" : "animate-fade"
            }`}
          >
            <h2 className="md:text-base text-xs font-semibold">Save Acclearn Campaign</h2>
            <span className="mt-2 italic text-xs">
              Acclearn suffered huge setbacks last year due to Covid-19 and its
              effect on our primary sponsors. We therefore launched the Save
              Acclearn Campaign calling on good samaritans like you to help save
              our project and keep making an impact.
            </span>
          </div>
          <div className="hidden md:flex lg:flex-[2] relative rounded-md overflow-hidden h-full">
            <img
              src="/img15.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div
          className={`flex md:h-[25vh] lg:h-[29vh] items-center gap-3 w-full p-2 ${
            inView
              ? "animate-fadeInLeft animate-delay-[1.7s]"
              : "animate-fadeOutLeft"
          }`}
        >
          <div
            className={`md:flex-1 w-full h-full ${
              inView ? "animate-fadeIn animate-delay-[2.2s]" : "animate-fade"
            }`}
          >
            <h2 className="md:text-base text-xs font-semibold">
              428 children back to school
            </h2>
            <span className="mt-2 italic text-xs">
              In partnership with waste Africa and funded bt the Coca Cola
              Foundation, 428 children were put back in school this term and all
              of them are setting in well.
            </span>
          </div>
          <div className="hidden md:flex lg:flex-[2] relative rounded-md overflow-hidden h-full">
            <img
              src="/img16.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="lg:flex-1">
        <div
          className={`flex flex-row-reverse md:h-[25vh] lg:h-[29vh] items-center gap-3 w-full p-2 ${
            inView ? "animate-fadeInRight" : "animate-fadeOutRight"
          }`}
        >
          <div
            className={`flex-1 w-full h-full ${
              inView ? "animate-fadeIn animate-delay-[0.5s]" : "animate-fade"
            }`}
          >
            <h2 className="md:text-base text-xs font-semibold">
              Interview With Malala Fund Country Rep
            </h2>
            <span className="mt-2 italic text-xs">
              We interviewed crystal Ikanith-Musa The Malala Fund Country Rep,
              who advise that the power of collaboration and partnership among
              CSOs should not be underestimated
            </span>
          </div>
          <div className="hidden md:flex lg:flex-[2] relative rounded-md overflow-hidden h-full">
            <img
              src="/img13.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div
          className={`flex flex-row-reverse md:h-[25vh] lg:h-[29vh] items-center gap-3 w-full p-2 ${
            inView
              ? "animate-fadeInRight animate-delay-[0.8s]"
              : "animate-fadeOutRight"
          }`}
        >
          <div
            className={`flex-1 w-full h-full ${
              inView ? "animate-fadeIn animate-delay-[1.3s]" : "animate-fade"
            }`}
          >
            <h2 className="md:text-base text-xs font-semibold">Partnership with JDI</h2>
            <span className="mt-2 italic text-xs">
              FlexiSAF Foundation had signed a partnership agreement with Jela's
              Development initiatives to work together towards building the next
              generation of leaders by adopting Nigerian graduates as interns.
            </span>
          </div>
          <div className="hidden md:flex lg:flex-[2] relative rounded-md overflow-hidden h-full">
            <img
              src="/img18.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div
          className={`flex flex-row-reverse h-[30vh] items-center gap-3 w-full p-2 ${
            inView
              ? "animate-fadeInRight animate-delay-[1.7s]"
              : "animate-fadeOutRight"
          }`}
        >
          <div
            className={`flex-1 w-full h-full ${
              inView ? "animate-fadeIn animate-delay-[2.2s]" : "animate-fade"
            }`}
          >
            <h2 className="md:text-base text-xs font-semibold">Celebrating Earth Day</h2>
            <span className="mt-2 italic text-xs">
              As Part of our mentorship program to educate children on life
              issues and part of the #bottlesforbooks project, Celebrating
              #Earthday with Us embassy Transcorp Hilton Waste Africa and Chanja
              Datti Recycling was a fulfilling event.
            </span>
          </div>
          <div className="hidden md:flex lg:flex-[2] relative rounded-md overflow-hidden h-full">
            <img
              src="/img17.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
