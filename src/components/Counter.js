import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './Counter.css';

export default class Counter extends Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    onIncrementClick: PropTypes.func.isRequired
  }

  render () {
    return (
        <li className={styles.counter}>
          <div><span>{this.props.number}</span></div>
        <div className={styles.friendActions}>
          <button className={`btn btn-default ${styles.btnAction}`} onClick={() => this.props.onIncrementClick()}>
            <i className={classnames('fa', { 'fa-plus': true })} />
          </button>
        </div>
        </li>
    );
  }

}
