

import { configureStore } from '@reduxjs/toolkit'
import gameReducer from '../slices/feedslicer'

export const store = configureStore({
  reducer: {
    games:gameReducer,

  },
})