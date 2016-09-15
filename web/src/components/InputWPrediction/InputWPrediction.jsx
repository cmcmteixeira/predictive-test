import React from 'react'
import Prediction from './Prediction/Prediction.jsx'
import {connect} from 'react-redux';
import {Well} from 'react-bootstrap'

import './InputWPrediction.scss'

class InputWPrediction extends React.Component {
    render(){
        return (
            <div className="pred-input">

                <Well>{this.props.sentence || '...'}</Well>
                <div className="pred-sequence">
                    <Well>{this.props.sequence || '...'}</Well>
                </div>
                <div className="pred-prediction">
                    <Prediction predictions={this.props.predictions}/>
                </div>
            </div>
        )
    }
}
InputWPrediction = connect((state = {}) => state)(InputWPrediction);


export default InputWPrediction;