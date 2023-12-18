import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './actions/loginUser';

export const usersSlice = createSlice({
  name: 'randomUsers',
  initialState: {
    isAut
  }
  reducers: {
    // Ajoutez ici les reducers spécifiques aux utilisateurs non authentifiés
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        // Traitez l'action loginUser fulfilled ici
      })
      .addCase(loginUser.rejected, (state, action) => {
        // Traitez l'action loginUser rejected ici
      });
  }
});

export default usersSlice.reducer;
