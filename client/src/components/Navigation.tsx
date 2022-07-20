import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <h1>React Mysql</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">CreateTask</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
