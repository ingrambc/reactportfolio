import React from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import styled from "styled-components";

const StyledCard = styled.div`
  .card-title{
    text-align:center;
  }
  #card{
    border-radius: 10px;
    margin-bottom: 10%;
    margin-top: 0px;
    background-color: rgb(44, 141, 44);
  }

  a:link, a:visited{
    color: rgb(187, 243, 187);
  }
  a:hover, a:active{
    color: rgb(187, 200, 187);
  }
`;

function Project( {name, img, github, deploy}) {
  return (
    <StyledCard>       
      <Card id="card">
        <CardTitle tag="h5"><a href={github} alt={name} target="_blank" rel="noopener noreferrer">
          Github Repo</a></CardTitle>
        <CardImg top width="90%" src={img} alt={name}/>
        <CardTitle tag="h5"><a href={deploy} alt={name} target="_blank" rel="noopener noreferrer">
          {name}</a></CardTitle>
      </Card>
    </StyledCard> 
  )
}     

export default Project;