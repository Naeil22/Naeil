import { useEffect, useState } from "react";
import { ethers } from "ethers";

function App() {
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);

    async function logIn() {
        await window.ethereum.enable()
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        console.log(await provider.getBlockNumber())
    }

    return (
        <div>
            <header>Welcome</header>
            <body>
                <button onClick={logIn}>Connect</button>
            </body>
        </div>
    );
}

export default App;
