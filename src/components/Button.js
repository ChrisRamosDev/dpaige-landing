import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${props =>
    props.primary ? "#66A9D3" : props.secondary ? "#fff" : "#DDC76A"};

  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-size: ${props => (props.small ? "1rem" : "1.5rem")};
  font-weight: bold;
  border-radius: 5px;
  border: none;
  padding: 10px;
  margin: 10px;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.25);
  display: ${props => (props.hidden ? "none" : "block")};

  & > a {
    text-decoration: none;
    color: ${props =>
      props.primary ? "#fff" : props.secondary ? "#66A9D3" : "#000"};
  }

  @media (min-width: 415px) {
    display: ${props => (props.hidden ? "block" : "none")};
    min-width: 165px;
    margin: 10px auto;
  }

  &:hover {
    transform: scale(1.2);
  }
`

const Button = props => {
  return (
    <StyledButton {...props}>
      <Link to="/contact">{props.text}</Link>
    </StyledButton>
  )
}

export default Button
