import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../reducer/salaryReducer'

function Salary() {

    const salary = useSelector((state) => state.salary.salary)
    const dispatch = useDispatch()

  return (
    <div className="container-amt" style={{marginTop: '50px'}}>
      <div className="main-heading">
        <h2>Total Salary :- {salary} </h2>
      </div>
      <div className="controllers">
        <button className="btns" onClick={() => dispatch(increment())}>Increment ++</button>  
        <button className="btns" onClick={() => dispatch(decrement())}>Increment ++</button>  
      </div>
    </div>
  )
}

export default Salary
