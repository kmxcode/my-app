import * as actionTypes from '../actions/types/imageTypes'
import { ISingleImage } from './../entities/image'

export interface IImageReducer {
    images: ISingleImage[];
    
}

const defaultState = (): IImageReducer => ({
    images: []
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch (action.type) {

        case actionTypes.GET_IMAGES: {
            const payload: actionTypes.IImageTypes['GET_IMAGES'] = action;
            return {
                ...state,
                images: payload.images,
            }
        }
        default: {
            return state
        }
    }
}