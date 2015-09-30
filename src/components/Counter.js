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
        <div>
        <div className={styles.friendInfos}>
          <div><span>{this.props.number}</span></div>
        </div>
        <div className={styles.friendActions}>
          <button className={`btn btn-default ${styles.btnAction}`} onClick={() => this.props.onIncrementClick()}>
          </button>
        </div>
        </div>
    );
  }

}
