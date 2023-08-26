import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const downloaderslicer = createSlice({
  name: 'downloaders',
  initialState:{
    screenshot:null,
    details:null,
   
    
  },
  reducers: {
  
    setScreenshot: (state, action) => {
      state.screenshot= action.payload
    },
    setDetails:(state,action)=>{
  state.details= action.payload
    },
  
    
  },
})

// Action creators are generated for each case reducer function
export const { setScreenshot , setDetails , setsimilar } = downloaderslicer.actions

export default downloaderslicer.reducer 