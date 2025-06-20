import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function GsapTo() {
  useGSAP(() => {
    gsap.to("#blue-box-to", {
      x: 200,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "elastic",
    });
  }, []);
  return (
    <div className="mt-20">
      <h1>gsap To</h1>
      <div
        id="blue-box-to"
        className="w-20 h-20 bg-green-500 rounded-lg my-13"
      ></div>
    </div>
  );
}
