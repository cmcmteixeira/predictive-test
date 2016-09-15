import React from 'react'
import {connect} from 'react-redux';
import _ from 'lodash';


import Key from './Key/Key.jsx'
import config from '../../config/config.js'
import {keyPressed} from '../../actions/action.jsx'


import './Keyboard.scss'


class Keyboard extends React.Component{


    onKeyClick(keyIndex){
        keyPressed(this.props.sequence,keyIndex).then((action) => {
            this.props.dispatch(action);
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
Keyboard.propTypes ={
    sequence : React.PropTypes.string
};


Keyboard = connect((state = {}) => state)(Keyboard);

export default Keyboard