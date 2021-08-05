import { applyMiddleware, createStore, compose } from "redux";
import appReducer from "./reducers/reducer";
import thunk from "redux-thunk";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(thunk))
);
