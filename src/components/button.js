import React from "react";
import LanguageContext from "../contexts/languageContext";
import ColorContext from "../contexts/colorContext";

class Button extends React.Component {
  renderButtonText(value) {
    return value === "english" ? "Submit" : "voorleggen";
  }

  renderSubmitButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderButtonText(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderSubmitButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
