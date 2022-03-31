import Card from "./Card";
import "./FamousPerson.css";

function FamousPerson(props) {
  return (
    <Card className="famous-person">
      <h2>{props.name}</h2>
      <p>
        Job: <span>{props.job}</span>
      </p>
      <p>
        Country: <span>{props.country}</span>
      </p>
      <p>
        Age: <span>{props.age}</span>
      </p>
      <p>
        Net worth: <span>{props.worth}</span>
      </p>
    </Card>
  );
}

export default FamousPerson;
