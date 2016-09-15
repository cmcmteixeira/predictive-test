import React from 'react'
import Prediction from './Prediction/Prediction.jsx'
import {connect} from 'react-redux';



class InputWPrediction extends React.Component {
    render(){
        return (
            <div>
                <input type="text" value={this.props.sequence || ''}/>
                <Prediction predictions={this.props.predictions}/>
            </div>
        )
    }
}
InputWPrediction = connect((state = {}) => state)(InputWPrediction);


export default InputWPrediction;