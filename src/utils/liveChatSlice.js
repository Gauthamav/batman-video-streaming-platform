import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constant";

const liveChatSlice = createSlice({

    name: "chat",
    initialState: {
        messages : [],
    },
    reducers: {
        addMessage : (state,action) => {
            state.messages.splice(LIVE_CHAT_COUNT ,1)
            state.messages.push(action.payload)
          
        },
    },
})
export const {addMessage} = liveChatSlice.actions;
export default liveChatSlice.reducer