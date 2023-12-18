import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './actions/loginUser';

export const usersSlice = createSlice({
  name: 'randomUsers',
  initialState: {
    isAut
  }
  reducers: 
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
      })
      .addCase(loginUser.rejected, (state, action) => { 
      });
  }
});

export default usersSlice.reducer;
