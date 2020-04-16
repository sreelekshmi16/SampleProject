import { Reducer } from "../App/Containers/Reducer"
import UserReducer from '../App/Containers/User/dux'
import { combineReducers } from "redux";
const rootReducer = combineReducers(Object.assign({
    Reducer,
    UserReducer
}));

export default (state, action) =>
     rootReducer(state, action);