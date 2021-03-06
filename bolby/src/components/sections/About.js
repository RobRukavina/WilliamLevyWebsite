import React from "react";
import "./AboutCss.css"; 
// import TrackVisibility from "react-on-screen";
// import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
// import Skill from "../elements/Skill";

// import image
import WillBlue from "../../images/WillBlue.jpg";

const aboutContent = {
  name: "William Levy",
  content:
    "Just starting out as a Full Stack Developer I find the struggle and research into getting code to work the way I want, to be extremely gratifying! The challenge keeps me learning every day. Currently I'm looking for new opportunities and would love to have a conversation about what I can contribute to your team.",
};

// const progressData = [
//   {
//     id: 1,
//     title: "React.Js",
//     percantage: 95,
//     progressColor: "#FF4C60",
//   },
//   {
//     id: 2,
//     title: ".NET Core/C#",
//     percantage: 85,
//     progressColor: "#FF4C60",
//   },
//   {
//     id: 3,
//     title: "SQL Server",
//     percantage: 70,
//     progressColor: "#6C6CE5",
//   },
// ];

// const counterData = [
//   {
//     id: 1,
//     title: "Projects completed",
//     count: 198,
//     icon: "icon-fire",
//   },
//   {
//     id: 2,
//     title: "Cup of coffee",
//     count: 5670,
//     icon: "icon-cup",
//   },
//   {
//     id: 3,
//     title: "Satisfied clients",
//     count: 427,
//     icon: "icon-people",
//   },
//   {
//     id: 4,
//     title: "Nominees winner",
//     count: 35,
//     icon: "icon-badge",
//   },
// ];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={WillBlue} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>
          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p style={{ fontWeight: "bold" }}>{aboutContent.name}</p>
                  <p style={{ paddingRight: "10px" }}>{aboutContent.content}</p>
                  <div className="mt-3">
                    {/* <a href="!#" className="btn btn-default">
                      Download CV
                    </a> */}
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  <span style={{ fontWeight: "bold" }}>Skills:</span>
                  <div className="row">
                    <div className="col-md-3">
                      <ul>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>jQuery</li>
                        <li>AJAX</li>
                        <li>Bootstrap 4</li>
                        <li>HTML5</li>
                      </ul>
                    </div>
                    <p className="myPTag" />
                    <div className="col-md-3">
                      <ul>
                        <li>CSS3</li>
                        <li>SCSS</li>
                        <li>ADO.NET</li>
                        <li>ASP.NET</li>
                        <li>SSMS</li>
                        <li>SQL</li>
                        <li>T-SQL</li>
                      </ul>
                    </div>
                  </div>
                  {/* </div> */}
                  {/* {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default About;
