import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import CounterApp from './CounterApp';
import * as reducers from '../reducers';

import {incrementCounter} from '../actions/Actions';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <CounterApp /> }
        </Provider>
      </div>
    );
  }
}
