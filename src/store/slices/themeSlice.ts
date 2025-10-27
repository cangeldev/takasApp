import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Theme } from 'utils/types'

export interface ThemeState {
  theme: Theme
}

const initialState: ThemeState = { theme: "light" }
export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload
    }
  }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
