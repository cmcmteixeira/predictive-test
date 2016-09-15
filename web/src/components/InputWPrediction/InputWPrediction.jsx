import React from 'react'
import Prediction from './Prediction/Prediction.jsx'


class InputWPrediction extends React.Component {
    render(){
        return (
            <div>
                <input type="text"/>
                <Prediction/>
            </div>
        )
    }
}

export default InputWPrediction;