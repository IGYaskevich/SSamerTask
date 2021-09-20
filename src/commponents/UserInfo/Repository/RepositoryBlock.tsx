import React from "react";
import style from "./RepositoryBlock.module.css";
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import {InitialStateReposPropsType} from "../../../redux-store/RepositoryReducer";
import {PaginationControlled} from "../../Pagination/Pagination";

type RepositoryBlockType = {
    status: string
    public_repos: number
    dataRepos: InitialStateReposPropsType
}
export const RepositoryBlock = React.memo<RepositoryBlockType>(({status, public_repos, dataRepos}) => {

    return (
        <div className={style.repositoriesBlock}>
            {status === 'succeeded' && (
                <div className={style.rep}>
                    {dataRepos.length > 0
                        ? <div className={style.repositories}>Repositories({public_repos})</div>
                        : <div className={style.emptyList}><CancelPresentationIcon fontSize={'large'}/>Repository list is
                            empty</div>}
                    {
                        dataRepos.map((item, index) =>
                            <div key={index} className={style.listRepos}>
                                <a className={style.hrefNameRepositories} href={item.html_url}>
                                    <div>{item.name}</div>
                                </a>
                                {item.description}
                            </div>)
                    }
                    <div className={style.pagination}><PaginationControlled/></div>
                </div>)}

        </div>
    )
})


