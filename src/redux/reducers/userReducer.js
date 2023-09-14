import {createReducer} from '@reduxjs/toolkit';

const initialState = {
    deleting: false,
    loading: false,
    isAuthenticated: false,
    user: null,
    users: [],
    error: null,
    message: null,
    adminCount: 0,
}
export const userReducer = createReducer({initialState},{

    // Login
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

    // Register
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

    // Load User
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

    // Get All Users
    GET_ALL_USER_REQUEST: (state) => {
        state.loading = true;
    },
    GET_ALL_USER_SUCCESS: (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
        state.adminCount = action.payload.adminCount;
    },
    GET_ALL_USER_FAIL: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    // Logout
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

    // Delete User
    DELETE_USER_REQUEST: (state) => {
        state.deleting = true;
        state.loading = true;
    },
    DELETE_USER_SUCCESS: (state, action) => {
        state.deleting = false;
        state.loading = false;
        state.message = action.payload;
    },
    DELETE_USER_FAIL: (state, action) => {
        state.deleting = false;
        state.loading = false;
        state.error = action.payload;
    },

    // Exit Home
    EXIT_HOME_REQUEST: (state) => {
        state.loading = true;
    },
    EXIT_HOME_SUCCESS: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.message = action.payload;
    },
    EXIT_HOME_FAIL: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    // Update Role
    UPDATE_ROLE_REQUEST: (state) => {
        state.loading = true;
    },
    UPDATE_ROLE_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    UPDATE_ROLE_FAIL: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },


    // Clear Errors
    CLEAR_ERROR: (state) => {
        state.error = null;
    },
    CLEAR_MESSAGE: (state) => {
        state.message = null;
    },

});