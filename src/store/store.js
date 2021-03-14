import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import profileReducer from "./profile/profileReducer";
import chatsReducer from "./chats/chatsReducer";
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers({
    profile: profileReducer,
    chats: chatsReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);