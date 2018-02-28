import { Component } from 'react'
import lotteryInstance from '../client/lib/lottery'
import EnterForm from '../components/EnterForm'

class LotteryIndex extends Component {

    constructor(props) {
        super(props)

        this.state = {
            totalBalance: 0,
            manager: '',
        }
    }

    async componentDidMount() {

        const totalBalance = await lotteryInstance.totalBalance()
        const manager = await lotteryInstance.manager()
        console.log(lotteryInstance)
        console.log(totalBalance)

        this.setState({
            totalBalance: totalBalance.c[0],
            manager: manager,
        })
    }

    render() {
        return (
        
        <div>
            <p>{this.state.totalBalance}</p>
            <p>{this.state.manager}</p>
            <EnterForm />
        </div>

        )}
}

export default LotteryIndex