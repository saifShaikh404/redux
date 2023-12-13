import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { amount: 100 }


export const fetchUserById = createAsyncThunk(
  'amount/getUser',
  async (id, thunkAPI) => {
    const { data } = await axios.get(`http://localhost:8080/${id}`)
    console.log(data)
    return data.amount
  }
)



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
  extraReducers: (builder) => {
    builder.
        addCase(fetchUserById.fulfilled,(state, action) => {
            state.amount = action.payload
        })
  }
})

export const { increment, decrement, incrementByAmount } = amountSlice.actions
export default amountSlice.reducer