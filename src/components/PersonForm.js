import "./PersonForm.css";
import { useState } from "react";

function PersonForm(props) {
  const [personName, setPersonName] = useState("");
  const storePersonName = (event) => {
    setPersonName(event.target.value);
  };
  const [personJob, setPersonJob] = useState("");
  const storePersonJob = (event) => {
    setPersonJob(event.target.value);
  };
  const [personAge, setPersonAge] = useState("");
  const storePersonAge = (event) => {
    setPersonAge(event.target.value);
  };
  const [personNetworth, setPersonNetworth] = useState("");
  const storePersonNetworth = (event) => {
    setPersonNetworth(event.target.value);
  };
  const [personCountry, setPersonCountry] = useState("");
  const storePersonCountry = (event) => {
    setPersonCountry(event.target.value);
  };
  const [errorState, setErrorState] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    const personData = {
      name: personName,
      job: personJob,
      age: personAge,
      worth: personNetworth,
      country: personCountry,
    };

    if (
      personName === "" ||
      personJob === "" ||
      personAge === "" ||
      personNetworth === "" ||
      personCountry === ""
    ) {
      setErrorState(true);
    } else {
      setErrorState(false);
      props.onSavePersonData(personData);
      setPersonName("");
      setPersonJob("");
      setPersonAge("");
      setPersonNetworth("");
      setPersonCountry("");
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} className="person-form">
        <input
          onChange={storePersonName}
          id="person-name"
          placeholder="Name"
          value={personName}
        />
        <input
          onChange={storePersonJob}
          id="person-job"
          placeholder="Job"
          value={personJob}
        />
        <input
          onChange={storePersonAge}
          id="person-age"
          placeholder="Age"
          value={personAge}
        />
        <input
          onChange={storePersonNetworth}
          id="person-networth"
          placeholder="Networth"
          value={personNetworth}
        />
        <input
          onChange={storePersonCountry}
          id="person-country"
          placeholder="Country"
          value={personCountry}
        />
        <button type="submit">Add user</button>
        {errorState && personName === "" && (
          <p className="error-message">Insert name</p>
        )}
        {errorState && personJob === "" && (
          <p className="error-message">Insert job</p>
        )}
        {errorState && personAge === "" && (
          <p className="error-message">Insert age</p>
        )}
        {errorState && personNetworth === "" && (
          <p className="error-message">Insert networth</p>
        )}
        {errorState && personCountry === "" && (
          <p className="error-message">Insert country</p>
        )}
      </form>
    </>
  );
}
export default PersonForm;
