import { Reducer } from "../App/Containers/Counter/dux"
import {UserReducer} from '../App/Containers/User/dux'
import {StudentReducer} from '../App/Containers/studentReducer'
import { combineReducers } from "redux";
const rootReducer = combineReducers(Object.assign({
    Reducer,
     UserReducer,
     StudentReducer
}));

export default (state, action) =>
     rootReducer(state, action);
// import { combineReducers } from 'redux'
// import UserReducer from '../App/Containers/User/dux'

// const rootreducer = combineReducers({
//     UserReducer
// })
// export default rootreducer
