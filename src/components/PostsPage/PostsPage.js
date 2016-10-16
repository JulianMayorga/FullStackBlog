import React from 'react';

import PostItem from '../PostItem';
import NewPostButton from '../NewPostButton';

export default class PostsPage extends React.Component {
  render() {
    return (
      <div>
        <NewPostButton />
        <PostItem />
        <PostItem />
      </div>
    );
  }
}
