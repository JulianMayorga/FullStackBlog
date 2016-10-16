import React from 'react';
import { Route, IndexRoute} from 'react-router';
import Layout from './components/Layout';
import PostsPage from './components/PostsPage';
import PostPage from './components/PostPage';
import NewPostPage from './components/NewPostPage';

export default () => {
  return (
    <Route component={Layout} path="/">
      <IndexRoute component={PostsPage} />
      <Route path="/new-post" component={NewPostPage} />
      <Route path="/posts/:postId" component={PostPage} />
    </Route>
  );
};
