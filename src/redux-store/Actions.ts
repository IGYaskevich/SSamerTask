import {setUserNameAC} from "./UserReducer";
import {getUserReposAC} from "./RepositoryReducer";
import {catchErrorAC, setPageAC, setPageCountAC, setStatusAC} from "./app-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";

export type ActionTypes = ReturnType<typeof setUserNameAC>
    | ReturnType<typeof getUserReposAC>
    | ReturnType<typeof catchErrorAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof setPageCountAC>
    | ReturnType<typeof setPageAC>


export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionTypes>