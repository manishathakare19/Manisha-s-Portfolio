import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import img1 from "../../Assets/Projects/project-image-1.png";
import img2 from "../../Assets/Projects/project-image-2.png";
import img3 from "../../Assets/Projects/project-image-3.png";
import img4 from "../../Assets/Projects/project-image-4.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img1}
              isBlog={false}
              title="Amazon App - DevSecOps CI/CD on AWS"
              tools="Tools: AWS, Terraform, Jenkins, Docker, SonarQube, Trivy, GitHub"
              description="
              Designed and implemented a secure DevSecOps CI/CD pipeline to deploy an Amazon-style application on AWS. Automated infrastructure provisioning using Terraform, integrated Jenkins for build and deployment, and enforced security with SonarQube and Trivy scanning.
              "
              ghLink="https://github.com/manishathakare19/Amazon-FE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img2}
              isBlog={false}
              title="Robot Shop – 3-Tier Microservices E-Commerce on EKS"
              tools="Tools: AWS EKS, Docker, Kubernetes, Helm, Prometheus, Grafana, RabbitMQ, Redis"
              description="
              Deployed a cloud-native microservices e-commerce application using a 3-tier architecture on AWS EKS. Implemented Helm-based deployments, horizontal pod autoscaling, secure IAM roles (IRSA), and full observability with Prometheus and Grafana."
              ghLink="https://github.com/manishathakare19/three-tier-architecture-demo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img3}
              isBlog={false}
              title="Netflix Clone – End-to-End DevSecOps CI/CD"
              tools="Tools: Jenkins, Docker, Kubernetes, Terraform, Trivy, OWASP Dependency Check"
              description="
              Built a complete enterprise-grade DevSecOps CI/CD pipeline for a Netflix-style application, covering infrastructure provisioning, containerization, vulnerability scanning, Kubernetes deployment, and monitoring."
              ghLink="https://github.com/manishathakare19/Netflix-Clone-K8S-End-to-End-Project"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img4}
              isBlog={false}
              title="Dev → DevOpsified App (GitOps Pipeline)"
              tools="GitHub Actions, Docker, Kubernetes, ArgoCD, Trivy"
              description="Converted a simple frontend application into a fully automated GitOps-based CI/CD pipeline. Implemented continuous integration, container security scanning, automated manifest updates, and ArgoCD-driven Kubernetes deployments."
              ghLink="https://github.com/manishathakare19/go-web-app"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img1}
              isBlog={false}
              title="Go Web Application – CI/CD with GitOps"
              tools="Go, GitHub Actions, Docker, Kubernetes (EKS), Helm, ArgoCD"
              description="Transformed a Go web application into a production-ready system using GitOps principles. Automated build, test, container image creation, Helm-based deployments, and continuous delivery using ArgoCD."
              ghLink="https://github.com/manishathakare19/go-web-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img2}
              isBlog={false}
              title="AWS EKS Deployment – 2048 Game with ALB"
              tools="AWS EKS, Fargate, ALB, Ingress, eksctl"
              description="Deployed a containerized web application on AWS EKS using Fargate. Configured IAM OIDC, AWS Load Balancer Controller, and exposed the application securely using Ingress and ALB."
              ghLink="https://github.com/manishathakare19/EKS-Installation-and-App-Deployment-with-Ingress"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img3}
              isBlog={false}
              title="GitLab CI/CD with SonarQube & Docker"
              tools="GitLab CI/CD, SonarQube, Docker, AWS EC2, Maven"
              description="Built a complete GitLab CI/CD pipeline integrating static code analysis with SonarQube, Docker image creation, and automated deployments using a self-hosted GitLab Runner on AWS EC2."
              ghLink="https://github.com/manishathakare19/Gitlab/tree/main"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img4}
              isBlog={false}
              title="AWS CI/CD using AWS CodePipeline, CodeBuild, CodeDeploy, services"
              tools="AWS CodePipeline, CodeBuild, CodeDeploy, EC2, Docker, Flask"
              description="Implemented an end-to-end AWS native CI/CD pipeline for a Python Flask application, automating build, containerization, and deployment on EC2 with secure secret management using Parameter Store."
              ghLink="https://github.com/manishathakare19/AWS-End-to-End-CI-CD-Workflow-Python-Flask-App-/tree/main"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img1}
              isBlog={false}
              title="AWS EC2 Automation with Ansible"
              tools="Ansible, AWS EC2, Linux, SSH"
              description="Automated the creation, configuration, and conditional shutdown of AWS EC2 instances using Ansible playbooks, dynamic inventory, and passwordless SSH for efficient infrastructure management."
              ghLink="https://github.com/manishathakare19/Automating-EC2-Instances-with-Ansible-and-Passwordless-SSH"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img2}
              isBlog={false}
              title="AWS Resource Tracker – Serverless Cost & Resource Monitoring"
              tools="Tools: AWS Lambda, AWS SDK (Boto3), CloudWatch, EventBridge, Python"
              description="Developed a serverless AWS Resource Tracker to automatically monitor and identify unused or underutilized AWS resources. The solution helps track EC2 instances, snapshots, and other cloud assets to improve visibility and reduce unnecessary cloud costs through automation."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img3}
              isBlog={false}
              title="Database Migration to Amazon RDS with Flyway"
              tools="Amazon RDS, Flyway, MySQL, EC2, Linux"
              description="Performed version-controlled database migration from on-prem/local environments to Amazon RDS using Flyway, enabling safe, repeatable, and automated schema changes."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img4}
              isBlog={false}
              title="Automated AWS Infrastructure – Static Website with Terraform & Jenkins"
              tools="AWS (EC2, S3, DynamoDB), Terraform, Jenkins, Docker"
              description="Built a one-click automated solution to provision AWS infrastructure and host a static website using Infrastructure as Code. Implemented remote state management with S3 and DynamoDB locking, and automated deployments using Jenkins CI/CD pipelines."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
