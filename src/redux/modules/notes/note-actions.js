/**
 * Created by Dk on 09-07-2017.
 */
import { CURRENT_NOTE_CHANGE, ADD_NOTE_TO_LIST, DELETE_NOTE_FROM_LIST } from './note-constants';

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

export const deleteNoteFromList = (data) => {
    console.log(data);
    return {
        type: DELETE_NOTE_FROM_LIST,
        data
    }
}