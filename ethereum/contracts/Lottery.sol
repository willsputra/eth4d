pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    struct Player {
        address recipient;
        uint value;
    }
    Player[] public players;
    
    mapping(uint => address[]) recipientValue;

    function Lottery() public {
        manager = msg.sender;
    }
    
    function enter() public payable {
        Player memory newPlayer = Player({
            recipient: msg.sender,
            value: msg.value
        });
        
        players.push(newPlayer);
        
        recipientValue[msg.value].push(msg.sender);
    }
    
    function winnerAddress(uint index) public view returns (address[]) {
        return recipientValue[index];
    }
    
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
}