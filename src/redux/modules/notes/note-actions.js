/**
 * Created by Dk on 09-07-2017.
 */
import { CURRENT_NOTE_CHANGE, ADD_NOTE_TO_LIST } from './note-constants';

export const currentNoteChange = (data) => {
    return {
        type: CURRENT_NOTE_CHANGE,
        data : {
            text: data.text,
            time: data.time
        }
    }
};

export const addNoteToList = (data) => {
    return {
        type: ADD_NOTE_TO_LIST,
        data
    }
};