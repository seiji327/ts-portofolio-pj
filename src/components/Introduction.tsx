import { Container, Row, Col } from "react-bootstrap";
import { resume } from "../constants/resume";
import { skills } from "../constants/skills";
import { FaStar, FaRegStar } from "react-icons/fa";

const Introduction: React.FC = () => {
  return (
    // This style is added so that it does not hide the very top content of the section.
    <Container id="about" style={{ scrollMarginTop: "4rem" }} className="mb-4">
      <Row>
        <Col className="text-center">
          <h2>About Me</h2>
        </Col>
      </Row>
      <Row className="p-4">
        <Col>
          <p>
            My name is Seiji Sagawa. I was born and raise in Osaka, Japan. After
            having completed a bachelor's degree in Economics and worked at a
            bank, I decided to move to Victoria, Canada to challenge and achieve
            my educational goals which are learning English and Computer
            Science. I started learning programming at Camosun College. During
            the 2-year program, I learned HTML, CSS, JavaScript, Java, PHP, SQL,
            Python, C++, data structure, networking and basic Linux operations.
          </p>
        </Col>
      </Row>
      <Row>
        {/* Education Section */}
        {/* When screen size is 'xs', take 12 columns. When screen size is above 'sm', take 6 columns. */}
        <Col xs={12} sm={6}>
          <h6>Education</h6>
          {resume.education_list.map((education, index) => {
            return (
              <Row key={index} className="mb-2">
                <p className="mb-0 fw-bold">{education.level}</p>
                <p className="mb-0 fw-light">{education.school}</p>
                <p className="mb-0 fw-lighter">{education.duration}</p>
              </Row>
            );
          })}
        </Col>
        {/* Skills section */}
        {/* When screen size is 'xs', take 12 columns. When screen size is above 'sm', take 6 columns. */}
        <Col xs={12} sm={6} className="mt-3 mt-sm-0">
          <h6>Technology I have used</h6>
          {skills.map((skill, index) => {
            return (
              <Row key={index} className="mb-2">
                <p className="mb-0 fw-bold">{skill.skill_name}</p>
                <Row>
                  {/* Creating array with 5 elements to create a for loop. */}
                  {[...Array(5)].map((_, i) => {
                    return (
                      <Col key={i}>
                        {i < skill.skill_level ? (
                          <FaStar color="#f3ec18" />
                        ) : (
                          <FaRegStar />
                        )}
                      </Col>
                    );
                  })}
                </Row>
              </Row>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;
