import React from "react";

const Context = React.createContext("english");

class LanguageStore extends React.Component {
    state = { lang: "english" }

    onLanguageChange = (lang) => {
        this.setState({lang})
    }
    render() { 
        return ( <Context.Provider /> );
    }
}
 
export default LanguageStore;
