import React, { Component } from 'react';
import Wrapper from '../Wrapper/index';

import './styles.css';

class Devider extends Component {
  render() {
    return (
      <div className="devider">
        <Wrapper>
          <div className="devider__content">
            <div className="devider__content-container">
              <a href="#"><i class="fab fa-linkedin"></i></a>
              <a href="#"><i class="fab fa-github"></i></a>
              <a href="#"><i class="fab fa-twitter-square"></i></a>
            </div>
          </div>
        </Wrapper>
      </div>

    );
  }
}

export default Devider;
