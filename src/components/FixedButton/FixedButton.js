import React from 'react';

import Button from '../Button';

import './FixedButton.scss';

export default class FixedButton extends React.Component {
  static propTypes = {
    children: React.PropTypes.any
  }
  render() {
    return (
      <div className="FixedButton">
        <Button {...this.props}>{this.props.children}</Button>
      </div>
    );
  }
}
