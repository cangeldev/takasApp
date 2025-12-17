import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/themeSlice'
import languageReducer from './slices/languageSlice'
import userInfoReducer from './slices/userSlice'
import authReducer from "./slices/authSlice"

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        language: languageReducer,
        userInfo: userInfoReducer,
        auth: authReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
