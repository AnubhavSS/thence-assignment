import React,{useState,useEffect} from "react";
import "../App.css";
import logo from "../assets/Brunel.png";
import tick from "../assets/tick.png";
import { useNavigate } from "react-router-dom";
const Success = () => {

    const navigate = useNavigate();
    const [time, setTime] = useState(5);

    useEffect(() => {
      let timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            // clearInterval(timer);
            navigate('/');
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    
      return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, []); // Empty dependency array to run the effect only once on mount
    
  return (
    <div>
      {/* Header */}
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mt-3 ml-6 mb-4 md:mb-0">
          <img src={logo} alt="logo" width={121} height={31} />
        </div>
      </div>

      {/* Main Section */}
      <div className="flex justify-center items-center mt-24">
        <div className="w-[718px] h-[357px] flex flex-col justify-center items-center gap-6 ">
          <img src={tick} width={80} height={80} alt="success" />
          <p className="stories">Success Submitted</p>
          <p className="topText">Congratulations</p>
          <p className="successText">
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates
          </p>
        </div>
      </div>

      {/* Footer */}
      <p className="successFoot">
        Redirecting you to Homepage in<span> {time} Seconds</span>
      </p>
    </div>
  );
};

export default Success;
