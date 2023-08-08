import {createReducer} from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    isAuthenticated: false,
    user: null,
    users: [],
    error: null,
    message: null,
}

export const userReducer = createReducer({initialState},{
    USER_LOGIN_REQUEST: (state) => {
        state.loading = true;
    },
    USER_LOGIN_SUCCESS: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.message = action.payload.message;
    },
    USER_LOGIN_FAIL: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },



    USER_REGISTER_REQUEST: (state) => {
        state.loading = true;
    },
    USER_REGISTER_SUCCESS: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.message = action.payload.message;
    },
    USER_REGISTER_FAIL: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },


    USER_LOAD_REQUEST: (state) => {
        state.loading = true;
    },
    USER_LOAD_SUCCESS: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
    },
    USER_LOAD_FAIL: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },

    GET_ALL_USER_REQUEST: (state) => {
        state.loading = true;
    },
    GET_ALL_USER_SUCCESS: (state, action) => {
        state.loading = false;
        state.users = action.payload;
    },
    GET_ALL_USER_FAIL: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    USER_LOGOUT_REQUEST: (state) => {
        state.loading = true;
    },
    USER_LOGOUT_SUCCESS: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.message = action.payload;
    },
    USER_LOGOUT_FAIL: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.error = action.payload;
    },

    CLEAR_ERROR: (state) => {
        state.error = null;
    },
    CLEAR_MESSAGE: (state) => {
        state.message = null;
    }

});