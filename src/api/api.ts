import axios from "axios";


const instance = axios.create({
    baseURL: `https://api.github.com/users/`,
})

export const usersAPI = {
    getUser(userName: string) {
        return instance.get(`${userName}`)
    }
}

export const reposAPI = {
    getUserRepos(userName: string | undefined, page: number = 1) {
        return instance.get<any>(`${userName}/repos?page=${page}&per_page=5`)
    }
}
