import { createSlice } from "@reduxjs/toolkit";
import reducer from "./liveChatSlice";

const searchRecommendationSlice = createSlice({

    name:"recommendation",
    initialState: {
        isSuggestionOpen:false,
    },
    reducers:{
        suggestionOpen: (state) => {
           state.isSuggestionOpen = true
        },
        suggestionClose: (state)=> {
            state.isSuggestionOpen = false

        }

    }
})

export default searchRecommendationSlice.reducer;
export const{suggestionOpen,suggestionClose} = searchRecommendationSlice.actions;