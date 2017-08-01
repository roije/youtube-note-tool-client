/**
 * Created by Dk on 09-07-2017.
 */
import { CURRENT_NOTE_CHANGE, ADD_NOTE_TO_LIST, DELETE_NOTE_FROM_LIST } from './note-constants';

const initialState = {
    notes: [],
    currentNote: {
        text: "",
        time: 0
    }
};

export default (state = initialState, action) => {
    switch (action.type){
        case CURRENT_NOTE_CHANGE:
            return {
                ...state,
                currentNote: {
                    ...state.currentNote,
                    text: action.data.text,
                    time: action.data.time
                }
            };
        case ADD_NOTE_TO_LIST:
            return {
                ...state,
                notes: [...state.notes, action.data]
            };
        case DELETE_NOTE_FROM_LIST:
            return {
                ...state,
                notes: [
                    ...state.notes.slice(0, action.data),
                    ...state.notes.slice(action.data + 1)
                ]
            }
        default:
            return state;
    }
}