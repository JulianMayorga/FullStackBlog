import React from 'react';

import { MegadraftEditor, editorStateFromRaw } from 'megadraft';

import FixedButton from '../FixedButton';

import '../../../node_modules/megadraft/lib/styles/megadraft.scss';
import './NewPostPage.scss';

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

export default class NewPostPage extends React.Component {
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
      <div className="NewPostPage">
        <FixedButton className="btn btn-success NewPostPage__Button">Publish</FixedButton>
        <MegadraftEditor
          editorState={this.state.value}
          onChange={this.onChange}
          />
      </div>
    );
  }
}
