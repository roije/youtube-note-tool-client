/**
 * Created by Dk on 07-07-2017.
 */
import { SAY_HELLO, SAY_HELLO_REQUESTED } from './test-constants';

const words = ["John", "Kat", "Hahahaha", "LOL", "HEYEYE"]

const initialState = {
    saying: words[Math.floor((Math.random()* words.length - 1) + 1)],
    isIncrementing: false,
    isDecrementing: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SAY_HELLO_REQUESTED:
            return state;
        case SAY_HELLO:
            return {
                ...state,
                saying: words[Math.floor((Math.random()* words.length -1) + 1)]
            }

        default:
            return state
    }
}