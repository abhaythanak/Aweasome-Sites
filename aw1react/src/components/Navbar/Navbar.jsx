import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from("#page1", {
      opacity: 0,
      duration: 0.2,
      delay: 0.2,
    })
      .from("#page1", {
        scale: 0.7,
        y: "80%",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out",
      })
      .from("nav", {
        opacity: 0,
        delay: -0.2,
      })
      .from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
      });
  }, []);

  useEffect(() => {
    const nav = navRef.current;

    if (!nav) return;

    const handleMouseEnter = () => {
      const tl = gsap.timeline();

      tl.to("#nav-bottom", {
        height: "25vh",
        duration: 0.5,
      })
        .to(".nav-part2 h5", {
          display: "block",
          duration: 0.1,
        })
        .to(".nav-part2 h5 span", {
          y: 0,
          stagger: { amount: 0.5 },
        });
    };

    const handleMouseLeave = () => {
      const tl = gsap.timeline();

      tl.to(".nav-part2 h5 span", {
        y: 25,
        stagger: { amount: 0.2 },
      })
        .to(".nav-part2 h5", {
          display: "none",
          duration: 0.1,
        })
        .to("#nav-bottom", {
          height: 0,
          duration: 0.2,
        });
    };

    nav.addEventListener("mouseenter", handleMouseEnter);
    nav.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      nav.removeEventListener("mouseenter", handleMouseEnter);
      nav.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div>
      <nav ref={navRef}>
        <h1>LAZAREV.</h1>
        <div className="nav-part2">
          <div className="nav-elem">
            <h4>Case Studies</h4>
            <h5><span>Case Studies</span></h5>
          </div>
          <div className="nav-elem">
            <h4>Areas of expertise</h4>
            <h5><span>AI & ML</span></h5>
            <h5><span>Fintech</span></h5>
            <h5><span>Real Estate</span></h5>
            <h5><span>E-commerce</span></h5>
            <h5><span>Web 3</span></h5>
          </div>
          <div className="nav-elem">
            <h4>UIUX Design</h4>
            <h5><span>Fintech</span></h5>
            <h5><span>Real Estate</span></h5>
            <h5><span>E-commerce</span></h5>
            <h5><span>Web 3</span></h5>
          </div>
          <div className="nav-elem">
            <h4>Product Design</h4>
            <h5><span>Fintech</span></h5>
            <h5><span>Real Estate</span></h5>
            <h5><span>E-commerce</span></h5>
            <h5><span>Web 3</span></h5>
          </div>
          <div className="nav-elem">
            <h4>Design Process</h4>
            <h5><span>E-commerce</span></h5>
            <h5><span>Web 3</span></h5>
          </div>
          <div className="nav-elem">
            <h4>About Agency</h4>
            <h5><span>Fintech</span></h5>
            <h5><span>Real Estate</span></h5>
            <h5><span>Web 3</span></h5>
          </div>
        </div>
        <button>
          Let's Talk{" "}
          <svg fill="none" viewBox="0 0 20 20">
            <path
              fill="#fff"
              d="M2.5 14.375V17.5h3.125l9.217-9.217-3.125-3.125L2.5 14.375Zm14.758-8.508a.83.83 0 0 0 0-1.175l-1.95-1.95a.83.83 0 0 0-1.175 0l-1.525 1.525 3.125 3.125 1.525-1.525Z"
            ></path>
          </svg>
        </button>
        <div id="nav-bottom"></div>
      </nav>
    </div>
  );
}

export default Navbar;
