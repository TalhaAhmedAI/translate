import React from "react";
import languageContext from "../contexts/languageContext";

class Field extends React.Component {
  renderText(value) {
    return value === "english" ? "Name" : "Naam";
  }
  render() {
    return (
      <div className="ui field">
        <label>
          <languageContext.Consumer>
            {(value) => this.renderText(value)}
          </languageContext.Consumer>
        </label>
        <input />
      </div>
    );
  }
}

export default Field;
