import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'games',
  initialState:[],
  reducers: {
  
    setGames: (state, action) => {
      return action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setGames } = counterSlice.actions

export default counterSlice.reducer 