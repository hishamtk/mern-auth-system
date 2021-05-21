import {
  CLEAR_ERROR,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SET_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../types";

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);

      return { ...state, loading: false, isAuthenticated: true };
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return { ...state, loading: false, error: action.payload.errors };

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload.data,
      };
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return { ...state, isAuthenticated: false, error: action.payload.errors };

    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);

      return { ...state, loading: false, isAuthenticated: true };
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return { ...state, loading: false, error: action.payload.errors };
    case CLEAR_ERROR:
      return { ...state, error: null };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default reducer;
