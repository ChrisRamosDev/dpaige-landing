import React from "react"
import styled from "styled-components"
import Button from "../Button"

const StyledBanner = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 10vw;
  margin: 50px 0;
  font-size: 18px;
  font-family: "Oswald", Arial, Helvetica, sans-serif;
`
const StyledImage = styled.div`
  flex: 1 1 40%;
  min-width: 280px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);

  & > img {
    max-width: 100%;
  }
`

const StyledText = styled.div`
  flex: 1 1 60%;
  background-color: #ddc76a;
  text-align: center;
  padding: 35px 35px 35px 45px;
  line-height: 1.3;
  padding: 5vw;

  & > h2 {
    font-weight: bold;
    font-size: calc(1.25em + 1.25vw);
  }

  & > h3 {
    margin: 20px 0;
    font-size: calc(1em + 1vw);
  }
`

const Banner = ({ content }) => {
  const heroContent = content[0].heroSectionContent
  return (
    <StyledBanner>
      {/* Hero Image */}
      <StyledImage>
        <img
          src={heroContent.heroImage.sourceUrl}
          alt={heroContent.heroImage.altText}
        />
      </StyledImage>
      {/* Hero Text */}
      <StyledText>
        <h2>{heroContent.heroText.headline1}</h2>
        <h2>{heroContent.heroText.headline2}</h2>
        <h3>{heroContent.heroText.captionText}</h3>
        <Button secondary large text="Get your quote" hidden />
      </StyledText>
    </StyledBanner>
  )
}

export default Banner
