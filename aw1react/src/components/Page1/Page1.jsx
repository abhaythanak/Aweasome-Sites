import React from "react";

function Page1() {
  const logos = [
    "https://lazarev.kiev.ua/la24/forbes.svg",
    "https://lazarev.kiev.ua/la24/adweek.svg",
    "https://lazarev.kiev.ua/la24/pmi.svg",
    "https://lazarev.kiev.ua/la24/wf.svg",
    "https://lazarev.kiev.ua/la24/adweek.svg",
    "https://lazarev.kiev.ua/la24/rd.svg",
    "https://lazarev.kiev.ua/la24/pmi.svg",
    "https://lazarev.kiev.ua/la24/webby.svg",
  ];

  return (
    <div id="page1">
      <h1>
        AI & ML PR
        <span>
          <svg
            className="c-bttn__morph"
            fill="none"
            viewBox="0 0 131 136"
            aria-hidden="true"
          >
            <path
              className="g-path"
              data-morph="end"
              fill="#fff"
              d="M48 77.457v7.224h7.224l21.307-21.306-7.224-7.225L48 77.457Zm34.118-19.67a1.919 1.919 0 0 0 0-2.716l-4.508-4.508a1.919 1.919 0 0 0-2.716 0l-3.526 3.526 7.224 7.224 3.526-3.525Z"
            ></path>
            <path
              className="g-path"
              data-morph="start"
              fill="#fff"
              d="M48 77.457v7.224h7.224l21.307-21.306-7.224-7.225L48 77.457Zm34.118-19.67a1.919 1.919 0 0 0 0-2.716l-4.508-4.508a1.919 1.919 0 0 0-2.716 0l-3.526 3.526 7.224 7.224 3.526-3.525Z"
            ></path>
          </svg>
        </span>
        duct
      </h1>
      <h1>DESIGN Agency</h1>
      <p>
        We partner with AI & ML businesses, guiding them from Series A to Series
        D and beyond with our expertise in{" "}
      </p>
      <div id="page1-something">
        <h4>Brand design</h4>
        <h4>User Experience</h4>
        <h4>and</h4>
        <h4>Digital product design</h4>.
      </div>
      <div id="moving-div">
        <div id="blur-left"></div>
        {[...Array(2)].map((_, index) => (
          <div key={index} className="move">
            {logos.map((logo, i) => (
              <img
                key={i}
                src={`https://lazarev.kiev.ua/la24/${logo}`}
                alt="logo"
              />
            ))}
          </div>
        ))}
        <div id="blur-right"></div>
      </div>
    </div>
  );
}

export default Page1;
