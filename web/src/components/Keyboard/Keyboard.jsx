import React from 'react'
import Key from './Key/Key.jsx'
import config from '../../config/config.js'
import './Keyboard.scss'

import _ from 'lodash';


class Keyboard extends React.Component{

    constructor(){
        super();
        this.state = {text: ''}
    }

    onKeyClick(keyIndex){
        this.setState((iState) => {
            return {text: iState.text + keyIndex}
        })
    }

    render() {
        const keys = _.map(_.zip(config.mappings,_.range(1,config.mappings.length+1)), (keyIndex) => {
            const letters = keyIndex[0], index=keyIndex[1];
            return <Key letters={letters} key={index} number={index} onClick={this.onKeyClick.bind(this,index)}/>
        });

        return (
            <div>
                <div className="pred-keyboard">
                    {keys}
                </div>
            </div>
        )
    }
}

export default Keyboard