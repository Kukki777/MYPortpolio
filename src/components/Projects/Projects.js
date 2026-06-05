import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";

import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import yuvayojna from "../../Assets/Projects/yuvayojna.png";
import tripy from "../../Assets/Projects/tripy.png";
import samvidhan from "../../Assets/Projects/samvidhan.jpg";

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
              imgPath={yuvayojna}
              isBlog={false}
              title="Yuvayojna"
              description="Yuva Yojna is an AI-powered student career and mentorship platform that helps users discover opportunities, build resumes ,use templates, match skills with relevant jobs, showcase portfolios, join communities, and connect with mentors through video calling sessions. Asessments with results, related learning videos."
              ghLink="https://github.com/Kukki777/yuvayojna"
              demoLink="https://yuvayojna.vercel.app"     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tripy}
              isBlog={false}
              title="Tripy"
              description="Tripy is a travel platform where 2-3 people going on the same route can share one ride, reduce petrol usage, and split the fare. Users can search a source and destination with maps, join an existing travel pool, view companions, track ride status, see estimated route distance, and check per-person fare."
              ghLink="https://github.com/Kukki777/travel"
              demoLink="https://tripy-ride-pooling.vercel.app" 
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={samvidhan}
              isBlog={false}
              title="Samvidhan-SIH"
              description="Samvidhan is an online platform for learning Indian Constitution in simple, engaging & fun way. It includes simplified lessons, blogs, a judiciary tour, and gamified learning experiences like quizzes, crossword puzzles,& memory matching games."
              ghLink="https://github.com/Kukki777/samvidhan-sih"
              demoLink="https://samvidhan-sih.vercel.app/"     
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Kukki777/discord"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/Kukki777/editor"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/Kukki777/plantAI"
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
