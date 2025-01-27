import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../5entities/products/model/productsSlice';
import commentsReducer from '../5entities/comment/model/commentsSlice';
import chatReducer from '../5entities/chatMessage/model/chatSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    comments: commentsReducer,
    chat: chatReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
