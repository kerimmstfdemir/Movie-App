import reduxReducer from "./reducers/reduxReducer";
import { legacy_createStore as createStore } from "redux";

export const store = createStore(reduxReducer);