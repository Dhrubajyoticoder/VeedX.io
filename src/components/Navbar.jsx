// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full bg-gray-900 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Left Side - Project Name */}
        <h1 className="text-xl font-bold">VeedX.io</h1>

        {/* Right Side - Actions */}
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-300">Save your project for later</span>
          <button className="text-blue-400 hover:text-blue-500 font-medium">Sign up</button>
          <span className="text-gray-400">or</span>
          <button className="text-blue-400 hover:text-blue-500 font-medium">Log in</button>
          <button className="bg-[rgb(255,150,28)] text-white px-4 py-2 rounded-md font-medium hover:bg-[rgb(230,135,25)]">Upgrade</button>
          <button className="bg-[rgb(37,99,235)] text-white px-4 py-2 rounded-md font-medium hover:bg-[rgb(30,85,220)]">Done</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;