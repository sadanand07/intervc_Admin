import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { authorizationReducer } from "./Reducers/AuthorizationReducer";
import { CreateJobReducer } from "./Reducers/CreateJobReducer";
import { ViewJobReducer } from "./Reducers/ViewJobReducer";
import { veiwuserReducer } from "./Reducers/VeiwuserReducer";
import { updateuserReduser } from "./Reducers/UpdateUserReducer";
import { veiwCandiReducer } from "./Reducers/VeiwCandiReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	auth: authorizationReducer,
	createJob: CreateJobReducer,
	viewjob: ViewJobReducer,
	listusers: veiwuserReducer,
	listcandi: veiwCandiReducer,
	updateUser: updateuserReduser,
});

const initialState = {};

const store = createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
