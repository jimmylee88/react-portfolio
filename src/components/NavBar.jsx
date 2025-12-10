import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="shadow-lg">
      <div className="flex justify-center p-2">
        <img src="public/jl-bird.gif" width="50px" />
      </div>
      <nav className="flex justify-center pt-2 px-8 pb-4">
        <ul className="nav flex flex-row gap-8 sticky">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
