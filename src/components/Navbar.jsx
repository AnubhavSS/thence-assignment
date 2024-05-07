import React from "react";
import logo from "../assets/Brunel.png";
import "../App.css";
const Navbar = () => {
  return (
    <header className="head">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mt-3 ml-6 mb-4 md:mb-0">
          <img src={logo} alt="logo" width={121} height={31} />
        </div>
        <div className=" w-[420px] h-[77px] flex gap-4">
          <button className="btn-1">Get Projects</button>
          <button className="btn-2">Onboard Talent</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
