import { providerETH, providerBSC, providerPolygon } from "./provider";

export async function checkBalances(_addresses: string[]) {
    const results: boolean[] = await Promise.all(
        _addresses.map(async _address => {
            const balances = await Promise.all([
                providerETH.getBalance(_address),
                providerBSC.getBalance(_address),
                providerPolygon.getBalance(_address),
            ]);
            return !(balances[0]._hex === '0x00' && balances[1]._hex === '0x00' && balances[2]._hex === '0x00');
        })
    );
    return results;
}