import { createSlice } from '@reduxjs/toolkit'
// get codes from redux quick start-toolkit
//prepare loginSlice(we need global state to manage Login/Logout status)
export const loginSlice = createSlice({
  name: 'login',
  initialState: {  
    userLoggedIn: false //indicates first value of data.Here its user is LoggedOut so userLoggedIn : false
  },

  reducers: {
// here state means current value and action means next value or next change that we don't know now.
    setUserLoggedIn:(state,action ) =>{
        state.userLoggedIn = action.payload
    //so new state of userLoggedIn is equal to action.payload
    }

  }
})

// Action creators are generated for each case reducer function

export const { setUserLoggedIn } = loginSlice.actions
//now export our reducer, so it can be used in different part of website
export default loginSlice.reducer