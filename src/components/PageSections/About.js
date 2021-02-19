import React from "react"
import styled from "styled-components"

const StyledAbout = styled.section`
  font-family: "Oswald", Arial, Helvetica, sans-serif;
  margin: 30px 10vw 0;
  padding: 4vw 0;
  font-size: 18px;
  display: flex;
  flex-wrap: wrap;
`

const StyledImage = styled.div`
  flex: 1 1 45%;
  min-width: 300px;
  padding: 0 5vw;

  & > img {
    width: 100%;
    max-width: 420px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    transform: translateY(50px);
  }
`

const StyledText = styled.div`
  flex: 1 1 55%;
  text-align: left;
  line-height: 1.6;
  padding: 5vw;

  & > h2 {
    text-align: center;
    font-size: calc(1.25em + 1.25vw);
    margin-bottom: 20px;
    margin-top: 30px;

    & > span {
      color: #66a9d3;
    }
  }

  & > ul {
    list-style-type: disc;

    & > li {
      font-size: calc(0.5em + 1vw);
    }
  }
`

const About = ({ content }) => {
  console.log(content)
  const aboutContent = content[0].aboutSectionContent

  return (
    <StyledAbout id="about">
      <StyledImage>
        <img
          src={aboutContent.aboutImage.sourceUrl}
          alt={aboutContent.aboutImage.altText}
        />
      </StyledImage>
      <StyledText>
        <h2>
          About <span>DEMICA</span> PAIGE
        </h2>
        <ul>
          {Object.values(aboutContent.aboutSectionText).map((about, index) => (
            <li key={index}>
              <p>{about}</p>
            </li>
          ))}
        </ul>
      </StyledText>
    </StyledAbout>
  )
}

export default About
