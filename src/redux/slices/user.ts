import { createSlice } from '@reduxjs/toolkit'

const initialState: { ChosenTheme: string; searchTerm: string } = {
  ChosenTheme: 'light',
  searchTerm: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    handleSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    handleTheme: (state, action) => {
      state.ChosenTheme = action.payload
    },
  },
})

export const { handleSearchTerm, handleTheme } = userSlice.actions
export default userSlice.reducer
