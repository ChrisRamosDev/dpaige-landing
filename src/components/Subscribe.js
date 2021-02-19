import React from "react"
// import styled from 'styled-components'

const Subscribe = () => {
  return (
    <form
      name="subscription-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <label htmlFor="email">
        Subscribe to the Newsletter!
        <input
          type="email"
          name="email"
          id="email"
          placeholder="name@name.com"
        />
      </label>
      <button>Subscribe</button>
    </form>
  )
}

export default Subscribe
