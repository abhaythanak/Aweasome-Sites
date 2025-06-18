import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ✅ Ensure ScrollTrigger is registered globally
gsap.registerPlugin(ScrollTrigger);

function Page6() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#btm6-part2 h4", {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#btm6-part2",
          start: "top 80%",
          end: "top 10%",
          scrub: true,
        },
      });
    });

    return () => ctx.revert(); // ✅ Clean up animations on unmount
  }, []);

  return (
    <div id="page6">
      <h1>Digital Product Design Process</h1>
      <div id="page6-content">
        <div id="blue-btn">
          <h4>See all Case Studies <i className="ri-arrow-right-up-line"></i></h4>
          <h4>See all Case Studies <i className="ri-arrow-right-up-line"></i></h4>
        </div>
        <div id="right-6">
          <p>
            We do not take on projects that involve blind conformity or designing out of context...
          </p>
          <p>
            Instead, we create scalable digital products that meet the ever-evolving demands...
          </p>
        </div>
      </div>
      <div id="page6-bottom">
        <div id="btm6-part1" className="btm6-parts"></div>
        <div id="btm6-part2" className="btm6-parts">
          <h5>Product Strategy</h5>
          <h4><span>1</span>Strategy Workshop</h4>
          <h4><span>2</span>Idea Validation</h4>
          <h4><span>3</span>Market Research</h4>
          <h4><span>4</span>Product Positioning</h4>
          <h4><span>5</span>UX Research</h4>
          <h4><span>6</span>Functional Decomposition</h4>
        </div>
      </div>
    </div>
  );
}

export default Page6;
