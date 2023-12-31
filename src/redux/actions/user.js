import {server} from "../store";
import axios from "axios";

const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({type: "USER_LOGIN_REQUEST"});
        const {data} = await axios.post(`${server}/login`, {email, password}, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
        dispatch({type: "USER_LOGIN_SUCCESS", payload: data});
    } catch (error) {
        dispatch({type: "USER_LOGIN_FAIL", payload: error.response.data.message});
    }
}

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({type: "USER_REGISTER_REQUEST"});
        const {data} = await axios.post(`${server}/register`, {name, email, password}, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
        dispatch({type: "USER_REGISTER_SUCCESS", payload: data});
    } catch (error) {
        dispatch({type: "USER_REGISTER_FAIL", payload: error.response.data.message});
    }
}

export const logout = () => async (dispatch) => {
    try {
        dispatch({type: "USER_LOGOUT_REQUEST"});
        const {data} = await axios.get(`${server}/logout`, {
            withCredentials: true,
        });
        dispatch({type: "USER_LOGOUT_SUCCESS", payload: data.message});
    } catch (error) {
        dispatch({type: "USER_LOGOUT_FAIL", payload: error.response.data.message});
    }
}

export const loadAllUsers = () => async (dispatch) => {
    try {
        dispatch({type: "GET_ALL_USER_REQUEST"});
        const {data} = await axios.get(`${server}/admin/users`, {
            withCredentials: true,
        });
        dispatch({type: "GET_ALL_USER_SUCCESS", payload: data});
    } catch (error) {
        dispatch({type: "GET_ALL_USER_FAIL", payload: error.response.data.message});
    }
}
export const loadHome = () => async (dispatch) => {
    try {
        dispatch({type: "USER_LOAD_REQUEST"});
        const {data} = await axios.get(`${server}/home`, {
            withCredentials: true,
        });
        dispatch({type: "USER_LOAD_SUCCESS", payload: data});
    } catch (error) {
        dispatch({type: "USER_LOAD_FAIL", payload: error.response.data.message});
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try {
        dispatch({type: "DELETE_USER_REQUEST"});
        const {data} = await axios.delete(`${server}/admin/user/${id}`, {
            withCredentials: true,
        });
        dispatch({type: "DELETE_USER_SUCCESS", payload: data.message});
    } catch (error) {
        dispatch({type: "DELETE_USER_FAIL", payload: error.response.data.message});
    }
}

export const exitHome = () => async (dispatch) => {
    try {
        dispatch({type: "EXIT_HOME_REQUEST"});
        const {data} = await axios.delete(`${server}/me`,{
            withCredentials: true,
        });
        dispatch({type: "EXIT_HOME_SUCCESS", payload: data.message});
    } catch (error) {
        dispatch({type: "EXIT_HOME_FAIL", payload: error.response.data.message});
    }
}

export const updateRole = (id) => async (dispatch) => {
    try {
        dispatch({type: "UPDATE_ROLE_REQUEST"});
        const {data} = await axios.put(`${server}/admin/user/${id}`,{}, {
            withCredentials: true,
        });
        dispatch({type: "UPDATE_ROLE_SUCCESS", payload: data.message});
    } catch (error) {
        dispatch({type: "UPDATE_ROLE_FAIL", payload: error.response.data.message});
    }
}

// export const countAdmin = (count) => async (dispatch) => {
//     // console.log(count);
//     dispatch({type: "COUNT_ADMIN", payload: count});
// }