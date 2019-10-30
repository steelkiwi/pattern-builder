import React, {Component, createRef} from 'react';
import {Color} from "react-color";

import {AppContext} from "./store";
import {getRGBAString} from "./helpers";
import './index.scss'

interface Props {
  icons: string[];
  backgrounds?: string[];
  onDownload?: (img: string) => void;
}

interface State {
  patternIcons: string[];
  selectedBackground: Color;
}

export default class App extends Component<Props, State> {
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
    const {onDownload, icons, backgrounds, children} = this.props;
    return (
      <AppContext.Provider value={
        {
          state: this.state,
          icons: icons,
          backgrounds: backgrounds,
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
          {children}
        </div>
      </AppContext.Provider>
    )
  }
}
