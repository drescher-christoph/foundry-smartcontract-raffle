import React from "react";
import cryptoRing from "../assets/Crypto.png";
import Banner from "../components/Banner";
import { useReadContract } from "wagmi";
import { RAFFLE_ADDRESS } from "../../constants";
import { RAFFLE_ABI } from "../../constants";

const MainBoard = () => {

  const {data: recentWinner, isLoading: loadingRecentWinner, isError: errorLoadingRecentWinner} = useReadContract({
    address: RAFFLE_ADDRESS,
    abi: RAFFLE_ABI,
    functionName: "getRecentWinner",
    watch: true,
  })

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[90vh]">
        <Banner />
      </div>

      <div className="flex flex-col justify-center items-center h-[90vh]">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-white text-3xl font-boldonse mb-3">Recent Winner</h2>
          {loadingRecentWinner ? (
            <p className="text-white text-lg">Loading...</p>
          ) : errorLoadingRecentWinner ? (
            <p className="text-red-500 text-lg">Error loading winner, please try again later</p>
          ) : (
            <h3 className="text-logo text-2xl font-boldonse">{recentWinner}</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default MainBoard;

// Idee: Coin Icons hinter die Box legen, würde sich auch gut für small screen eignen
