import React from "react"
import styled from "styled-components"

import Social from "../Social"

const StyledFooter = styled.footer`
  font-family: "Oswald", Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin: 50px 0;
  background-color: #eeeeee;
  color: #222;

  & > div:nth-child(1) {
    padding: 10px 0;
    text-align: center;
    font-size: calc(1em + 1vw);
    color: #fff;
    background-color: #ddc76a;
  }

  & > div:nth-child(2) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 2vw 10vw;

    & > * {
      margin: 15px 0;
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <h3>GET IN SHAPE FROM HOME!</h3>
      </div>
      <div>
        <div>
          <h4 style={{ textAlign: "center", marginTop: 10 }}>SOCIAL</h4>
          <hr />
          <Social />
        </div>
        <div>
          <img
            src="http://www.demicapaige.com/wp-content/uploads/2021/02/DPaigeLogo.png"
            alt="Demica Paige Online Fitness Trainer"
          />
        </div>
        <div>
          <form action="">
            <label htmlFor="email">
              Subscribe to our Newsletter
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                style={{ margin: "10px 0" }}
              />
            </label>
          </form>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
