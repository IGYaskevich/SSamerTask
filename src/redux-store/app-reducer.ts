import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type InitialAppReducerStateType = typeof initialState
const initialState = {
    status: 'idle' as StatusType,
    show: true,
    error: false,
    pageCount: 1,
    page: 1
}
const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setStatusAC: (state, action: PayloadAction<{ status: StatusType }>) => {
            state.status = action.payload.status
        },
        catchErrorAC: (state, action: PayloadAction<{ error: boolean }>) => {
            state.error = action.payload.error
        },
        setPageCountAC: (state, action: PayloadAction<{ pageCount: number }>) => {
            state.pageCount = action.payload.pageCount
        },
        setPageAC: (state, action: PayloadAction<{ page: number }>) => {
            state.page = action.payload.page
        }
    }
})
export const appReducer = slice.reducer
export const {setStatusAC, catchErrorAC, setPageCountAC, setPageAC} = slice.actions
