import React, { useReducer } from "react";
import axios from "axios";

import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

import SetAuthToken from "../setAuthToken";

import {
  CLEAR_ERROR,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SET_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from "../types";
import setAuthToken from "../setAuthToken";

function AuthState(props) {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const clearErrors = () => {
    dispatch({
      type: CLEAR_ERROR,
    });
  };

  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get(
        `https://thshackathon.herokuapp.com/api/user/auth`
      );
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: err.response.data,
      });
    }
  };

  // login user
  const userLogin = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      setLoading();
      const res = await axios.post(
        "http://localhost:3000/login",
        formData,
        config
      );
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data,
      });
    }
  };

  const userRegister = async (formData) => {
    setLoading();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "https://thshackathon.herokuapp.com/api/user/register",
        formData,
        config
      );

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loading: state.loading,
        error: state.error,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        token: state.token,
        setLoading,
        userRegister,
        clearErrors,
        loadUser,
        userLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthState;
