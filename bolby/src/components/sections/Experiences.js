import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Acamedic Degree",
    years: "2019 - Present",
    content:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
  {
    id: 2,
    title: "Bachelor’s Degree",
    years: "2017 - 2013",
    content:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
  {
    id: 3,
    title: "Honours Degree",
    years: "2013 - 2009",
    content:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
];

const experienceData = [
  {
    id: 1,
    company: "WebMall",
    title: "Full Stack Web Developer",
    location: "Irvine, CA",
    years: "May, 2020 - Present",
    content:
      "Worked remotely with a team of 20+ developers utilizing Agile Methodologies to discuss, brainstorm and develop web page requirements. Utilized C# and .Net Core to build API endpoints and test with Postman REST Client. Created the entire front end design for business profiles using React.js, Reactstrap, and AXIOS. Conducted code reviews and management of git repository to ensure adherence to team standards and specifications. Created and managed SQL tables, stored procedures and diagrams need for back-end infrastructure. Implemented Formik, PropTypes, and .NET validation to ensure good data is being sent or received from all tiers of the application",
  },
  {
    id: 2,
    company: "Batter UP Waffle Company",
    title: "Co-Owner",
    location: "Maycomb, MI",
    years: "Jan, 2019 - Present",
    content:
      "Batter up is a small partnership Food Truck business started in late 2017. Responsibilities ranged from setting up the truck to get the truck ready for service to ordering food, handling finances",
  },
  {
    id: 3,
    company: "United States Army Reserves",
    title: "Senior Finance Management Tech",
    location: "Fraser, MI",
    years: "2014 - Present",
    content:
      "Responsible for the morale, health, and training of a 20+ man platoon. Providing guidance to the soldiers regarding their military pay",
  },
  {
    id: 4,
    company: "United States Army",
    title: "Infantry Mortarman",
    location: "Worldwide",
    years: "2003-2014",
    content:
      "3 combat deployments overseas. Responsible for the morale, health, and training of a 10 man section",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-12">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
