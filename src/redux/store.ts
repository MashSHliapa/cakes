import { configureStore } from '@reduxjs/toolkit'
import { cakesReducer } from './cakesSlice'
import { fillingsReducer } from './fillingsSlice'

export const store = configureStore({
  reducer: {
    cakes: cakesReducer,
    fillings: fillingsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
