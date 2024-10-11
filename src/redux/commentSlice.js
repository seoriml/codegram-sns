// redux/commentSlice.js
import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comments",
  initialState: {}, // 각 포스트의 ID를 키로 하고 댓글 수를 값으로 가지는 객체
  reducers: {
    setCommentCount: (state, action) => {
      const { postId, count } = action.payload;
      state[postId] = count; // 특정 포스트의 댓글 수 설정
    },
    incrementCommentCount: (state, action) => {
      const postId = action.payload;
      if (state[postId] !== undefined) {
        state[postId] += 1; // 댓글 수 증가
      }
    },
    decrementCommentCount: (state, action) => {
      const postId = action.payload;
      if (state[postId] !== undefined && state[postId] > 0) {
        state[postId] -= 1; // 댓글 수 감소
      }
    },
  },
});

export const { setCommentCount, incrementCommentCount, decrementCommentCount } =
  commentSlice.actions;
export default commentSlice.reducer;
