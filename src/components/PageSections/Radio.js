import React from "react"
import styled from "styled-components"

const StyledRadio = styled.section`
  font-family: "Oswald", Arial, Helvetica, sans-serif;
  margin: -30px 10vw 0;
  padding: 4vw 0;
  font-size: 18px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: #66a9d3;
`

const StyledImage = styled.div`
  flex: 1 1 60%;
  min-width: 280px;
  padding: 0 3vw;

  & > img {
    max-width: 100%;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

const StyledText = styled.div`
  flex: 1 1 40%;
  min-width: 300px;
  text-align: left;
  line-height: 1.6;
  padding: 2vw 4vw 4vw;

  & > h2 {
    text-align: center;
    font-size: calc(0.75em + 1.75vw);
    margin-bottom: 35px;

    & > span {
      color: #fff;
    }
    & > span:nth-child(2) {
      color: #ddc76a;
    }
  }

  & > p {
    font-size: calc(0.85em + 0.5vw);
    max-width: 35ch;
  }
`

const Radio = ({ content }) => {
  console.log(content)
  const radioContent = content[0].radioSectionContent

  return (
    <StyledRadio>
      <StyledText>
        <h2>
          <span>DEMICA</span> on the <span>RADIO</span>
        </h2>
        <p>{radioContent.radioText}</p>
      </StyledText>
      <StyledImage>
        <img
          src={radioContent.radioImage.sourceUrl}
          alt={radioContent.radioImage.altText}
        />
      </StyledImage>
    </StyledRadio>
  )
}

export default Radio
