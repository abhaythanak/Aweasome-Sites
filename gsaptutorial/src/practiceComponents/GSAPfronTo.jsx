import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function GSAPfronTo() {
  useGSAP(() => {
    //  FromTo get two Object 1 From, 2 To
    gsap.fromTo(
      "#blue-box-fromTo",
      //   from
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      //   To
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        borderRadius: "100%",
        rotation: 360,
        duration: 2,
        ease: "bounce.inOut",
      }
    );
  }, []);
  return (
    <div className="w-full h-fit mt-20 ">
      <h1>gsap GSAPfronTo</h1>
      <div
        id="blue-box-fromTo"
        className="w-20 h-20 bg-amber-300 rounded-lg my-13"
      ></div>
    </div>
  );
}
