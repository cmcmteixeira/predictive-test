import React from 'react'
import Prediction from './Prediction/Prediction.jsx'
import {connect} from 'react-redux';
import {Well} from 'react-bootstrap'



class InputWPrediction extends React.Component {
    render(){
        return (
            <div>
                <Well>{this.props.sequence || '...'}</Well>
                <div className="pred-prediction">
                    <Prediction predictions={this.props.predictions}/>
                </div>
            </div>
        )
    }
}
InputWPrediction = connect((state = {}) => state)(InputWPrediction);


export default InputWPrediction;