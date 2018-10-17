import React, { Component } from 'react';
import TransactionsItem from './TransactionsItem';

class TransactionsList extends Component{
    render(){
        const {transactions} = this.props;
        console.log('trasactions', transactions);
        
        return transactions.map(transaction => <TransactionsItem key={transaction._id} transaction={transaction} />);
    }
}

export default TransactionsList;