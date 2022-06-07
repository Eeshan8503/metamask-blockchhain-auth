const Storage=artifacts.require("Storage");

contract("Storage",async function(accounts){
    it("Runs",async()=>{
        const storage=await Storage.deployed();
        const address=await storage.address;
        console.log(address);

        const user={
            name:"gajodahssaar",
            email:"dsadsa@yahoo.com"
        }
        // console.log(user)
        await storage.addUser(
            user,
            {from:accounts[3]}
        );
        const u=await storage.getUser.call(accounts[3])
        console.log(u[0])
        console.log(u[1])
    })
})