import { Container, Row, Col, Image, Button } from "react-bootstrap";

const About: React.FC = () => {
  return (
    <Container>
      <Row className="py-4">
        {/* Introductory sentence here */}
        <Col md={12} lg={5} className="my-auto">
          <h3>Hi!</h3>
          <h2>
            I'm <span style={{ color: "blue" }}>S</span>eiji
            <span style={{ color: "red" }}>.</span>
          </h2>
          <hr />
          <p>
            I am an aspiring programmer who is seeking a web development
            position. I have completed 2-year program at a college to build the
            skills of Information and Computer Systems.
          </p>

          <div className="text-center">
            <Button href="#about">About Me</Button>
          </div>
        </Col>

        {/* Image here */}
        <Col md={12} lg={7} className="my-auto">
          <Image src="images/about_logo.png" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
