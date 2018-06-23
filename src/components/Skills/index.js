import React, { Component } from 'react';
import Wrapper from '../Wrapper/index';

import './styles.css';

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <Wrapper>
          <div className="rw">
            <div className="skills__main-box">
              <div className="rw__medium-4 skills__item-box">
                <h4 className="skills__title">Front-end</h4>
                <p className="skills__content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              <div className="rw__medium-4 skills__item-box">
                <h4 className="skills__title">Back-end</h4>
                <p className="skills__content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              <div className="rw__medium-4 skills__item-box">
                <h4 className="skills__title">Tools</h4>
                <p className="skills__content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default Skills;
