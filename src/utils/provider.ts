import { providers } from "ethers";
const rpcETH = process.env.REACT_APP_RPC_ETH as string;
const rpcBSC = process.env.REACT_APP_RPC_BSC as string;
const rpcPolygon = process.env.REACT_APP_RPC_POLYGON as string;

export const providerETH = new providers.JsonRpcProvider(rpcETH);
export const providerBSC = new providers.JsonRpcProvider(rpcBSC);
export const providerPolygon = new providers.JsonRpcProvider(rpcPolygon);