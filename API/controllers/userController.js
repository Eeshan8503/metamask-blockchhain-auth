const  Web3  = require("web3");
const address = '0xF0b11AB06788fB611476E31Bb2287754f0231fDA';
const privateKey = '5415fc212e1f08712260fab2d2a140a0cbe3b8200aedad97b502f98379b9fbc3';
const contract=require("./../../build/contracts/Storage.json")
const {catchAsync}=require("./../Util/catchAsync");
const {isValid}=require("./developerController");
var web3=null;
var networkId=null
var myContract=null
  
const init1=async()=>{
  web3=new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
  networkId = await web3.eth.net.getId();
  myContract = new web3.eth.Contract(
        contract.abi,
        contract.networks[networkId].address
      );
    web3.eth.accounts.wallet.add(privateKey);  
}
init1()
exports.getUser=catchAsync(async(req,res)=>{
  if(isValid){
    const u=await myContract.methods.getUser(req.params.user).call();
    if(u)
    res.status(201).json(u);
    else{
      res.status(500).json({message:"No user exists"})
    }
  }
  else{
    res.status(500).json({message:"Invalid Auth key"})
  }
})
exports.addUser=catchAsync(async(req,res)=>{
  const user={
    name:req.body.name,
    email:req.body.email
  }
  const temp=await myContract.methods.addUser(user).send();
  if(temp){
    res.status(201).json(u);
  }
  else{
    res.status(500).json({message:"Error adding user"});
  }
})