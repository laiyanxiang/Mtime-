import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import {Provider} from 'react-redux'
import store from './store/index';
ReactDOM.render(
(
    <ErrorBoundary>
        <Provider store={store}>
            <App />
        </Provider>
    </ErrorBoundary>
), 
document.getElementById('root')
);


serviceWorker.unregister();
