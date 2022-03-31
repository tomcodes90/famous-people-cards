import FamousPeople from "./components/FamousPeople";

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
  return (
    <div>
      <FamousPeople items={famousPeople} />
    </div>
  );
}

export default App;
