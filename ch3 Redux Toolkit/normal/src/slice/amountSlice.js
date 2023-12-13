import { createSlice } from '@reduxjs/toolkit'

const initialState = { amount: 100 }

const amountSlice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    increment(state) {
      state.amount++
    },
    decrement(state) {
      state.amount--
    },
    incrementByAmount(state, action) {
      state.amount += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = amountSlice.actions
export default amountSlice.reducer