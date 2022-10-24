
import {applyMiddleware, createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import compineReducers from "./Reducer/compineReducers";
import thunk from"redux-thunk"
const store = createStore(compineReducers,composeWithDevTools(applyMiddleware(thunk)))

export default store