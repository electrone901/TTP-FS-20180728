import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

class StocksItem extends Component{


    render(){
        

        const {stock} = this.props;
        let currentPrice = stock.price
        let averagePrice = stock.price / stock.quantity;
        let performance;
        
        if(averagePrice == currentPrice) {
            performance = 0;
        }

        if(averagePrice < currentPrice) {
            let increaseValue = currentPrice - averagePrice;
            performance = (increaseValue / averagePrice) * 100;
        }

        else {
            let decreaseValue = averagePrice - currentPrice;
            performance = (decreaseValue / decreaseValue) * -100;
        }
        
        if(isNaN(performance)) {
            performance=0;
        }
        
        return(
            <tr scope="row">
                <td>{stock.symbol}</td>
                <td>{stock.quantity}</td>
                <td>{averagePrice}</td>
                <td style={{color:'red'}}>{stock.price}</td>
                <td>{performance}%</td>
            </tr>
        );
    }
}

export default connect(null)(StocksItem);