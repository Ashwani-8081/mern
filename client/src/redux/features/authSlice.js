import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import * as api from "../api";



export const login = createAsyncThunk(
    "auth/login",
    async ({ formValue, navigate, toast },{rejectWithValue}) => {
      try {
        const response = await api.signIn(formValue);
        toast.success("Login Successfully");
        navigate("/");
        return response.data;
      } catch (err) {
          return rejectWithValue(err.response.data);
      }
    }
  );

export const register = createAsyncThunk(
    "auth/register",
    async ({ formValue, navigate, toast }, { rejectWithValue }) => {
      try {
        const response = await api.signUp(formValue);
        toast.success("Register Successfully");
        navigate("/");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );



  export const googleSignIn = createAsyncThunk(
    "auth/googleSignIn",
    async ({ result, navigate, toast }, { rejectWithValue }) => {
      try {
        const response = await api.googleSignIn(result);
        toast.success("Google Sign-in Successfully");
        navigate("/");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );










  const authSlice = createSlice({
    name: "auth",
    initialState: {
      user: null,
      error: "",
      loading: false,
    },
    reducers: {
      setUser: (state, action) => {
        state.user = action.payload;
      },
      setLogout: (state) => {
        localStorage.clear();
        state.user = null;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(login.pending, (state) => {
          state.loading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
          state.loading = false;
          localStorage.setItem("profile", JSON.stringify(action.payload || {}));
          state.user = action.payload || null;
        })
        .addCase(login.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload?.message || "Failed to log in";
        })
        .addCase(register.pending, (state) => {
          state.loading = true;
        })
        .addCase(register.fulfilled, (state, action) => {
          state.loading = false;
          localStorage.setItem("profile", JSON.stringify(action.payload || {}));
          state.user = action.payload || null;
        })
        .addCase(register.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload?.message || "Failed to register";
        })
        .addCase(googleSignIn.pending, (state) => {
          state.loading = true;
        })
        .addCase(googleSignIn.fulfilled, (state, action) => {
          state.loading = false;
          localStorage.setItem("profile", JSON.stringify(action.payload || {}));
          state.user = action.payload || null;
        })
        .addCase(googleSignIn.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload?.message || "Failed to sign in with Google";
        });
    },
  });
  
    export const { setUser, setLogout } = authSlice.actions;
    export default authSlice.reducer;