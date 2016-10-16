import React from 'react';
import { Link } from 'react-router';

import './PostItem.scss';

export default class PostItem extends React.Component {
  static propTypes = {
    post: React.PropTypes.object,
  }
  render() {
    return (
      <section className="PostItem panel panel-default">
        <section className="panel-body">
          <h1><Link className="PostItem__Title" to={`/posts/${this.props.post.id}`}>{this.props.post.title}</Link></h1>
          <span className="PostItem__Date">{this.props.post.date}</span>
        </section>
        <Link className="PostItem__ReadMore" to={`/posts/${this.props.post.id}`}>Read more...</Link>
      </section>
    );
  }
}
