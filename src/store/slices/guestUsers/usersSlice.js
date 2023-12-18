import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './actions/signIn';

export const usersSlice = createSlice({
  name: 'guestUsers',
  initialState: {
    token: null,
    isAuthenticated: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload.body.token;
        localStorage.setItem('token', action.payload.body.token);
      })
      .addCase(loginUser.rejected, (state, action) => { 
        state.error = action.payload;
      });
  }
});

export default usersSlice.reducer;
