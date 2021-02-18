import React from "react"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"

const StyledHeader = styled.header`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 30px;

  @media (min-width: 768px) {
    padding: 0 10vw;
    justify-content: space-between;
    flex-direction: row;
  }
`

const StyledMenu = styled.ul`
  display: flex;

  & > * + * {
    margin-left: 2vw;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const StyledIcon = styled(FaBars)`
  @media (min-width: 768px) {
    display: none;
  }
`

const Menu = () => (
  <StyledMenu>
    <li>Fitness Packages</li>
    <li>Health</li>
    <li>About</li>
    <li>Radio</li>
  </StyledMenu>
)

const Header = () => (
  <StyledHeader>
    <img
      src="http://www.demicapaige.com/wp-content/uploads/2021/02/DPaigeLogo.png"
      alt="Demica Paige Online Fitness Trainer"
    />
    <StyledIcon />
    <Menu />
  </StyledHeader>
)

export default Header
