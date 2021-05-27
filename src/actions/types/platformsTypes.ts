import { ISinglePlatform } from './../../entities/platforms';

export const GET_PLATFORMS = 'GET_PLATFORMS'

export interface IPlatformsTypes {
    GET_PLATFORMS: {
        platformsList: ISinglePlatform[];
    }
}