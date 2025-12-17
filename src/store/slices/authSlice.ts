import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * Backend'den gelen kullanıcı modeli
 */
export interface User {
  id: string;
  email: string;
  name?: string;
  surname?: string;
  username?: string;
  phoneNumber?: string;
  city?: string;
  district?: string;
  selectedName?: string;
}

/**
 * Auth slice state tipi
 */
interface AuthState {
  user: User | null;
}

/**
 * Initial state
 */
const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /**
     * Kullanıcıyı redux'a set eder
     */
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    /**
     * Kullanıcıyı çıkış yaptırır
     */
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
