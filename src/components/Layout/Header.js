import React, { useState } from "react"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { Link } from "react-scroll"
import { Link as BackLink } from "gatsby"

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

const StyledDropdown = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  text-align: center;
  font-size: calc(1rem + 1vw);
  font-family: "Oswald", Arial, Helvetica, sans-serif;
  line-height: 1.6;

  & > div {
    background-color: #fff;
    width: 80vw;
    margin: 0 auto;
    padding: 2vw 5vw 5vw;
    transition: 0.2s ease-in;

    & > * {
      border: 1px solid black;
      display: block;
    }
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

const Dropdown = ({ setDropdown }) => (
  <StyledDropdown onClick={() => setDropdown(false)}>
    <div>
      <button
        onClick={() => setDropdown(false)}
        style={{
          color: "#66a9d3",
          width: "100%",
          padding: 10,
          fontWeight: "bold",
          fontSize: "2rem",
          border: "none",
        }}
      >
        ^
      </button>
      <Link to="fitness" smooth={true} spy={true}>
        Fitness Packages
      </Link>
      <Link to="health" smooth={true} spy={true}>
        Health
      </Link>
      <Link to="about" smooth={true} spy={true}>
        About
      </Link>
      <Link to="radio" smooth={true} spy={true}>
        Radio
      </Link>
    </div>
  </StyledDropdown>
)

const Header = () => {
  const [dropdown, setDropdown] = useState(false)
  console.log(dropdown)

  const url = window.location.href
  return (
    <StyledHeader id="home">
      <Link to="home" smooth={true} spy={true}>
        <img
          src="https://www.demicapaige.com/wp-content/uploads/2021/02/DPaigeLogo.png"
          alt="Demica Paige Online Fitness Trainer"
          style={{ cursor: "pointer" }}
        />
      </Link>
      {dropdown && <Dropdown setDropdown={setDropdown} />}
      {url.endsWith("/contact") ? (
        <></>
      ) : (
        <StyledIcon
          dropdown={dropdown}
          onClick={() => setDropdown(!dropdown)}
        />
      )}
      {url.endsWith("/contact") ? <BackLink to="/">Back</BackLink> : <Menu />}
    </StyledHeader>
  )
}

export default Header
