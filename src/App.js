import React, { Component } from "react";
import ContactCard from "./ContactCards";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <ContactCard
          name="Jonathan"
          mobile="261894244"
          work="35097123647"
          email="jonathan@example.com"
        />
        <ContactCard
          name="Joseph"
          mobile="482158291"
          work="126412044"
          email="joseph@example.com"
        />
        <ContactCard
          name="Jotaro"
          mobile="818492184"
          work="78326581"
          email="jotaro@example.com"
        />
      </>
    );
  }
}

export default App;