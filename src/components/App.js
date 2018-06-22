import React, { Component } from "react";
import SiteHeader from "./SiteHeader/index";
import Hero from "./Hero/index";
import Devider from "./Devider/index";

class App extends Component {
    render() {
        return (
            <div>
              <SiteHeader />
              <Hero />
              <Devider />
            </div>
        );
    }
}

export default App;
