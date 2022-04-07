import Card from "./Card";
import "./PersonForm.css";

function PersonForm(props) {
  return (
    <>
      <Card className="person-form">
        <input placeholder="Name" />
        <input placeholder="Job" />
        <input placeholder="Age" />
        <input placeholder="Networth" />
        <input placeholder="Country" />
        <button onClick={() => props.addUserProp()}>Add user</button>
        <p id="person__name" className="no-display">
          Please insert name
        </p>
        <p id="person__job" className="no-display">
          Please insert job
        </p>
        <p id="person__age" className="no-display">
          Please insert age
        </p>
        <p id="person__networth" className="no-display">
          Please insert networth
        </p>
        <p id="person__country" className="no-display">
          Please insert country
        </p>
      </Card>
    </>
  );
}
export default PersonForm;
