import React from 'react';
import { RouteTransition, presets } from 'react-router-transition';

import PostItem from '../PostItem';
import NewPostButton from '../NewPostButton';

export default class PostsPage extends React.Component {
  static propTypes = {
    location: React.PropTypes.shape({
      pathname: React.PropTypes.string
    })
  }
  render() {
    return (
      <section>
        <NewPostButton />
        <RouteTransition {...presets.pop} pathname={this.props.location.pathname}>
          <PostItem />
          <PostItem />
        </RouteTransition>
      </section>
    );
  }
}
