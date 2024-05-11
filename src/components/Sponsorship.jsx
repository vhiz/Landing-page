import { useInView } from "react-intersection-observer";

export default function Sponsorship() {
  const { inView, ref: intersectionRef } = useInView({ threshold: 0.5 });

  return (
    <section
      id="sponsorship"
      ref={intersectionRef}
      className="flex flex-col p-3 gap-4 "
    >
      <div
        className={`w-full flex h-[50%] ${
          inView ? "animate-fadeInRight" : "animate-fadeOutLeft"
        }`}
      >
        <div
          className={`text-xs hidden md:flex italic self-end ${
            inView ? "animate-fadeIn animate-delay-[0.8s]" : "animate-fadeOut"
          }`}
        >
          Group Photo with Proprietor of AFLON Digital Schools, Kuje, Dr.Akin
          Fapohunda and Other Beneficiaries
        </div>
        <img
          src="/img7.jpg"
          alt=""
          className="w-[65%] h-[90%] object-cover rounded-md"
        />
        <div
          className={`card max-w-sm ml-3 ${
            inView ? "animate-fadeIn animate-delay-[0.8s]" : "animate-fadeOut"
          }`}
        >
          <h2 className="lg:text-4xl font-semibold">
            Scholarship <br /> Program
          </h2>
          <span className="lg:mt-3 text-xs md:text-base font-thin italic">
            Through the back to school initiative, the foundation has partnered
            with elite private schools to provide scholarships tp deserving out
            of school children. with school like Aflon Digital Academy Kuje and
            wisdom international school Kano providing up to 22 scholarship slot
            for out of school children.
          </span>
        </div>
      </div>
      <div
        className={`w-full flex h-[50%] ${
          inView ? "animate-fadeInLeft" : "animate-fadeOutRight"
        }`}
      >
        <div
          className={`card max-w-sm ml-3 ${
            inView ? "animate-fadeIn animate-delay-[0.8s]" : "animate-fadeOut"
          }`}
        >
          <h2 className="lg:text-4xl font-semibold">Sponsorship</h2>
          <span className="lg:mt-3 text-xs md:text-base font-thin italic">
            Through the back to school initiative, the foundation has partnered
            with good Samaritans and credible organizations to send enthusiastic
            out of school children to schools with quality education
          </span>
        </div>
        <img
          src="/img8.jpg"
          alt=""
          className="w-[65%] h-[90%] object-cover rounded-md"
        />
        <div
          className={`text-xs hidden md:flex italic self-start ml-2 ${
            inView ? "animate-fadeIn animate-delay-[0.8s]" : "animate-fadeOut"
          }`}
        >
          FlexiSAF Foundation sponsor 10 People through Aisha Lemu Learning
          Initiative, Minna, Niger State
        </div>
      </div>
    </section>
  );
}
