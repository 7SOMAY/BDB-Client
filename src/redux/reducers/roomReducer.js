import {createReducer} from '@reduxjs/toolkit';

const initialState = {
    deleting: false,
    loading: false,
    rooms: [],
    error: null,
    message: null,
}
export const roomReducer = createReducer({initialState},{

    // Get All Rooms
    GET_ALL_ROOMS_REQUEST: (state) => {
        state.loading = true;
    },
    GET_ALL_ROOMS_SUCCESS: (state, action) => {
        state.loading = false;
        state.rooms = action.payload;
    },
    GET_ALL_ROOMS_FAIL: (state, action) => {
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