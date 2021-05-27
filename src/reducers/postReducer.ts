import * as actionTypes from '../actions/types/postTypes'
import { ISinglePost } from './../entities/post'

export interface IPostReducer {
    postsList: ISinglePost[];
    lastestPostList: ISinglePost[];
    latestPost: ISinglePost | null;
    
}

const defaultState = (): IPostReducer => ({
    postsList: [],
    lastestPostList: [],
    latestPost: null
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch (action.type) {

        case actionTypes.GET_POSTS: {
            const paylod: actionTypes.IPostTypes['GET_POSTS'] = action;
            return {
                ...state,
                postsList: paylod.postsList,
                lastestPostList: 
                    [...paylod.postsList]
                        .reverse(),
                latestPost: 
                    [...paylod.postsList]
                        .reverse()    
                        .shift()
            }
        }
        default: {
            return state
        }
    }
}