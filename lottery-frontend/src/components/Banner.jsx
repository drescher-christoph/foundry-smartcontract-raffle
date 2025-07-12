import React from "react";
import CoinIcon from "./CoinIcon";
import bitcoin from "../assets/images/bitcoin.png";
import ethereum from "../assets/images/ethereum.svg";
import usdt from "../assets/images/tether.svg";
import dai from "../assets/images/dai.svg";
import bnb from "../assets/images/bnb.png";
import apecoin from "../assets/images/ape.svg";
import pepe from "../assets/images/pepe.svg";

const Banner = () => {
  return (
    <div
      className="
            bg-primary 
            bg-opacity-25 
            rounded-2xl 
            w-[80%] h-[75%] 
            flex 
            flex-col
            justify-center 
            items-center 
            backdrop-blur-lg 
            shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]
            hover:shadow-[0_0_40px_-5px_rgba(59,130,246,0.5)]
            hover:-translate-y-0.5
            transition-all
            duration-300
            overflow-hidden
            z-1"
    >
      {/* Coin Icons */}
      {/* Bitcoin: unten rechts */}
      <CoinIcon
        src={bitcoin}
        alt="Bitcoin"
        className="
            hidden md:block
            w-32 
            h-32 
            -translate-y-[-30vh]
            right-20 
            rotate-12 
          "
      />

      {/* Ethereum: oben links */}
      <CoinIcon
        src={ethereum}
        alt="Ethereum"
        className="
            hidden md:block
            w-28 
            h-28
            top-33 
            left-10 
            -rotate-9
          "
      />

      {/* USDT: mitte rechts */}
      <CoinIcon
        src={usdt}
        alt="Tether"
        className="
            hidden md:block
            w-22 
            h-22 
            top-1/2 
            right-40 
            rotate-18 
          "
      />
      {/* Pepe: mitte links unten */}
      <CoinIcon
        src={pepe}
        alt="Pepe"
        className="
            hidden md:block
            w-33
            h-33 
            -translate-y-[-18vh] 
            left-33 
            rotate-[16deg] 
          "
      />
      {/* DAI: mitte links unten */}
      <CoinIcon
        src={dai}
        alt="DAI"
        className="
            hidden md:block
            w-28
            h-28 
            -translate-y-[20vh] 
            right-45 
            rotate-[-32deg] 
          "
      />
      {/* Apecoin: mitte links unten */}
      <CoinIcon
        src={apecoin}
        alt="Apecoin"
        className="
            hidden md:block
            w-24
            h-24 
            -translate-y-[-23vh] 
            -translate-x-[-10vw]
            rotate-[12deg] 
          "
      />
      {/* BNB: mitte links unten */}
      <CoinIcon
        src={bnb}
        alt="BNB"
        className="
            hidden md:block
            w-24
            h-24 
            -translate-y-[20vh] 
            left-47 
            rotate-[4deg] 
          "
      />
      <div className="flex flex-col justify-center items-center z-10">
        <h1 className="text-white font-boldonse text-center text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl z-5 -translate-y-[7vh]">
          PRIZE FUND
        </h1>
        <h1 className="text-primary font-inter font-semibold text-center text-7xl sm:text-5xl md:text-7xl xl:text-7xl 2xl:text-7xl z-5 pb-3.5">
          <span className="text-white font-boldonse">12.500 </span>
          <span className="text-logo font-boldonse">USDT</span>
        </h1>
        <h2 className="text-secondary font-boldonse text-2xl ">
          3 days : 12 hrs : 45 mins
        </h2>

        <button className="bg-tertiary rounded-full hover:border-2 sm:w-[40%] md:w-[40%] lg:w-[40%] xl:w-[40%] 2xl:w-[40%] w-[65%] text-white font-boldonse px-5 py-2 mt-7 top-20">
          Enter the Lottery
        </button>
      </div>
    </div>
  );
};

export default Banner;
