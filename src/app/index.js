import React from 'react';
import ReactDOM from 'react-dom';
import App from "../client/presentation/components/App";

// const store = createStore(todoAppReducer);

ReactDOM.render(
    // <Provider store={store}>
    <App />,
    //*</Provider>,
    document.getElementById('root')
);

if (typeof (module.hot) !== 'undefined') {
    module.hot.accept();
}
