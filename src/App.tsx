import React, {Component, createRef} from 'react';
import {initialState, AppContext} from "./store";
import {Color} from "react-color";
import './index.scss'
import {getRGBAString} from "./helpers/helpers";

interface Props {
    icons: string[];
    backgrounds?: string[];
    onDownload?: (img: string) => void;
}

interface State {
    patternIcons: string[];
    selectedBackground: Color;
}


class App extends Component<Props, State> {
    state = {
        patternIcons: [],
        selectedBackground: 'green',
    };

    canvasRef = createRef<HTMLDivElement>();

    addPatternIcon = (icon: string) => {
        this.setState(state => (
            {
                ...state,
                patternIcons: [...state.patternIcons, icon]
            }))
    };

    changeBackground = (background: any) => {
        const {rgb} = background;
        this.setState({selectedBackground: getRGBAString(rgb)})
    };



    render() {
        const { onDownload } = this.props;
        return (
            <AppContext.Provider value={
                {
                    state: this.state,
                    icons: this.props.icons || initialState.icons,
                    backgrounds: this.props.backgrounds || initialState.backgrounds,
                    canvasRef: this.canvasRef,
                    handlers: {
                        addPatternIcon: this.addPatternIcon,
                        changeBackground: this.changeBackground,
                    },
                    callbacks: {
                        onDownload
                    }
                }
            }>
                <div className="pb__wrapper">
                    {this.props.children}
                </div>
            </AppContext.Provider>
        )
    }
}

export default App


