import { ISinglePost } from './../../entities/post';

export const GET_POSTS = 'GET_POSTS'

export interface IPostTypes {
    GET_POSTS: {
        postsList: ISinglePost[];
    }
}