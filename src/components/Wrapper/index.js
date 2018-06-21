import React, { Component } from 'react';

import './styles.css';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    if (this.props.classes !== undefined) {
      this.classes = this.props.classes.join(' ');
    }

  }

  render() {
    return (
      <div className={"wrapper " + this.classes}>
        {this.props.children}
      </div>
    );
  }
}

export default Wrapper;
