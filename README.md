# Sui Move + Frontend code from class

A Sui package with frontend integration built during classes.

## Prerequisites

- [Sui CLI](https://docs.sui.io/guides/developer/getting-started/sui-install)
- Node.js 18+ and npm/yarn

## Building & Publishing the Package

```bash
# Navigate to package directory
cd package

# Build the Move package
sui move build

# Test the Move package
sui move test

# Publish to testnet
sui client publish --gas-budget 100000000
```

Save the `Package ID` from deployment output to your `.env` files.

## Running the Frontend

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The frontend will be available at `http://localhost:5173` (Vite default).

## Project Structure

```
.
├── sui-move-package/    # Move smart contracts
├── frontend/            # React frontend
└── README.md
```
