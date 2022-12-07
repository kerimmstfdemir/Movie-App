import reduxReducer from "./reducers/reduxReducer";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";


const persistConfig = {
    key: 'states',
    storage
  }

const persistedReducer = persistReducer(persistConfig, reduxReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store)