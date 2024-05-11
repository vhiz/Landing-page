import { useInView } from "react-intersection-observer";

export default function Header() {
  const { inView, ref: intersectionRef } = useInView({ threshold: 0.5 });
  return (
    <section
      id="header"
      ref={intersectionRef}
      className="w-full bg-cover bg-fixed  bg-no-repeat  bg-[url('/img1.jpg')] relative"
    >
      <div className="absolute animate-fadeIn animate-delay-[1s] w-full h-full bg-base-100/60 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h2
            className={`lg:text-8xl md:text-6xl text-4xl font-bold ${
              inView
                ? "animate-bounceIn animate-delay-[1.3s]"
                : "animate-bounceOut"
            }`}
          >
            BACK TO SCHOOL
          </h2>
          <span
            className={`text-4xl font-semibold ${
              inView
                ? "animate-fadeInDown animate-delay-[1.7s]"
                : "animate-fadeOutUp"
            } text-center`}
          >
            Back to life
          </span>
        </div>
      </div>
      jj
      <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-base-100 w-full h-[40%]"></div>
    </section>
  );
}
