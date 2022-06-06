const Storage=artifacts.require("Storage");

contract("Storage",async function(accounts){
    it("Runs",async()=>{
        const storage=await Storage.deployed();
        const address=await storage.address;
        console.log(address);
    })
})