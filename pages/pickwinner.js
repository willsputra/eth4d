import { Component } from 'react'
import lotteryInstance from '../client/lib/lottery'
import PickWinnerForm from '../components/PickWinnerForm'


class PickWinner extends Component {

    render() {
        return (
        
        <div>
            <PickWinnerForm />
        </div>

        )}
}

export default PickWinner