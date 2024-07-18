import { configureStore } from '@reduxjs/toolkit'
//import loginReducer from loginSlice
import loginReducer from '../features/login/loginSlice'


export default configureStore({
  reducer: { //add reducer to this 
        login: loginReducer
  }
})