import { useState } from "react";
import viteLogo from "/vite.svg";
import NavBar from "./sections/NavBar";
import MainBoard from "./sections/MainBoard";
import Footer from "./sections/Footer";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider, darkTheme,midnightTheme } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { sepolia } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const config = getDefaultConfig({
    appName: "Foundry-Raffle",
    projectId: "1d733c4b02c97f5b592e354dc5cefb6c",
    chains: [sepolia],
    ssr: true, // If your dApp uses server side rendering (SSR)
  });

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={midnightTheme()}>
          <main>
            <NavBar />
            <MainBoard />
            <Footer />
          </main>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
