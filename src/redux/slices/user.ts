import { createSlice } from '@reduxjs/toolkit'

const initialState: { ChosenTheme: string; searchTerm: string } = {
  ChosenTheme: 'light',
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
      state.ChosenTheme = action.payload
    },
  },
})

export const { setSearchTerm, setTheme } = userSlice.actions
export default userSlice.reducer
