import React from "react";
import {Col, Row} from "reactstrap";
import styled from "styled-components";

//assets
import LIIcon from "../images/linkedin.png";
import EmailIcon from "../images/email.png";
import ResumeIcon from "../images/resume.png";

const StyledContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-items: center;
  background-image: linear-gradient(rgb(187, 243, 187), rgb(44, 141, 44));

  #column{
    align-content: center;
    text-align: center;
  };

  .h2{
    color: rgb(44, 141, 44);
  };

  a:link, a:visited{
    color: rgb(187, 243, 187);
  }
  a:hover, a:active{
    color: rgb(187, 200, 187);
  }
`;

const Contact = () => {
  return(
    <StyledContact>
      <Row>
        <Col Col md="4" id="column">
        <img src={EmailIcon} alt="email" />
          <h2><a href="mailto:ingrambrianholly@hotmail.com">Email</a></h2>
        </Col>
        <Col Col md="4" id="column">
          <img src={LIIcon} alt="Linked In" />
          <h2><a href="https://www.linkedin.com/in/brian-ingram-90b40b126/">LinkedIn</a></h2>
        </Col>
        <Col Col md="4" id="column">
          <img src={ResumeIcon} alt="resume" />
          <h2><a href="https://www.linkedin.com/in/brian-ingram-90b40b126/">Resume</a></h2>
        </Col>
      </Row>
    </StyledContact>
  );
};

export default Contact;