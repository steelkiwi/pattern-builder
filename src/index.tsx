import React from 'react';
import ReactDOM from 'react-dom';
import PatternBuilder from './App';


import Controls from "./Controls";
import Canvas from './Canvas';

ReactDOM.render(
        <PatternBuilder
            backgrounds={[
                '#FF6900',
                '#FCB900',
                '#7BDCB5',
            ]}
            icons={[
            'data:image/png;base64,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',
            ]}
        >
            <Controls/>
            <Canvas/>
        </PatternBuilder>
    , document.getElementById('root'));

