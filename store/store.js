import {createStore,combineReducers} from 'redux';
import reducer_searches from './reducers/reducer_searches'

const allReducers=combineReducers({friends:reducer_searches})
let store= createStore(allReducers);

export default store