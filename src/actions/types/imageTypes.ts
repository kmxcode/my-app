import { ISingleImage } from './../../entities/image';

export const GET_IMAGES = 'GET_IMAGES'

export interface IImageTypes {
    GET_IMAGES: {
        images: ISingleImage[];
    }
}