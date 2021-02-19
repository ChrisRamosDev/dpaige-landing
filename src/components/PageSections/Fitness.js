import React from "react"
import styled from "styled-components"

const StyledFitness = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 50px 10vw;
  font-size: 18px;
  font-family: "Oswald", Arial, Helvetica, sans-serif;
  background-color: #66a9d3;
`
const StyledImage = styled.div`
  flex: 1 1 35%;
  min-width: 280px;
  background: right
    url("http://www.demicapaige.com/wp-content/uploads/2021/02/FITNESS.png")
    no-repeat;

  & > img {
    max-width: 100%;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    transform: translateY(-3vw);
  }

  @media (max-width: 955px) {
    order: 1;
    width: 100%;
  }
`

const StyledText = styled.div`
  flex: 1 1 65%;
  text-align: center;
  padding: 35px 35px 35px 45px;
  line-height: 1;
  padding: 5vw;

  & > h2 {
    font-weight: bold;
    font-size: calc(1em + 1.25vw);
  }

  & > h3 {
    margin: 20px 0;
    font-size: calc(0.5em + 1vw);
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    font-weight: bold;
    line-height: 1.3;
  }

  & > ul {
    list-style: disc;
    line-height: 1.4;

    & > li {
      font-size: calc(0.85em + 0.5vw);
      font-family: "Roboto", Arial, Helvetica, sans-serif;
      font-weight: bold;
    }
  }

  @media (max-width: 931px) {
    order: 2;
  }
`

const Fitness = ({ content }) => {
  const fitnessContent = content[0].fitnessSectionContent
  return (
    <StyledFitness id="fitness">
      <StyledText>
        <h2>{fitnessContent.fitnessHeadline}</h2>
        <h3>{fitnessContent.fitnessCaption}</h3>
        <hr
          style={{
            color: "white",
            maxWidth: "350px",
            border: "2px solid white",
          }}
        />
        <ul>
          {Object.values(fitnessContent.fitnessBulletPoints).map(
            (bulletPoint, index) => (
              <li key={index}>{bulletPoint}</li>
            )
          )}
        </ul>
      </StyledText>
      <StyledImage>
        <img
          src={fitnessContent.fitnessImage.sourceUrl}
          alt={fitnessContent.fitnessImage.altText}
        />
      </StyledImage>
    </StyledFitness>
  )
}

export default Fitness
