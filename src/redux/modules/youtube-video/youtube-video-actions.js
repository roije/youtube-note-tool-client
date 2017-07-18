/**
 * Created by Dk on 07-07-2017.
 */
import { UPDATE_VALUE_IN_FIELD, SET_PLAYER_OBJECT, SET_VIDEO_ID, SET_VALID_VALUE } from './youtube-video-constants';

export const updateYoutubeVideoLink = (data) => {
    return {
        type: UPDATE_VALUE_IN_FIELD,
        data
    }
};

export const setPlayerObject = (object) => {
    return{
        type: SET_PLAYER_OBJECT,
        object
    }
};

export const setVideoId = (id) => {
    return{
        type: SET_VIDEO_ID,
        id
    }
}

export const setValidValue = (boolean) => {
    return{
        type: SET_VALID_VALUE,
        boolean
    }
}