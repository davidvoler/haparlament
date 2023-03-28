import { createSlice } from '@reduxjs/toolkit'

const chatSlice = createSlice({
  name: 'chat',
  initialState: [],
  reducers: {
    chatAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    },
    chatToggled(state, action) {
      const chat = state.find(chat => chat.id === action.payload)
      chat.completed = !chat.completed
    }
  }
})

export const { chatAdded, chatToggled } = chatSlice.actions
export default chatSlice.reducer