import { createSlice } from '@reduxjs/toolkit'

const initialState: { themeType: string; searchTerm: string } = {
  themeType: 'light',
  searchTerm: '',
}

const userSlice = createSlice({
  name: 'user',

  initialState,

  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    setTheme: (state, action) => {
      state.themeType = action.payload
    },
  },
})

export const { setSearchTerm, setTheme } = userSlice.actions
export default userSlice.reducer
