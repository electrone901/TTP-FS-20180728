import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTransactions } from '../../actions/transactionActions';
import TransactionsList from './TransactionsList';

class Transactions extends Component{
    componentDidMount(){
         this.props.getTransactions();
    }
    
    render(){
        const {transactions, loading} = this.props.transactions;
        let transactionContent;
        
        if(transactions === null || loading){
            transactionContent = <p>loading</p>;
        }
        else{
            transactionContent = <TransactionsList transactions={transactions} />;
        }
        
        return(
            <div>
                <h1>Your Transactions</h1>
                {transactionContent}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    transactions: state.transactions,
    auth: state.auth
});

export default connect(mapStateToProps, {getTransactions})(Transactions);