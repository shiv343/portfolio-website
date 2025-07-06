import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Col ,Row } from "react-bootstrap";
import tailwind from "../assets/img/tailwind-css.svg";
import 'animate.css';
import github from "../assets/img/github.svg";
import nodejs from "../assets/img/nodejs.svg";
import postgresql from "../assets/img/postgresql.svg";
import python from "../assets/img/python.svg";
import express from "../assets/img/express-js.svg";
import kafka from "../assets/img/kafka.svg";
import prisma from "../assets/img/prisma.svg";
import javascript from "../assets/img/javascript.svg";
import react from "../assets/img/react.svg";
import aws from "../assets/img/aws.svg";
import docker from "../assets/img/docker.svg";
import mongodb from "../assets/img/mongodb.svg";
import redis from "../assets/img/redis.svg";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                I build modern full stack web and mobile applications with
                React, Node.js, Express, Prisma, and MongoDB. My experience
                includes PostgreSQL, Kafka, AWS, Docker, and designing
                responsive, accessible user interfaces for both web and mobile.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000} // Adjust delay between scrolls (ms)
                keyBoardControl={true}
                className="skill-slider"
              >
             
                <div className="item">
                  <img src={javascript} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={tailwind} alt="Image" />
                  <h5>Tailwind</h5>
                </div>
                <div className="item">
                  <img src={github} alt="Image" />
                  <h5>Github</h5>
                </div>
                <div className="item">
                  <img src={nodejs} alt="Image" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={postgresql} alt="Image" />
                  <h5>PostgreSql</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={express} alt="Image" />
                  <h5>express</h5>
                </div>
                <div className="item">
                  <img src={kafka} alt="Image" />
                  <h5>Kafka</h5>
                </div>
                <div className="item">
                  <img src={prisma} alt="Image" />
                  <h5>Prisma</h5>
                </div>

                <div className="item">
                  <img src={aws} alt="Image" />
                  <h5>AWS</h5>
                </div>
                <div className="item">
                  <img src={docker} alt="Image" />
                  <h5>Docker</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="Image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={redis} alt="Image" />
                  <h5>redis</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}