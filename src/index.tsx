import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import Controls from "./Controls";
import Canvas from "./Canvas";

ReactDOM.render(
        <App icons={[
            'https://image.flaticon.com/icons/svg/1383/1383676.svg',
            'https://image.flaticon.com/icons/svg/1863/1863344.svg',
            'https://image.flaticon.com/icons/svg/25/25680.svg']}
             >
            <Canvas  />
            <Controls/>
        </App>
, document.getElementById('root'));

