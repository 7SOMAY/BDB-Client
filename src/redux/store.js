import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./reducers/userReducer";
import {roomReducer} from "./reducers/roomReducer";



const store = configureStore({
    reducer: {
        user: userReducer,
        room: roomReducer,
    },
});

export default store;

// export const server = "http://localhost:4000/api/v1";
export const server = "https://bdb-server.vercel.app/api/v1";



