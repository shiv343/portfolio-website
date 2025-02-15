import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"

export const Projects = ( ) => {
    
        const projects = [
            {
              title: "Business Startup",
              description: "Design & Development",
              imgUrl: projImg1,
            },
            {
              title: "Business Startup",
              description: "Design & Development",
              imgUrl: projImg2,
            },
            {
              title: "Business Startup",
              description: "Design & Development",
              imgUrl: projImg3,
            },
            {
              title: "Business Startup",
              description: "Design & Development",
              imgUrl: projImg1,
            },
            {
              title: "Business Startup",
              description: "Design & Development",
              imgUrl: projImg2,
            },
            {
              title: "Business Startup",
              description: "Design & Development",
              imgUrl: projImg3,
            },
          ];
   return (
    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                    <h2>
                        Projects
                    </h2>
                    <p>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">First tab content</Tab.Pane>
            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
                    

                    </p>
                </Col>
            </Row>
        </Container>
    </section>


    )
}