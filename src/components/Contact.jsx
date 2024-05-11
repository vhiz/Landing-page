import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { inView, ref: intersectionRef } = useInView({ threshold: 0.5 });

  return (
    <section>Contact</section>
  )
}
