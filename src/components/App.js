import React, { Component } from "react";
import SiteHeader from "./SiteHeader/index";
import Hero from "./Hero/index";
import Devider from "./Devider/index";
import PageSection from "./PageSection/index";
import About from "./About/index";

class App extends Component {
    render() {
        return (
            <div>
              <SiteHeader />
              <Hero />
              <Devider />
              <PageSection classes={["page-section--double-padding", "page-section--blue"]}>
                <About />
              </PageSection>
            </div>
        );
    }
}

export default App;
