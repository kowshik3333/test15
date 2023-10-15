import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> BAYYA SRI KOWSHIK </span>
            from <span className="purple">Eluru,ANDHRA PRADESH </span>&nbsp;
            I am a pursuing my B.Tech in VIT-AP in the stream of Computer Science and Engineering  <span className="purple"> </span>
            <br />
            <br />
            I like DATA SCIENCE and web development.
            <br />
            <br />
            To say about my hobbies, <br/> I like to watch webseries,cricket
          </p>
      
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
