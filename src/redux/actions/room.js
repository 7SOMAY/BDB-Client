import {server} from "../store";
import axios from "axios";

export const loadAllRooms = () => async (dispatch) => {
    try {
        dispatch({type: "GET_ALL_ROOMS_REQUEST"});
        const {data} = await axios.get(`${server}/room/all`, {
            withCredentials: true,
        });
        dispatch({type: "GET_ALL_ROOMS_SUCCESS", payload: data.rooms});
    } catch (error) {
        dispatch({type: "GET_ALL_ROOMS_FAIL", payload: error.response.data.message});
    }
}