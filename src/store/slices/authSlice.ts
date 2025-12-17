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
    }
  }
})
export const { setUser, logout, updateSelectedName } = authSlice.actions
export default authSlice.reducer
