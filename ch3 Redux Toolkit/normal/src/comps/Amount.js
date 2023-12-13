import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../slice/amountSlice';

function Amount() {

    const amount = useSelector((state) => state.amount.amount)
    const dispatch = useDispatch()

    const [value, setValue] = useState(null)

    function getValue(e){
        setValue(+e.target.value)
    }

  return (
    <div className="container-amt">
      <div className="main-heading">
        <h2>Total Amount :- {amount} </h2>
      </div>
      <div className="controllers">
        <button className="btns" onClick={() => dispatch(increment())}>Increment ++</button>
        <button className="btns" onClick={() => dispatch(decrement())}>Decrement --</button>
        <input type="text" onChange={getValue} placeholder="Enter Amount" />
        <button className="btns" onClick={() => dispatch(incrementByAmount(value))}>Increment by : {value} </button>
      </div>
    </div>
  )
}

export default Amount
