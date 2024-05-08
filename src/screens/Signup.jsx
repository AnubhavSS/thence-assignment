import React, { useState } from "react";
import "../App.css";
import logo from "../assets/Brunel.png";
import Close from "../assets/Close.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [emailValid, setemailValid] = useState(false);
  const [details, setdetails] = useState({ name: "", email: "" });

//code to validate email address
  const validateEmail = (email) => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(details.email)) {
      navigate("/");
    } else {
      setemailValid(true);
    }
  };

  return (
    <>
      {/* Header */}
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mt-3 ml-6 mb-4 md:mb-0">
          <img src={logo} alt="logo" width={121} height={31} />
        </div>
        <div>
          <Link to={"/"}>
            <button className="closeBtn">
              <img src={Close} alt="close" />
            </button>
          </Link>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex justify-center items-center mt-10">
        <div className="w-[588px] h-[538px] flex flex-col justify-center items-center">
          {/* Upper Text */}
          <div className="w-[558px] h-[178px]">
            <p className="stories">Registration Form</p>
            <p className="topText">Start your success Journey here!</p>
          </div>

          {/* Form */}
          <form
            className="w-[417px] h-[300px] flex flex-col gap-7 mt-14"
            onSubmit={handleSubmit}
          >

            {/* Name */}
            <input
              onChange={(e) => setdetails({ ...details, name: e.target.value })}
              placeholder="Enter your name"
              type="text"
              id="name"
              className="textInput"
              value={details.name}
            />
            <div>
              
                {/* Email */}
              <input
                onChange={(e) =>
                  setdetails({ ...details, email: e.target.value })
                }
                placeholder="Enter your email"
                id="email"
                type="text"
                className="textInput"
                value={details.email}
              />
              {emailValid && (
                <p className="error">
                  <span>
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="8.89941"
                        y="6.00024"
                        width="3.2"
                        height="8"
                        fill="white"
                      />
                      <path
                        d="M10.5016 16.6666C6.81973 16.6666 3.83496 13.6818 3.83496 9.99992C3.83496 6.31802 6.81973 3.33325 10.5016 3.33325C14.1835 3.33325 17.1683 6.31802 17.1683 9.99992C17.1683 13.6818 14.1835 16.6666 10.5016 16.6666ZM9.83496 11.9999V13.3332H11.1683V11.9999H9.83496ZM9.83496 6.66658V10.6666H11.1683V6.66658H9.83496Z"
                        fill="#FF0808"
                      />
                    </svg>
                  </span>
                  Enter a valid email address
                </p>
              )}
            </div>
            <button
              className={
                details.email === "" || details.name === ""
                  ? "disabled btn-2"
                  : "btn-2"
              }
              type="submit"
              style={{ width: "417px", height: "77px", padding: "26px 49px" }}
              disabled={details.email === "" || details.name === ""}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
