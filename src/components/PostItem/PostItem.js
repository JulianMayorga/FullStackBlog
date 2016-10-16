import React from 'react';
import { Link } from 'react-router';

import { post as postPropType } from '../propTypes';

import './PostItem.scss';

export default class PostItem extends React.Component {
  static propTypes = {
    post: postPropType,
  }
  render() {
    return (
      <section className="PostItem panel panel-default">
        <section className="panel-body">
          <h1><Link className="PostItem__Title" to={`/posts/${this.props.post._id}`}>{this.props.post.editorState.blocks[0].text}</Link></h1>
          <span className="PostItem__Date">{new Date(this.props.post.date).toDateString()}</span>
        </section>
        <Link className="PostItem__ReadMore" to={`/posts/${this.props.post._id}`}>Read more...</Link>
      </section>
    );
  }
}
