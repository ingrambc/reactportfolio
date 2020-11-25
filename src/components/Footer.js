import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: rgb(44, 141, 44);  
  width: 100%;
  height: calc(100vh - 90);
  padding: 20px;
`;

const Footer = () => {
  return <StyledFooter>&copy; {new Date().getFullYear()}  Brian Ingram</StyledFooter>;
};

export default Footer;