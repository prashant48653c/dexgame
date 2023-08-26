

import { configureStore } from '@reduxjs/toolkit'
import gameReducer from '../slices/feedslicer'
import downloaderReducer from '../slices/downloaderslicer'

export const store = configureStore({
  reducer: {
    games:gameReducer,
    downloaders:downloaderReducer

  },
})