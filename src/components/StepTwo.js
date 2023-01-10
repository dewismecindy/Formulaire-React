const StepTwo = ({ setState, name, password, email }) => {
  return (
    <div className="step-two">
      <h1>Results</h1>
      <div>
        <p>{"Name : " + name}</p>
        <p>{"Email : " + email}</p>
        <p>{`Password : ${password}`}</p>
      </div>
      <button
        onClick={() => {
          console.log("Edit informations");
          setState(false);
        }}
      >
        Edit your informations
      </button>
    </div>
  );
};

export default StepTwo;
