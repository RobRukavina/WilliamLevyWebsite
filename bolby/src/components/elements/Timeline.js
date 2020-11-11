import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Timeline({ education }) {
  const { years, title, content, location, company } = education;
  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeInOut"
      animateOnce={true}
    >
      <div className="timeline-container">
        <div className="content">
          <span className="time">{years}</span>
          <h2 className="title">{company}</h2>
          <h4 className="title">{title}</h4>
          <h5 className="time">{location}</h5>
          <p>{content}</p>
          <h5>{" "}</h5>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Timeline;
