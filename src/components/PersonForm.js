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
  const submitHandler = (event) => {
    event.preventDefault();
    const personData = {
      name: personName,
      job: personJob,
      age: personAge,
      networth: personNetworth,
      country: personCountry,
    };
    props.onSavePersonData(personData);
    setPersonName("");
    setPersonJob("");
    setPersonAge("");
    setPersonNetworth("");
    setPersonCountry("");
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
        <p id="person-name__error" className="no-display">
          Please insert name
        </p>
        <p id="person-job__error" className="no-display">
          Please insert job
        </p>
        <p id="person-age__error" className="no-display">
          Please insert age
        </p>
        <p id="person-networth__error" className="no-display">
          Please insert networth
        </p>
        <p id="person-country__error" className="no-display">
          Please insert country
        </p>
      </form>
    </>
  );
}
export default PersonForm;
