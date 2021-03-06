import React from 'react';
import { RouteTransition, presets } from 'react-router-transition';

import PostItem from '../PostItem';
import NewPostButton from '../NewPostButton';
import { post as postPropType } from '../propTypes';

export default class PostsPage extends React.Component {
  static propTypes = {
    location: React.PropTypes.shape({
      pathname: React.PropTypes.string
    }),
    posts: React.PropTypes.arrayOf(postPropType),
    fetchPosts: React.PropTypes.func
  }
  static defaultProps = {
    posts: []
  }
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <section>
        <NewPostButton />
        <RouteTransition {...presets.pop} pathname={this.props.location.pathname}>
          {this.props.posts.map(post => <PostItem key={post._id} post={post} />)}
        </RouteTransition>
      </section>
    );
  }
}
