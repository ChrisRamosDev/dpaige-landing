import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
`

const StyledSocial = styled.div`
  & > a > img {
    margin: 0 10px;
    max-width: 40px;
  }
`

const Social = () => {
  return (
    <Wrapper>
      <StyledSocial>
        <a href="https://www.facebook.com/demicapaige">
          <img
            src="http://www.demicapaige.com/wp-content/uploads/2021/02/001-facebook.png"
            alt="facebook link"
          />
        </a>
      </StyledSocial>
      <StyledSocial>
        <a href="https://www.instagram.com/demicapaige">
          <img
            src="http://www.demicapaige.com/wp-content/uploads/2021/02/002-instagram.png"
            alt="instagram link"
          />
        </a>
      </StyledSocial>
      <StyledSocial>
        <a href="https://www.twitter.com/demicapaige">
          <img
            src="http://www.demicapaige.com/wp-content/uploads/2021/02/003-twitter.png"
            alt="twitter link"
          />
        </a>
      </StyledSocial>
      <StyledSocial>
        <a href="https://www.linkedin.com/in/demicapaige">
          <img
            src="http://www.demicapaige.com/wp-content/uploads/2021/02/004-linkedin.png"
            alt="linkedin link"
          />
        </a>
      </StyledSocial>
    </Wrapper>
  )
}

export default Social
