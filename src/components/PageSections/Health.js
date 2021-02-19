import React from "react"
import styled from "styled-components"

const StyledHealth = styled.section`
  font-family: "Oswald", Arial, Helvetica, sans-serif;
  background: center
    url("https://www.demicapaige.com/wp-content/uploads/2021/02/greg-rosenke-hqvP1DMi0d0-unsplash.jpg");
  margin: 50px 10vw 30px;
  padding: 4vw 0;
  text-align: center;
  font-size: 18px;
`

const StyledText = styled.div`
  background: left
      url("https://www.demicapaige.com/wp-content/uploads/2021/02/HEALTH.png")
      no-repeat,
    #ddc76a;
  height: calc(100% - 7vw);
  width: 100%;
  padding: 3vw 8vw;
  font-size: calc(1.25em + 0.5vw);
  line-height: 1.2;

  & > * {
    margin: 1em 0;
  }
`

const Health = ({ content }) => {
  return (
    <StyledHealth id="health">
      <StyledText>
        {Object.values(content[0].healthSectionContent).map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </StyledText>
    </StyledHealth>
  )
}

export default Health
