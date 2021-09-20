import React from 'react';
import s from './UserBlock.module.css'
import img from './common/git-removebg-preview.png'
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from '@material-ui/icons/Group';

type UserBlockType = {
    avatar_url: string
    name: string
    countFollowers: number | string
    countFollowing: number | string
    login: string
    html_url: string
}
export const UserBlock = React.memo<UserBlockType>(({
                                                        avatar_url, name, countFollowers,
                                                        countFollowing, login, html_url
                                                    }) => {

    return (
        <div className={s.userBlock}>
            <div className={s.userInfo}>
                <div className={s.blockAvatar}><img src={avatar_url} className={s.avatar} alt={'Avatar'}/></div>
                <div className={s.description}>
                    <div className={s.name}>
                        <h2>{name}</h2>
                    </div>
                    <div className={s.login}>
                        <a href={html_url} className={s.hrefLogin}>{login}</a>
                    </div>
                    <div className={s.follow}>
                        <div className={s.personIcon}>
                            <div><GroupIcon fontSize="small"/></div>
                            {countFollowers} followers
                        </div>
                        <div className={s.personIcon}>
                            <div><PersonIcon fontSize="small"/></div>
                            {countFollowing} following
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
})




