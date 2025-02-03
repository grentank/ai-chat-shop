import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatMessageT } from './chatMessage.schema';
import chatService from '../api/chat.service';
import { v4 } from 'uuid';

export type ChatSliceState = {
  messages: ChatMessageT[];
  showChat: boolean;
  sending: boolean;
};

const initialState: ChatSliceState = {
  showChat: false,
  sending: false,
  messages: [
    {
      messageId: v4(),
      content: 'Привет! Чем могу помочь?',
      role: 'assistant',
    },
  ],
};

export const createChatThunk = createAsyncThunk(
  'chat/sendMessage',
  async (text: string, thunkApi) => {
    thunkApi.dispatch(addUserMessage(text));
    return chatService.createChat(text);
  },
);

export const addUserMessageThunk = createAsyncThunk(
  'chat/addUserMessage',
  async ({ messages, text }: { messages: ChatMessageT[]; text: string }, thunkApi) => {
    thunkApi.dispatch(addUserMessage(text));
    return chatService.sendUserMessage(messages, text);
  },
);

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    toggleChat: (state) => {
      state.showChat = !state.showChat;
    },
    addUserMessage: (state, action: PayloadAction<string>) => {
      const newMessage: ChatMessageT = {
        messageId: v4(),
        content: action.payload,
        role: 'user',
      };
      state.messages.push(newMessage);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createChatThunk.fulfilled, (state, action) => {
        state.messages.push(action.payload);
      })
      .addCase(addUserMessageThunk.fulfilled, (state, action) => {
        state.messages.push(action.payload);
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.sending = true;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state) => {
          state.sending = false;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state) => {
          state.sending = false;
        },
      );
  },
});

export const { addUserMessage, toggleChat } = chatSlice.actions;

export default chatSlice.reducer;
