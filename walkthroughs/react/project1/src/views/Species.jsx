import { Link } from "react-router-dom";
import withStudioGhibliData from "../components/StudioGhibliWrapper";

const Species = ({ data }) => {
  return (
    <div>
      <h1>Studio Ghibli Species</h1>
      <div className="task-container">
        {data.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="card-body">
                <Link to={item.id}>{item.name}</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withStudioGhibliData(
  Species,
  "https://ghibliapi.herokuapp.com/species"
);
