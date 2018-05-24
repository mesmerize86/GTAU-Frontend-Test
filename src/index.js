import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './pages/app';

const store = createStore(reducers,
  compose(
    applyMiddleware(thunk), 
    window.devToolsExtension && window.devToolsExtension()
  )
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));