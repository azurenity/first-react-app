import { useState } from "react";
import "./style.css"


const FormValidationExample = () => {


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  
  const check = () => {
    console.log(password);
  }
  
  return (
    <>
        <button onClick={check}> UGLY BUTTON </button>
      <form>
        <label for="Name">
          <strong>Username:</strong>
        <br />
          <input type="text" id="Name" pattern="[A-Za-z\s]+" required value={username} onChange={e => setUsername(e.target.value)}/>
        </label>


        <br />
        <br />

        <label for="Email">
          <strong>Email:</strong>{" "}
        <br />
          <input type="email" id="Email" required value={email} onChange={e => setEmail(e.target.value)}/>
        </label>


        <br />
        <br />

        <label for="Password">
          <strong>Password:</strong>{" "}
        </label>
        <br />

        <input type="password" id="Password" required value={password} onChange={e => setPassword(e.target.value)} />

        <br />
        <br />

        <label for="Password">
          <strong>Confirm Password:</strong>{" "}
        </label>
        <br />

        <input type="password" id="Password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
      </form>
    </>
  );
};

export default FormValidationExample;
