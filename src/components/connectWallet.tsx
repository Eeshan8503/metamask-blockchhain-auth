import {
    useMetamask,
    // useWalletConnect,
    // useCoinbaseWallet,
    // useNetwork,
    useAddress,
    useDisconnect,
  } from "@thirdweb-dev/react";
  
  export const ConnectWallet = (props:any) => {
    // const connectWithCoinbaseWallet = useCoinbaseWallet();
    const connectWithMetamask = useMetamask();
    // const connectWithWalletConnect = useWalletConnect();
    const disconnectWallet = useDisconnect();
    const address = useAddress();
    // const network = useNetwork();
  
    // If a wallet is connected, show address, chainId and disconnect button
    if (address) {
      props.setter(address);
      return (
        <div >
          {/* Address: {address} */}
          {/* <br /> */}
          {/* Chain ID: {network[0].data.chain && network[0].data.chain.id} */}
          {/* <br /> */}
          <button onClick={disconnectWallet}>Disconnect</button>
        </div>
      );
    }
    else{
      props.setter('');
    }
  
    // If no wallet is connected, show connect wallet options
    return (
      <div style={{display:"flex",marginTop:'2em',cursor:'pointer'}}>
        
        <img src="https://img.icons8.com/color/48/undefined/metamask-logo.png"/>
        <button onClick={() => connectWithMetamask()}>Connect MetaMask</button>
        
        {/* <button onClick={() => connectWithWalletConnect()}>
          Connect WalletConnect
        </button> */}
      </div>
    );
  };