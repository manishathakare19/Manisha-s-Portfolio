import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack"; 
import laptopImg from "../../Assets/about.png"; 

// IMPORTING ICONS CORRECTLY
// We use 'fa' (FontAwesome) for Java because 'si' doesn't have it.
import { FaJava } from "react-icons/fa"; 
import {
  SiPython,
  SiReact,
  SiMysql,
  SiSpringboot,
} from "react-icons/si";

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
                <p> <span className="highlight">User.Name</span> = "Manisha Thakare";</p>
                <p> <span className="highlight">User.Role</span> = "Software Developer";</p>
                <br />
                <p>
                  a DevOps Engineer focused on automating cloud infrastructure and building reliable deployment pipelines. I work with AWS, Kubernetes, Terraform, CI/CD, and Monitoring to deliver scalable and production-ready environments.
                  <br /> <br />
                  <span className="highlight">Technical Toolkit:</span>
                  <ul>
                    <li>Cloud Platforms: AWS (EC2, VPC, RDS, S3, Lambda, IAM, CloudWatch, ALB, EBS, Route 53, CloudFront, EKS, ECR, AWS CloudFormation, Certificate Manager, AWS Organizations, Billing & Cost Management).</li> 
                    <li>DevOps Tools: Jenkins, GitLab CI/CD, GitHub Actions, Docker, Kubernetes, Ansible, SonarQube, Trivy, Owasp dependency check. </li>
                    <li>Monitoring: Prometheus, Grafana, AWS CloudWatch, Datadog. </li>
                    <li>IaC & Automation: Terraform, AWS CloudFormation (Basic), Bash, Python.</li> 
                    <li>Programming Languages: Python (Basic). </li>
                    <li>Operating System: Linux (Ubuntu, Amazon Linux), Windows Server.</li> 
                    <li>Database Management System (DBMS): MySQL, AWS RDS </li>
                    <li> Web Servers: Nginx, Apache, Tomcat. </li>
                    <li>Version Control Systems: GitHub, Bitbucket, GitLab.</li>
                  </ul>
                </p>
                <p> Ready to code... <span className="cursor">|</span></p>
              </div>
            </div>
          </Col>

          {/* RIGHT SIDE: Floating Icons Visual */}
          <Col md={5} style={{ paddingBottom: 20 }}>
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