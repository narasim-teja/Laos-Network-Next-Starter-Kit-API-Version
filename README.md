# Laos Network Next.js Starter Kit 🚀

A complete Next.js-based starter kit for building NFT applications on Laos Network using API keys. This kit comes pre-configured with Dynamic Wallet integration, Pinata IPFS storage, and Laos Network API integration.

## Features ✨

- ⚡ Built with Next.js 15 + TypeScript
- 🔑 API-based NFT operations
- 🔐 Wallet Connection with Dynamic
- 📝 NFT Collection Creation via API
- 🎨 NFT Minting with IPFS Storage
- 🌉 Cross-chain Broadcasting
- 🔄 NFT Evolution
- 🎯 Testnet & Mainnet Support

## Prerequisites 📋

Before you begin, you'll need to obtain the following API keys:

1. **Dynamic Wallet Environment ID**
   - Visit [Dynamic](https://www.dynamic.xyz)
   - Sign up for an account
   - Create a new project
   - Copy your Environment ID

2. **Pinata JWT**
   - Go to [Pinata](https://pinata.cloud)
   - Create an account
   - Navigate to API Keys section
   - Generate a new JWT key

3. **Laos Network API Key**
   - Join the [Laos Network Community](https://laosnetwork.io/community)
   - Request API access
   - Follow the instructions to receive your API key

## Getting Started 🏁

1. **Clone the repository**
   ```bash
   git clone https://github.com/narasim-teja/Laos-Network-Next-Starter-Kit-API-Version.git
   cd Laos-Network-Next-Starter-Kit-API-Version
   ```

2. **Install dependencies**
   ```bash
   npm install --force || bun install || yarn install || pnpm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Update the `.env.local` file with your API keys

4. **Start the development server**
   ```bash
   npm run dev || bun run dev || yarn run dev || pnpm run dev
   ```

## Network Configuration 🌐

### Testnet
- Chain ID: 62850
- RPC URL: https://rpc.laossigma.laosfoundation.io
- Explorer: https://sigma.explorer.laosnetwork.io/
- Currency: SIGMA

### Mainnet
- Chain ID: 6283
- RPC URL: https://rpc.laos.laosfoundation.io
- Explorer: https://blockscout.laos.laosfoundation.io/
- Currency: LAOS

## API Features 🛠️

### 1. Create NFT Collection
- Create new NFT collections on either Ethereum or Polygon using Laos Network API
- Automatically deploys contracts
- Provides collection details and addresses

### 2. Mint NFT
- Mint new NFTs via API endpoints
- Upload images to IPFS
- Set NFT metadata (name, description)
- Support for both chains

### 3. Broadcast Transaction
- Broadcast NFT transactions across chains using API
- Track transaction status
- Verify ownership transfers

### 4. Evolve Asset
- Update existing NFT metadata through API
- Change NFT images and properties
- Track evolution history

## Tech Stack 👨‍💻

- Next.js 15
- TypeScript
- Tailwind CSS
- Dynamic Wallet SDK
- Pinata IPFS
- Laos Network API

## Support 💬

For support and questions:
- Join the [Laos Network Discord](https://discord.com/invite/HgnVEYfX2V)
- Visit the [Documentation](https://docs.laosnetwork.io)
- Follow on [Twitter](https://twitter.com/LaosNetwork)

---

Built with ❤️ for the Laos Network Community
