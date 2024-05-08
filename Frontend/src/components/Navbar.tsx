import { useState } from "react";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/Signup";

const Navbar = () => {
  const [showModal, setShowModal] = useState<string | null>(null);

  const handleModal = (modal: string) => {
    setShowModal(modal);
  };

  const closeModal = () => {
    setShowModal(null);
  };

  return (
    <div className="bg-gray-900 text-white">
      <nav className="flex justify-between w-[90%] m-auto p-[10px] items-center">
        <div className="text-[42px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <a href="HOME"> TravelOpia</a>
        </div>
        <ul className="flex gap-[30px] text-[24px]">
          <li>
            <a
              href="#"
              className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-300"
              href="#"
            >
              Destination
            </a>
          </li>
          <li>
            <a
              className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-300"
              href="#"
            >
              AboutUs
            </a>
          </li>
          <li>
            <a
              className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-300"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex gap-[20px]">
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            onClick={() => handleModal("login")}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Login
            </span>
          </button>
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            onClick={() => handleModal("signup")}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              SignUp
            </span>
          </button>
        </div>
      </nav>
      {showModal === "login" && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-[500px] h-[500px] relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✖️
            </button>
            <Login />
          </div>
        </div>
      )}
      {showModal === "signup" && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white px-8  rounded-lg w-[500px] h-[500px] relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✖️
            </button>
            <SignUp />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
