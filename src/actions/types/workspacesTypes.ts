import { ISingleWorkspace } from './../../entities/workspaces';

export const GET_WORKSPACES = 'GET_WORKSPACES'

export interface IWorkspacesTypes {
    GET_WORKSPACES: {
        workspacesList: ISingleWorkspace[];
    }
}