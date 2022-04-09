import { useState } from "react";
import Card from "./components/Card";
import FamousPerson from "./components/FamousPerson";
import PersonForm from "./components/PersonForm";

function App() {
  const [famousPeople, setFamousPeople] = useState([
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
  ]);
  const addUser = () => {
    setFamousPeople([
      ...famousPeople,
      {
        name: "Michael Jackson",
        job: "Actor",
        country: "USA",
        age: "49",
        worth: "320M",
      },
    ]);
    console.log("Adding user");
  };
  const people = famousPeople.map((person) => {
    return (
      <FamousPerson
        name={person.name}
        job={person.job}
        country={person.country}
        age={person.age}
        worth={person.worth}
      />
    );
  });

  return (
    <>
      <PersonForm />
      <Card className="famous-people">{people}</Card>
    </>
  );
}

export default App;
