import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function GsapStagger() {
  const colors = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-teal-500",
  ];

  useGSAP(() => {
    gsap.from(".stagger-box", {
      y: 100,
      opacity: 0,
      duration: 1,
      rotation: 360,
      borderRadius: "100%",
      ease: "back.out(1.7)",
      //   stagger: 0.2,
      stagger: {
        amount: 1,
        grid: [2, 1],
        axis: "y",
        ease: "circ.out",
        from: "center",
      },
    });
  }, []);

  return (
    <div className="h-screen flex flex-wrap gap-4 justify-center items-center p-10">
      {colors.map((color, i) => (
        <div
          key={i}
          className={`stagger-box w-20 h-20 ${color} rounded-lg`}
        ></div>
      ))}
    </div>
  );
}
