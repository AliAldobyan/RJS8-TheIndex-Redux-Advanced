import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {fetchAuthors, fetchBooks} from './actions'
import authorReducer from './reducers/authors.js';
import booksReducer from './reducers/books.js';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const rootReducer = combineReducers({
     authorsState: authorReducer,
     booksState: booksReducer
 })

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
store.dispatch(fetchAuthors())
store.dispatch(fetchBooks())

export default store;