import web3 from './getWeb3';
import Lottery from '../../build/contracts/Lottery.json';


const contract = require('truffle-contract')
const lottery = contract(Lottery)
lottery.setProvider(web3.currentProvider)

const lotteryInstance = lottery.at('0x8d08ef724dfba934380dfbefeb856927bedaa144')

export default lotteryInstance
