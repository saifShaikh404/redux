import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../slice/bonusSlice'

function Bonus() {

    const bonus = useSelector((state) => state.bonus.points)
    const dispatch = useDispatch()

  return (
    <div className="container-amt" style={{marginTop: '50px'}}>
      <div className="main-heading">
        <h2>Total Bonus :- {bonus} </h2>
      </div>
      <div className="controllers">
        <button className="btns" onClick={() => dispatch(increment())}>Increment ++</button>  
      </div>
    </div>
  )
}

export default Bonus
