import * as actionTypes from '../actions/types/workspacesTypes'
import { ISingleWorkspace } from './../entities/workspaces'

export interface IWorkspacesReducer {
    workspacesList: ISingleWorkspace[];
}

const defaultState = (): IWorkspacesReducer => ({
    workspacesList: [
        {
            id: 1,
            name: "Client contract",
            type: "Contract",
            usersCount: 150,
            lastUpdate: "2 days ago",
            imgSrc: "/icons/entities2.svg"
        },
        {
            id: 2,
            name: "Supplier contract",
            type: "Contract",
            usersCount: 25,
            lastUpdate: "2 days ago",
            imgSrc: "/icons/entities2.svg"
        },
        {
            id: 3,
            name: "Corporate",
            type: "Corporate",
            usersCount: 25,
            lastUpdate: "2 days ago",
            imgSrc: "/icons/entities2.svg"
        },
        {
            id: 4,
            name: "Group Norms",
            type: "Norms",
            usersCount: 25,
            lastUpdate: "2 days ago",
            imgSrc: "/icons/entities2.svg"
        },
        {
            id: 5,
            name: "Real estate contracts",
            type: "Contract",
            usersCount: 25,
            lastUpdate: "2 days ago",
            imgSrc: "/icons/entities2.svg"
        },
        {
            id: 6,
            name: "Client contract",
            type: "Contract",
            usersCount: 150,
            lastUpdate: "2 days ago",
            imgSrc: "/icons/entities2.svg"
        },
        {
            id: 7,
            name: "Supplier contract",
            type: "Contract",
            usersCount: 25,
            lastUpdate: "2 days ago",
            imgSrc: "/icons/entities2.svg"
        },
        {
            id: 8,
            name: "Corporate",
            type: "Corporate",
            usersCount: 25,
            lastUpdate: "2 days ago",
            imgSrc: "/icons/entities2.svg"
        },
        {
            id: 9,
            name: "Group Norms",
            type: "Norms",
            usersCount: 25,
            lastUpdate: "2 days ago",
            imgSrc: "/icons/entities2.svg"
        },
        {
            id: 10,
            name: "Real estate contracts",
            type: "Contract",
            usersCount: 25,
            lastUpdate: "2 days ago",
            imgSrc: "/icons/entities2.svg"
        }
    ]
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch (action.type) {

        case actionTypes.GET_WORKSPACES: {
            const paylod: actionTypes.IWorkspacesTypes['GET_WORKSPACES'] = action;
            return {
                ...state,
                workspacesList: paylod.workspacesList
            }
        }
        default: {
            return state
        }
    }
}