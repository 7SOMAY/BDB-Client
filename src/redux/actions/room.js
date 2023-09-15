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

export const updateApplianceStatus = (id, applianceId, flag) => async (dispatch) => {
    try {
        dispatch({type: "UPDATE_APPLIANCE_STATUS_REQUEST"});
        let status = flag ? "on" : "off";
        const {data} = await axios.put(`${server}/room/${id}/${applianceId}/status`, {status}, {
            withCredentials: true,
        });
        dispatch({type: "UPDATE_APPLIANCE_STATUS_SUCCESS", payload: data.rooms});
    } catch (error) {
        dispatch({type: "UPDATE_APPLIANCE_STATUS_FAIL", payload: error.response.data.message});
    }
}