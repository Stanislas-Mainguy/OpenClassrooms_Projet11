import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import SectionAccountData from './SectionAccountData.json';
import SectionFeaturesData from './SectionFeaturesData.json';

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
            console.error("Error Response: ", error.response);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const fetchUserProfile = createAsyncThunk(
  'auth/fetchUserProfile',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data.body;
    } catch (error) {
      console.error("Error Response: ", error.response);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchUserNameEditProfile = createAsyncThunk(
  'auth/fetchUserNameEditProfile',
  async (userData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const response = await axios.put('http://localhost:3001/api/v1/user/profile', userData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data.body;
    } catch (error) {
      console.error("Error Response: ", error.response);
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
    isEditing: false,
    accounts: SectionAccountData,
    features: SectionFeaturesData,
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

export const selectFeatures = state => state.auth.features;
export const selectAccountData = state => state.auth.accounts;
export const selectToken = state => state.auth.token;
export const selectUser = state => state.auth.user;
export const selectIsEditing = state => state.auth.isEditing;
export const { signOut, toggleEdit } = authSlice.actions;
export default authSlice.reducer;
