import {combineReducers} from "redux";
import {headerReducer} from "./UserReducer";
import thunk from "redux-thunk";
import {userBlockReducer} from "./RepositoryReducer";
import {appReducer} from "./app-reducer";
import {configureStore} from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    header: headerReducer,
    repos: userBlockReducer,
    app: appReducer,
})
export type AppStateType = ReturnType<typeof rootReducer>

//export const _store = createStore(rootReducer, applyMiddleware(thunk))
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)})

//@ts-ignore
window.store = store