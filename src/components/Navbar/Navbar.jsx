import { useState } from "react";
import "./navbar.css";

function Navbar({ title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-row sm:justify-between justify-center w-screen overflow-hidden p-6 text-black fixed">
      <h1 className="font-bold text-2xl">{title}</h1>

      <ul className="hidden sm:flex flex-row gap-4 text-lg font-bold">
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>CV</li>
        <li>Contact</li>
      </ul>

      <button
        type="button"
        onClick={() => {
          return setIsOpen(!isOpen);
        }}
        className="sm:hidden hover:bg-gray-100 transition-colors duration-300 z-50 absolute top-5 right-0 text-black p-2"
      >
        <span className="material-icons">menu</span>
      </button>

      <section
        className="sm:hidden fixed w-screen h-full p-2 transform transition-transform duration-300 ease-in-out z-10 text-black"
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <ul className="sm:hidden fixed top-0 right-0 bg-white w-3/4 h-screen flex flex-col p-4 gap-4 text-xl font-bold transform transition-transform duration-300 ease-in-out gap">
          <li>
            <span class="material-icons">home</span>Home
          </li>
          <li>
            <span className="material-icons">person</span> About
          </li>
          <li>
            <span className="material-icons">edit</span>Blog
          </li>
          <li>
            <span className="material-icons">mail</span>Contact
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default Navbar;
