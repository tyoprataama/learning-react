import React from "react";
import ThemedButton from "../contexts/ThemeBtn";
import { ThemeContext, themes } from "../contexts/ThemeContext";

function Toolbarr(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    );
}
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            theme: themes.light,
        };
        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                state.theme === themes.dark
                ? themes.light
                : themes.dark,
            }));
        };
    }
    render () {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbarr/>
                </ThemeContext.Provider>
                <div>
                    <ThemedButton/>
                </div>
            </div>
        )
    }
}

export default Main;