const Storage=artifacts.require("Storage");

contract("Storage",async function(accounts){
    it("Runs",async()=>{
        const storage=await Storage.deployed();
        const address=await storage.address;
        console.log(address);

        const user={
            name:"Eeshan",
            email:"eeshanmattey@gmail.com"
        }
        // console.log(user)
        await storage.addUser(
            user,
            {from:accounts[1]}
        );
        const u=await storage.getUser.call(accounts[2])
        console.log(u[0])
        console.log(u[1])
    })
})