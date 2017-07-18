/**
 * Created by Dk on 07-07-2017.
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import  testReducer  from './test/test-reducer'
import youtubeVideoLinkReducer from './youtube-video/youtube-video-reducer';
import noteReducer from './notes/note-reducer';

export default combineReducers({
    routing: routerReducer,
    testReducer,
    youtubeVideoLinkReducer,
    noteReducer
})