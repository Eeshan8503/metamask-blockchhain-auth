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
    }    
    function addUser(user memory details) public{
        store[msg.sender]=details;
    }
}


