import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserInfo } from 'utils/types'

const initialState: UserInfo = {
    email: '',
    password: '',
    username: '',
    name: '',
    surname: '',
    phoneNumber: '',
    city: '',
    district: '',
    profileImage: ''
}

export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<Partial<UserInfo>>) => {
            Object.assign(state, action.payload)
        }
    }
})

export const { setUserInfo } = userInfoSlice.actions
export default userInfoSlice.reducer
