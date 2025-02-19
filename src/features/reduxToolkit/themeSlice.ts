import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ThemeState {
    ThemeInfo: {
        theme: string
    }
}

const initialState: ThemeState = {
    ThemeInfo: {
        theme: "light"
    }
}

export const themeSlice = createSlice({
    name: 'themeInfo',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<string>) => {
            state.ThemeInfo.theme = action.payload
        }
    }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
