import { useInView } from "react-intersection-observer";

export default function Children() {
  const { inView, ref: intersectionRef } = useInView({ threshold: 0.5 });
  return (
    <section
      id="children"
      className="py-8 p-2 flex gap-3 "
      ref={intersectionRef}
    >
      <div
        className={`flex-[2.5] bg-[url('/img6.jpg')] bg-cover bg-center bg-no-repeat rounded-md ${
          inView ? "animate-fadeInLeft" : "animate-fadeOutLeft"
        }`}
      >
        <div className="w-full h-full bg-base-100/40 flex items-center p-3">
          <h2
            className={`text-6xl text-secondary-content font-semibold ${
              inView
                ? "animate-fadeInDown animate-delay-[0.5s]"
                : "animate-fadeOut"
            }`}
          >
            There are currently <br />
            <strong className="text-base-content text-8xl">150+</strong>{" "}
            children <br /> enrolled in school through <br /> the back to school
            program
          </h2>
        </div>
      </div>
      <div
        className={`flex-1 p-2 ${
          inView ? "animate-fadeInRight" : "animate-fadeOutRight"
        }`}
      >
        <div className="card bg-neutral text-neutral-content p-3">
          <h2 className="text-4xl font-semibold text-primary">
            The <br /> Back to school <br /> Program
          </h2>
          <div className="mt-5">
            Despite the strides being made in education worldwide, Nigeria is
            still facing an education crisis. There are more than 10 million
            children out of school in the country, according to the Education
            Ministry.
          </div>
        </div>
        <div className="mt-10 italic text-sm">
          A quick stroll in the urban center of most states in Nigeria gives the
          glaring picture of this unfortunate reality. Children as young as five
          are on the streets, trying to fend for themselves. Those in the rural
          areas of the country are even worse off. these high figures can be
          traced majorly to the NorthEastern part of the country, where a number
          of factors- primarily armed conflict- are responsible
        </div>
      </div>
    </section>
  );
}
