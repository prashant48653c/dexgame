

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import gameReducer from '../slices/feedslicer'
import downloaderReducer from '../slices/downloaderslicer'
 


const rootReducer = combineReducers({
  downloaders: downloaderReducer, // Add each reducer slice here
  games: gameReducer,
  // Add more reducer slices as needed
});
export const store = configureStore({
  reducer: rootReducer,
  
  
})