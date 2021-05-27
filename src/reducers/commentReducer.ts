import * as actionTypes from '../actions/types/commentTypes'
import { ISingleComment } from './../entities/comment'

export interface ICommentReducer {
    comments: ISingleComment[];
    
}

const defaultState = (): ICommentReducer => ({
    comments: []
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch (action.type) {

        case actionTypes.GET_COMMENTS: {
            const payload: actionTypes.ICommentTypes['GET_COMMENTS'] = action;
            return {
                ...state,
                comments: payload.comments,
            }
        }
        default: {
            return state
        }
    }
}