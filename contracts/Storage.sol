// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
contract Storage{
    address admin;
    struct user{
        string name;
        string email;
        bool exists;
    }
    mapping (address=>user) public store;
    constructor(){
        admin=msg.sender;        
    }    
    event userAdded( user);  

    function addUser(user memory details) public{
        require(store[msg.sender].exists==false,"User already exists");
        store[msg.sender]=details;
        store[msg.sender].exists=true;
        emit userAdded(details);
    }
    
    function getUser(address add) public  returns (string memory,string memory){
        emit userAdded(store[msg.sender]);
        user memory u=store[add];
        return(u.name,u.email);
    }
}