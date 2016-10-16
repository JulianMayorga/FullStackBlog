import React from 'react';
import { MegadraftEditor, editorStateFromRaw } from 'megadraft';

import NewPostButton from '../NewPostButton';

import '../../../node_modules/megadraft/lib/styles/megadraft.scss';
import './PostPage.scss';

const initial = {
  entityMap: {},
  blocks: [
    {
      'key': 'ag6qs',
      'text': 'Title',
      'type': 'header-two',
      'depth': 0,
      'inlineStyleRanges': [],
      'entityRanges': []
    },
    {
      'key': '59kd9',
      'text': 'Tell your story...',
      'type': 'unstyled',
      'depth': 0,
      'inlineStyleRanges': [],
      'entityRanges': []
    }
  ]
};

export default class PostPage extends React.Component {
  static propTypes = {
    post: React.PropTypes.object,
  }
  constructor(props) {
    super(props);
    this.state = {
      value: editorStateFromRaw(initial)
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(value) {
    this.setState({ value });
  }
  render() {
    return (
      <section className="PostPage">
        <NewPostButton />
        <MegadraftEditor
          readOnly
          editorState={this.state.value}
          onChange={this.onChange}
          />
      </section>
    );
  }
}
