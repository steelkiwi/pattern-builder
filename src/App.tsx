import React, {Component} from 'react';
import {initialState, AppContext} from "./store";
import {Color} from "react-color";

interface Props {
    icons: string[];
    backgrounds?: string[];
}

interface State {
    patternIcons: string[];
    selectedBackground: Color;
}




class App extends Component<Props, State> {
    state = {
        patternIcons: [],
        selectedBackground: 'transparent',
    };

    addPatternIcon = (icon: string) => {
        this.setState(state => (
            {
                ...state,
                patternIcons: [...state.patternIcons, icon]
            }))
    };

    changeBackground = (background: Color) => {
        this.setState({selectedBackground: background})
    };



    render() {
        return (
            <AppContext.Provider value={
                {
                    state: this.state,
                    icons: this.props.icons || initialState.icons,
                    backgrounds: this.props.backgrounds || initialState.backgrounds,
                    handlers: {
                        addPatternIcon: this.addPatternIcon,
                        changeBackground: this.changeBackground,
                    }
                }
            }>
                {this.props.children}
            </AppContext.Provider>
        )
    }

}

export default App


