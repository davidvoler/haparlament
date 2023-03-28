import { configureStore } from '@reduxjs/toolkit'
import chatSlice from '../features/chat/chatSlice'
import matchSlice from '../features/match/matchSlice'


export const store = configureStore({
  reducer: {
    chat: chatSlice,
    match: matchSlice
  }
})