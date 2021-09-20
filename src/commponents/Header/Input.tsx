import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from "@material-ui/icons/Search";
import {useDispatch} from "react-redux";
import {findUserDataTC} from "../../redux-store/UserReducer";
import {getReposTC} from "../../redux-store/RepositoryReducer";
import {catchErrorAC} from "../../redux-store/app-reducer";
import s from './BasicBlock.module.css'

export const Input = React.memo(() => {
    const dispatch = useDispatch()
    const [userName, setUserName] = useState<string>('')

    const onInputChange =useCallback( (e: ChangeEvent<HTMLInputElement>) => {
        let userName = e.currentTarget.value.trim()
        setUserName(userName)
    },[])

    const onEnterPress = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            dispatch(findUserDataTC(userName))
            dispatch(getReposTC(userName, 1))
            dispatch(catchErrorAC({error: false}))
        }
    },[dispatch, userName])

    return (
        <div>
            <div>
                <TextField
                    onKeyPress={onEnterPress}
                    onChange={onInputChange}
                    className={s.textField}
                    size={'small'}
                    placeholder={'Enter GitHub username'}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"
                                                        className={s.searchIcon}><SearchIcon/></InputAdornment>,
                    }}
                    variant="outlined"
                />
            </div>
        </div>
    );
})

