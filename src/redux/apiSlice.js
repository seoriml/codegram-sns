import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const executeRequest = createAsyncThunk(
  "api/executeRequest",
  async ({ url, method, body, contentType, token }, { rejectWithValue }) => {
    try {
      const options = {
        method,
        headers: {
          "content-Type": contentType || "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      };
      if (body) {
        options.body = JSON.stringify(body);
      }
      // console.log(options);
      const response = await fetch(url, options);
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error.! status: ${response.status}`);
      }
      const result = await response.json();

      console.log(result);
      return result;
    } catch (error) {
      console.error("API 요청 중 에러 발생:", error);
      return rejectWithValue(error.message || "An error occurred");
    }
  }
);

const apiSlice = createSlice({
  name: "api",
  initialState: {
    data: null,
    token: localStorage.getItem("userToken"),
    isLoggedIn: !!localStorage.getItem("userToken"),
    loading: false,
    error: null,
    loginData: null,
    myInfoData: null,
    postFollow: null,
    postUnFollow: null,
    userSearch: null,
    feed: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      state.isLoggedIn = true;
      localStorage.setItem("userToken", action.payload.token);
    },
    logout: (state) => {
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem("userToken");
    },
    // ex) dispatch(setMyInfoData(result.payload.user))
    // 프로필 수정창에 들어갔을때 myInfoData에서 데이터 불러오면 된다
    setMyInfoData: (state, action) => {
      state.myInfoData = action.payload;
    },
    // ex) dispatch(setPostFollow(result.payload.profile))
    setPostFollow: (state, action) => {
      state.postFollow = action.payload;
    },
    // ex) dispatch(setPostUnFollow(result.payload.profile))
    setPostUnFollow: (state, action) => {
      state.postUnFollow = action.payload;
    },
    // ex) dispatch(setUserSearch(result.payload))
    setUserSearch: (state, action) => {
      state.userSearch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(executeRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(executeRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        if (action.payload?.user?.token) {
          state.loginData = action.payload.user;
        }
      })
      .addCase(executeRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setCredentials, logout } = apiSlice.actions;
export default apiSlice.reducer;

// export const selectCurrentToken = (state) => state.auth.token;
// export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
