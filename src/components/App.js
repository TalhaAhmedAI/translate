import React from "react";
import UserCreate from "./userCreate";

class App extends React.Component {
  state = { lang: "english" };

  onLanguageChange = (lang) => {
    this.setState({ lang });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select a language
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
