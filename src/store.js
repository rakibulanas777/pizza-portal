import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { getAllPizzaReducer } from "./reducers/pizzaReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const rootReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
});

const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
