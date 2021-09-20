import React from "react";
import s from './UserInfo.module.css'
import {useSelector} from "react-redux";
import {UserBlock} from "./User/UserBlock";
import {AppStateType} from "../../redux-store/store";
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import {RepositoryBlock} from "./Repository/RepositoryBlock";
import {initialStateHeaderReducerPropsType} from "../../redux-store/UserReducer";
import {InitialStateReposPropsType} from "../../redux-store/RepositoryReducer";

type UserInfoType = {
    status: string
}
export const UserInfo = React.memo<UserInfoType>(({status}) => {

    const array = useSelector<AppStateType, InitialStateReposPropsType>(state => state.repos)
    const {public_repos} = useSelector((state: AppStateType) => state.header)
    const {...user} = useSelector<AppStateType, initialStateHeaderReducerPropsType>((state) => state.header)

    const countUsers = (users: number) => {
        return users.toString().length >= '1000'.length ? (users / 1000).toFixed(1) + 'k' : users
    }

    return (
        <div>
            {status === 'idle' && (<div className={s.count}>
                    <div className={s.startSearch}>
                        <SearchIcon fontSize="large"/>
                        Start with searching a GitHub user
                    </div>
                </div>
            )}
            {status === 'succeeded' && (
                <div className={s.all}>
                    <UserBlock name={user.name}
                               avatar_url={user.avatar_url}
                               countFollowers={countUsers(user.followers)}
                               countFollowing={countUsers(user.following)}
                               html_url={user.html_url}
                               login={user.login}/>
                    <RepositoryBlock public_repos={public_repos} status={status} dataRepos={array}/>
                </div>)}

            {status === 'failed' && <div className={s.count}>
                <div className={s.error}>
                    <PersonIcon fontSize="large"/>
                    User not found
                </div>
            </div>}
        </div>
    )
})


