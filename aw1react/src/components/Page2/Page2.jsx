import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Page2() {
  const rightElemsRef = useRef([]);

  useEffect(() => {
    rightElemsRef.current.forEach((elem) => {
      if (!elem) return;

      const img = elem.querySelector("img");
      if (!img) return;

      const handleMouseEnter = () => {
        gsap.to(img, { opacity: 1, scale: 1, duration: 0.3 });
      };

      const handleMouseLeave = () => {
        gsap.to(img, { opacity: 0, scale: 0, duration: 0.3 });
      };

      const handleMouseMove = (event) => {
        const { x, y } = event;
        const { left, top } = elem.getBoundingClientRect();

        gsap.to(img, {
          x: x - left - 90,
          y: y - top - 215,
          duration: 0.1,
        });
      };

      elem.addEventListener("mouseenter", handleMouseEnter);
      elem.addEventListener("mouseleave", handleMouseLeave);
      elem.addEventListener("mousemove", handleMouseMove);

      // Cleanup event listeners
      return () => {
        elem.removeEventListener("mouseenter", handleMouseEnter);
        elem.removeEventListener("mouseleave", handleMouseLeave);
        elem.removeEventListener("mousemove", handleMouseMove);
      };
    });
  }, []);

  return (
    <div id="page2">
      <div id="page2-left">
        <p>Exclusive insights into <br /> UI/UX and product design</p>
        <h5>
          Being a design studio at the forefront of digital transformation and
          product design, we take it upon ourselves to drop some knowledge,
          share insights, let out insider tips, and put our work on full
          display.
        </h5>
      </div>
      <div id="page2-right">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="right-elem"
              ref={(el) => (rightElemsRef.current[index] = el)}
            >
              <h2>How to Design An AI Interface Users will <br /> Trust in 2024?</h2>
              <img
                src="https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65c5011d306a52274ebea027_cover.webp"
                alt="AI Design"
                style={{ opacity: 0, transform: "scale(0)" }}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Page2;
