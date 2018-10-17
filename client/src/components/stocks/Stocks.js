import React, { Component } from 'react';
import { connect } from 'react-redux';

import StocksList from './StocksList'
import Spinner from '../common/Spinner';
import { getStockPrice } from '../../actions/stockActions';
var request = require('request-promise');


class Stocks extends Component{
    componentDidMount(){
         this.props.getStockPrice(this.props.auth.user.id);
    }
    
    render(){
        let {stockPrice, loading} = this.props.stockPrice;
        let transactionContent;

        if(stockPrice === null || loading){
            transactionContent = <Spinner />;
        }
        else {
            transactionContent = <StocksList stocks={stockPrice} />;
        }

        
        return(
            <div>
                <h1>Your Stocks</h1>
                {transactionContent}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        stockPrice: state.stocks,
        auth: state.auth
    }
};




export default connect(mapStateToProps, {getStockPrice})(Stocks);

