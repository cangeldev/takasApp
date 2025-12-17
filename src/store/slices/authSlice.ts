import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * Backend'den gelen kullanıcı modeli
 */
export interface User {
  id: number;
  email: string;
  name?: string;
  surname?: string;
  username?: string;
  selectedNameType: 'FULL_NAME' | 'USERNAME';
  description: string
}

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    updateSelectedName: (
      state,
      action: PayloadAction<{
        selectedNameType: 'FULL_NAME' | 'USERNAME';
      }>
    ) => {
      if (state.user) {
        state.user.selectedNameType = action.payload.selectedNameType;
      }
    },
    updateDescription: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.description = action.payload
      }
    }
  }
})
export const { setUser, logout, updateSelectedName ,updateDescription} = authSlice.actions
export default authSlice.reducer
