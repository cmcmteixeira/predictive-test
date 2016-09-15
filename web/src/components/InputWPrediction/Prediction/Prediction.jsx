import React from 'react'
import _ from 'lodash'

class Prediction extends React.Component {
    render(){
        const predictions = _.map([
            "word1","word2","word3"
        ],(elem) => {
            return <li key={elem}>{elem}</li>
        });

        return(
            <div>
                <ul>
                    {predictions}
                </ul>
            </div>
        )
    }
}

export default Prediction