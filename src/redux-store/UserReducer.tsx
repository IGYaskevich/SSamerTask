import React from "react";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {ActionTypes, AppThunkType} from "./Actions";
import {setStatusAC} from "./app-reducer";

export type initialStateHeaderReducerPropsType = typeof initialState
const initialState = {
    avatar_url: '',
    name: '',
    followers: 0,
    login: '',
    following: 0,
    html_url: '',
    public_repos: 0,
}


export const headerReducer = (state: initialStateHeaderReducerPropsType = initialState, action: ActionTypes): initialStateHeaderReducerPropsType => {
    switch (action.type) {
        case "userReducer/SET_USER_NAME":
            return {...state, ...action.payload}
    }
    return state
}

export const setUserNameAC = (avatar_url: string, name: string, followers: number, login: string, following: number,
                              html_url: string, public_repos: number) => ({
    type: 'userReducer/SET_USER_NAME', payload: {avatar_url, name, followers, login, following, html_url, public_repos}
} as const)

export const findUserDataTC = (userName: string): AppThunkType => (dispatch: Dispatch<ActionTypes>) => {
    dispatch(setStatusAC({status: 'loading'}))
    usersAPI.getUser(userName)
        .then(result => {
            let {avatar_url, name, followers, login, following, html_url, public_repos} = result.data
            dispatch(setUserNameAC(avatar_url, name, followers, login, following, html_url, public_repos))
            dispatch(setStatusAC({status: 'succeeded'}))
        })
        .catch(() => {
            dispatch(setStatusAC({status: 'failed'}))
        })

}

