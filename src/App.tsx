import React from 'react';
import s from './App.module.css'
import {BasicBlock} from "./commponents/Header/BasicBlock";
import {LinearProgress} from "@material-ui/core";
import {useSelector} from "react-redux";
import {AppStateType} from "./redux-store/store";
import {UserInfo} from './commponents/UserInfo/UserInfo';


export const App = () => {
    const {status} = useSelector((state: AppStateType) => state.app)
    return (
        <div className={s.app}>
            <BasicBlock/>
            {status === 'loading' && <LinearProgress/>}
            <div>
                <UserInfo status={status}/>
            </div>
        </div>
    );
}


