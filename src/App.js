import { useState } from "react";
import Card from "./components/Card";
import FamousPerson from "./components/FamousPerson";
import PersonForm from "./components/PersonForm";
const initialFamousPeople = [
  {
    name: "John Mayer",
    job: "Singer",
    country: "USA",
    age: "44",
    worth: "40M",
  },
  {
    name: "Dwayne Johnson",
    job: "Actor",
    country: "USA",
    age: "49",
    worth: "320M",
  },
  {
    name: "Mike Tyson",
    job: "Boxer",
    country: "USA",
    age: "55",
    worth: "10M",
  },
];
function App() {
  const [famousPeople, setFamousPeople] = useState([initialFamousPeople]);
  const people = famousPeople.map((person) => (
    <FamousPerson
      job={person.job}
      country={person.country}
      age={person.age}
      worth={person.networth}
    />
  ));

  const savePersonDataHandler = (enteredPersonData) => {
    setFamousPeople((initialFamousPeople) => {
      return [enteredPersonData, ...initialFamousPeople];
    });
  };
  return (
    <>
      <PersonForm onSavePersonData={savePersonDataHandler} />
      <Card className="famous-people">{people}</Card>
    </>
  );
}

export default App;
