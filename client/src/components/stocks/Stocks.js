import React, { Component } from 'react';
import { connect } from 'react-redux';

import StocksList from './StocksList';
import Spinner from '../common/Spinner';
import { getStocks } from '../../actions/stockActions';

class Stocks extends Component{
    componentDidMount(){
         this.props.getStocks(this.props.auth.user.id);
    }
    
    render(){


        
        // let symbol = this.props.stock.symbol;

        // if (obj.hasOwnProperty(symbol)) {
        //     obj[obj[symbol]]++;
        // }
        // else {
        //    obj[symbol] = 1; 
        // }



        



        const {stocks, loading} = this.props.stocks;

        console.log('stocks',stocks)
        let stockContent;
        
        if(stocks === null || loading){
            stockContent = <Spinner />;
        }
        else{
            stockContent = <StocksList stocks={stocks} />;
            
            {   
                let obj = {};

                stocks.forEach(function (obj) {
                    Object.keys(obj).forEach(function (k) {
                        if(k === 'symbol') {
                            let symbol = obj[k];
                            console.log('symbol Var', symbol)
                           console.log(k, obj[k]); // show key and value
                           console.log(obj.hasOwnProperty(symbol))
                           if(obj.hasOwnProperty(symbol)) {
                            obj[obj[symbol]]++;
                           } 
                           else {
                            obj[symbol] = 1;
                           }
                        }
                        
                    });
                });
                console.log('my obj', obj);



                // stocks.forEach(function (o) {
                //     Object.keys(o).forEach(function (k) {
                //         if(k.symbol) {}
                //        obj[k]sole.log(k, o[k]); // show key and value
                //     });
                // });


                // stocks.forEach(function (o) {
                //     let currentObj = Object.keys(o);
                //     currentObj.forEach(function(ele) {


                //            console.log(ele, currentObj[o])
                            

                //         // console.log('should symbol : ',ele);
                //     })


                //     // Object.keys(o).forEach(function (k) {
                //     //     // console.log(k, o[k]); // show key and value
                //     //     // if(k.symbol) {
                //     //         console.log(k);
                //     //     // }
                //     // });
                // });


// stocks.forEach(function (o) {
//     Object.keys(o).forEach(function (k) {
//         console.log(k, o[k]); // show key and value
//     });
// });


// let symbol = k.symbol;
//                         console.log('symbol',symbol)
//                         if (obj.hasOwnProperty(symbol)) {
//                             obj[obj[symbol]] +1;
//                         }
//                         else {
//                             obj[symbol] = 1; 
//                         }


                // for(let i=0; i< stocks.length; i++) {
                //     let symbol = stocks.symbol;
                //     console.log('stocks',stocks.symbol)

                //     if (obj.hasOwnProperty(symbol)) {
                //     obj[obj[symbol]] +1;
                //     }
                //     else {
                //     obj[symbol] = 1; 
                //     }

                // }
                
                // console.log('result obj',obj)
            }

        }
        
        return(
            <div>
                <h1>Your Stocks</h1>
                {stockContent}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    stocks: state.stocks,
    auth: state.auth
});

export default connect(mapStateToProps, {getStocks})(Stocks);