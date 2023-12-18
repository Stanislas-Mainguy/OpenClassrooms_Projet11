import { createSlice } from '@reduxjs/toolkit';
import { fetchUserProfile, fetchUserNameEditProfile, signOut } from './actions';
import { authData } from './data/authData';

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

export const { signOut, toggleEdit } = authSlice.actions;
export default authSlice.reducer;
