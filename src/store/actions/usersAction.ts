import { GET_USERS, USERS_ERROR } from "../types";
import { Dispatch } from "redux";
import requests from "../requests";

export const getUsers = () => async (dispatch: Dispatch) => {
  try {
    const data = await requests.fetchClients();
    dispatch({
      type: GET_USERS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USERS_ERROR,
      payload: error,
    });
  }
};
