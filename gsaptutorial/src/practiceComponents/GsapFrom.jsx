import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function GsapFrom() {
  useGSAP(() => {
    gsap.from("#blue-box-from", {
      x: 200,
      rotation: 360,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1",
    });
  }, []);
  return (
    <div className="w-full h-fit mt-20 ">
      <h1>gsap From</h1>
      <div
        id="blue-box-from"
        className="w-20 h-20 bg-blue-500 rounded-lg my-13"
      ></div>
    </div>
  );
}
