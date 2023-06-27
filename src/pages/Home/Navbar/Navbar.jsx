import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex items-center justify-between flex-wrap mx-6 my-3">
      <Link to="/" className="flex items-center flex-shrink-0 mr-6">
        <h1 className="font-semibold text-2xl tracking-tight"><i className="fa-solid fa-person-hiking text-indigo-600"></i> Shefat<span className="text-indigo-600">A</span>hmed</h1>
      </Link>
      <div className="block md:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded border-white hover:border-white"
          type="button"
          onClick={toggleMenu}
        >
          <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20">
            <path
              d="M0 3C0 2.44772 0.447715 2 1 2H19C19.5523 2 20 2.44772 20 3C20 3.55228 19.5523 4 19 4H1C0.447715 4 0 3.55228 0 3ZM0 10C0 9.44772 0.447715 9 1 9H19C19.5523 9 20 9.44772 20 10C20 10.5523 19.5523 11 19 11H1C0.447715 11 0 10.5523 0 10ZM0 17C0 16.4477 0.447715 16 1 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H1C0.447715 18 0 17.5523 0 17Z"
            />
          </svg>
        </button>
      </div>
      <div
        className={`w-full ${
          isOpen ? 'block' : 'hidden'
        } md:flex md:items-center md:w-auto`}
      >
        <div className="md:flex md:gap-8">
          <Link className="block hover:text-indigo-600 mt-4 md:inline-block md:mt-0 text-center"
          >
            Home
          </Link>
          <Link className="block hover:text-indigo-600 mt-4 md:inline-block md:mt-0 text-center"
          >
            About
          </Link>
          <Link className="block hover:text-indigo-600 mt-4 md:inline-block md:mt-0 text-center"
          >
            Works
          </Link>
          <Link className="block hover:text-indigo-600 mt-4 md:inline-block md:mt-0 text-center"
          >
            Contact
          </Link>
        </div>
      </div>
        <div className="hidden md:flex">
          <button className="btn glass bg-indigo-600 rounded-full text-white px-10 hover:bg-indigo-800 ">
            Let's Talk 
          </button>
        </div>
    </nav>
  );
};

export default Navbar;