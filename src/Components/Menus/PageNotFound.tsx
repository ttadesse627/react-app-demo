import { NavLink } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1>Oops!!!</h1>
      <h3>This Page Does not exist!</h3>
      <p>
        Go to <NavLink to="/">Homepage</NavLink>.
      </p>
    </div>
  );
}
