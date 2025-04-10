import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({

    name:"navbar",
    initialState:
    {
        isMenuOpen : true,
    },
    reducers:
     {
        toggleMenu : (state) =>{
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu : (state) => {
            state.isMenuOpen = false;
        }

    }
})

export default navbarSlice.reducer;
export  const {toggleMenu , closeMenu} = navbarSlice.actions