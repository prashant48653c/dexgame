import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const authslicer = createSlice({
  name: 'auths',
  initialState:{
  
    userData:null,
   
    
  },
  reducers: {

    setUserData:(state,actions)=>{
      state.userData=actions.payload
    }

  },
})

// Action creators are generated for each case reducer function
export const { setUserData } = authslicer.actions

export default authslicer.reducer 