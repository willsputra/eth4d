import { Component } from 'react'
import web3 from '../client/lib/getWeb3'
import lotteryInstance from '../client/lib/lottery'

class PickWinnerForm extends Component {
    state = {
        value: '',
        errorMessage: '',
        loading: ''
    }

    onSubmit = async event => {
        event.preventDefault();

        this.setState({ loading: 'Loading...', errorMessage: ''})

        try {

            const accounts = await web3.eth.getAccounts()
            await lotteryInstance.pickWinner(this.state.value, {
                from: accounts[0]
            })} catch (err) {
                this.setState({ errorMessage: err.message })
            }

        this.setState({ loading: '', value: '' })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} error={!!this.errorMessage}>
                <input
                    type='text'
                    value={this.state.value}
                    onChange={event => this.setState({ value: event.target.value })}
                />
                <input type='submit' value='Submit'/>
                <p>{this.state.loading}</p>
            </form>
        )
    }
}

export default PickWinnerForm