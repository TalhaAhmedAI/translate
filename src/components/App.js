import React from "react";
import UserCreate from "./userCreate";
import languageContext from "../contexts/languageContext";
import ColorContext from "../contexts/colorContext";

class App extends React.Component {
  state = { lang: "english", color: "primary" };

  onFlagChange = (lang, color) => {
    this.setState({ lang, color });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select a language
          <i
            className="flag us"
            onClick={() => this.onFlagChange("english", "primary")}
          />
          <i
            className="flag nl"
            onClick={() => this.onFlagChange("dutch", "red")}
          />
        </div>
        <ColorContext.Provider value={this.state.color}>
          <languageContext.Provider value={this.state.lang}>
            <UserCreate />
          </languageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
