import React from 'react';
import ReactDom from 'react-dom';

import Keyboard from './components/Keyboard/Keyboard.jsx';
import InputWPrediction from './components/InputWPrediction/InputWPrediction.jsx'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/reducer.jsx'



const store = createStore(reducer);

ReactDom.render(
    <Provider store={store}>
        <div>
            <InputWPrediction/>
            <Keyboard/>
        </div>
    </Provider>,
    document.getElementById('main')
);
