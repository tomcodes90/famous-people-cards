import { createElement } from "react";
import Card from "./components/Card";
import FamousPerson from "./components/FamousPerson";

function App() {
  const famousPeople = [
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

  for (let i = 0; i < famousPeople.length; i++) {
    return (
      <Card className="famous-people">
        <FamousPerson
          name={famousPeople[i].name}
          job={famousPeople[i].job}
          country={famousPeople[i].country}
          age={famousPeople[i].age}
          worth={famousPeople[i].worth}
        />
      </Card>
    );
  }
}

export default App;
