import { Dispatch } from 'redux';
import { ISinglePost } from './../entities/post';
import * as actionTypes from './types/postTypes'

export const getPosts = (): Promise<ISinglePost[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(respone => respone.json())
        .then((postsList: ISinglePost[]) => {
            dispatch({
                type: actionTypes.GET_POSTS,
                postsList: postsList
            })
        })
}) as any;