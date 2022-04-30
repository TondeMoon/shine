import { createSlice } from '@reduxjs/toolkit'

export const housesArray = createSlice({
  name: 'house',
  initialState: { houses: [], status: null, error: null },
  reducers: {
    addHouses: (state, action) => action.payload,
  },
})

export default housesArray.reducer
export const { addHouses } = housesArray.actions
