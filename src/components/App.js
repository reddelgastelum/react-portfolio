import React, { Component } from "react";
import SiteHeader from "./SiteHeader/index";
import Hero from "./Hero/index";

class App extends Component {
    render() {
        return (
            <div>
              <SiteHeader />
              <Hero />
            </div>  
        );
    }
}

export default App;
