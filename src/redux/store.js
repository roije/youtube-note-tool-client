/**
 * Created by Dk on 07-07-2017.
 */
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules/index'

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
    thunk,
    logger,
    routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(
    rootReducer,
    composedEnhancers
)

export default store