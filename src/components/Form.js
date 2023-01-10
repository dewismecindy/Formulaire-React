import { useState } from "react";

const Form = ({
  setState,
  name,
  setName,
  password,
  setPassword,
  email,
  setEmail,
  confirmPassword,
  setConfirmPassword,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <div className="form">
      <h1>Create account</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (password === confirmPassword) {
            setState(true);
          } else {
            setErrorMessage("Vos mots de passes sont différents");
          }
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          id="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          className={errorMessage ? "red-border" : ""}
          type="password"
          id="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            if (event.target.value !== confirmPassword) {
              setErrorMessage("Vos mots de passes sont différents");
            } else {
              setErrorMessage("");
            }
          }}
        />
        <label htmlFor="confirm-password">Confirm your password</label>
        <input
          className={errorMessage ? "red-border" : ""}
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
            if (password !== event.target.value) {
              setErrorMessage("Vos mots de passes sont différents");
            } else {
              setErrorMessage("");
            }
          }}
        />
        {errorMessage && <p className="red">{errorMessage}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Form;
