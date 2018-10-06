import React, { Component } from 'react';
import { connect } from 'react-redux';

import StocksList from './StocksList'
import Spinner from '../common/Spinner';
import { getTransactions } from '../../actions/transactionActions';

class Stocks extends Component{
    componentDidMount(){
         this.props.getTransactions(this.props.auth.user.id);
    }
    
    render(){
        const {transactions, loading} = this.props.transactions;
        let dictionary = {};
        let transactionContent;
        let result = [];
        
        if(transactions === null || loading){
            transactionContent = <Spinner />;
        }
        else{

            console.log('this.props.transactions', this.props.transactions)
            for(var t of transactions) {
                if(!dictionary.hasOwnProperty(t.symbol)) {
                    dictionary[t.symbol] = t
                    dictionary[t.symbol] = t
                }
                else {
                    dictionary[t.symbol].price += t.price;
                    dictionary[t.symbol].quantity += t.quantity;
                }
            }

            
            for(var key of Object.keys(dictionary)) {
                if(key.length === 1) {
                    result.push(dictionary[key])
                }
            }

            transactionContent = <StocksList stocks={result} />;
        }
        
        return(
            <div>
                <h1>Your Stocks</h1>
                {transactionContent}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    transactions: state.transactions,
    auth: state.auth
});

export default connect(mapStateToProps, {getTransactions})(Stocks);