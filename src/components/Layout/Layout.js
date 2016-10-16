import React from 'react';

import Header from '../Header';

export default class Layout extends React.Component {
  static propTypes = {
    children: React.PropTypes.object
  }
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
