import * as actionTypes from '../actions/types/usersTypes'
import { ISingleUser } from './../entities/users'

export interface IUsersReducer {
    usersList: ISingleUser[];
    currentUser: ISingleUser | null;
}

const defaultState = (): IUsersReducer => ({
    usersList: [],
    currentUser: null
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch (action.type) {

        case actionTypes.GET_USERS: {
            const paylod: actionTypes.IUsersTypes['GET_USERS'] = action;
            return {
                ...state,
                usersList: paylod.data.usersList,
                currentUser: paylod.data.currentUser
            }
        }
        default: {
            return state
        }
    }
}