// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
contract Storage{
    address admin;
    struct user{
        string name;
        string email;
    }
    mapping (address=>user) public store;
    constructor(){
        admin=msg.sender;
        user memory u;
        
    }    
    event userAdded( user u );  

    function addUser(user memory details) public{
        store[msg.sender]=details;
        // emit userAdded(details);
    }
    
    function getUser(address add) public  returns (string memory,string memory){
        emit userAdded(store[msg.sender]);
        user memory u=store[add];
        return(u.name,u.email);
    }
}


