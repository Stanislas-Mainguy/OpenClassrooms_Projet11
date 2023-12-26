import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
