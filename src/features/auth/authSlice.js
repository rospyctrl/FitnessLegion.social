import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate } from "react-router";

const initialState = {
  status: "idle",
  authToken: null,
  userId: null,
  error: "",
  currentRequestId: "",
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("auth/login", userData);
      localStorage.setItem("authToken", response.data.authToken);
      localStorage.setItem("userId", response.data.userId);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("auth/signup", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      localStorage.removeItem("authToken");
      localStorage.removeItem("userId");
      state.authToken = null;
      state.userId = null;
      state.error = "";
    },
    checkAuthState: (state) => {
      let authToken = localStorage.getItem("authToken");
      let userId = localStorage.getItem("userId");
      if (authToken && userId) {
        state.authToken = authToken;
        state.userId = userId;
      }
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.status = "loading";
    },
    [loginUser.fulfilled]: (state, { payload, meta }) => {
      if (meta.requestId !== state.currentRequestId.requestId) {
        state.status = "success";
        state.authToken = payload.authToken;
        state.userId = payload.userId;
        state.currentRequestId = "";
      }
    },
    [loginUser.rejected]: (state, { payload, meta }) => {
      if (meta.requestId !== state.currentRequestId) {
        state.status = "failed";
        state.error = payload.message;
        state.currentRequestId = meta.requestId;
      }
    },
  },
});

export const { logoutUser, checkAuthState } = authSlice.actions;

export default authSlice.reducer;
