import {createReducer} from '@reduxjs/toolkit';

const initialState = {
    deleting: false,
    adding: false,
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

    // Add appliance
    ADD_APPLIANCE_REQUEST: (state) => {
        state.adding = true;
        state.loading = true;
    },
    ADD_APPLIANCE_SUCCESS: (state, action) => {
        state.adding = false;
        state.loading = false;
        state.rooms = action.payload;
    },
    ADD_APPLIANCE_FAIL: (state, action) => {
        state.adding = false;
        state.loading = false;
        state.error = action.payload;
    },

    // Delete appliance
    DELETE_APPLIANCE_REQUEST: (state) => {
        state.deleting = true;
        state.loading = true;
    },
    DELETE_APPLIANCE_SUCCESS: (state, action) => {
        state.deleting = false;
        state.loading = false;
        state.rooms = action.payload;
    },
    DELETE_APPLIANCE_FAIL: (state, action) => {
        state.deleting = false;
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