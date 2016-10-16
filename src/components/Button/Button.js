import React from 'react';
import classNames from 'classnames';

import './Button.scss';

export default class Button extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func,
    children: React.PropTypes.any
  }
  render() {
    return (
      <button className={classNames('Button', this.props.className)} onClick={this.props.onClick}>{this.props.children}</button>
    );
  }
}
