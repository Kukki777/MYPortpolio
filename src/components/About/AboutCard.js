import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Priyansh Agrawal</span>{" "}
            from <span className="purple">Mathura, India</span>.
            <br />
            I’m currently a 3rd-year B.Tech student at{" "}
            <span className="purple">Bennett University</span> pursuing my degree in Computer Science.{" "}
            <br />I have hands-on experience working on{" "}
            <span className="purple">freelance projects</span> having completed{" "}
            <span className="purple">5+ projects for clients across different domains.</span>
            <br />
            <span>I enjoy building practical solutions and continuously improving my development skills.</span>
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Real Life Ghost Stories and Shows 
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Priyansh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
