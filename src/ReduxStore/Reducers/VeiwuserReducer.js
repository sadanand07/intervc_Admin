import {
  REQUEST_LIST_USERS,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAIL,
} from "../Constant";

const intialState = {
  isloading: false,
  users: "",
};

export const veiwuserReducer = (state = intialState, action) => {
  switch (action.type) {
    case REQUEST_LIST_USERS:
      return {
        ...state,
        isloading: true,
      };
    case REQUEST_USERS_SUCCESS:
      return {
        ...state,
        isloading: false,

        users: action.payload,
      };
    case REQUEST_USERS_FAIL:
      return {
        ...state,

        isloading: false,
      };

    default:
      return state;
  }
};
