// import artifacts from "truffle"
const  Web3  = require("web3");
const address = '0xF0b11AB06788fB611476E31Bb2287754f0231fDA';
const privateKey = '5415fc212e1f08712260fab2d2a140a0cbe3b8200aedad97b502f98379b9fbc3';
const contract=require("./../../build/contracts/Storage.json")
const {catchAsync}=require("./../Util/catchAsync");
const {isValid}=require("./developerController");
const user={
    name:"gajoddsdsahar",
    email:"dsadsa@yahoo.com"
}
const init1=async()=>{
    const web3=new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
    const networkId = await web3.eth.net.getId();
    const myContract = new web3.eth.Contract(
        contract.abi,
        contract.networks[networkId].address
      );
    web3.eth.accounts.wallet.add(privateKey);
    await myContract.methods.addUser(user).send({from:'0x5EBeA2480Bb1E68CF7830b49Ae15c4D45328dE1E'});
    const u=await myContract.methods.getUser('0x5EBeA2480Bb1E68CF7830b49Ae15c4D45328dE1E').call()
    console.log(u)
  //const receipt = await web3.eth.sendTransaction(txData);
//   console.log(`Transaction hash: ${receipt.transactionHash}`);  
}
init1()