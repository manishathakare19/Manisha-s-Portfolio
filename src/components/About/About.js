import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack"; 
import laptopImg from "../../Assets/about.png"; 

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* ROW 1: Heading */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} style={{ paddingTop: "30px", paddingBottom: "50px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
          </Col>
        </Row>

        {/* ROW 2: Terminal Bio & Visuals */}
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          
          {/* LEFT SIDE: The "Terminal" Bio */}
          <Col md={7} style={{ paddingBottom: "50px" }}>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button red"></div>
                <div className="terminal-button yellow"></div>
                <div className="terminal-button green"></div>
              </div>
              <div className="terminal-body">
                <p>
                  <span className="comment">// Current Status: Online</span><br/>
                  <span className="comment">// Loading User Profile...</span>
                </p>
                <br />
                <p>
                  <span className="json-key">const</span> user = &#123;<br/>
                  &nbsp;&nbsp;<span className="json-key">name:</span> <span className="json-string">"Manisha Thakare"</span>,<br/>
                  &nbsp;&nbsp;<span className="json-key">role:</span> <span className="json-string">"DevOps Engineer"</span>,<br/>
                  &nbsp;&nbsp;<span className="json-key">mission:</span> <span className="json-string">"Automating cloud infrastructure & building reliable pipelines."</span>,<br/>
                  &nbsp;&nbsp;<span className="json-key">skills:</span> &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="json-key">cloud:</span> [<span className="json-string">"AWS (EC2, VPC, S3, Lambda, EKS)"</span>, <span className="json-string">"CloudFormation"</span>],<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="json-key">devops:</span> [<span className="json-string">"Jenkins"</span>, <span className="json-string">"GitLab CI"</span>, <span className="json-string">"Docker"</span>, <span className="json-string">"K8s"</span>, <span className="json-string">"Ansible"</span>],<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="json-key">monitoring:</span> [<span className="json-string">"Prometheus"</span>, <span className="json-string">"Grafana"</span>, <span className="json-string">"Datadog"</span>],<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="json-key">iac:</span> [<span className="json-string">"Terraform"</span>, <span className="json-string">"Bash"</span>, <span className="json-string">"Python"</span>]<br/>
                  &nbsp;&nbsp;&#125;<br/>
                  &#125;;
                </p>
                <br/>
                <p>
                  <span className="json-key">user</span>.code(); <span className="cursor">|</span>
                </p>
              </div>
            </div>
          </Col>

          {/* RIGHT SIDE: Laptop Image */}
          <Col md={5} style={{ paddingBottom: 20, display: "flex", justifyContent: "center" }}>
            <img
              src={laptopImg}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>

        {/* ROW 3: Skillsets */}
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />
        
        
        <Github />
      </Container>
    </Container>
  );
}

export default About;