import { createSlice } from "@reduxjs/toolkit";

const searchSuggestionSlice = createSlice({
    name:'search',
    initialState:{


    },

    reducers:{

        addCache:(state,action) => {
            // {"ip" : ["iphone" , "12pro"]}

           state = Object.assign(state, action.payload)

           

        }
    }

})

export const {addCache} = searchSuggestionSlice.actions;

export default searchSuggestionSlice.reducer;