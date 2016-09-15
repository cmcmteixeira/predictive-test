import React from 'react';
import ReactDom from 'react-dom';

import Keyboard from './components/Keyboard/Keyboard.jsx';
import InputWPrediction from './components/InputWPrediction/InputWPrediction.jsx'
ReactDom.render(
    <div>
        <InputWPrediction/>
        <Keyboard/>
    </div>,
    document.getElementById('main')
);
