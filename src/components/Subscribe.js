import React, { useState } from "react"
import FormButton from "./FormButton"

const Subscribe = () => {
  const [email, setEmail] = useState("")

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
          name: "message",
          value: `${email} would like to subscribe to the newsletter!`,
        },
      ],
      context: {
        pageUri: "https://dpaige-landing.netlify.app",
        pageName: "Demica Paige Online Personal Training",
      },
    }

    fetch(
      "https://api.hsforms.com/submissions/v3/integration/submit/9454228/fb8b25fc-dc90-4bc0-9340-aaded8a6941d",
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
  }

  return (
    <form name="subscription-form" onSubmit={handleSubmit}>
      <label htmlFor="email">
        Subscribe to the Newsletter!
        <br />
        <hr />
        <input
          type="email"
          value={email}
          placeholder="name@name.com"
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <FormButton>Subscribe</FormButton>
    </form>
  )
}

export default Subscribe
