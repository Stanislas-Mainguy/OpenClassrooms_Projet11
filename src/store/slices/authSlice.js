import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:3001/api/v1/user/login', {
                email,
                password
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: null,
    user: null,
  },
  reducers: {
    signOut: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem('token', action.payload.token);
    },
    [loginUser.rejected]: (state, action) => {
      state.error = action.payload;
    },
  }
});

export const { signOut } = authSlice.actions;
export default authSlice.reducer;
