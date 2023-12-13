import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

const inc = "increment";
const dec = "decrement";
const incByAmt = "incrementByAmount";

const store = createStore(reducer, applyMiddleware(logger.default))

function reducer(state={amt:1}, action){
    if(action.type === inc){
        return {amt: state.amt + 1} // make state immutable means always create and return new state value rather than modify old one
    } else if(action.type === dec){
        return {amt: state.amt - 1} 
    } else if(action.type === incByAmt){
        return {amt: state.amt + action.payload} 
    } else {
        return state
    }
}

// store.subscribe(() => {
//     console.log(store.getState())
// })

function increment(){
    return {type: inc}
}
function decrement(){
    return {type: dec}
}
function incrementByAmount(value){
    return {type: incByAmt, payload: value}
}

setInterval(() => {
    // store.dispatch(increment());
    store.dispatch(incrementByAmount(20));
}, 2000)