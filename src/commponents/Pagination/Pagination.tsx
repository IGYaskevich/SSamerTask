import React, {useEffect} from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import {useDispatch, useSelector} from "react-redux";
import {getReposTC} from "../../redux-store/RepositoryReducer";
import {AppStateType} from "../../redux-store/store";
import {setPageAC, setPageCountAC} from "../../redux-store/app-reducer";
import s from './pagination.module.css'

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }),
);

export const PaginationControlled = React.memo(() => {

    const {public_repos, login} = useSelector((state: AppStateType) => state.header)
    const {pageCount, page} = useSelector((state: AppStateType) => state.app)

    const dispatch = useDispatch()

    const classes = useStyles();
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(getReposTC(login, value))
        dispatch(setPageAC({page: value}))
    };
    useEffect(() => {
        dispatch(setPageCountAC({pageCount: Math.ceil(public_repos / 5)}))
    }, [dispatch, public_repos])

    return (
        <div className={classes.root}>
            <div className={s.rootDiv}>
                <Typography>{public_repos} items </Typography>
                <Pagination count={pageCount} page={page} onChange={handleChange}/>
            </div>
        </div>
    );
})
