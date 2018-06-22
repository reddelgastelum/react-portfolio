import React, { Component } from 'react';
import Wrapper from '../Wrapper/index';

import './styles.css';

class PageSection extends Component {
  constructor(props) {
    super(props);
    this.classes = this.props.classes.join(' ');
  }

  render() {
    return (
      <div className={ "page-section " + this.classes }>
        <Wrapper>
          { this.props.children }
        </Wrapper>
      </div>
    );
  }
}

export default PageSection;
