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

export const addAppliance = (id, name, createdBy) => async (dispatch) => {
    try {
        dispatch({type: "ADD_APPLIANCE_REQUEST"});
        const {data} = await axios.post(`${server}/room/${id}`, {name, createdBy}, {
            withCredentials: true,
        });
        dispatch({type: "ADD_APPLIANCE_SUCCESS", payload: data.rooms});
    } catch (error) {
        dispatch({type: "ADD_APPLIANCE_FAIL", payload: error.response.data.message});
    }
}

export const deleteAppliance = (id, applianceId) => async (dispatch) => {
    try {
        dispatch({type: "DELETE_APPLIANCE_REQUEST"});
        const {data} = await axios.delete(`${server}/room/${id}/${applianceId}`, {
            withCredentials: true,
        });
        dispatch({type: "DELETE_APPLIANCE_SUCCESS", payload: data.rooms});
    } catch (error) {
        dispatch({type: "DELETE_APPLIANCE_FAIL", payload: error.response.data.message});
    }
}