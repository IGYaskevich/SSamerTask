import {Dispatch} from "redux";
import {reposAPI} from "../api/api";
import {ActionTypes, AppThunkType} from "./Actions";
import {catchErrorAC, setStatusAC} from "./app-reducer";


export type InitialStateReposPropsType = typeof initialState

const initialState = [
    {
        html_url: '',
        name: '',
        full_name: '',
        description: ''
    }
]

export const userBlockReducer = (state: InitialStateReposPropsType = initialState, action: any): InitialStateReposPropsType => {
    switch (action.type) {
        case 'repositoryReducer/GET_REPOS_USER':
            return [...action.payload]
    }
    return state
}

export const getUserReposAC = (payload: InitialStateReposPropsType) => ({type: 'repositoryReducer/GET_REPOS_USER', payload} as const)

export const getReposTC = (userName: string | undefined, page: number): AppThunkType => (dispatch: Dispatch<ActionTypes>) => {
    dispatch(setStatusAC({status: 'loading'}))
    reposAPI.getUserRepos(userName, page)
        .then(result => {
            dispatch(getUserReposAC(result.data))
            dispatch(setStatusAC({status: 'succeeded'}))
        })
        .catch(() => {
            dispatch(catchErrorAC({error: true}))
        })
}

