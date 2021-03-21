import { createStore, combineReducers } from "redux";

import profileReducer from "./profile/profileReducer";
import chatsReducer from "./chats/chatsReducer";

export default createStore(
  combineReducers({
    profile: profileReducer,
    chats: chatsReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);