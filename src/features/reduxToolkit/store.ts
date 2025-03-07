import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import languageReducer from './languageSlice'

export const store = configureStore({
    reducer: {
        themes: themeReducer,
        languages: languageReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
