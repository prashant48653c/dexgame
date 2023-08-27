import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const feedslicer = createSlice({
  name: 'games',
  initialState:null,
  reducers: {
  
    setGames: (state, action) => {
    return action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setGames } = feedslicer.actions

export default feedslicer.reducer 