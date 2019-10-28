import React from 'react';

interface Props {
    icons: string[];
    backgrounds: string[];
}

interface State {
    selectedIcons: string[];
    selectedBackground: string;
}

const initialState: State = {
    selectedIcons: [],
    selectedBackground: 'transparent',
};

const AppContext = React.createContext(initialState);

class App extends React.Component<Props, State> {
    state = {
        ...initialState,
    };

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default App


