# 🎲 Chainlink Lottery DApp

A decentralized, automated lottery system built with Solidity and Chainlink tools like VRF and Automation. Players can enter the raffle by sending ETH, and a random winner is selected automatically using Chainlink VRF v2.

## ✨ Features

- 💰 Users can enter by sending a fixed entrance fee.
- 🎲 Random winner is picked via Chainlink VRF.
- 🛠️ Fully automated draw cycles using Chainlink Automation (Keepers).
- 🧪 Built with Foundry for local testing and development.
- 🔐 Owner can manually reset the raffle if needed.

## 🧠 What I Learned

This project helped me deepen my understanding of:
- 🔗 **Chainlink VRF v2+** for secure, provably fair randomness.
- 🤖 **Chainlink Automation** to trigger draws at set intervals.
- ⛓️ Contract state management and lifecycle (OPEN → CALCULATING → OPEN).
- 🛠️ Foundry development workflow with Solidity, Forge, and scripts.
- 🧪 Testing and simulating time-based events on testnets.
- 🪙 Handling payments and edge cases (e.g. insufficient ETH, transfer failures).

## 🔍 Tech Stack

- **Solidity 0.8.19**
- **Foundry (Forge, Cast)**
- **Chainlink VRF v2+**
- **Chainlink Automation**
- **Sepolia Testnet**

## 🧪 How It Works

1. Players call `enterRaffle()` and send `entranceFee`.
2. A Chainlink Automation node calls `performUpkeep()` once the interval passes.
3. `performUpkeep()` requests a random number from VRF.
4. `fulfillRandomWords()` selects the winner and transfers the ETH balance.
5. Raffle is reset and opened for the next round.

## 🚀 Next Steps

- Add frontend (React + wagmi).
- Improve testing coverage.
- Add better access control & pausing mechanisms.
- Support multiple raffles or NFT rewards.

## 📜 License

MIT
