import { applyMiddleware,compose, createStore } from "redux"
import thunk from "redux-thunk";
import  combineReducers  from "./reducers/index";

const initalState = {
    userSigninInfo:{},
}


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers,initalState,composeEnhancer(applyMiddleware(thunk))
);
export default store;