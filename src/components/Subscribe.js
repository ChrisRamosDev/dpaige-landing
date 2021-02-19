import React, { useState } from "react"
// import styled from 'styled-components'

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
      ],
      context: {
        pageUri: "https://confident-agnesi-11cb8d.netlify.app",
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
  }

  return (
    <form name="subscription-form" onSubmit={handleSubmit}>
      <label htmlFor="email">
        Subscribe to the Newsletter!
        <input
          type="email"
          value={email}
          placeholder="name@name.com"
          onChang={e => setEmail(e.target.value)}
        />
      </label>
      <button>Subscribe</button>
    </form>
  )
}

export default Subscribe
