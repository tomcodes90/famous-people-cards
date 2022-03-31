import FamousPerson from "./FamousPerson";
import Card from "./Card";
import "./FamousPeople.css";

function FamousPeople(props) {
  return (
    <Card className="famous-people">
      <FamousPerson
        name={props.items[0].name}
        job={props.items[0].job}
        country={props.items[0].country}
        age={props.items[0].age}
        worth={props.items[0].worth}
      />
      <FamousPerson
        name={props.items[1].name}
        job={props.items[1].job}
        country={props.items[1].country}
        age={props.items[1].age}
        worth={props.items[1].worth}
      />
      <FamousPerson
        name={props.items[2].name}
        job={props.items[2].job}
        country={props.items[2].country}
        age={props.items[2].age}
        worth={props.items[2].worth}
      />
    </Card>
  );
}
export default FamousPeople;
