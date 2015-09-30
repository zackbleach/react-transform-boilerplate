import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/Actions';
import { Counter } from '../components';
import { connect } from 'react-redux';

@connect(state => ({
    counter: state.counter
}))

export default class CounterApp extends Component {

    static propTypes = {
        counter: PropTypes.number.isRequired,
        dispatch: PropTypes.func.isRequired
    }

  render () {
      const { counter, dispatch } = this.props;
      const actions = bindActionCreators(Actions, dispatch);

      return (
              <div>
                <h1>Counter</h1>
                <Counter number={counter} onIncrementClick={actions.incrementCounter} actions={actions} />
            </div>
    );
  }
}
