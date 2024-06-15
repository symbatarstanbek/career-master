import React from "react";
import "./InterestAreas.css";
import leftDown from "../images/leftDownCorner.png";
import leftUp from "../images/leftUpCorner.png";
import rightDown from "../images/rightDownCorner.png";
import rightUp from "../images/rightUpCorner.png";

export default function InterestAreas() {
  const areas = [
    "Systems Analyst",
    "AI engineer",
    "Software Developer",
    "Web Developer",
    "Data Scientist",
    "Database Administrator",
    "UX Designer",
    "Cloud Engineer",
    "SDET/DevOps",
    "Product Manager",
    "Data Quality Manager",
    "Data Quality Manager",
    "Data Quality Manager",
    "Chief Technology Officer",
    "IT Director",
    "IT Coordinator",
  ];

  return (
    <>
      <div class="row">
        <div class="col-3 col-s-3 image-container">
          <img src={leftUp} className="interestImage" alt="" />
          <img src={leftDown} className="interestImage" alt="" />
        </div>
        <div class="col-6 col-s-9">
          <h1>
            What areas of IT are you most interested in? Choose one and more
          </h1>
          <>
            <ul>
              <li>
                {areas.map((area) => {
                  return (
                    <a
                      href="https://www.google.com/"
                      className="button areas-button"
                    >
                      {area}
                    </a>
                  );
                })}
              </li>
            </ul>
            <a
              href="https://www.google.com/"
              className="button continue-button"
            >
              Continue
            </a>
          </>
        </div>

        <div class="col-3 col-s-9 image-container">
          <img src={rightUp} className="interestImage" alt="" />
          <img src={rightDown} className="interestImage" alt="" />
        </div>
      </div>
    </>
  );
}
