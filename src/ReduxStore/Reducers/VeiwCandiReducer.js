import {
  REQUEST_LIST_CANDI,
  REQUEST_CANDI_SUCCESS,
  REQUEST_CANDI_FAIL,
} from "../Constant";

const intialState = {
  isloading: false,
  candis: "",
};

export const veiwCandiReducer = (state = intialState, action) => {
  switch (action.type) {
    case REQUEST_LIST_CANDI:
      return {
        ...state,
        isloading: true,
      };
    case REQUEST_CANDI_SUCCESS:
      return {
        ...state,
        isloading: false,

        candis: action.payload,
      };
    case REQUEST_CANDI_FAIL:
      return {
        ...state,

        isloading: false,
      };

    default:
      return state;
  }
};
