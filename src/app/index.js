import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../client/presentation/App';
import { reducer as todoAppReducer } from '../client/business/reducers/reducer';

const store = createStore(todoAppReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);

if (typeof (module.hot) !== 'undefined') {
    module.hot.accept();
    // store.replaceReducer(require('../client/business/reducers/reducer').default);
    // if (window.__REDUX_DEVTOOLS_EXTENSION__) window.__REDUX_DEVTOOLS_EXTENSION__.updateStore(store);
}
