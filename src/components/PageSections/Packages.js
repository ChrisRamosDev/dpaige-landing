import React from "react"
import styled from "styled-components"
import { FaDumbbell, FaBriefcase } from "react-icons/fa"

import Button from "../Button"

const Container = styled.div`
  background-color: #c4c4c4;
  padding: 3vw 10vw;
  font-family: "Oswald", Arial, Helvetica, sans-serif;
`
const Wrapper = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
  }
`

const MainPackages = styled.div`
  max-width: 450px;
  padding: 30px 40px;
  margin: 15px 0px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  & > h2 {
    font-size: 1.5em;
    font-weight: normal;
    margin-bottom: 5px;
  }

  & > h5 {
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    font-size: 0.8em;
    color: #737479;
    margin: 5px;
  }

  & > p {
    line-height: 1.6;
    width: 200px;
  }
`

const CorporatePackage = styled(MainPackages)`
  margin-top: 50px;
  max-width: 800px;
  line-height: 1.6;
`

const Packages = ({ packages }) => {
  const mainPackages = packages
    .filter(el => {
      return !el.node.fitnessPackages.isCorporate
    })
    .reverse()

  const corporatePackage = packages.filter(el => {
    return el.node.fitnessPackages.isCorporate
  })

  return (
    <Container>
      <Wrapper>
        {mainPackages.map(packageOption => (
          <MainPackages key={packageOption.node.fitnessPackages.package}>
            <FaDumbbell style={{ color: "#66a9d3", fontSize: "2rem" }} />
            <h2>{packageOption.node.fitnessPackages.package}</h2>
            <hr style={{ width: "70%", margin: 5 }} />
            <h5>{packageOption.node.fitnessPackages.packageDescription}</h5>
            {Object.values(
              packageOption.node.fitnessPackages.packageContents
            ).map((feature, index) => (
              <p key={index}>{feature}</p>
            ))}
            <Button text="Get your Quote" small primary hidden />
          </MainPackages>
        ))}
      </Wrapper>
      <Wrapper style={{ justifyContent: "center" }}>
        <CorporatePackage>
          <FaBriefcase style={{ color: "#DDC76A", fontSize: "2rem" }} />
          {corporatePackage[0].node.fitnessPackages.corporateDescription ? (
            corporatePackage.node.fitnessPackages.corporateDescription
          ) : (
            <h2 style={{ fontWeight: "Bold", margin: "2px" }}>
              Ask about our Corporate Package!
            </h2>
          )}
          <Button hidden text="Book a Consultation" />
        </CorporatePackage>
        <Button large text="Book a Consultation" />
      </Wrapper>
    </Container>
  )
}

export default Packages
