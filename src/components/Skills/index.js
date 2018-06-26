import React, { Component } from 'react';
import Wrapper from '../Wrapper/index';

import './styles.css';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.boxes = [
      { title:"Front-end", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever.", icon:"fas fa-code", subtitle:"Front-end tools", tools:["HTML", "CSS", "Javascript", "JQuery", "React"] },
      { title:"Back-end", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the, when an unknown printer.", icon:"fas fa-database", subtitle:"Back-end tools", tools:["Node.js", "Express", "MongoDB"] },
      { title:"Tools", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", icon:"fas fa-toolbox", subtitle:"Other tools:", tools:["Command Line", "Git", "NPM"] }
    ];
  }

  render() {
    return (
      <div className="skills">
        <Wrapper>
          <div className="rw rw--equal-height-at-medium">
            <div className="skills__main-box">
              { this.boxes.map((box, index) => {
                return (
                  <div key={ index } className="rw__medium-4 skills__item-box">
                    <i className={ "skills__icon " + box.icon } aria-hidden="true"></i>
                    <h4 className="skills__title">{ box.title }</h4>
                    <p className="skills__content">{ box.content }</p>
                    <h5 className="skills__subtitle">{ box.subtitle }</h5>
                    { box.tools.map((tool, index) => {
                      return (
                        <p key={ index } className="skills__tools">{ tool }</p>
                      )
                    }) }
                  </div>
                )
              }) }
            </div>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default Skills;
