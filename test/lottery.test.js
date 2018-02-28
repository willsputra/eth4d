var Lottery = artifacts.require("Lottery");

var accounts;
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

    it('allows people to contribute and check recipientValue', async () => {
        await lottery.enter({
            value: '1234',
            from: accounts[1]
        });

        const isPlayer = await lottery.recipientValue('1234').call();
        assert(isPlayer);
    });
});
