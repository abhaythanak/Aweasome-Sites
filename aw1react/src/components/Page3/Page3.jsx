import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Page3() {
  const videoRef = useRef(null);
  const page3CenterRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const video = videoRef.current;
    const page3Center = page3CenterRef.current;
    const sections = document.querySelectorAll(".sec-right");

    if (!video || !page3Center) return;

    const handlePlay = () => {
      video.play();
      gsap.to(video, {
        transform: "scaleX(1) scaleY(1)",
        opacity: 1,
        borderRadius: 0,
      });
    };

    const handlePause = () => {
      video.pause();
      gsap.to(video, {
        transform: "scaleX(0.7) scaleY(0)",
        opacity: 0,
        borderRadius: "30px",
      });
    };

    page3Center.addEventListener("click", handlePlay);
    video.addEventListener("click", handlePause);

    sections.forEach((elem) => {
      const sectionVideo = elem.querySelector("video");

      if (sectionVideo) {
        const handleMouseEnter = () => {
          sectionVideo.style.opacity = 1;
          sectionVideo.play();
        };

        const handleMouseLeave = () => {
          sectionVideo.style.opacity = 0;
          sectionVideo.load();
        };

        elem.addEventListener("mouseenter", handleMouseEnter);
        elem.addEventListener("mouseleave", handleMouseLeave);

        sectionsRef.current.push({ elem, handleMouseEnter, handleMouseLeave });
      }
    });

    return () => {
      page3Center.removeEventListener("click", handlePlay);
      video.removeEventListener("click", handlePause);
      sectionsRef.current.forEach(({ elem, handleMouseEnter, handleMouseLeave }) => {
        elem.removeEventListener("mouseenter", handleMouseEnter);
        elem.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div id="page3">
      <video ref={videoRef} src="https://lazarev.kiev.ua/la24/la-reel--min.mp4"></video>
      <div className="page3-center" ref={page3CenterRef}>
        <div className="icon">
          <i className="ri-play-fill"></i>
        </div>
        <h5>Watch Showreel</h5>
      </div>
    </div>
  );
}

export default Page3;
