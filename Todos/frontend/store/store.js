import { createStore } from 'redux';
import rootReducer from './../reducers/root_reducer';
import * as todoActions from './../actions/todo_actions';

function configureStore () {return createStore(rootReducer);}

export default configureStore;