import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./navbarSlice"
import searchSuggestionSlice from "../utils/searchSuggestionSlice"
import liveChatSlice from "./liveChatSlice"
import searchRecommendationSlice from "./searchRecommendationSlice"

const appStore = configureStore({
    reducer : {
        navbar: navbarSlice,
        search: searchSuggestionSlice,
        chat : liveChatSlice ,
        recommendation:searchRecommendationSlice,
    },
    devTools: true,

})

export default appStore;
