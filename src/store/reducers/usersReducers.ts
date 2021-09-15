import { GET_USERS, USERS_ERROR } from "../types";
import { UsersAction } from "./actions";

const initialState = {
  users: [],
  loading: true,
};

const userReducers = (state = initialState, action: UsersAction) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case USERS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducers;
