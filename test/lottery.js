var Lottery = artifacts.require("Lottery");

let accounts;
let lottery;

beforeEach(async () => {
    accounts = await web3.eth.accounts;
    lottery = await Lottery.deployed();
});

contract('Lottery', () => {
    it('deploys a lottery', () => {
        assert.ok(lottery.address);
    });

    it('marks caller as the lottery manager', async () => {
        const manager = await lottery.manager.call();
        assert.equal(accounts[0], manager);
    });
});
