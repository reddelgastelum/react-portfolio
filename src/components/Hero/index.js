import React, { Component } from 'react';
import Wrapper from '../Wrapper/index';

import './styles.css';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <Wrapper>
          <div className="hero__content">
            <h1 className="hero__title">Full-Stack Web Developer</h1>
            <h3 className="hero__subtitle">I build front to back web applications with Javascript.</h3>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default Hero;
