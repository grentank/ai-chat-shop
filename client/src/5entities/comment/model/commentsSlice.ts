import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CommentT } from './comment.schema';
import { ProductT } from '../../products/model/products.schema';
import commentService from '../api/comments.service';

export type CommentsSliceState = {
  list: CommentT[];
};

const initialState: CommentsSliceState = {
  list: [],
};

export const getCommentsByProductId = createAsyncThunk(
  'comments/getCommentsByProductId',
  async (id: ProductT['id']) => commentService.getCommentsByProductId(id),
);

export const createComment = createAsyncThunk(
  'comments/createComment',
  async ({ productId, text }: { productId: ProductT['id']; text: string }) =>
    commentService.createNewComment(productId, text),
);

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    clearComments: (state) => {
      state.list = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCommentsByProductId.fulfilled, (state, action) => {
        state.list = action.payload.toSorted((c1, c2) => c2.id - c1.id);
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
      });
  },
});

// Action creators are generated for each case reducer function
export const { clearComments } = commentsSlice.actions;

export default commentsSlice.reducer;
