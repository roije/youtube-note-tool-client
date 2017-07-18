/**
 * Created by Dk on 07-07-2017.
 */
import { UPDATE_VALUE_IN_FIELD, SET_PLAYER_OBJECT, SET_VALID_VALUE, SET_VIDEO_ID } from './youtube-video-constants';

const initialState = {
    valueInField: "",
    player: null,
    videoId: null,
    isValid: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_VALUE_IN_FIELD:
            return {
                ...state,
                valueInField: action.data
            };
        case SET_PLAYER_OBJECT:
            return{
                ...state,
                player: action.object
            };
        case SET_VIDEO_ID:
            return{
                ...state,
                videoId: action.id
            };
        case SET_VALID_VALUE:
            return {
                ...state,
                isValid: action.boolean
            }
        default:
            return state
    }
}