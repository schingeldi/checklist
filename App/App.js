import React, {Component } from 'react';
import {Provider } from 'react-redux';
import { createStore , applyMiddleware, compose  } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';
import ChecklistRouter from './components/ChecklistRouter';




function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware
        )
    );
    return createStore( reducer, initialState, enhancer );
}

const store = configureStore({});

export default class App extends Component {

    render() {
        return (
          <Provider store={store}>
              <ChecklistRouter />
          </Provider>
        );
    }

}

