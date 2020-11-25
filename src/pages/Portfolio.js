import React from "react";
import { Row, Col } from "reactstrap";
import Project from "../components/Project";
import styled from "styled-components";

//assets
import CCYAImg from "../images/ccya.png";
import BurgerImg from "../images/burger.png";
import NearBeerImg from "../images/craft-beer.png";
import EmployeeImg from "../images/employee.png";
import WatchThisImg from "../images/WatchThis.png";
import WeatherImg from "../images/weather.png";

const StyledPortfolio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-items: center;
  background-image: linear-gradient(rgb(187, 243, 187), rgb(44, 141, 44));
  padding:5%;
  
  h1{
    text-decoration: underline;
   }
`;


function Portfolio() {

  return (        
    <StyledPortfolio class="mb-3 mx-auto">
      <h1>Portfolio</h1>
      <hr />
      <Row>
        <Col md="6">
          <Project
            name="CCYA"
            img={CCYAImg}
            github="https://github.com/TLCroatt/ccya.git"
            deploy="#"
          />
        </Col>
        <Col md="6">
          <Project
            name="Whatch This"
            img={WatchThisImg}
            github="https://github.com/ingrambc/WatchThis.git"
            deploy="https://young-inlet-91954.herokuapp.com/"
          />
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <Project
            name="Near Beer"
            img={NearBeerImg}
            github="https://github.com/ingrambc/Near-Beer.git"
            deploy="https://ingrambc.github.io/Near-Beer/"
          />
        </Col>
        <Col md="6">
          <Project
            name="Weather Dashboard"
            img={WeatherImg}
            github="https://github.com/ingrambc/WeatherDashboard.git"
            deploy="https://ingrambc.github.io/WeatherDashboard/"
          />
        </Col>
      </Row>
       <Row>
        <Col md="6">
          <Project
            name="Employee Directory"
            img={EmployeeImg}
            github="https://github.com/ingrambc/react-employee-dir.git"
            deploy="https://ingrambc.github.io/react-employee-dir/"
          />
        </Col>
        <Col md="6">
          <Project
            name="Burgers"
            img={BurgerImg}
            github="https://github.com/ingrambc/burger.git"
            deploy="https://whispering-crag-08713.herokuapp.com/"
          />
        </Col>
      </Row>
    </StyledPortfolio>
  );
};

export default Portfolio;