import { Row, Col, Container } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Container className="bg-dark w-100 p-0 m-0 text-white" fluid>
      <Row className="m-0 p-0 text-center justify-content-center">
        <Col className="my-auto">
          <a
            href="https://github.com/seiji327"
            className="my-auto"
            style={{ color: "white" }}
          >
            <FaGithub className="m-2" size={28} />
          </a>
        </Col>
      </Row>
      <Row className="m-0 text-center">
        <Col className="pb-2 my-auto">
          <p className="my-auto">
            &copy; {new Date().getFullYear()} Seiji Sagawa
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
