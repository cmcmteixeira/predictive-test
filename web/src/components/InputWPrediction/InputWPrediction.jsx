import React from 'react'
import Predictions from './Predictions/Predictions.jsx'
import {connect} from 'react-redux';
import {Well} from 'react-bootstrap'

import './InputWPrediction.scss'

class InputWPrediction extends React.Component {
    render(){
        return (
            <div className="pred-input">
                <Well>{this.props.sentence || '...'}</Well>
                <div className="pred-sequence">
                    <Well><span className="pred-sequence-text">{this.props.sequence || '...'}</span></Well>
                </div>
                <div className="pred-prediction">
                    <Predictions predictions={this.props.predictions}/>
                </div>
            </div>
        )
    }
}
InputWPrediction.PropTypes ={
    sentence: React.PropTypes.string,
    sequence: React.PropTypes.string,
    predictions: React.PropTypes.array
};

InputWPrediction = connect((state = {}) => state)(InputWPrediction);


export default InputWPrediction;