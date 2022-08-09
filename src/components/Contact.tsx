import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  Spinner,
} from "react-bootstrap";
import { resume } from "../constants/resume";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [buttonText, setButtonText] = useState("Submit");

  // Send an email with the contents of the form.
  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setShowSpinner(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICEID!,
        process.env.REACT_APP_EMAILJS_TEMPLATEID!,
        e.currentTarget,
        process.env.REACT_APP_EMAILJS_USERID!
      )
      .then((res) => {
        setTimeout(() => {
          setShowSpinner(false);
          setButtonText("Thanks!");
          setTimeout(() => {
            setButtonText("Submit");
          }, 2000);
        }, 2000);
      })
      .catch((error) => {
        console.log(error.text);
        setShowSpinner(false);
      });
    // Reset the contents of the form/
    e.currentTarget.reset();
  };

  return (
    <Container id="contact">
      <Row className="mb-4">
        {/* Resume Section */}
        <Col lg={7}>
          {/* Header text of the section */}
          <Row className="text-center">
            <h2>Resume</h2>
          </Row>
          {/* End of the Header text of the section */}
          <Row
            className="border p-3"
            // Set the height to enable the scrollable resume section.
            style={{ overflowY: "scroll", height: "50vh" }}
          >
            {/* Name Header */}
            <div className="text-center">
              <h2 className="border-bottom border-dark pb-1">{resume.name}</h2>
            </div>
            {/* Relevent skills */}
            <div className="p-3">
              <div>
                <h5>RELEVANT SKILLS:</h5>
              </div>
              <div>
                <ul>
                  {resume.relevant_skills.map((relevant_skill, index) => {
                    return <li key={index}>{relevant_skill}</li>;
                  })}
                </ul>
              </div>
            </div>
            {/* Education */}
            <div className="p-3">
              <div>
                <h5>EDUCATION:</h5>
              </div>
              <div>
                <ul>
                  {resume.education_list.map((education, index) => {
                    return (
                      <li key={index}>
                        <Row>
                          <Col>
                            <p className="m-0 fw-bold">{education.level}</p>
                            <p className="fw-light">{education.school}</p>
                          </Col>
                          <Col className="my-auto text-end">
                            <p>{education.duration}</p>
                          </Col>
                        </Row>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* Employment */}
            <div className="p-3">
              <div>
                <h5>EMPLOYMENT:</h5>
              </div>
              <div>
                <ul style={{ listStyleType: "none" }}>
                  {resume.employment_list.map((employment, index) => {
                    return (
                      <li className="mb-3" key={index}>
                        <Row>
                          <Row>
                            <Col>
                              <p className="m-0">
                                <span className="fw-bold">
                                  {employment.position}
                                </span>
                                {" - "}
                                {employment.employer}
                                {", "}
                                {employment.location}
                              </p>
                            </Col>
                            <Col className="text-end">
                              <p>{employment.duration}</p>
                            </Col>
                          </Row>
                          <ul className="ps-5">
                            {employment.skills.map((skill, key) => {
                              return <li key={key}>{skill}</li>;
                            })}
                          </ul>
                        </Row>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* Volunteer */}
            <div className="p-3">
              <div>
                <h5>VOLUNTEER ACTIVITY:</h5>
              </div>
              <div>
                <ul style={{ listStyleType: "none" }}>
                  {resume.volunteer_activities.map(
                    (volunteer_activity, index) => {
                      return (
                        <li className="mb-3" key={index}>
                          <Row>
                            <Row>
                              <Col>
                                <p className="m-0 fw-bold">
                                  {volunteer_activity.title}
                                </p>
                              </Col>
                              <Col className="text-end">
                                <p>{volunteer_activity.duration}</p>
                              </Col>
                            </Row>
                            <ul className="ps-5 mt-3">
                              {volunteer_activity.skills.map((skill, key) => {
                                return <li key={key}>{skill}</li>;
                              })}
                            </ul>
                          </Row>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>
          </Row>
        </Col>
        {/* End of Resume Section */}

        {/* Contact Form Section */}
        <Col className="mt-3 mt-md-0">
          <Row>
            <Col className="text-center">
              <h2>Contact</h2>
            </Col>
          </Row>
          <Row className="p-3">
            <Col>
              <Form onSubmit={sendEmail}>
                <FormGroup className="m-3">
                  <FormLabel>Name</FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    required
                  ></FormControl>
                </FormGroup>
                <FormGroup className="m-3">
                  <FormLabel>Email</FormLabel>
                  <FormControl
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    required
                  ></FormControl>
                </FormGroup>
                <FormGroup className="m-3">
                  <FormLabel>Message</FormLabel>
                  <FormControl
                    as="textarea"
                    rows={5}
                    name="message"
                  ></FormControl>
                </FormGroup>
                <div className="text-center">
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={showSpinner ? true : false}
                  >
                    {/* Conditionally render the spinner or the button */}
                    {showSpinner ? (
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    ) : (
                      buttonText
                    )}
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Col>
        {/* End of Contact Form Section */}
      </Row>
    </Container>
  );
};

export default Contact;
