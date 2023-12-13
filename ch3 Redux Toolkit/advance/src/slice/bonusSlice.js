import { createSlice, createAction } from '@reduxjs/toolkit'

const initialState = { points: 10 }

const incByAmt = createAction('amount/incrementByAmount')

const bonusSlice = createSlice({
  name: 'bonus',
  initialState,
  reducers: {
    increment(state) {
      state.points++
    },
  },
  extraReducers: (builder) => {
    builder.
          addCase(incByAmt, (state, action) => {
            if(action.payload > 100){
              state.points ++
            }
          })
  }
})

export const { increment } = bonusSlice.actions
export default bonusSlice.reducer