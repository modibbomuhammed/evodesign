import { AxiosError } from "axios";
import { User } from "../types/stateTypes";

// action types
export const FETCH_USER_INFO = "FETCH_USER_INFO";
export const FETCH_USER_INFO_INVOKED = "FETCH_USER_INFO_INVOKED";
export const FETCH_USER_INFO_SUCCESS = "FETCH_USER_INFO_SUCCESS";
export const FETCH_USER_INFO_FAILED = "FETCH_USER_INFO_FAILED";

//action creators
export const fetchUserInfo = () => ({ type: FETCH_USER_INFO });
export const fetchUserInfoInvoked = () => ({ type: FETCH_USER_INFO_INVOKED });
export const fetchUserInfoSuccess = (payload: User) => ({
  type: FETCH_USER_INFO_SUCCESS,
  payload,
});
export const fetchUserInfoFailed = (payload: AxiosError) => ({
  type: FETCH_USER_INFO_FAILED,
  payload,
});

