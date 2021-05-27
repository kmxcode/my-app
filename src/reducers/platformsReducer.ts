import * as actionTypes from '../actions/types/platformsTypes'
import { ISinglePlatform } from './../entities/platforms'

export interface IPlatformsReducer {
    platformsList: ISinglePlatform[];
}

const defaultState = (): IPlatformsReducer => ({
    platformsList: [
        {
            url: "/home",
            imgSrc: "/icons/house2.svg",
            name: "Home"
        },
        {
            url: "/publications",
            imgSrc: "/icons/publications.svg",
            name: "Publications"
        },
        {
            url: "/people",
            imgSrc: "/icons/people.svg",
            name: "People"
        },
        {
            url: "/entities",
            imgSrc: "/icons/entities2.svg",
            name: "Entities"
        },
        {
            url: "/administration",
            imgSrc: "/icons/administration.svg",
            name: "Administration"
        },
        
    ]
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch (action.type) {

        case actionTypes.GET_PLATFORMS: {
            const paylod: actionTypes.IPlatformsTypes['GET_PLATFORMS'] = action;
            return {
                ...state,
                platformsList: paylod.platformsList
            }
        }
        default: {
            return state
        }
    }
}