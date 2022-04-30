/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createSlice } from '@reduxjs/toolkit'

export const daysArray = createSlice({
  name: 'times',
  initialState: { times: [] },
  reducers: {
    // @ts-ignore
    addBookings: (state, action) => {
      state.times = state.times.concat(action.payload)
      localStorage.setItem('bks', JSON.stringify(state.times))
    },
    updateBookings: (state, action) => {
      state.times = action.payload
      localStorage.setItem('bks', JSON.stringify(state.times))
    },
    checkBookingsStorage: (state, action) => {
      state.times = action.payload
    },
  },
})

export default daysArray.reducer
export const { addBookings, updateBookings, checkBookingsStorage } = daysArray.actions
