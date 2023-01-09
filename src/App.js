import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import Footer from "./components/Footer";
import StepTwo from "./components/StepTwo";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && password && email) {
      alert("Votre formulaire a bien été envoyé");
    } else {
      setErrorMessage("Votre formulaire n'est pas correctement renseigné");
    }
  };
  return (
    <div className="App">
      <Header />
      <form onSubmit={handleSubmit}>
        {/* // htmlFor du label doit correspondre à l'id de l'input associé */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Jean Dupont"
          onChange={(event) => {
            setName(event.target.value);
          }}
          id="name"
          value={name}
        />

        <label htmlFor="Email">Email</label>
        <input
          type="email"
          value={email}
          placeholder="jeandupont@lereacteur.io"
          id="mail"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          placeholder="lErEaCtEuR2020"
          id="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <label htmlFor="Confirm yout password">Confirm your password</label>
        <input
          type="password"
          value={password}
          placeholder="lErEaCtEuR2020"
          id="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button type="submit">Register</button>
      </form>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <foo>
        <Footer />
      </foo>
    </div>
  );
}

export default App;
