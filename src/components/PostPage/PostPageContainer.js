import React from 'react';

import PostPage from './PostPage';

const post = {
  id: '1',
  title: 'Fixing an XSS vulnerability in marked',
  abstract: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus enim, eleifend ut ligula sed, congue convallis erat. Proin tristique imperdiet urna sed aliquam. Mauris molestie dui vel orci venenatis aliquet. Cras lacinia nec lacus quis finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus faucibus magna dapibus magna malesuada, ac auctor sapien volutpat. Praesent eu efficitur erat. Nunc eleifend non leo eu sodales.
  `,
  date: new Date().toDateString(),
  content: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus enim, eleifend ut ligula sed, congue convallis erat. Proin tristique imperdiet urna sed aliquam. Mauris molestie dui vel orci venenatis aliquet. Cras lacinia nec lacus quis finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus faucibus magna dapibus magna malesuada, ac auctor sapien volutpat. Praesent eu efficitur erat. Nunc eleifend non leo eu sodales. Ut consectetur varius mauris, et elementum tortor fermentum in. Proin dignissim dolor velit, sed interdum lectus semper in. Duis auctor suscipit orci, sed congue tellus porttitor vel. Maecenas quis sem placerat dui rutrum fringilla vitae ac enim. Donec feugiat nisl et lacus fringilla facilisis.
\n
Etiam tempor varius lorem, a mattis est sollicitudin id. Vivamus id ligula vulputate, convallis justo eget, luctus risus. Suspendisse eget lacinia metus. Sed malesuada bibendum mi in pharetra. Duis cursus accumsan posuere. Etiam mollis eros ac massa tempor efficitur. Vivamus ornare velit quis fermentum maximus. Nulla facilisi. Aenean sapien nibh, malesuada nec ornare eget, vulputate et libero. Morbi quis diam nec odio tincidunt commodo.
\n
Curabitur ultrices molestie justo non hendrerit. In ullamcorper enim ac mauris varius mattis. Aliquam blandit purus et sem congue rutrum vitae nec dui. Nulla et sem eget ante ornare dapibus vitae id dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam pulvinar massa at elit porta pharetra. In gravida urna eu vehicula dictum. Nulla pulvinar sed felis non vulputate. Cras sit amet sapien enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus in fermentum ligula, eu viverra dui.
\n
Nunc felis enim, pretium id consectetur vitae, bibendum ac ligula. Morbi sit amet dui hendrerit, faucibus ante a, feugiat sapien. Donec consectetur a neque sed eleifend. Fusce quis accumsan sapien. Ut tempus quis erat id fringilla. Curabitur porttitor, orci eu dignissim convallis, turpis leo placerat tortor, at suscipit erat ipsum blandit nisl. Sed ante lacus, accumsan sed nulla tempus, rhoncus iaculis eros. Integer at facilisis massa. Fusce vel mattis dolor, ut porttitor lectus.
\n
In hac habitasse platea dictumst. Aenean porttitor non ligula nec auctor. Praesent elit nisi, aliquam ut malesuada non, sodales porta neque. Nunc volutpat dui ante, sed molestie tortor ornare ut. Donec at nisl non nibh lacinia vestibulum. Etiam dignissim sollicitudin libero vel aliquam. Maecenas pretium lorem vel convallis lacinia. Cras dapibus felis vel condimentum eleifend. Nunc quis sem erat. Proin in felis fermentum, tincidunt nibh non, cursus dui. Mauris imperdiet quis odio congue ullamcorper. Nulla facilisi. Phasellus metus leo, ornare interdum mauris et, bibendum gravida risus. Suspendisse potenti.
  `
};

export default class PostPageContainer extends React.Component {
  render() {
    return <PostPage post={post} {...this.props} />;
  }
}
