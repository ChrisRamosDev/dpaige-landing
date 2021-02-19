import React from "react"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { Link } from "react-scroll"

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
  cursor: pointer;
  font-family: "Oswald", Arial, Helvetica, sans-serif;
  display: flex;

  & > *:hover {
    color: #66a9d3;
    transform: scale(1.2);
  }

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
    <li>
      <Link to="fitness" smooth={true} spy={true}>
        Fitness Packages
      </Link>
    </li>
    <li>
      <Link to="health" smooth={true} spy={true}>
        Health
      </Link>
    </li>
    <li>
      <Link to="about" smooth={true} spy={true}>
        About
      </Link>
    </li>
    <li>
      <Link to="radio" smooth={true} spy={true}>
        Radio
      </Link>
    </li>
  </StyledMenu>
)

const Header = () => (
  <StyledHeader id="home">
    <Link to="home" smooth={true} spy={true}>
      <img
        src="https://www.demicapaige.com/wp-content/uploads/2021/02/DPaigeLogo.png"
        alt="Demica Paige Online Fitness Trainer"
        style={{ cursor: "pointer" }}
      />
    </Link>
    <StyledIcon />
    <Menu />
  </StyledHeader>
)

export default Header
