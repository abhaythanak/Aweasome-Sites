import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPScrollTrigger() {
  const scrollRef = useRef();
  const texts = [
    "Learning React with GSAP animations is very exciting!",
    "Frontend developers love tools like Tailwind CSS.",
    "ScrollTrigger lets you animate elements on scroll.",
    "Combining animation and scroll improves UX greatly.",
    "GSAP works smoothly with React functional components.",
    "Staggered animations bring delightful user effects.",
    "Styled components work well with dynamic themes right?",
    "React Hooks simplify state management in apps for real.",
    "Understanding re-renders helps avoid slow apps.",
    "Accessibility improves user experience for all indeed.",
    // ⬇️ Add the rest of the 196 here...
    // (Use .slice() to map only some if needed)
  ];

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);
    boxes.forEach((box) => {
      gsap.from(box, {
        x: 250,
        // rotation: 10,
        // borderRadius: "100%",
        scale: 2,
        duration: 0.5,
        scrollTrigger: {
          trigger: box,
          start: "top 90%",
          end: "bottom 90%",
          toggleActions: "play none none reverse",
          scrub: true,
        },
        ease: "power1",
      });
    });
  }, [scrollRef]);

  return (
    <>
      <div className="min-h-[500vh] px-4 py-10 ">
        <div className="h-screen w-full p-2 bg-amber-900"></div>
        <h1 className="text-3xl font-bold text-center mb-16">
          Scroll to Animate 200+ Text Blocks
        </h1>

        <div className="scroll-text-container space-y-6" ref={scrollRef}>
          {texts.map((text, i) => (
            <div
              key={i}
              className="scroll-text text-lg font-medium   p-4 rounded shadow"
            >
              {text}
            </div>
          ))}

          {texts.map((text, i) => (
            <div
              key={i}
              className="scroll-text text-lg font-medium border border-amber-600 p-4 rounded shadow"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
