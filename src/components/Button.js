import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${props =>
    props.primary ? "#66A9D3" : props.secondary ? "#fff" : "#DDC76A"};
  color: ${props =>
    props.primary ? "#fff" : props.secondary ? "#66A9D3" : "#000"};
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-size: ${props => (props.small ? "1rem" : "1.5rem")};
  font-weight: bold;
  border-radius: 5px;
  border: none;
  padding: 10px;
  margin: 10px;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.25);
  display: ${props => (props.hidden ? "none" : "block")};

  @media (min-width: 415px) {
    display: ${props => (props.hidden ? "block" : "none")};
    width: 165px;
    margin: 10px auto;
  }
`

const Button = props => {
  return <StyledButton {...props}>{props.text}</StyledButton>
}

export default Button
