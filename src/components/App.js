import React, { Component } from "react";
import SiteHeader from "./SiteHeader/index";
import Hero from "./Hero/index";
import Devider from "./Devider/index";
import PageSection from "./PageSection/index";
import About from "./About/index";
import Skills from "./Skills/index";

class App extends Component {
    render() {
        return (
            <div>
              <SiteHeader />
              <Hero />
              <PageSection classes={["page-section--dark-blue"]}>
                <About />
              </PageSection>
              <Skills />
            </div>
        );
    }
}

export default App;
