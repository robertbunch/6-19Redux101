// this is teh rood reducer!!!
// to make a rootreducer...
// 1. get a method fropm redux called  "combineReducers"
import { combineReducers } from 'redux';
// 2. Get each indidivual reducer
// the store is managed by this thing (root reducer)
// the manager neeeds indidivual depart... the reducers
import frozenReducer from './frozenReducer';
import dairyReducer from './dairyReducer';
import meatReducer from './meatReducer';

// 3. call combineReducers and hand it an object
// 3.1. Each key in the object we pass to combineReducers
// will be a peice of state in the redux Store
// 3.2 Each value, will be teh value of that peice of 
// state in the redux store

const rootReducer = combineReducers({
    frozen: frozenReducer,
    dairy: dairyReducer,
    meat: meatReducer
})

export default rootReducer;