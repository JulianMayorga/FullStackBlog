import React from 'react';

import FixedButton from '../FixedButton';

export default class Layout extends React.Component {
  static propTypes = {
    router: React.PropTypes.shape({
      push: React.PropTypes.func.isRequired
    }).isRequired
  }
  render() {
    return (
      <div>
        <FixedButton
          className="btn"
          onClick={() => this.props.router.push('/new-post')}
          >
          {'{ Write }'}
        </FixedButton>
      </div>
    );
  }
}
