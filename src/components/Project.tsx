import { Container, Row, Col, Image, Button, Carousel } from "react-bootstrap";
import { FaRegCaretSquareUp } from "react-icons/fa";
import projects from "../constants/projects";
import { useState } from "react";

const Project: React.FC = () => {
  const borderRadius = "0.25rem";
  const textColor = "white";

  // This state variable manages which project's detail should be visible.
  const [visibilityList, setVisibilityList] = useState(
    new Array(projects.length).fill(false)
  );

  // Check which project detail is clicked by evaluating index passed into this function.
  const handleVisibilityList = (index: number) =>
    setVisibilityList(
      visibilityList.map((isVisible, i) =>
        i === index ? !isVisible : isVisible
      )
    );

  return (
    <Container
      id="projects"
      // This style is added so that it does not hide the very top content of the section.
      style={{ scrollMarginTop: "4rem" }}
      className="mt-4"
    >
      {/* Header */}
      <Row>
        <Col>
          <h2>Projects</h2>
        </Col>
      </Row>
      {/* End of Header */}
      <Row className="p-3">
        {projects.map((project, index) => {
          return (
            //   Container of the each project's card
            <Container
              className="mb-5"
              style={{
                backgroundColor: project.primaryColor,
                borderRadius: borderRadius,
                color: textColor,
              }}
              key={index}
            >
              <Row>
                <Col lg={12} xl={5} className="p-3">
                  <Row>
                    <h2>{project.name}</h2>
                  </Row>
                  <Row>
                    <p>{project.header}</p>
                  </Row>
                  <Row className="text-center my-4">
                    {Object.values(project.technologies).map(
                      (technology, key) => (
                        <Col key={key}>
                          <Image
                            width="60px"
                            className="m-2"
                            src={technology}
                          />
                        </Col>
                      )
                    )}
                  </Row>
                  <div className="text-center">
                    <Button
                      variant="outline-light"
                      onClick={() => handleVisibilityList(index)}
                    >
                      Details
                    </Button>
                  </div>
                </Col>
                <Col lg={12} xl={7} className="my-auto text-center p-0">
                  <Image src={project.image} fluid rounded />
                </Col>
              </Row>
              {/* Hidden detail block */}
              <div
                className="mt-4 mb-3"
                style={{ display: visibilityList[index] ? "block" : "none" }}
              >
                <Row className="p-3">
                  <p>{project.description}</p>
                </Row>
                {/* Carousel */}
                <Row className="m-4 h-100">
                  <Carousel fade>
                    {project.carouselImages.map((carouselImage, key) => {
                      return (
                        <Carousel.Item className="text-center " key={key}>
                          <Image
                            className="w-75 h-75"
                            src={carouselImage}
                            fluid
                            rounded
                          />
                        </Carousel.Item>
                      );
                    })}

                    {/* <Carousel.Item className="text-center ">
                      <Image
                        className="w-75 h-75"
                        src="images/Projects/Snacky/card_image.png"
                        fluid
                        rounded
                      />
                    </Carousel.Item>
                    <Carousel.Item className="text-center">
                      <Image
                        className="w-75 h-100"
                        src="images/Projects/NCDI/card_image.png"
                        fluid
                        rounded
                      />
                    </Carousel.Item>
                    <Carousel.Item className="text-center">
                      <Image
                        className="w-75 h-100"
                        src="images/Projects/Portfolio/card_image.png"
                        fluid
                        rounded
                      />
                    </Carousel.Item> */}
                  </Carousel>
                </Row>
                {/* End of Carousel */}
                {/* Close Icon */}
                <Row>
                  <FaRegCaretSquareUp
                    size={32}
                    onClick={() => handleVisibilityList(index)}
                    style={{ cursor: "pointer" }}
                  />
                </Row>
              </div>
            </Container>
            // End of the project's card container
          );
        })}
      </Row>
    </Container>
  );
};

export default Project;
