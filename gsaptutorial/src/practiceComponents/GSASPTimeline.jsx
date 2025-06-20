import { useGSAP } from "@gsap/react";
import gsap from "gsap";

let Timeline; // Declare timeline outside the component to persist it

export default function GSASPTimeline() {
  useGSAP(() => {
    Timeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });

    Timeline.to("#blue-box-timeline", {
      x: 200,
      rotation: 360,
      borderRadius: "100%",
      scale: 1,
      duration: 2,
      ease: "bounce",
    })
      .to("#blue-box-timeline", {
        y: 200,
        x: 300,
        scale: 2,
        duration: 1.5,
      })
      .to("#blue-box-timeline", {
        y: 600,
        x: -100,
        scale: 3,
        duration: 1.5,
      });
  }, []);

  return (
    <>
      <div className="h-screen mt-20 px-4">
        <h1 className="text-xl font-bold mb-4">GSAP Timeline</h1>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded mb-6"
          onClick={() => {
            if (Timeline?.paused()) {
              Timeline.play();
            } else {
              Timeline.pause(); // ✅ fix: this pauses
            }
          }}
        >
          Play / Pause
        </button>
        <div
          id="blue-box-timeline"
          className="w-20 h-20 bg-amber-900 rounded-lg"
        ></div>
      </div>
    </>
  );
}
