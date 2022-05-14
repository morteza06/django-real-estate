import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'
import rootReducer from './reducers'

const initialstate = {};

const middleware = [reduxThunk]

const store = createStore(
    rootReducer,
    initialstate,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
