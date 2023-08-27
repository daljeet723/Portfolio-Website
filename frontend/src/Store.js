import {configureStore} from "@reduxjs/toolkit"
import { loginReducer, updateUserReducer, userReducer } from "./reducers/user";

const store = configureStore({
    reducer:{
        user: userReducer,
        login: loginReducer,
        updateUser :updateUserReducer
    },
});

export default store;