/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-named-as-default */
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import daysArray from './selectedDays'

const rootReducer = combineReducers({
  times: daysArray,
})

export default configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
})
