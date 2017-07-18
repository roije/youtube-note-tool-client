import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import store, { history } from './redux/store'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const target = document.querySelector('#root')

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <App />
                </div>
            </ConnectedRouter>
        </Provider>
    </MuiThemeProvider>,
    target
)
registerServiceWorker();
