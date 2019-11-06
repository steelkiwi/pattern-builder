import React, {Component, createRef} from 'react';
import {Color} from "react-color";

import {AppContext} from "./store";
import {getRGBAString} from "./helpers";
import './Index.scss'

interface Props {
    icons: string[];
    backgrounds?: string[];
    imageSize?: number
    imageOffset?: number;
    onDownload?: (img: string) => void;
}

interface State {
    patternIcons: string[];
    selectedBackground: Color;
    imageSize: number
}

export default class App extends Component<Props, State> {
    state = {
        patternIcons: [],
        selectedBackground: 'green',
        imageSize: this.props.imageSize || 55

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

    changeImageSize = (value: number) => {
        this.setState(state => ({
            ...state,
            imageSize: value
        }))
    };


    render() {
        const {onDownload, icons, backgrounds, imageOffset, children} = this.props;
        return (
            <AppContext.Provider value={
                {
                    state: this.state,
                    icons: icons,
                    backgrounds: backgrounds,
                    imageOffset: imageOffset,
                    canvasRef: this.canvasRef,
                    handlers: {
                        addPatternIcon: this.addPatternIcon,
                        changeBackground: this.changeBackground,
                        changeImageSize: this.changeImageSize,
                    },
                    callbacks: {
                        onDownload
                    }
                }
            }>
                <div className="pb__wrapper">
                    {children}
                </div>
            </AppContext.Provider>
        )
    }
}
