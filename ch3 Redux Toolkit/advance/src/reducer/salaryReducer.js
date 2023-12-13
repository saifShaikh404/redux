import { createAction, createReducer } from '@reduxjs/toolkit'

export const increment = createAction('salary/increment')
export const decrement = createAction('salary/decrement')

const initialState = { salary: 50 }

const salaryReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.salary++
    })
    .addCase(decrement, (state, action) => {
      state.salary--
    })
})

export default salaryReducer