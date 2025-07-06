import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/moviex.png";
import projImg2 from "../assets/img/Ev.png";
import projImg3 from "../assets/img/AI.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title: "EV CHARGING STATION",
      description: "EV station Locator Mobile Application",
      imgUrl: projImg2,
    },
    {
      title: "MOVIEX",
      description: "Personalized Movie Streaming Platform",
      imgUrl: projImg1,
    },
    {
      title: "AI",
      description: "EV station Locator Mobile Application",
      imgUrl: projImg3,
    },
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Crafting Ideas into Functional Experiences.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">ALL</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Mobile</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">WEB</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>


                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects
                            .filter((project) => project.eventKey === "first" || project.title === "EV CHARGING STATION")
                            .map((project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects
                            .filter((project) => ["MOVIEX", "AI"].includes(project.title))
                            .map((project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                              />

                            ))}
                        </Row>

                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
