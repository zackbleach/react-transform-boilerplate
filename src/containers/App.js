import React, { Component } from 'react';
import { compose, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';


import CounterApp from './CounterApp';
import * as reducers from '../reducers';

import {incrementCounter} from '../actions/Actions';

const reducer = combineReducers(reducers);

// TODO: refactor this out to own class which switches on config
const finalCreateStore = compose(
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const store = finalCreateStore(reducer);


export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <CounterApp /> }
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    );
  }
}
