const  Web3  = require("web3");
const address = '0x259920878100C6a5F5A6a8c38480E5fb3d620150';
const privateKey = '57b44ee294e1cb7abf5cda59307f802d6b9f0a3b4445d957348b6b51f0236245';
const contract=require("./../../build/contracts/Storage.json")
const {catchAsync}=require("./../Util/catchAsync");
const {isValid}=require("./developerController");
  const user={
    name:"gajodahssaar",
    email:"fds@12"
  }
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
  console.log(req.params.user)
  //////////////////////////////////////////////////////////////////////////
const web3=new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
const networkId = await web3.eth.net.getId();
const myContract = new web3.eth.Contract(
      contract.abi,
      contract.networks[networkId].address
    );
  web3.eth.accounts.wallet.add(privateKey);
  const gasPrice = await web3.eth.getGasPrice();
  const gasEstimate = await myContract.methods.getUser(req.params.user).estimateGas({ from: address });
//////////////////////////////////////////////////////////////////////////
  // if(isValid){
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
//////////////////////////////////////////////////////////////////////////
const web3=new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
  const networkId = await web3.eth.net.getId();
  const myContract = new web3.eth.Contract(
        contract.abi,
        contract.networks[networkId].address
      );
    web3.eth.accounts.wallet.add(privateKey);
    
//////////////////////////////////////////////////////////////////////////


  console.log(req.body)
  try{
    const gasPrice = await web3.eth.getGasPrice();
    const gasEstimate = await myContract.methods.addUser(user).estimateGas({ from: address });
    const temp=await myContract.methods.addUser(user).send({from:req.body.address,gasPrice: gasPrice, gas: gasEstimate});
    if(temp){
      res.status(201).json(temp);
    }
    else{
      res.status(500).json({message:"Error adding user"});
  }
}
  catch(err){
    // console.log("hehrere")
    res.status(500).json({message:"user already exists"})
  }
  
})