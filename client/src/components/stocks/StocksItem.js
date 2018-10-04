import React, { Component } from 'react';
import { connect } from 'react-redux';

class StocksItem extends Component{


    render(){
        // let obj = {};
        // let symbol = this.props.stock.symbol;

        // if (obj.hasOwnProperty(symbol)) {
        //     obj[obj[symbol]]++;
        // }
        // else {
        //    obj[symbol] = 1; 
        // }



        // console.log('obj',obj)


        // console.log('this.props', this.props)
        // console.log('this.props.quantity', this.props.stock.quantity)
        // console.log('this.props.symbol', this.props.stock.symbol)
        // console.log('all obj',obj)

        const {stock} = this.props;
        
        
        return(
            <div className="card card bg-light text-dark mb-1 p-2">
                <div className="row">
                    
                    <div className="col-md-2">
                        <h5 className="d-inline">{stock.symbol}</h5>
                    </div>
                   
                    <div className="col-md-2">
                        <p className="d-inline">Stocks - {stock.quantity}</p>
                    </div>

                    <div className="col-md-2">
                        <h5 className="d-inline">avg {stock.symbol}</h5>
                    </div>

                    <div className="col-md-2">
                        <h5 className="d-inline">currentPrice: {stock.symbol}</h5>
                    </div>

                    <div className="col-md-2">
                        <h5 className="d-inline">Performace {stock.symbol}</h5>
                    </div>

                </div>
            </div>
        );
    }
}

export default connect(null)(StocksItem);