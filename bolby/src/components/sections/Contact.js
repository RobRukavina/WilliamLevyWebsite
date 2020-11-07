import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
// import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";

function Contact() {
  // const [formdata, setFormdata] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  // const [error, setError] = useState(false);
  // const [message, setMessage] = useState("");

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   if (!formdata.name) {
  //     setError(true);
  //     setMessage("Name is required");
  //   } else if (!formdata.email) {
  //     setError(true);
  //     setMessage("Email is required");
  //   } else if (!formdata.subject) {
  //     setError(true);
  //     setMessage("Subject is required");
  //   } else if (!formdata.message) {
  //     setError(true);
  //     setMessage("Message is required");
  //   } else {
  //     setError(false);
  //     setMessage("You message has been sent!!!");
  //   }
  // };

  // const handleChange = (event) => {
  //   setFormdata({
  //     ...formdata,
  //     [event.currentTarget.name]: event.currentTarget.value,
  //   });
  // };

  // const handleAlerts = () => {
  //   if (error && message) {
  //     return <div className="alert alert-danger mt-4">{message}</div>;
  //   } else if (!error && message) {
  //     return <div className="alert alert-success mt-4">{message}</div>;
  //   } else {
  //     return null;
  //   }
  // };

  return (
    <section id="contact">
      <Container style={{ display: "100vh" }}>
        <Pagetitle
          title="Get In Touch"
          subtitle="Contact"
          desc="Give us a call or send us an email for more information on our services."
        />
        <Row className="mt-5 pt-2">
          <Col lg={12}>
            <div className="contact-info">
              <Media>
                <i className="mdi mdi-map-marker text-primary h4"></i>
                <Media body className=" ml-4">
                  <p className="text-muted">Macomb, MI</p>
                </Media>
              </Media>

              <Media className="mt-4">
                <i className="mdi mdi-phone text-primary h4"></i>
                <Media body className="ml-4">
                  <p className="text-muted">Phone: 1-586-330-0659</p>
                </Media>
              </Media>

              <Media className="media mt-4">
                <i className="mdi mdi-email text-primary h4"></i>
                <Media body className="ml-4">
                  <p className="text-muted">
                    Email:{" "}
                    <a
                      href="https://mail.google.com/mail/?view=cm&source=mailto&to=levy.william.j@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      levy.william.j@gmail.com
                    </a>
                  </p>
                </Media>
              </Media>
            </div>
          </Col>
          <Col lg={7}>
            {/* <img
              className="myLogoOnContact"
              src={LogoLG}
              alt="#"
              style={{
                height: "300px",
                width: "auto",
                marginLeft: "13rem",
              }}
            ></img> */}
          </Col>
        </Row>
      </Container>
      {/* <div className="container">
        <Pagetitle title="Get in Touch" />

        <div className="row">
          <div className="col-md-4">
            <div className="contact-info">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h3>Let's talk about everything!</h3>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p>
                  Don't like forms? Send me an{" "}
                  <a href="mailto:name@example.com">email</a>. 👋
                </p>
              </ScrollAnimation>
            </div>
          </div>

          <div className="col-md-8">
            <form
              id="contact-form"
              className="contact-form mt-6"
              onSubmit={submitHandler}
            >
              <div className="row">
                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="InputName"
                      placeholder="Your name"
                      onChange={handleChange}
                      value={formdata.name}
                    />
                  </div>
                </div>

                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="InputEmail"
                      name="email"
                      placeholder="Email address"
                      onChange={handleChange}
                      value={formdata.email}
                    />
                  </div>
                </div>

                <div className="column col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="InputSubject"
                      name="subject"
                      placeholder="Subject"
                      onChange={handleChange}
                      value={formdata.subject}
                    />
                  </div>
                </div>

                <div className="column col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="InputMessage"
                      className="form-control"
                      rows="5"
                      placeholder="Message"
                      onChange={handleChange}
                      value={formdata.message}
                    ></textarea>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                name="submit"
                id="submit"
                value="Submit"
                className="btn btn-default"
              >
                Send Message
              </button>
            </form>
            {handleAlerts()}
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Contact;
