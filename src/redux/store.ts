import { configureStore } from '@reduxjs/toolkit'
import { cakesReducer } from './cakesSlice'

export const store = configureStore({
  reducer: {
    cakes: cakesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
