import {createStore} from 'redux'; 
import combineReducers from '../reducers/root_reducer.js'; 

// export default function configureStore() {
//   createStore(combineReducers);
// }

export default createStore(combineReducers);