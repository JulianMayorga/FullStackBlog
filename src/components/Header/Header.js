import React from 'react';
import { Link } from 'react-router';

import './Header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__Title"><Link to="/">Full Stack Blog</Link></div>
      </div>
    );
  }
}
