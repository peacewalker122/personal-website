import { useState } from "react";
import "./navbar.css";

interface NavbarProps {
  title: string;
}

function Navbar({ title }: NavbarProps) {
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
        className="sm:hidden hover:bg-gray-100 transition-colors duration-300 z-50 absolute top-5 right-10 text-black p-2"
      >
        <span className="material-icons">menu</span>
      </button>

      <section
        className="sm:hidden fixed w-screen h-full transform transition-transform duration-300 ease-in-out z-10 text-black"
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <ul className="sm:hidden top-0 right-0 bg-white w-3/4 h-screen flex flex-col items-start text-xl font-bold transform transition-transform duration-300 ease-in-out">
          <li className="w-full border-b border-gray-200 last:border-0">
            <div className="flex items-center justify-between py-4 px-2 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-icons text-blue-600 text-2xl">
                  home
                </span>
                <span>Home</span>
              </div>
              <span className="material-icons text-gray-400">
                chevron_right
              </span>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 last:border-0">
            <div className="flex items-center justify-between py-4 px-2 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-icons text-green-600 text-2xl">
                  person
                </span>
                <span>About</span>
              </div>
              <span className="material-icons text-gray-400">
                chevron_right
              </span>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 last:border-0">
            <div className="flex items-center justify-between py-4 px-2 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-icons text-purple-600 text-2xl">
                  edit
                </span>
                <span>Blog</span>
              </div>
              <span className="material-icons text-gray-400">
                chevron_right
              </span>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 last:border-0">
            <div className="flex items-center justify-between py-4 px-2 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-icons text-red-600 text-2xl">
                  mail
                </span>
                <span>Contact</span>
              </div>
              <span className="material-icons text-gray-400">
                chevron_right
              </span>
            </div>
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default Navbar;
