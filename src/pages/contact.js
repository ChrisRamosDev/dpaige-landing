import React, { useState } from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"
import FormButton from "../components/FormButton"

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: -30px 10vw 0;
  font-family: "Robotto", Arial, Helvetica, sans-serif;
`

const StyledImage = styled.div`
  flex: 1 1 45%;
  padding: 0 5vw;

  & > img {
    width: 100%;
  }

  @media (max-width: 999px) {
    display: none;
  }
`

const StyledForm = styled.div`
  flex: 1 1 55%;
  padding: 5vw;

  & > h1 {
    font-size: calc(1rem + 0.75vw);
    font-weight: bold;
  }

  & > p {
    margin: 15px 0 30px;
  }

  & > form > label {
    display: block;
    margin-bottom: 20px;
  }
`

const StyledInput = styled.label`
  font-size: calc(0.5rem + 0.5vw);
  display: block;

  & > input {
    margin: 5px 0;
    width: 100%;
  }
`

const SecondPage = () => {
  const [email, setEmail] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [selection, setSelection] = useState("")

  const handleSubmit = e => {
    e.preventDefault()

    let data = {
      submittedAt: Date.now(),
      fields: [
        {
          name: "email",
          value: email,
        },
        {
          name: "firstname",
          value: firstname,
        },
        {
          name: "lastname",
          value: lastname,
        },
        {
          name: "message",
          value: `${firstname} would like more information about ${selection}`,
        },
      ],
      context: {
        pageUri: "https://dpaige-landing.netlify.app",
        pageName: "Demica Paige Online Personal Training",
      },
    }

    fetch(
      "https://api.hsforms.com/submissions/v3/integration/submit/9454228/0ec83d17-57f1-4d71-977e-c0559604625f",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log("Success:", data)
      })
      .catch(error => {
        console.error("Error", error)
      })

    setEmail("")
    setFirstname("")
    setLastname("")
    setSelection("")
  }

  return (
    <Layout>
      <SEO title="Contact Page" />
      <Container>
        <StyledImage>
          <img
            src="https://www.demicapaige.com/wp-content/uploads/2021/02/IMG_6820.jpg"
            alt="Demica back workout"
          />
        </StyledImage>
        <StyledForm>
          <h1>Let's get in touch</h1>
          <p>
            Fill out the form below to be contacted for your quote or
            consultation
          </p>
          <form name="contact-form" onSubmit={handleSubmit}>
            <div>
              <StyledInput htmlFor="firstname">
                First Name
                <br />
                <input
                  type="text"
                  name="firstname"
                  value={firstname}
                  onChange={e => setFirstname(e.target.value)}
                  required
                />
              </StyledInput>
              <StyledInput htmlFor="lastname">
                Last Name
                <br />
                <input
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={e => setLastname(e.target.value)}
                  required
                />
              </StyledInput>
              <StyledInput htmlFor="email">
                Email
                <br />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </StyledInput>
            </div>
            <StyledInput htmlFor="selection">
              Choose a package or select Consultation &nbsp;
              <select
                name="selection"
                required
                style={{ width: "100%", margin: "10px 0" }}
                onSelect={e => setSelection(e.target.value)}
              >
                <option value="" disabled>
                  Please select one
                </option>
                <option value="1. Custom Package">1. Custom Package</option>
                <option value="2. Group Training">2. Group Training</option>
                <option value="3. Personal Training">
                  3. Personal Training
                </option>
                <option value="Corporate Package">Corporate Package</option>
                <option value="Consultation">Not sure - Consultation</option>
              </select>
            </StyledInput>
            <FormButton>Submit Form</FormButton>
          </form>
        </StyledForm>
      </Container>
    </Layout>
  )
}

export default SecondPage
