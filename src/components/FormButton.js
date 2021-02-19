import React from "react"
import styled from "styled-components"

const StyledFormBtn = styled.button`
  cursor: pointer;
  height: 33px;
  margin-left: 10px;
  margin-top: 10px;
  font-family: "Robotto", Arial, Helvetica, sans-serif;
  font-weight: bold;
  background-color: #66a9d3;
  color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.35);

  &:hover {
    opacity: 0.7;
  }
`

const FormButton = ({ children }) => {
  return <StyledFormBtn type="submit">{children}</StyledFormBtn>
}

export default FormButton
