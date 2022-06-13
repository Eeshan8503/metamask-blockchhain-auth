const  Web3  = require("web3");
const Provider = require("truffle-hdwallet-provider");
const address = '0xDC86b38274812B1D2dd21751E0Bcb04A1f760f6e';
const privateKey = '90226b50dcfe829d69b2526f11c794e7a60390537f7ea765e40c2effd09ed11a';
const contract=require("./../../build/contracts/Storage.json")
const {catchAsync}=require("./../Util/catchAsync");
// const {isValid}=require("./developerController");
  // const user={
  //   name:"gajodahssaar",
  //   email:"fds@12"
  // }
// const init1=catchAsync(async()=>{
//  const web3=new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
//   const networkId = await web3.eth.net.getId();
//   const myContract = new web3.eth.Contract(
//         contract.abi,
//         contract.networks[networkId].address
//       );
//     web3.eth.accounts.wallet.add(privateKey);
//     const gasPrice = await web3.eth.getGasPrice();
//     const gasEstimate = await myContract.methods.addUser(user).estimateGas({ from: address });

//     // const temp=await myContract.methods.addUser(user).send({from:address,gasPrice: gasPrice, gas: gasEstimate});
//     // const u=await myContract.methods.getUser(address).call();
//     // console.log(u)
// })

exports.getUser=catchAsync(async(req,res)=>{
  // console.log(req.params.user)
  // console.log(req.params.key)
  // let address=req.params.user
  //////////////////////////////////////////////////////////////////////////
// const web3=new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
const web3=new Web3("https://ropsten.infura.io/v3/ca1913f3a01e4c9fa2d3ba9578018197");
const networkId = await web3.eth.net.getId();
const myContract = new web3.eth.Contract(
      contract.abi,
      contract.networks[networkId].address
    );
  // web3.eth.accounts.wallet.add(privateKey);
  const gasPrice = await web3.eth.getGasPrice();
  const gasEstimate = await myContract.methods.getUser(req.params.user).estimateGas({ from: address });
//////////////////////////////////////////////////////////////////////////
// console.log("returned value is "+ isValid(req.params.key))  
// if(isValid(req.params.key)){
  try{
    const u=await myContract.methods.getUser(req.params.user).call({from:address,gasPrice: gasPrice, gas: gasEstimate});  
    if(u)
    res.status(201).json(u);
    else{
      res.status(500).json({message:"No user exists"})
    }
  }
  catch(err){
    res.status(500).json({message:err.message})
  }
  // }
  // else{
  //   res.status(500).json({message:"Invalid Auth key"})
  // }
})


exports.newUser=catchAsync(async(req,res)=>{
  const user={
    name:req.body.name,
    email:req.body.email
  }
  // let address=req.body.address
  // console.log(address)
//////////////////////////////////////////////////////////////////////////
const web3 = new Web3("https://ropsten.infura.io/v3/ca1913f3a01e4c9fa2d3ba9578018197");
  const networkId = await web3.eth.net.getId();
  const myContract = new web3.eth.Contract(
    contract.abi,
    contract.networks[networkId].address
  );
  web3.eth.accounts.wallet.add(privateKey);

 
      
//////////////////////////////////////////////////////////////////////////


  console.log(req.body)
  try{
    ///////////////////////////////////////
    const gasPrice = await web3.eth.getGasPrice();
    const gasEstimate = await myContract.methods.addUser(user).estimateGas({ from: req.body.address });
    const tx = await myContract.methods.addUser(user).send({from:address,gasPrice: gasPrice, gas: gasEstimate});
    // const gas = await tx.estimateGas({from: address});
    const data = tx.encodeABI();
    const nonce = await web3.eth.getTransactionCount(address);
    const txData = {
      from: address,
      to: myContract.options.address,
      data: data,
      gasEstimate,
      gasPrice,
      nonce, 
      chain: 'ropsten', 
      hardfork: 'istanbul'
    };
  
    // console.log(`Old data value: ${await myContract.methods.data().call()}`);
    const receipt = await web3.eth.sendTransaction(txData);
    console.log(`Transaction hash: ${receipt.transactionHash}`);
    console.log(`New data value: ${await myContract.methods.data().call()}`);
  
  
    
    ///////////////////////////////////////
    // const gasPrice = await web3.eth.getGasPrice();
    // const gasEstimate = await myContract.methods.addUser(user).estimateGas({ from: req.body.address });
    // const temp=await myContract.methods.addUser(user).send({from:req.body.address,gasPrice: gasPrice, gas: gasEstimate});
    if(tx){
      res.status(201).json(temp);
    }
    else{
      res.status(500).json({message:"Error adding user"});
  }
}
  catch(err){
    console.log(err);
    res.status(500).json({message:"please try again"})
  }
  
})