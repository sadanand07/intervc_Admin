import { REQUEST_VIEW_FAIL, REQUEST_VIEW_JOB, REQUEST_VIEW_SUCCESS } from "../Constant"

const initialState = {
    isloading: false,
    jobs:"",
}


export const ViewJobReducer = (state = initialState, action) => {
    switch (action.type) {

        case REQUEST_VIEW_JOB:
            return {
                ...state,
                isloading: true,
            }

        case REQUEST_VIEW_SUCCESS:
            return {
                ...state,
           
                isloading: false,
                jobs:action.payload,
            }

        case REQUEST_VIEW_FAIL:
            return {
                ...state,
              
                isloading: false,
            }

        default:
            return state
    }
}
