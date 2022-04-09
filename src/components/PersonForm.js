import Card from "./Card";
import "./PersonForm.css";
import { useState } from "react";

function PersonForm() {
  const [personName, setPersonName] = useState("");
  const inputPersonName = (event) => {
    setPersonName(event.target.value);
  };
  const [personJob, setPersonJob] = useState("");
  const inputPersonJob = (event) => {
    setPersonJob(event.target.value);
  };
  const [personAge, setPersonAge] = useState("");
  const inputPersonAge = (event) => {
    setPersonAge(event.target.value);
  };
  const [personNetworth, setPersonNetworth] = useState("");
  const inputPersonNetworth = (event) => {
    setPersonNetworth(event.target.value);
  };
  const [personCountry, setPersonCountry] = useState("");
  const inputPersonCountry = (event) => {
    setPersonCountry(event.target.value);
  };
  const submitValue = (event) => {
    event.preventDefault();
    const personData = {
      name: personName,
      job: personJob,
      age: personAge,
      networth: personNetworth,
      country: personCountry,
    };
    console.log(personData);
  };
  return (
    <>
      <form onSubmit={submitValue} className="person-form">
        <input onChange={inputPersonName} id="person-name" placeholder="Name" />
        <input onChange={inputPersonJob} id="person-job" placeholder="Job" />
        <input onChange={inputPersonAge} id="person-age" placeholder="Age" />
        <input
          onChange={inputPersonNetworth}
          id="person-networth"
          placeholder="Networth"
        />
        <input
          onChange={inputPersonCountry}
          id="person-country"
          placeholder="Country"
        />
        <button>Add user</button>
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
