import React from "react";
import s from './BasicBlock.module.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import {Input} from "./Input";


export const BasicBlock = React.memo(() => {
    return (
        <div className={s.header}>
            <div>
                <GitHubIcon fontSize="large" className={s.gitGubIcon}/>
            </div>
            <Input/>
        </div>
    )
})