import axios from '../axios-stocks';
import { GET_STOCKS, STOCK_LOADING, GET_STOCKPRICE } from './types';
var request = require('request-promise');

export const getStocks = (id) => dispatch => {
    dispatch(setStockLoading());
    axios.get(`/api/stocks/all/${id}`)
        .then(res =>
            dispatch({
                type: GET_STOCKS,
                payload: res.data
            })
        )
        .catch(err => 
            dispatch({
                type: GET_STOCKS,
                payload: {}
            })
        );
};


export const getStockPrice = (id) => dispatch => {

    axios.get(`/api/transactions/all/${id}`)
        
        .then(res =>{
            let transactions = res.data;
            let symbolForAPI = '';
            let dictionary = {};
            let result = [];

            // combine same symbols and add price
            for(var t of transactions) {
                if(!dictionary.hasOwnProperty(t.symbol)) {
                    dictionary[t.symbol] = t;
                }
                else {
                    dictionary[t.symbol].price += t.price;
                    dictionary[t.symbol].quantity += t.quantity;
                }
            }

            for(var key of Object.keys(dictionary)) {
                if(key.length === 1) {
                    symbolForAPI += key + ',';
                }
            }

            // api call gets current prices
            var options = {
                method: "GET",
                uri: "https://api.iextrading.com/1.0/tops?symbols="+symbolForAPI,
                json: true,
            };
            request(options)

            .then((response) => {

                // adds current price to each symbol
                for(var r of response) {
                    var currentP = r.lastSalePrice;
                    for(var key of Object.keys(dictionary)) {
                        if(r.symbol === key) {
                          dictionary[key].currentP = currentP;
                        }
                    }
                }
            })

            for(var key of Object.keys(dictionary)) {
                if(key.length === 1) {
                    result.push(dictionary[key]);
                }
            }
            

            dispatch({
                type: GET_STOCKPRICE,
                payload: result
            })
        })
        .catch(err => 
            dispatch({
                type: GET_STOCKPRICE,
                payload: err
            })
        );
};

export const setStockLoading = () => {
    return{
        type: STOCK_LOADING
    };
};



