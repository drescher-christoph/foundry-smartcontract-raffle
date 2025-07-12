import React from "react";
import cryptoRing from "../assets/Crypto.png";
import Banner from "../components/Banner";

const MainBoard = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[90vh]">
        <Banner />
      </div>

      <div className="flex flex-col justify-center items-center h-[90vh]">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-white text-3xl font-boldonse">Recent Winner</h2>
          <h3 className="text-logo text-2xl font-boldonse">0x4F56...01</h3>
        </div>
      </div>
    </>
  );
};

export default MainBoard;

// Idee: Coin Icons hinter die Box legen, würde sich auch gut für small screen eignen
