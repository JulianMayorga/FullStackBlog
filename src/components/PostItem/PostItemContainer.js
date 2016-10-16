import React from 'react';

import PostItem from './PostItem';

const post = {
  id: '1',
  title: 'Title',
  abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus enim, eleifend ut ligula sed, congue convallis erat. Proin tristique imperdiet urna sed aliquam. Mauris molestie dui vel orci venenatis aliquet. Cras lacinia nec lacus quis finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus faucibus magna dapibus magna malesuada, ac auctor sapien volutpat. Praesent eu efficitur erat. Nunc eleifend non leo eu sodales. Ut consectetur varius mauris, et elementum tortor fermentum in. Proin dignissim dolor velit, sed interdum lectus semper in. Duis auctor suscipit orci, sed congue tellus porttitor vel. Maecenas quis sem placerat dui rutrum fringilla vitae ac enim. Donec feugiat nisl et lacus fringilla facilisis.',
  date: new Date().toDateString()
};

export default class PostItemContainer extends React.Component {
  render() {
    return <PostItem post={post} {...this.props} />;
  }
}
