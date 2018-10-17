import React, { Component } from 'react';
import { connect } from 'react-redux';

class StocksItem extends Component{



    render(){
        const {stock} = this.props;


        console.log('{stock} getting it?', stock);
        // console.log('stock.date', stock.date);
        // console.log('stock.quantity', stock.quantity);
        // console.log('stock.symbol', stock.symbol);
        console.log('stock.currentP', stock.currentP);


        let currentPrice = stock.currentP;
        let averagePrice = stock.price / stock.quantity;
        let performance, colorText, performanceSymbol;
        
        if(averagePrice === currentPrice) {
            performance = 0;
        }

        if(averagePrice < currentPrice) {
            let increaseValue = currentPrice - averagePrice;
            performance = (increaseValue / averagePrice) * 100;
            colorText = '#02bc02'; //green up
            performanceSymbol = '↑';
        }

        else {
            let decreaseValue = averagePrice - currentPrice;
            performance = (decreaseValue / decreaseValue) * -100;
            colorText = 'red';
            performanceSymbol = '↓'
        }
        
        if(isNaN(performance)) {
            performance=0;
            colorText = '#2b2bc0';
            performanceSymbol = '→';
        }
        
        return(
            <tr scope="row">
                <td>{stock.symbol}</td>
                <td>{stock.quantity}</td>
                <td>{averagePrice}</td>
                <td>{stock.price}</td>
                <td style={{color: colorText}}>{performance}% {performanceSymbol}</td>
            </tr>
        );
    }
}

export default connect(null)(StocksItem);