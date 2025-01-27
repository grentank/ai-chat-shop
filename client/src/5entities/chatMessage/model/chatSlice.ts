import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatMessageT } from './chatMessage.schema';
import chatService from '../api/chat.service';

export type ChatSliceState = {
  messages: ChatMessageT[];
  showChat: boolean;
};

const initialState: ChatSliceState = {
  showChat: false,
  messages: [
    {
      id: 0,
      text: 'Привет! Чем могу помочь?',
      isUser: false,
    },
  ],
};

export const sendMessageThunk = createAsyncThunk(
  'chat/sendMessage',
  async (text: string, thunkApi) => {
    thunkApi.dispatch(addMessage(text));
    return chatService.sendMessage(text);
  },
);

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    toggleChat: (state) => {
      state.showChat = !state.showChat;
    },
    addMessage: (state, action: PayloadAction<string>) => {
      const newMessage = {
        id: Math.random(),
        text: action.payload,
        isUser: true,
      };
      state.messages.push(newMessage);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendMessageThunk.fulfilled, (state, action) => {
      state.messages.push(action.payload);
    });
  },
});

export const { addMessage, toggleChat } = chatSlice.actions;

export default chatSlice.reducer;
