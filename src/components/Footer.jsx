import React from "react";
import "../App.css";
const Footer = () => {
  return (
    <footer className="foot">
      <div className="container px-5 py-8 mx-auto flex items-center justify-between sm:flex-row flex-col">
        <p className="copyright">© Talup 2023. All rights reserved</p>
        <div className="flex gap-10 h-[20px]">
            <p className="footText">Terms & Conditions</p>
            <p className="footText">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
