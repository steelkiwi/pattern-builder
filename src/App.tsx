import React, {Component, createRef} from 'react';
import {initialState, AppContext} from "./store";
import {Color} from "react-color";

interface Props {
    icons: string[];
    backgrounds?: string[];
}

interface State {
    patternIcons: string[];
    selectedBackground: Color;
    canvasWidth: number;
    canvasHeight: number;
    canvasStage?: HTMLDivElement
}
React.createRef<HTMLDivElement>();



class App extends Component<Props, State> {
    state = {
        patternIcons: [],
        selectedBackground: 'transparent',
        canvasWidth: 55,
        canvasHeight: 55,
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


