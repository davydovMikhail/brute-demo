import { providerETH, providerBSC, providerPolygon } from "./provider";

export async function isBalance(address: string) {
    const balances = await Promise.all([
        providerETH.getBalance(address),
        providerBSC.getBalance(address),
        providerPolygon.getBalance(address),
    ]);
    return !(balances[0]._hex === '0x00' && balances[1]._hex === '0x00' && balances[2]._hex === '0x00');
}