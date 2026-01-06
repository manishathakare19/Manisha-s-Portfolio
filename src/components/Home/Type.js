import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Devops Engineer",
          "AWS Cloud Infrastruce",
          "Docker | Kubernetes | Terraform | Ansible",
          "AWS Cost optimization",
          "CI/CD Piplines",
          "Cloud Security",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
