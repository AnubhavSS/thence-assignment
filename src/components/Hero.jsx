import React from "react";
import "../App.css";
import girl from "../assets/girl.png";
import rocket from "../assets/rocket.png";
const Hero = () => {
  return (
    <>
      {/* Top Section */}
      <div className="flex items-center justify-center">
        <div className="mt-[79px] w-[688px] h-[178px] ">
          <p className="stories">Success stories</p>
          <p className="topText">Every success journey we’ve encountered.</p>
        </div>
      </div>
      <div className="md:flex gap-20 justify-evenly xs:flex-col">
        {/* Left section */}
        <div className="relative">
          {/* 40% section */}
          <div className="girlContain1">
            <p className="headText">40%</p>
            <p className="subText">
              Achieved reduction in project execution time by optimising team
              availability
            </p>
          </div>

          {/* Girl Image */}
          <img
            src={girl}
            alt="girl-img"
            width={520}
            height={690}
            className="rounded-[80px] mt-[135px] ml-[200px]"
          />

          {/* 10 days section */}
          <div className="girlContain2">
            <img
              src={rocket}
              alt="rocket"
              className="w-[52px] h-[52px] rounded-full bg-blue-50 p-2"
            />
            <div>
              <p className="days10">10 DAYS</p>
              <p className="SD">Staff Deployment</p>
            </div>
          </div>

          {/* 0.5 million section */}
          <div className="girlContain3">
            <p className="font-semibold text-[63px] text-white">
              $0.5{" "}
              <span className="uppercase text-slate-400 text-base">
                million
              </span>
            </p>
            <p className="SD" style={{ color: "#CCCCCC" }}>
              Reduced client expenses by saving on hiring and employee costs.
            </p>
          </div>
        </div>

        {/* Right section */}
        <div>
          <p
            className="topText"
            style={{
              fontSize: "40px",
              lineHeight: "48px",
              width: "398px",
              height: "192px",
              marginTop: 220,
              textAlign:'left'
            }}
          >
            Enhance fortune 50 company’s insights teams research capabilities
          </p>

          <div className="flex gap-3 mt-5">
          <div className="w-[10px] h-[10px] rounded-full  cursor-pointer" style={{backgroundColor:"#2DA950"}}/>
            <div className="w-[10px] h-[10px] rounded-full cursor-pointer" style={{backgroundColor:"#E4E3E3"}}/>
            <div className="w-[10px] h-[10px] rounded-full cursor-pointer" style={{backgroundColor:"#E4E3E3"}}/>
          </div>

          <button className="btn-2" style={{marginTop:'180px'}}>Explore More<span className="mx-2">{"->"}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
