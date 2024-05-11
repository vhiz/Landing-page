import { useInView } from "react-intersection-observer";

export default function Program() {
  const { inView, ref: intersectionRef } = useInView({ threshold: 0.5 });

  return (
    <section
      ref={intersectionRef}
      className="w-full bg-cover bg-fixed  bg-no-repeat bg-[url('/img4.jpg')] relative snap-start"
    >
      <div className="absolute bottom-0 bg-gradient-to-b to-base-100 from-transparent w-full h-[40%]"></div>
      <div className="bg-base-100/40 h-full w-full flex">
        <div className="flex-1 flex h-full items-center px-6">
          <div
            className={`card max-w-xl bg-secondary text-secondary-content p-3 flex flex-col gap-4 ${
              inView ? "animate-fadeInUp" : "animate-fadeOutDown"
            }`}
          >
            <h2 className="text-4xl font-bold">Accelerated Learning Program</h2>
            <div className="text-justify">
              The Accelerated Learning Program (ACCLearn) is a community-based
              alternative educative program by FlexiSAF Foundation, used to
              fight the high rates of out-of-school children in Nigeria through
              accelerated learning, which prioritizes quality as well as speed
              and accessibility. By providing the regular Nigerian curriculum in
              a condensed and accelerated manner, this programme offers
              out-of-school children the basic tools needed for them to
              integrate into the formal schooling system
            </div>
          </div>
        </div>
        <div className="flex-1 h-full px-7 flex flex-col overflow-hidden">
          <div
            className={`card max-w-xl h-fit mt-10 bg-secondary text-secondary-content p-3 flex flex-col gap-4 ${
              inView ? "animate-fadeInDown" : "animate-fadeOutUp"
            }`}
          >
            The goal of thr AccLearn Program is to equip out-of-school children
            with the necessary tools needed to ensure a 100% transition into the
            formal education system within a period of 12 months. To achieve
            this goal, the foundation has partnered with experts to come up with
            a comprehensive but accelerated curriculum which covers four basic
            subject :
          </div>
          <div
            className={`card max-w-xs mt-8 bg-neutral text-neutral-content p-3 flex flex-col gap-2 self-end ${
              inView ? "animate-fadeInRight animate-delay-[0.5s]" : "animate-fadeOutRight"
            }`}
          >
            <h3 className="text-xl font-bold">Literacy:</h3>
            <span className="text-xs">
              Using the Montessori model, the children are taught sounds,
              identification of sound and blending
            </span>
          </div>
          <div
            className={`card max-w-xs mt-3 bg-neutral text-neutral-content p-3 flex flex-col gap-2 self-start ${
              inView ? "animate-fadeInLeft animate-delay-[0.9s]" : "animate-fadeOutLeft"
            }`}
          >
            <h3 className="text-xl font-bold">Life skills:</h3>
            <span className="text-xs">
              These skills are designed to equip the children with what they
              need to become active members of society, model citizens and also
              to adapt better to the environs
            </span>
          </div>
          <div
            className={`card max-w-xs mt-3 bg-neutral text-neutral-content p-3 flex flex-col gap-2 self-end ${
              inView ? "animate-fadeInRight animate-delay-[1.2s]" : "animate-fadeOutRight"
            }`}
          >
            <h3 className="text-xl font-bold">Numeracy:</h3>
            <span className="text-xs">
              Also using the Montessori model, the children are taught basic
              Numeracy skills at an accelerated pace
            </span>
          </div>
          <div
            className={`card max-w-xs mt-3 bg-neutral text-neutral-content p-3 flex flex-col gap-2 self-start ${
              inView ? "animate-fadeInLeft animate-delay-[1.6s]" : "animate-fadeOutLeft"
            }`}
          >
            <h3 className="text-xl font-bold">Digital skills:</h3>
            <span className="text-xs">
              Concepts are introduced in the children's local language through
              computational thinking
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
