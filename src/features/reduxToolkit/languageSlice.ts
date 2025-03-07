import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface LanguageState {
    LanguageInfo: {
        language: string
    }
}

const initialState: LanguageState = {
    LanguageInfo: {
        language: ""
    }
}

export const languageSlice = createSlice({
    name: 'languageInfo',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<string>) => {
            state.LanguageInfo.language = action.payload
        }
    }
})

export const { setLanguage } = languageSlice.actions
export default languageSlice.reducer
