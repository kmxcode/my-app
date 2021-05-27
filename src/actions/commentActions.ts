import { Dispatch } from 'redux';
import { ISingleComment } from './../entities/comment';
import * as actionTypes from './types/commentTypes'

export const getComments = (): Promise<ISingleComment[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(respone => respone.json())
        .then((comments: ISingleComment[]) => {
            dispatch({
                type: actionTypes.GET_COMMENTS,
                comments: comments
            })
        })
}) as any;