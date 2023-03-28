import { createSlice } from '@reduxjs/toolkit'

const matchSlice = createSlice({
  name: 'match',
  initialState: [],
  reducers: {
    matchAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    },
    matchToggled(state, action) {
      const match = state.find(match => match.id === action.payload)
      match.completed = !match.completed
    }
  }
})

export const { matchAdded, matchToggled } = matchSlice.actions
export default matchSlice.reducer