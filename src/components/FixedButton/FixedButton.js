import React from 'react';

import './FixedButton.scss';

export default class FixedButton extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.any,
    onClick: React.PropTypes.func
  }
  render() {
    return (
      <div className="FixedButton">
        <button onClick={this.props.onClick} className={this.props.className}>{this.props.children}</button>
      </div>
    );
  }
}
