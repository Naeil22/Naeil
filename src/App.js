import { useEffect, useState } from "react";
import { ethers } from "ethers";

function App() {
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [userName, setUsername] = useState("");

    async function logIn() {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        let addr = await signer.getAddress();
        let ensName = await provider.lookupAddress(addr);

        if (ensName) {
            setUsername(ensName);
            console.log(ensName);
        } else {
            setUsername(addr);
            console.log(addr);
        }
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
