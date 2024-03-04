import { Link } from "react-router-dom";
interface NavBarProps {}

const NavBar: React.FunctionComponent<NavBarProps> = () => {
  return (
    <nav className="nav">
      <h1>Todo wit AI</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/addtodo">Add</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default NavBar;
