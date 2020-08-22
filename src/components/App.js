import React from "react";
import UserCreate from "./userCreate";
import languageContext from "../contexts/languageContext";
import ColorContext from "../contexts/colorContext";
import LanguageSelector from "./languageSelector";

class App extends React.Component {
  state = { lang: "english", color: "primary" };

  onFlagChange = (lang, color) => {
    this.setState({ lang, color });
  };
  render() {
    return (
      <div className="ui container">
        <LanguageSelector onFlagChange={this.onFlagChange} />
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
