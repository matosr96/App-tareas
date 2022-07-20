import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <nav className="header">
      <div className="logo">
        <h3>APP-TAREA</h3>
      </div>
      <div className="sections">
        <Link to="/" className="item-header">
          HOME
        </Link>
        <Link to="/create" className="item-header">
          CREATE TASK
        </Link>
      </div>
    </nav>
  );
};

export default Header;
