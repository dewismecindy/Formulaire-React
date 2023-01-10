import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import StepTwo from "./components/StepTwo";
import Form from "./components/Form";

function App() {
  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="App">
      {isValid === false ? (
        <Form
          setState={setIsValid}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
        />
      ) : (
        <StepTwo
          setState={setIsValid}
          name={name}
          email={email}
          password={password}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
