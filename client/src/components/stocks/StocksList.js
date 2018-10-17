import React, { Component } from 'react';
import StocksItem from './StocksItem';
 class StocksList extends Component{
    render(){
        const {stocks} = this.props;
    	return (
    		<table className="table table-striped">
	    		<thead>
	        		<tr>
		                <th scope="col">Symbol</th>
		                <th scope="col">Numb of stocks</th>
		                <th scope="col">Bought @</th>
		                <th scope="col">Current price</th>
		                <th scope="col">Performance</th>
		            </tr>
	            </thead>
	            <tbody>
	            	{	
	            		stocks ? stocks.map(stock => <StocksItem key={stock._id} stock={stock} />) : <h1>Loading</h1>
	            	}
	            </tbody>
	    	</table>
    	);
    }
}
 export default StocksList;