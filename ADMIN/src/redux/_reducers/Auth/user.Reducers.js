import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  AUTH_USER,
  LOGOUT_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  GET_ALL_USER_FAIL,
  GET_ALL_USER_SUCCESS
} from "../../_actions/Auth/type"

const initState = {
  user: {},
  users: [],
  isLogin: false
}
export default function (state = initState, action) {
  switch (action.type) {
    case LOGIN_USER_FAIL:
      return { ...state, user: action.payload, isLogin: false }
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, isLogin: true }
    case AUTH_USER:
      return { ...state, user: action.payload, isLogin: true }
    case LOGOUT_USER:
      return { ...state, user: action.payload, isLogin: false }
    case REGISTER_USER_SUCCESS:
      return { ...state, user: action.payload }
    case REGISTER_USER_FAIL:
      return { ...state, user: action.payload }
    case GET_USER_SUCCESS:
      return { ...state, user: action.payload, isLogin: true }
    case GET_USER_FAIL:
      return { ...state, user: {}, isLogin: false }
    case GET_ALL_USER_SUCCESS:
      console.log("user reducer", action.payload)
      return { ...state, users: action.payload }

    case GET_ALL_USER_FAIL:
      return { ...state, user: {} }
    default:
      return state
  }
}