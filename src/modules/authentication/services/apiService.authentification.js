import { queryCreator } from 'shared/utils';

import { setToken } from 'modules/authentication/services/jwt';
/**
 * @property {function registration(registrationInfo) {}} registration
 * @property {function login(loginInfo) {}} login
 * @property {function refreshToken(token) {}} refreshToken
 */
export const authentificationApi = {
    /**
    * @returns {
        user: {
            username: string,
            email:string
            password: string
            created_at: string,
            updated_at: string,
            id: number
        }
        token: {
            type: string,
            token: string,
            refreshToken: string
        }
    }
    *  @param {username: string, email: string, password: string} registrationInfo
    *  @example
    *  // example return
    *  {
    *      "user": {
    *          "username": "root-admin",
    *          "email": "admin-root.dogs.mail.com",
    *          "password": "$2a$10$MuoFLXhSLk3CMN3RPzOgQOv4pM.O6jWe8nfqwe93q1YG0XobTadbS",
    *          "created_at": "2020-01-03 14:41:01",
    *          "updated_at": "2020-01-03 14:41:01",
    *          "id": 4
    *      },
    *      "token": {
    *          "type": "bearer",
    *          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTU3ODA2MjQ2Mn0.GjILntC0KQyu9bkwk7rLqPOKdjSTHhQzCIlLMuZZL4g",
    *          "refreshToken": "015158d37439fef6ee78844a79eb3ee5CXMgtW+n9cbbjJW5+tXj5Uawi4Yqhr71u3HPxn3HcIMvTfiIv0Lm9kT62ZOaDDBF"
    *      }
    *  }
    */
    registration: registrationInfo => queryCreator.post('/register', registrationInfo)
        .then(res => {
            setToken(res.data.token);
            return res.data;
        }),

    login: loginInfo => queryCreator.post('/login', loginInfo)
        .then(res => {
            setToken(res.data.token);
            return res.data;
        })
        .catch(err => {
            /* eslint-disable  no-console */
            console.error(err);
            return null;
        }),

    refreshToken: refreshToken => queryCreator.post('/refresh', refreshToken)
        .then(res => {
            setToken(res.data.token);
        }),

    getUser: () => queryCreator.get('/user')
        .then(({ data }) => data)
};
