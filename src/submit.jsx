import React from "react";

function UsernameForm({onSubmitUsername}) {
    function handleSubmit(event) {
      event.preventDefault()
      onSubmitUsername(event.currentTarget.elements.usernameInput.value)
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usernameInput">Username:</label>
          <input id="usernameInput" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )

}