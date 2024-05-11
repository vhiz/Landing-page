import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { inView, ref: intersectionRef } = useInView({ threshold: 0.5 });

  return (
    <section id="contact" className="flex p-3" ref={intersectionRef}>
      <div className="flex-1">
        <div
          className={`h-[40%] w-full rounded-md overflow-hidden ${
            inView ? "animate-fadeInLeft" : "animate-fadeOutLeft"
          }`}
        >
          <img src="/img14.jpg" alt="" className="h-full w-full object-cover" />
        </div>
        <div
          className={`card bg-neutral text-neutral-content p-2 mt-2 ${
            inView ? "animate-fadeInUp animate-delay-[0.5s]" : "animate-fadeOut"
          }`}
        >
          <h2 className="text-3xl">How can you help</h2>
          <div className="mt-3 flex italic text-sm">
            <p>
              Every Naira you give to FlexiSAF Foundation is an investment in
              the future. our supporters and partners are ensuring that more
              children are given the opportunity for quality education.
            </p>
            <p>
              By making a donation, you join our Sponsor Circle and enjoy
              networking and recognition for your commitment.
              <br />
              Through the generosity of our sponsors, FlexiSAF Foundation has
              been able to scale up and expand operations to reach more
              vulnerable children.
            </p>
          </div>
        </div>
        <div className="mt-3 flex gap-4">
          <div
            className={`card bg-neutral text-neutral-content p-2 max-w-xl ${
              inView
                ? "animate-fadeInLeft animate-delay-[0.9s]"
                : "animate-fadeOutLeft"
            }`}
          >
            <h2 className="text-3xl">Volunteer</h2>
            <div className="mt-3 flex italic text-sm">
              We are always in need of skilled volunteers to join us to combat
              the high rates of out of school children. our volunteers serve as
              mentors, AccLearn instructors, content creators and much more.
            </div>
          </div>
          <div
            className={`card bg-neutral text-neutral-content p-2 max-w-xl ${
              inView
                ? "animate-fadeInRight animate-delay-[0.9s]"
                : "animate-fadeOutRight"
            }`}
          >
            <h2 className="text-3xl">Collaborate</h2>
            <div className="mt-3 flex italic text-xs">
              The SDGs are hinged on successful collaborations between the
              government the private sector and civil societies. To make an
              impact, organizations need to come together to support each other
              and the society. <br />
              Partner with us today.
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex-1 items-center justify-center flex px-5 ${
          inView ? "animate-fadeInUp" : "animate-fadeOutDown"
        }`}
      >
        <div className="w-full flex flex-col gap-2">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full h-60">
            <div className="label">
              <span className="label-text">Message</span>
            </div>
            <textarea
              name=""
              id=""
              placeholder="Message......"
              className=" textarea textarea-bordered w-full h-full"
            ></textarea>
          </label>
          <button className="btn btn-secondary">Send</button>
        </div>
      </div>
    </section>
  );
}
