import { Link } from "react-router-dom";
interface NavBarProps {}

const NavBar: React.FunctionComponent<NavBarProps> = () => {
  return (
    <nav className="nav">
      <h1>Todo wit AI</h1>
      <div className="tabList">
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/addtodo">
          Add
        </Link>
        <Link className="links" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
