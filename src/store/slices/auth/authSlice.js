import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './actions/signIn';
import { fetchUserNameEditProfile } from './actions/fetchUserNameEditProfile';
import { fetchUserProfile } from './actions/fetchUserProfile';
import { authData } from './authData/authData';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: null,
    user: null,
    isEditing: false,
    accounts: authData.accounts,
  },
  reducers: {
    signOut: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      state.isEditing = false;
    },
    toggleEdit: (state) => {
      state.isEditing = !state.isEditing;
    },
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
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        localStorage.setItem('userInfos', action.payload.body);
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchUserNameEditProfile.fulfilled, (state, action) => {
        state.user = {...state.user, ...action.payload};
      })
      .addCase(fetchUserNameEditProfile.rejected, (state, action) => {
        state.error = action.payload;
      });
  }
});

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectToken = (state) => state.auth.token;
export const selectUser = (state) => state.auth.user;
export const selectIsEditing = (state) => state.auth.isEditing;
export const selectAccounts = (state) => state.auth.accounts;
export { fetchUserNameEditProfile, fetchUserProfile, loginUser };
export const { signOut, toggleEdit } = authSlice.actions;
export default authSlice.reducer;
