import { Dispatch } from 'redux';
import * as actionTypes from './types/usersTypes'
import { ISingleUser } from '../entities/users'

export const getUsers = (): Promise<ISingleUser[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(respone => respone.json())
        .then((usersList: ISingleUser[]) => {
            dispatch({
                type: actionTypes.GET_USERS,
                data: {
                    usersList,
                    currentUser: usersList[1]
                }
            })
        })
}) as any;