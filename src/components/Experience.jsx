import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <div className="container ex" id="experience">
      <h1 className="text-left mb-4">EXPERIENCE</h1>
      {experience.map((data) => (
        <div
          key={data.id}
          className="ex-items my-5 d-flex align-items-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {/* Left: Image Section */}
          <div className="left">
            <img
              src={`/assets/${data.imageSrc}`} // ✅ Fixed Path
              alt={data.role || "Experience Image"}
              className="experience-image"
            />
          </div>

          {/* Right: Details Section */}
          <div className="right ms-4">
            <h2 className="role">
              <span className="job-title">{data.role}</span>
            </h2>
            <h4 className="d-flex justify-content-between">
              <span className="date">
                {data.startDate || "N/A"} - {data.endDate || "Present"}
              </span>
              <span className="location">{data.location || "Unknown"}</span>
            </h4>
            <ul className="experience-list mt-2">
              {data.experiences && data.experiences.length > 0 ? (
                data.experiences.map((exp, index) => (
                  <li key={index} className="experience-detail">
                    {exp}
                  </li>
                ))
              ) : (
                <li className="experience-detail">No Experience Listed</li>
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
