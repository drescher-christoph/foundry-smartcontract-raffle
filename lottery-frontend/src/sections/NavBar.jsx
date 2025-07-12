import { useState } from "react";
import logo from "../assets/logo.png";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="flex justify-between items-center w-[92%] mx-auto py-3 z-20"> {/* pt-6 */}
        <div>
          <img class="w-22 h-auto object-fit cursor-pointer" src={logo} alt="..."></img>
        </div>
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/90 z-10 md:hidden">
            <div className="flex justify-end p-5" onClick={onToggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-10 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        )}
        <div
          className={`
        nav-links 
        duration-500 
        md:static 
        absolute 
        md:min-h-fit 
        min-h-[60vh] 
        left-0 
        ${isMenuOpen ? "top-[9%]" : "top-[-100%]"} 
        md:w-auto 
        w-full 
        flex 
        items-center 
        px-5
        z-15
      `}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 font-poppins">
            <li>
              <a class="text-white hover:text-gray-500" href="https://sepolia.etherscan.io/address/0x512318F0BC32378481CCc4F9294467b48e973A62">
                Contract
              </a>
            </li>
            <li>
              <a class="text-white hover:text-gray-500" href="https://github.com/drescher-christoph/foundry-smartcontract-raffle">
                Github
              </a>
            </li>
            <li>
              <a class="text-white hover:text-gray-500" href="https://automation.chain.link">
                Chainlink
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          {/* <button className="text-white px-5 py-2 rounded-full border-2 border-white hover:bg-[#9146ff] font-boldonse font-medium">
            Connect Wallet
          </button> */}
          <ConnectButton />
          <div
            onClick={onToggleMenu}
            name="menu"
            className="text-3xl cursor-pointr md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
