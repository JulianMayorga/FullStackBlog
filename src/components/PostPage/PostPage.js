import React from 'react';
import { RouteTransition, presets } from 'react-router-transition';
import { MegadraftEditor, editorStateFromRaw } from 'megadraft';

import NewPostButton from '../NewPostButton';
import { post as postPropType } from '../propTypes';

import '../../../node_modules/megadraft/lib/styles/megadraft.scss';
import './PostPage.scss';

export default class PostPage extends React.Component {
  static propTypes = {
    post: postPropType,
    location: React.PropTypes.shape({
      pathname: React.PropTypes.string
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      value: editorStateFromRaw(props.post.editorState)
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(value) {
    this.setState({ value });
  }
  render() {
    return (
      <section>
        <NewPostButton />
        <RouteTransition className="PostPage" {...presets.pop} pathname={this.props.location.pathname}>
          <MegadraftEditor
            readOnly
            editorState={this.state.value}
            onChange={this.onChange}
            />
        </RouteTransition>
      </section>
    );
  }
}
