import React, { Component } from 'react';

import './styles.css';

class PrimaryNav extends Component {
  constructor(props) {
    super(props);
    this.classes = this.props.classes.join(' ');
    this.links = [
      { name:"About", href:"#" },
      { name:"Portfolio", href:"#" },
      { name:"Contact", href:"#" },
      { name:"Blog", href:"#" }
    ];
  }

  render() {
    return (
      <div className={this.classes}>
        <ul>
          {this.links.map((link, index) => {
            return <li key={ index }><a href={ link.href }>{ link.name }</a></li>
          })}
        </ul>
      </div>
    );
  }
}

export default PrimaryNav;
