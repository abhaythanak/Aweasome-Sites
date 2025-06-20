import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function GsapText() {
  useGSAP(() => {
    gsap.to("#text", {
      ease: "power1",
      opacity: 1,
      y: 0,
    });
    gsap.fromTo(
      " p",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
      }
    );
  }, []);
  return (
    <>
      <div className="min-h-[300vh] px-6 py-10 space-y-10">
        <h1
          id="text"
          className="text-4xl font-bold text-center opacity-0 translate-y-10"
        >
          GsapText
        </h1>

        <div className="para space-y-6 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          <p>
            GSAP is a powerful JavaScript animation library that allows
            developers to create high-performance animations with minimal
            effort. It is widely used in modern frontend development for smooth
            and professional transitions.
          </p>
          <p>
            One of the most exciting aspects of GSAP is how well it integrates
            with React through the <code>useGSAP</code> hook provided by{" "}
            <code>@gsap/react</code>. It enables the use of timeline-based and
            scroll-triggered animations declaratively.
          </p>
          <p>
            Scroll-triggered animations can significantly improve the user
            experience by providing subtle feedback as users navigate your
            website. Animating headings, paragraphs, and images on scroll can
            increase engagement and attention.
          </p>
          <p>
            Combining GSAP with Tailwind CSS allows you to build responsive,
            stylish, and animated UIs rapidly. Tailwind handles the layout and
            design, while GSAP brings life to the interface through motion.
          </p>
          <p>
            As a developer, learning how to use GSAP effectively can help you
            stand out, especially when building portfolios, landing pages, or
            interactive experiences where animation plays a key role.
          </p>
          <p>
            With the ScrollTrigger plugin, you can animate elements as they
            enter or leave the viewport. This is perfect for storytelling,
            dynamic layouts, and engaging visual presentations in both personal
            and commercial projects.
          </p>
        </div>
      </div>
    </>
  );
}
