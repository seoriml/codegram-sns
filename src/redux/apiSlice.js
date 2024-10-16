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
    loginData: null, // 로그인하면 저장되는 데이터, 프로필 수정창 들어갈때 여기서 값 받아서 사용하면된다.
    feedData: null, // home 화면에 뜨는 전체 피드 데이터
    profileData: null, // 사용자 프로필 데이터
    feedByUser: null, // 사용자별 피드 데이터
    codeByUser: null, // 사용자별 코드 데이터
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
    setFeedData: (state, action) => {
      state.feedData = action.payload;
    },
    setProfile: (state, action) => {
      state.profileData = action.payload;
    },
    setFeedByUser: (state, action) => {
      state.feedByUser = action.payload;
    },
    setCodeByUser: (state, action) => {
      state.codeByUser = action.payload;
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
          state.profileData = action.payload.user;
        }
      })
      .addCase(executeRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setCredentials,
  logout,
  setFeedData,
  setCodeByUser,
  setFeedByUser,
  setHeart,
  setProfile,
  setUnHeart,
} = apiSlice.actions;
export default apiSlice.reducer;

// export const selectCurrentToken = (state) => state.auth.token;
// export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
