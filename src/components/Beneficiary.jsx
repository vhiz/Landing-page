import { BsStarFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

export default function Beneficiary() {
  const { inView, ref: intersectionRef } = useInView({ threshold: 0.5 });

  return (
    <section className="flex p-4 gap-4 overflow-hidden snap-start" ref={intersectionRef}>
      <div className="flex-[2.5] h-full">
        <div
          className={`relative w-full h-[60%] border-[4px] border-secondary overflow-hidden rounded-lg ${
            inView ? "animate-fadeInDown" : "animate-fadeOutUp"
          }`}
        >
          <img
            src="/img5.jpg"
            alt=""
            className="w-full h-full object-cover animate-pulse animate-infinite animate-duration-[6s]"
          />
        </div>
        <div
          className={`py-3 ${
            inView
              ? "animate-fadeInUp animate-delay-[0.5s]"
              : "animate-fadeOutDown"
          }`}
        >
          <div className="flex gap-2 items-center">
            <BsStarFill />
            <h2 className="text-2xl font-semibold">Beneficiary Story</h2>
          </div>
          <div className="mt-3 flex gap-5">
            <div className="card max-w-lg text-justify font-thin text-sm italic">
              Saadatu is a young bright girl we met in a slum called Rugga
              Community, a few years ago. Her enthusiasm towards learning
              encouraged us to enroll her in a regular school but she was always
              found absent. <br /> After several attempts to solve the problem,
              we learned that her family depends on what she makes from hawking
              to feed.
            </div>
            <div className="card max-w-lg text-justify text-sm">
              People fail to send their children to school for reason ranging
              from poverty, insecurity and a lack of confidence in the school
              systems. This story changed after we introduced our Accelerated
              Learning Program (AccLearn).
            </div>
            <div className="card max-w-lg text-justify text-sm">
              The sole beneficiaries of this program are out-of-school children
              between the ages of 5 to 9 years, who are vulnerable and are from
              underprivileged homes-but are very eager to learn. These
              Beneficiaries are residents of the same community where the
              AccLearn center is located. Currently, there are 50 children
              enrolled in the AccLearn Pilot Program
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex-1 flex flex-col gap-5 ${
          inView
            ? "animate-fadeInRight animate-delay-[0.5s]"
            : "animate-fadeOutLeft"
        }`}
      >
        <div className="flex gap-1 justify-center text-base font-thin">
          <BsStarFill /> AccLearn is an effective model for providing a
          future-ready education for underprivileged children and indeed
          effective solution to a sunday of education challenges.
        </div>
        <div className="flex gap-1 text-base font-thin">
          <BsStarFill /> it's localized setting makes it accessible and secure
        </div>
        <div className="flex gap-1 justify-center text-base font-thin">
          <BsStarFill /> It's accelerated model delivers only what the pupils
          need to learn in the most qualitative forms.
        </div>
        <div className="flex gap-1 justify-center text-base font-thin">
          <BsStarFill /> It's leadership curriculum fosters personal
          development, ethics and responsibility.
        </div>
        <div className="flex gap-1 justify-center text-base font-thin">
          <BsStarFill /> It's community involvement strategies promotes
          sustainability and stakeholders buy-in.
        </div>
        <div className="flex gap-1 justify-center text-base font-thin">
          <BsStarFill /> It's Feeding program improves nutrition, alleviates
          hunger and promotes women empowerment.
        </div>
        <div className="flex gap-1 justify-center text-base font-thin">
          <BsStarFill /> It's flexible. The children are expected to be in
          school only 6 hours a week.
        </div>
        <div className="flex gap-1 justify-center text-base font-thin">
          <BsStarFill /> It's computational thinking classes instills
          creativity, strong problem-solving skills, and innovation.
        </div>
        <div className="flex gap-1 justify-center text-base font-thin">
          <BsStarFill /> It's life skills curriculum teaches sex education, how
          to identify threatening situations and what to do about them.
        </div>
      </div>
    </section>
  );
}
