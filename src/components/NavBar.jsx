import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="shadow-lg">
      <div className="flex justify-center pt-4 pb-2">
        <img src="public/jl-bird-dark.gif" width="60px" />
      </div>
      <nav className="flex justify-center ">
        <ul className="nav flex flex-row gap-10 sticky font-montserrat font-bold text-xl">
          <li className="py-2 border-b-4 border-transparent hover:border-b-indigo-800 transition-colors">
            <Link to="/">Home</Link>
          </li>
          <li className="py-2 border-b-4 border-transparent hover:border-b-indigo-800 transition-colors">
            <Link to="/about">About</Link>
          </li>
          <li className="py-2 border-b-4 border-transparent hover:border-b-indigo-800 transition-colors">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
