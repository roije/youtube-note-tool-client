/**
 * Created by Dk on 07-07-2017.
 */
import { SAY_HELLO, SAY_HELLO_REQUESTED } from './test-constants';

export const saySomething = () => {
    return dispatch => {
        dispatch({
            type: SAY_HELLO_REQUESTED
        })

        dispatch({
            type: SAY_HELLO
        })
    }
}