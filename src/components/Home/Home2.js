import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p class="home-about-body">
              <p>
                I’m <span class="highlight">Manisha Thakare</span>, a
                <span class="purple"> DevOps Engineer</span> passionate about
                building secure, scalable, and highly automated cloud
                infrastructures. I enjoy transforming complex deployment
                challenges into reliable, production-ready systems using modern
                DevOps practices.
              </p>

              <p>
                I specialize in <span class="purple"> AWS Cloud</span>,
                <span class="purple"> Containerization</span>,
                <span class="purple"> CI/CD Pipelines</span>, and
                <span class="purple"> Infrastructure as Code</span>, with
                hands-on experience architecting cloud-native solutions using
                <span class="purple"> Terraform</span>, orchestrating containers
                with
                <span class="purple"> Kubernetes & Helm</span>, and automating
                end-to-end infrastructure workflows.
              </p>

              <p>
                I have strong experience with <span class="purple">Linux</span>,
                <span class="purple"> Docker</span>,
                <span class="purple"> GitOps</span>,
                <span class="purple"> Ansible</span>,
                <span class="purple"> Monitoring & Logging</span>, and
                <span class="purple"> Kafka</span>, enabling teams to deploy
                faster, operate efficiently, and maintain high system
                reliability.
              </p>

              <p>
                I also work with <span class="purple"> SQL databases</span>,
                <span class="purple"> Jira</span> for project workflows, and
                <span class="purple"> SonarQube</span> for continuous code
                quality and security analysis—ensuring high standards throughout
                the delivery pipeline.
              </p>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
