import { getFullnodeUrl } from "@mysten/sui/client";
import { createNetworkConfig } from "@mysten/dapp-kit";

const { networkConfig, useNetworkVariable, useNetworkVariables } =
  createNetworkConfig({
    devnet: {
      url: getFullnodeUrl("devnet"),
      variables: {
        packageId:
          "0x4733ab25354d3dacdf416b810ded5108c8b15d3a2ace57cbb6494a7e30235c5e",
      },
    },
    testnet: {
      url: getFullnodeUrl("testnet"),
      variables: {
        packageId:
          "0x4733ab25354d3dacdf416b810ded5108c8b15d3a2ace57cbb6494a7e30235c5e",
      },
    },
    mainnet: {
      url: getFullnodeUrl("mainnet"),
      variables: {
        packageId:
          "0x3733ab25354d3dacdf416b810ded5108c8b15d3a2ace57cbb6494a7e30235c5e",
      },
    },
  });

export { useNetworkVariable, useNetworkVariables, networkConfig };
