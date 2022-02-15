import {
  REQUEST_CREATE_JOB,
  REQUEST_CREATE_JOB_FAIL,
  REQUEST_CREATE_JOB_SUCCESS,
} from "../Constant";

const initialState = {
  isloading: false,
  statusCode: "",
};

export const CreateJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CREATE_JOB:
      return {
        ...state,
        isloading: true,
      };

    case REQUEST_CREATE_JOB_SUCCESS:
      return {
        ...state,
        statusCode: action.payload.statusCode,
        isloading: false,
      };

    case REQUEST_CREATE_JOB_FAIL:
      return {
        ...state,
        statusCode: action.payload.statusCode,
        isloading: false,
      };

    default:
      return state;
  }
};
