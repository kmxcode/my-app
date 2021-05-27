import { Dispatch } from 'redux';
import { ISingleImage } from './../entities/image';
import * as actionTypes from './types/imageTypes'

export const getImages = (): Promise<ISingleImage[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then(respone => respone.json())
        .then((images: ISingleImage[]) => {
            dispatch({
                type: actionTypes.GET_IMAGES,
                images: images
            })
        })
}) as any;