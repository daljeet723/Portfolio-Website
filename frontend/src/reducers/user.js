import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    loading: true
}
export const userReducer = createReducer(initialState, {
    "GET_USER_REQUEST": (state) => {
        state.loading = true;
    },
    "GET_USER_SUCCESS": (state, action) => {
        state.loading = false;
        state.user = action.payload;
    },
    "GET_USER_FAILURE": (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    "CLEAR_ERRORS": (state) => {
        state.error = null;
    },
});

//Login user reducer
export const loginReducer = createReducer({}, {
    "LOGIN_REQUEST": (state) => {
        state.loading = true;
        state.isAuthenticated = false;
    },
    "LOGIN_SUCCESS": (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.isAuthenticated = true;
    },
    "LOGIN_FAILURE": (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },

    //CLEAR TOKENS FROM BROWSER IF USER IS NOT LOGGED IN 
    "LOAD_USER_REQUEST": (state) => {
        state.loading = true;
        state.isAuthenticated = false;
    },
    "LOAD_USER_SUCCESS": (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    },
    "LOAD_USER_FAILURE": (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },


    //LOGOUT 
    "LOGOUT_REQUEST": (state) => {
        state.loading = true;

    },
    "LOGOUT_SUCCESS": (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.isAuthenticated = false;
        state.user = null;
    },
    "LOGOUT_FAILURE": (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = true;
    },

    //when user login along with success msg if any prev msg persist, claer all prev errors and msges
    //dispatch in login component also
    "CLEAR_ERRORS": (state) => {
        state.error = null;
    },

    "CLEAR_MESSAGE": (state) => {
        state.message = null;
    },
});


export const updateUserReducer = createReducer({}, {

    "UPDATE_USER_REQUEST": (state) => {
        state.loading = true;
    },

    "UPDATE_USER_SUCCESS": (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },

    "UPDATE_USER_FAILURE": (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },


    "ADD_TIMELINE_REQUEST": (state) => {
        state.loading = true
    },
    "ADD_TIMELINE_SUCCESS": (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    "ADD_TIMELINE_FAILURE": (state, action) => {
        state.loading = true;
        state.error = action.payload;
    },

    "DELETE_TIMELINE_REQUEST": (state) => {
        state.loading = true
    },
    "DELETE_TIMELINE_SUCCESS": (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    "DELETE_TIMELINE_FAILURE": (state, action) => {
        state.loading = true;
        state.error = action.payload;
    },


    "ADD_PROJECT_REQUEST": (state) => {
        state.loading = true
    },
    "ADD_PROJECT_SUCCESS": (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    "ADD_PROJECT_FAILURE": (state, action) => {
        state.loading = true;
        state.error = action.payload
    },


    "DELETE_PROJECT_REQUEST": (state) => {
        state.loading = true
    },
    "DELETE_PROJECT_SUCCESS": (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    "DELETE_PROJECT_FAILURE": (state, action) => {
        state.loading = true;
        state.error = action.payload;
    },

    "CLEAR_ERROR": (state) => {
        state.error = null;
    },
    "CLEAR_MESSAGE": (state) => {
        state.message = null;
    },


})