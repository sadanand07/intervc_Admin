import {
    REQUEST_UPDATE_USERS,
    REQUEST_UPDATE_USERS_SUCCESS,
    REQUEST_UPDATE_USERS_FAIL,
  } from "../Constant";


  const initialState = {
    isloading: false,
    statusCode: "",
  };

  export const updateuserReduser = (state = initialState, action) => {
    switch (action.type) {
      case REQUEST_UPDATE_USERS:
        return {
          ...state,
          isloading: true,
        };
  
      case REQUEST_UPDATE_USERS_SUCCESS:
        return {
          ...state,
          statusCode: action.payload.statusCode,
          isloading: false,
        };
  
      case REQUEST_UPDATE_USERS_FAIL:
        return {
          ...state,
          statusCode: action.payload.statusCode,
          isloading: false,
        };
  
      default:
        return state;
    }
  };
  