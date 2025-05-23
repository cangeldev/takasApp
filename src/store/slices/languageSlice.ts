import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: { language: string } = { language: "" }

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload
    }
  }
})

export const { setLanguage } = languageSlice.actions
export default languageSlice.reducer
