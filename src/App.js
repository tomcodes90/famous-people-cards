import { useState } from "react";
import Card from "./components/Card";
import FamousPerson from "./components/FamousPerson";
import PersonForm from "./components/PersonForm";
const initialFamousPeople = [
  {
    id: "p1",
    name: "John Mayer",
    job: "Singer",
    country: "USA",
    age: "44",
    worth: "40M",
  },
  {
    id: "p2",
    name: "Dwayne Johnson",
    job: "Actor",
    country: "USA",
    age: "49",
    worth: "320M",
  },
  {
    id: "p3",
    name: "Mike Tyson",
    job: "Boxer",
    country: "USA",
    age: "55",
    worth: "10M",
  },
];
function App() {
  const [famousPeople, setFamousPeople] = useState(initialFamousPeople);

  const savePersonDataHandler = (enteredPersonData) => {
    setFamousPeople((initialFamousPeople) => {
      return [...initialFamousPeople, enteredPersonData];
    });
  };
  const people = famousPeople.map((person) => (
    <FamousPerson
      key={person.id}
      name={person.name}
      job={person.job}
      country={person.country}
      age={person.age}
      worth={person.worth}
    />
  ));
  return (
    <>
      <PersonForm onSavePersonData={savePersonDataHandler} />
      <Card className="famous-people">{people}</Card>
    </>
  );
}

export default App;
