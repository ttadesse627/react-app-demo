import { NavLink } from "react-router-dom";

const PageNotFound = (props: any) => {
  return (
    <div className="page-not-found">
      <h1>Oops!!!</h1>
      <h3>This Page Does not exist!</h3>
      <NavLink to={props.url}>{props.name}</NavLink>
    </div>
  );
};
export default PageNotFound;
