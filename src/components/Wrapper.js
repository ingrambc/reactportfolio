import React from "react";
import styled from "styled-components";

const main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(to bottom right, rgb(187, 243, 187), rgb(44, 141, 44));
`;

function Wrapper(props) {
  return <main className="wrapper">{props.children}</main>;
}

export default Wrapper;