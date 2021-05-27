import { combineReducers } from 'redux';

import users, { IUsersReducer } from './usersReducer';
import workspaces, { IWorkspacesReducer } from './workspacesReducer';
import platforms, { IPlatformsReducer } from './platformsReducer';
import posts, { IPostReducer } from './postReducer';
import images, { IImageReducer } from './imageReducer'
import comments, { ICommentReducer } from './commentReducer'

export default combineReducers({
    comments,
    images,
    users,
    workspaces,
    platforms,
    posts
})

export interface IState {
    comments: ICommentReducer;
    images: IImageReducer;
    users: IUsersReducer;
    workspaces: IWorkspacesReducer;
    platforms: IPlatformsReducer;
    posts: IPostReducer;
}