import React, { Component } from 'react';
import Wrapper from '../Wrapper/index';
import PrimaryNav from '../PrimaryNav/index';

import './styles.css';

class SiteHeader extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {"showHideNav":"", "closeX":""};
  }

  render() {
    return (
      <header className="site-header">
        <Wrapper classes={["wrapper--no-padding-until-medium"]}>
          <div className="site-header__logo"><strong>O</strong></div>
          <div className={"site-header__menu-icon " + this.state.closeX} onClick={this.toggleNav}>
            <div className="site-header__menu-icon__middle"></div>
          </div>
          <div className={"site-header__menu-content " + this.state.showHideNav}>
            <PrimaryNav classes={["primary-nav", "primary-nav--pull-right"]}></PrimaryNav>
          </div>
        </Wrapper>
      </header>
    );
  }

  toggleNav() {
    var showHideNav = (this.state.showHideNav === "") ? "site-header__menu-content--show" : "";
    var closeX = (this.state.closeX === "") ? "site-header__menu-icon--close-x" : "";
    this.setState({"showHideNav":showHideNav, "closeX":closeX});
  }
}

export default SiteHeader;
