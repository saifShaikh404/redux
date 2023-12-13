import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import axios from 'axios';

const inc = "increment";
const dec = "decrement";
const incByAmt = "incrementByAmount";
const incAmt = "incByAmount";

const store = createStore(reducer, applyMiddleware(logger.default, thunk))

function reducer(state={amt:1}, action){

    switch(action.type){
        case incAmt:
            return {amt: state.amt + action.payload}
        case inc:
            return {amt: state.amt + 1}
        case dec:
            return {amt: state.amt - 1} 
        case incByAmt:
            return {amt: state.amt + action.payload}
        default:
            return state
    }

}

async function getData(dispatch, state){
    let {data} = await axios.get('http://localhost:8080/')
    let amount = data.salary[1].amount
    dispatch({type: incAmt, payload: amount})
}

function increment(){
    return {type: inc}
}

function decrement(){
    return {type: dec}
}

function incrementByAmount(value){
    return {type: incByAmt, payload: value}
}

setTimeout(() => {
    store.dispatch(getData);
}, 2000)